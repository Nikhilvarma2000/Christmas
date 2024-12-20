// Home.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function Home() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("December 25, 2024 00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-red-800 via-red-500 to-yellow-300 flex items-center justify-center text-white text-center overflow-hidden">
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
        <div className="z-10 max-w-2xl px-4 animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl animate-glowText">
            🎄 Welcome to Santa's Wonderland 🎄
          </h1>
          <p className="text-lg md:text-2xl mb-8 font-light tracking-wider animate-pulse">
            Experience the joy, magic, and spirit of Christmas with us!
          </p>
          <a
            href="#events"
            className="px-8 py-3 text-lg font-bold bg-yellow-400 text-red-900 rounded-full shadow-lg transform hover:scale-110 transition-all duration-500 hover:bg-yellow-500 animate-jingle"
          >
            Explore Events 🎅
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-12 relative overflow-hidden">
        {/* Subtle Parallax Decorations */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 text-yellow-400 opacity-70 animate-parallax"
              style={{
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`,
                animationDuration: `${Math.random() * 10 + 5}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-10 text-red-700 animate-fadeInUp">
            Explore the Magic of Christmas ✨
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
            {[{
              title: "Meet Santa",
              description: "Book a special moment with Santa Claus himself!",
              icon: "🎅",
            },
            {
              title: "Festive Events",
              description: "Join our carols, gift exchanges, and Christmas feasts!",
              icon: "🎶",
            },
            {
              title: "Gifts & Goodies",
              description: "Find the perfect Christmas gifts and treats!",
              icon: "🎁",
            }].map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-red-100 text-center rounded-lg shadow-lg transform hover:scale-105 hover:rotate-3 transition duration-500 hover:bg-red-200 animate-float hover:shadow-2xl hover:shadow-yellow-500/50"
              >
                <span className="text-6xl animate-wiggle">{feature.icon}</span>
                <h3 className="text-2xl font-bold mt-4 mb-2 text-red-800">
                  {feature.title}
                </h3>
                <p className="text-gray-700 font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-red-700 text-white py-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="absolute w-4 h-4 bg-white rounded-full opacity-50 animate-snowflake"
              style={{
                left: `${Math.random() * 100}vw`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 5}s`,
              }}
            ></span>
          ))}
        </div>
        <h2 className="text-4xl font-bold mb-6 animate-fadeInUp">Countdown to Christmas 🎅</h2>
        <div className="flex justify-center space-x-8 text-3xl font-extrabold">
          <div>
            <span>{countdown.days}</span>
            <div className="text-lg font-light">Days</div>
          </div>
          <div>
            <span>{countdown.hours}</span>
            <div className="text-lg font-light">Hours</div>
          </div>
          <div>
            <span>{countdown.minutes}</span>
            <div className="text-lg font-light">Minutes</div>
          </div>
          <div>
            <span>{countdown.seconds}</span>
            <div className="text-lg font-light">Seconds</div>
          </div>
        </div>
      </section>

      {/* Keyframe Animations */}
      <style>{`
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
        @keyframes parallax {
          from {
            transform: translateY(-20px);
          }
          to {
            transform: translateY(20px);
          }
        }
        .animate-parallax {
          animation: parallax 10s ease-in-out infinite alternate;
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
      `}</style>
    </>
  );
}

export default Home;
