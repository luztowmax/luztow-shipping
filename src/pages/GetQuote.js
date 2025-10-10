import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./GetQuote.css";


export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const form = useRef();

  useEffect(() => {
    emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send to admin
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_ADMIN_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log('Admin email sent:', result.text);
      }, (error) => {
        console.log('Admin email failed:', error.text);
      });

    // Send auto-reply to user
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_REPLY_TEMPLATE_ID', {
      to_email: formData.email,
      from_name: 'Luztow Resources Ltd',
      message: `Thank you, ${formData.name}, for your quote request regarding ${formData.service}. We have received your message: "${formData.message}". Our team will contact you soon at ${formData.email}. Best regards, Luztow Resources Ltd.`
    })
      .then((result) => {
        console.log('Auto-reply sent:', result.text);
      }, (error) => {
        console.log('Auto-reply failed:', error.text);
      });

    alert(`Thank you, ${formData.name}! Your quote request for ${formData.service} has been submitted. We will contact you at ${formData.email} soon.`);
    setFormData({
      name: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="get-quote-container">
          <h2>Get a Quote</h2>
          <form ref={form} onSubmit={handleSubmit} className="get-quote-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="shipping">Shipping</option>
              <option value="logistics">Logistics</option>
              <option value="cargo">Cargo Handling</option>
              <option value="web-development">Web Development/Software Development</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <input type="hidden" name="to_email" value="info@luztowresources.com" /> {/* Admin email */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
}
