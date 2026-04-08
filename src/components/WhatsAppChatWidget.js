import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import './WhatsAppChatWidget.css';

export default function WhatsAppChatWidget() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const whatsappUrl = 'https://wa.me/+2349032924589?text=Hello%20Luztow%20Resources%20Ltd!%20How%20can%20I%20help%20you%3F';

  return (
    <>
      {isVisible && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="whatsapp-chat-widget fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center space-x-3 transform hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp size={24} />
          <span className="hidden md:inline font-semibold">Chat Now</span>
        </a>
      )}
      <button
        onClick={toggleVisibility}
        className="whatsapp-toggle-widget fixed bottom-6 right-24 z-50 bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 md:hidden"
        aria-label="Toggle WhatsApp chat"
        title="Hide WhatsApp chat"
      >
        <FaWhatsapp size={20} />
      </button>
    </>
  );
}

