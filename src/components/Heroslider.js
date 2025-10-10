import { useState, useEffect } from "react";
import "./Heroslider.css";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/assets/think.jpg",
      alt: "Think Hero"
    },
    {
      image: "/assets/Msc Gulsun.jpg",
      alt: "MSC Gulsun Ship"
    },
    {
      image: "/assets/tanker ship 1.jpg",
      alt: "Tanker Ship"
    },
    {
      image: "/assets/Container 1.jpg",
      alt: "Container Ship"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="hero-image"
          />
        </div>
      ))}
      <div className="hero-text">
        <h1>Welcome to Luztow Resources Ltd.</h1>
        <h2>.....your one stop shop for Shipping, Clearing and Ict services.</h2>
      </div>
      <div className="slide-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
