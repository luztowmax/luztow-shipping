import { FaFacebook, FaXTwitter, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-6 text-center mt-auto">
      
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="facebook-icon" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="twitter-icon" aria-label="Twitter">
          <FaXTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="instagram-icon" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://wa.me/+2349032924589" target="_blank" rel="noreferrer" className="whatsapp-icon" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
        <div className="p-8 space-y-4">
            <div className="contact-container text-white">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p><FaEnvelope className="inline mr-2" /> Email: info@luztowresources.com</p>
              <p><FaPhone className="inline mr-2" /> Phone: +234 9032924589</p>
              <p><FaLocationDot className="inline mr-2" /> Address: 22 Bornu Crescent Apapa Lagos, Nigeria</p>
            </div>
        </div>
      <div className="footer-bottom">
   <p>© {new Date().getFullYear()} Luztow Resources Ltd</p>
      </div>
    </footer>
  );
}
