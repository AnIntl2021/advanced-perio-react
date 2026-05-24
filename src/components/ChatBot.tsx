import { useState, useEffect, useRef } from 'react';
import botIcon from '../assets/bot-icon.png';
import { SERVICES } from '../utils/data';
import { OpenDentalService } from '../services/openDentalService';
import { COUNTRY_CODES } from '../utils/countries';
import { sendChatbotEmail } from '../services/emailService';

type Step = 'greeting' | 'email' | 'service' | 'contact_info' | 'date' | 'complete';

interface ChatOption {
  label: string;
  disabled?: boolean;
}

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  options?: (string | ChatOption)[];
  type?: 'text' | 'contact_form';
}

const ContactForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [phone, setPhone] = useState('');

  return (
    <form className="chatbot-contact-form" onSubmit={e => { e.preventDefault(); onSubmit({name, dob, countryCode, phone}) }} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem', background: 'var(--white)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
      <input type="text" placeholder="Full Name" required value={name} onChange={e => setName(e.target.value)} style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border)' }} />
      <input type="date" placeholder="Date of Birth" required value={dob} onChange={e => setDob(e.target.value)} style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border)', fontFamily: 'inherit' }} />
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <select value={countryCode} onChange={e => setCountryCode(e.target.value)} style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border)', background: 'var(--white)' }}>
          {COUNTRY_CODES.map(country => (
            <option key={country.code} value={country.code}>{country.code}</option>
          ))}
        </select>
        <input type="tel" placeholder="Phone Number" required value={phone} onChange={e => setPhone(e.target.value)} style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border)', flex: 1 }} />
      </div>
      <button type="submit" className="btn btn-primary btn-sm" style={{ width: '100%', marginTop: '0.25rem', justifyContent: 'center' }}>Submit Details</button>
    </form>
  );
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>('greeting');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [bookingData, setBookingData] = useState({
    email: '',
    service: '',
    contactInfo: '',
    date: ''
  });
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage("Hi there! 👋 I'm Pearl, your dental assistant. How can I help you today?");
      setStep('greeting');
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const addBotMessage = (text: string, options?: (string | ChatOption)[], type: 'text' | 'contact_form' = 'text') => {
    setMessages(prev => [...prev, { id: Date.now() + Math.random(), text, sender: 'bot', options, type }]);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, { id: Date.now() + Math.random(), text, sender: 'user' }]);
  };

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;

    addUserMessage(text);
    setInputValue('');

    setTimeout(() => {
      processNextStep(text);
    }, 800);
  };

  const processNextStep = (text: string) => {
    switch (step) {
      case 'greeting':
        addBotMessage("Nice to meet you! What is your email address? (We'll send your booking confirmation here)");
        setStep('email');
        break;

      case 'email':
        const trimmed = text.trim().toLowerCase();
        // Check if user typed a general message instead of an email
        if (!trimmed.includes('@')) {
          addBotMessage("I appreciate your message! 😊 But right now I need your **email address** to proceed with the booking. Please type your email (e.g. john@gmail.com):");
          return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
          addBotMessage("Hmm, that doesn't look quite right. Please enter a valid email address like **john@gmail.com** to continue:");
          return;
        }
        // Block placeholder / example email domains
        const blockedDomains = ['email.com', 'example.com', 'test.com', 'sample.com', 'domain.com', 'mail.com', 'placeholder.com', 'fake.com', 'yourmail.com', 'myemail.com'];
        const emailDomain = trimmed.split('@')[1];
        if (blockedDomains.includes(emailDomain)) {
          addBotMessage("That looks like a placeholder email. Please enter your **real email address** so we can send your booking confirmation (e.g. john@gmail.com):");
          return;
        }
        setBookingData(prev => ({ ...prev, email: trimmed }));
        addBotMessage("Which service are you interested in today?", SERVICES.map(s => s.title === 'Gum Contouring' ? 'Toothache' : s.title));
        setStep('service');
        break;

      case 'service':
        setBookingData(prev => ({ ...prev, service: text }));
        addBotMessage("To schedule you, please provide us with your full name, DOB, and phone number:", undefined, 'contact_form');
        setStep('contact_info');
        break;

      case 'contact_info':
        // Parse: "full name , DOB, and phone number"
        const parts = text.split(',').map(p => p.trim());
        const fullName = parts[0] || 'Web Patient';
        const dob = parts[1] || '1990-01-01';
        const phone = parts[2] || '210-332-5335';
        const patientEmail = bookingData.email;
        const service = bookingData.service;

        setBookingData(prev => ({
          ...prev,
          contactInfo: text,
          date: 'Pending'
        }));
        
        // Trigger the Open Dental API sync in the background
        OpenDentalService.bookAppointment({
          office: 'schertz', // Defaults to Schertz Office, can be configured
          fullName,
          dob,
          email: patientEmail,
          phone,
          service,
          dateTime: 'Pending'
        }).then(response => {
          console.log('%c[Open Dental Sync Result]', 'color: #00615a; font-weight: bold;', response);
        });

        // Send email notification to practice admin/manager
        sendChatbotEmail({
          patientEmail,
          service,
          fullName,
          dob,
          phone
        }).catch(err => {
          console.error('Failed to send chatbot email notification:', err);
        });

        // We use updated.service from state indirectly, but since state update is async,
        // we can just use the previous state value that we have in closure, or `bookingData.service`
        // Wait, bookingData.service has the selected service from the previous step.
        addBotMessage(`Thank you! I've sent your request for ${service} to our team. We will contact you ASAP to finalize your appointment time. 🦷`);
        setStep('complete');
        break;
      
        default:
          break;
      }
    };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <div className="chatbot-toggle-wrap">
          <div className="chatbot-hint" onClick={() => setIsOpen(true)}>
            <span>📅 Book Your Appointment Here!</span>
            <button className="chatbot-hint__close" onClick={(e) => { e.stopPropagation(); (e.currentTarget.parentElement as HTMLElement)?.classList.add('dismissed'); }} aria-label="Close hint">&times;</button>
          </div>
          <button className="chatbot-toggle" onClick={() => setIsOpen(true)} aria-label="Open Chat">
            <img src={botIcon} alt="Pearl Chat Bot" />
            <span className="chatbot-badge">1</span>
            <span className="chatbot-tooltip">Need Help? Book Here!</span>
          </button>
        </div>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header__info">
              <img src={botIcon} alt="Bot" />
              <div>
                <h4>Pearl</h4>
                <span>Dental Assistant</span>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => { setIsOpen(false); setMessages([]); setStep('greeting'); setBookingData({ email: '', service: '', contactInfo: '', date: '' }); }}>&times;</button>
          </div>

          <div className="chatbot-messages" ref={scrollRef}>
            {messages.map(m => (
              <div key={m.id} className={`message-wrap ${m.sender}`}>
                <div className="message-bubble">{m.text}</div>
                {m.options && (
                  <div className="message-options">
                    {m.options.map(opt => {
                      const label = typeof opt === 'string' ? opt : opt.label;
                      const disabled = typeof opt === 'string' ? false : opt.disabled;
                      return (
                        <button 
                          key={label} 
                          onClick={() => !disabled && handleSend(label)}
                          className={disabled ? 'disabled' : ''}
                          disabled={disabled}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                )}
                {m.type === 'contact_form' && step === 'contact_info' && (
                  <ContactForm onSubmit={(data) => handleSend(`${data.name}, ${data.dob}, ${data.countryCode} ${data.phone}`)} />
                )}
                {m.type === 'contact_form' && step !== 'contact_info' && (
                  <div className="message-bubble" style={{ marginTop: '0.5rem', fontStyle: 'italic', opacity: 0.7 }}>Details Submitted</div>
                )}
              </div>
            ))}
          </div>

          {step !== 'complete' && step !== 'contact_info' && (
            <form className="chatbot-input" onSubmit={e => { e.preventDefault(); handleSend(); }}>
              <input 
                type="text" 
                placeholder="Type your message..." 
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
              <button type="submit" disabled={!inputValue.trim()}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
