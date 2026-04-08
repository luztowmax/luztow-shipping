import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import WhatsAppChatWidget from "./components/WhatsAppChatWidget";
import './index.css';

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const location = useLocation();

  return (
      <div className={`flex flex-col min-h-screen text-gray-900 ${location.pathname === '/contact' ? 'bg-blue-500' : 'bg-gray-100'}`}>
        <Navbar />
        <main className={`main-content container mx-auto px-4 py-6 flex-1`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-quote" element={<GetQuote />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppChatWidget />
      </div>
  );
}

export default AppWrapper;
