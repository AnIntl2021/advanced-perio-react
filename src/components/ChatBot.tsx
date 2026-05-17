import React, { useState, useEffect, useRef } from 'react';
import botIcon from '../assets/bot-icon.png';
import { SERVICES } from '../utils/data';
import { PAYMENT_PORTAL_URL } from '../utils/constants';

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
}

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

  const addBotMessage = (text: string, options?: (string | ChatOption)[]) => {
    setMessages(prev => [...prev, { id: Date.now() + Math.random(), text, sender: 'bot', options }]);
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
        setBookingData(prev => ({ ...prev, email: text }));
        addBotMessage("Which service are you interested in today?", SERVICES.map(s => s.title === 'Gum Contouring' ? 'Toothache' : s.title));
        setStep('service');
        break;

      case 'service':
        setBookingData(prev => ({ ...prev, service: text }));
        addBotMessage("To schedule you, Please provide us with your full name , DOB, and phone number and we will contact you ASAP");
        setStep('contact_info');
        break;

      case 'contact_info':
        setBookingData(prev => ({ ...prev, contactInfo: text }));
        addBotMessage("Please select an available time slot for your visit:", [
          { label: "9:30 AM - 10:00 AM" },
          { label: "10:00 AM - 10:30 AM" },
          { label: "10:30 AM - 11:00 AM" },
          { label: "11:00 AM - 11:30 AM" },
          { label: "1:30 PM - 2:00 PM" },
          { label: "2:00 PM - 2:30 PM" },
          { label: "4:00 PM - 4:30 PM" },
          { label: "4:30 PM - 5:00 PM" }
        ]);
        setStep('date');
        break;

      case 'date':
        setBookingData(prev => ({ ...prev, date: text }));
        addBotMessage(`Thank you! I've sent your request for ${bookingData.service} during the ${text} slot to our team. We will contact you ASAP to finalize everything. 🦷`);
        
        setTimeout(() => {
          addBotMessage("Would you like to pay your bill or a deposit online now?", [
            { label: "Pay Online 💳" }
          ]);
          setStep('complete');
        }, 1500);
        break;
      
      case 'complete':
        if (text === "Pay Online 💳") {
          window.open(PAYMENT_PORTAL_URL, "_blank");
          addBotMessage("Opening the secure payment portal for you now...");
        }
        break;
      
        default:
          break;
      }
    };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)} aria-label="Open Chat">
          <img src={botIcon} alt="Pearl Chat Bot" />
          <span className="chatbot-tooltip">Need Help? Book Here!</span>
        </button>
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
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>&times;</button>
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
              </div>
            ))}
          </div>

          {step !== 'complete' && (
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
