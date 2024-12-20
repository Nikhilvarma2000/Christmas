// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 py-4 transition-all duration-500 shadow-lg ${
          isScrolled ? "bg-red-900/90 backdrop-blur-md shadow-2xl" : "bg-gradient-to-br from-red-900 via-red-700 to-yellow-500"
        } animate-fadeInDown`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <span
              className="text-5xl font-extrabold animate-santaMotion text-white"
            >
              🎅
            </span>
            <h1
              className="text-4xl font-extrabold tracking-widest bg-gradient-to-r from-yellow-400 via-red-200 to-yellow-300 
                         bg-clip-text text-transparent drop-shadow-xl animate-bounceSlow"
            >
              Santa's Wonderland
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/services", label: "Services" },
              { path: "/events", label: "Events" },
              { path: "/gallery", label: "Gallery" },
              { path: "/contact", label: "Contact" },
            ].map((link, index) => (
              <li key={index} className="list-none">
                <Link
                  to={link.path}
                  className="relative group text-lg font-bold uppercase tracking-wider text-white transition-all duration-500 
                             hover:text-yellow-300 hover:drop-shadow-[0px_0px_12px_rgba(255,215,0,0.9)]
                             transform hover:scale-110 hover:-translate-y-1 group-hover:rotate-1"
                >
                  {link.label}
                  <span
                    className="absolute inset-x-0 bottom-0 h-1 bg-yellow-300 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"
                  ></span>
                </Link>
              </li>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-4xl text-white hover:text-yellow-300 transition duration-300 animate-pulse"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed top-0 right-0 w-3/4 h-full bg-gradient-to-b from-red-900 via-red-700 to-yellow-400 text-white
                      transform transition-all duration-700 ease-in-out shadow-2xl backdrop-blur-xl
                      ${isOpen ? "translate-x-0 animate-slideInRight" : "translate-x-full"}`}
        >
          <div className="p-8 flex flex-col space-y-10 animate-fadeInRight">
            <button
              onClick={toggleMenu}
              className="text-4xl text-white self-end hover:text-yellow-300 transition duration-300"
            >
              <FaTimes />
            </button>
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/services", label: "Services" },
              { path: "/events", label: "Events" },
              { path: "/gallery", label: "Gallery" },
              { path: "/contact", label: "Contact" },
            ].map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={toggleMenu}
                className="text-3xl text-white font-bold uppercase tracking-widest hover:text-yellow-300
                           transition-all duration-500 transform hover:scale-110 hover:rotate-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Snowfall Effect */}
      <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <span
            key={i}
            className="absolute block w-2 h-2 bg-white rounded-full opacity-70 animate-fall"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes santaMotion {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(5deg);
          }
        }
        .animate-santaMotion {
          animation: santaMotion 2s ease-in-out infinite;
        }

        @keyframes fall {
          0% {
            transform: translateY(-10vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </>
  );
}

export default Navbar;
