import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-500">
      <main className="flex-grow p-8 space-y-4 flex flex-col">
        <div className="contact-container text-white">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p><FaEnvelope className="inline mr-2" /> Email: info@luztowresources.com</p>
          <p><FaPhone className="inline mr-2" /> Phone: +234 9032924589</p>
          <p><FaMapMarkerAlt className="inline mr-2" /> Address: 22, Bornu Crescent, Apapa. Lagos.</p>
        </div>
      </main>
    </div>
  );
}
