import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src="/assets/luztow logo.jpg" alt="luztow logo" />
        <h1>Luztow Resources Ltd</h1>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      <ul className={isOpen ? "open" : ""}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
        <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li><Link to="/projects" onClick={()=> setIsOpen(false)}>Projects</Link></li>
        <li><Link to="/get-quote" onClick={() => setIsOpen(false)}>Get Quote</Link></li>
      </ul>
    </nav>
  );
}
