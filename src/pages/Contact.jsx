// Contact.jsx
import React from "react";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-blue-600 via-blue-400 to-white flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(50)].map((_, i) => (
            <span
              key={i}
              className="absolute w-6 h-6 bg-white rounded-full opacity-60 animate-snowflake"
              style={{
                left: `${Math.random() * 100}vw`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            ></span>
          ))}
        </div>
        <div className="z-10 max-w-3xl px-4 animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl animate-glowText">
            🎅 Get in Touch 🎅
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-wider animate-pulse">
            We’d love to hear from you! Send us a message or visit Santa’s workshop.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center text-red-700 mb-8 animate-fadeInUp">
            Send Us a Message ✨
          </h2>
          <form className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg animate-fadeInUp">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg shadow-lg font-bold text-lg hover:bg-red-600 transition duration-500"
            >
              Send Message 🎁
            </button>
          </form>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-700 mb-6 animate-fadeInUp">
            📍 Visit Us 📍
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 animate-float">
              <h3 className="text-2xl font-bold text-red-700 mb-4">🎅 Address</h3>
              <p className="text-gray-700 font-light">
                3-17 Govindapuram Road, Huzurnagar
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 animate-float">
              <h3 className="text-2xl font-bold text-red-700 mb-4">📞 Contact</h3>
              <p className="text-gray-700 font-light">
                Mobile: 9150299458 🎁 <br />
                Email: nikhilvarmareddycharla@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        @keyframes snowflake {
          0% {
            transform: translateY(-10vh);
            opacity: 0.5;
          }
          100% {
            transform: translateY(100vh);
            opacity: 1;
          }
        }
        .animate-snowflake {
          animation: snowflake linear infinite;
        }

        @keyframes glowText {
          0%, 100% {
            text-shadow: 0 0 10px #fff, 0 0 20px #ffea00, 0 0 30px #ffa500;
          }
          50% {
            text-shadow: 0 0 15px #ffea00, 0 0 25px #ffa500, 0 0 35px #ff4500;
          }
        }
        .animate-glowText {
          animation: glowText 2s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default Contact;
