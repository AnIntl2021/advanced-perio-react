import { Routes, Route } from 'react-router-dom';
import './style.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import PatientInfo from './components/PatientInfo';
import Doctors from './components/Doctors';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import ServiceDetail from './components/ServiceDetail';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Technology from './components/Technology';
import ThankYou from './components/ThankYou';
import { useScrollToTop, useScrollReveal } from './hooks/useScroll';
import { PHONE_NUMBER, PHONE_URI } from './utils/constants';

function App() {
  useScrollToTop();
  useScrollReveal();

  return (
    <div className="app">
      <div className="topbar">
        <div className="topbar__inner">
          <div className="topbar__socials">
            <a href="https://www.facebook.com/Advancedperiosa" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/advancedperiosa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://www.tiktok.com/@advancedperiosa" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
            <a href="https://www.youtube.com/channel/UCtfAXezKKXPcSKQ24DuFbMA" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          </div>
          <div className="topbar__right">
            <span className="topbar__emergency">
              <i className="fas fa-heartbeat"></i> Emergency Dental Care Available
            </span>
            <span className="topbar__item">
              <i className="fas fa-phone-alt"></i>
              <a href={PHONE_URI}>{PHONE_NUMBER}</a>
            </span>
          </div>
        </div>
      </div>

      <Navbar />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/jaw-bone-augmentation-sinus-lift" element={<ServiceDetail />} />
          <Route path="/patient-info" element={<PatientInfo />} />
          <Route path="/referring-doctors" element={<Doctors />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/our-technology" element={<Technology />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;