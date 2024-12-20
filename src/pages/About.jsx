// About.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function About() {
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
      <section className="relative h-screen bg-gradient-to-b from-yellow-400 via-red-500 to-red-800 flex items-center justify-center text-white text-center overflow-hidden">
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
            🎅 About Santa's Wonderland 🎅
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-wider animate-pulse">
            Discover the heartwarming story and joy behind our magical Christmas celebration.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-12 relative overflow-hidden">
        <div className="absolute -top-10 -left-20 w-64 h-64 bg-yellow-200 rounded-full opacity-30 animate-floatSlow"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-red-400 rounded-full opacity-30 animate-floatSlow"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-red-700 mb-8 animate-fadeInUp">Our Story 🎄</h2>
          <p className="text-gray-700 font-light max-w-4xl mx-auto leading-relaxed animate-fadeInUp">
            Santa's Wonderland started as a magical dream to bring joy, cheer, and festive spirit to families around the world. Each corner of our wonderland is built with love and Christmas magic to create unforgettable memories for children and adults alike.
          </p>
          <div className="mt-10 flex justify-center">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Our Story "
              className="rounded-lg shadow-lg w-full max-w-2xl hover:scale-105 transform transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500"
            />
          </div>
        </div>
      </section>

      {/* Meet the Characters */}
      <section className="bg-yellow-100 py-12 relative">
        <div className="absolute -top-5 left-0 w-32 h-32 bg-red-300 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-5 right-0 w-40 h-40 bg-yellow-300 rounded-full opacity-40 animate-pulse"></div>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 text-red-700 animate-fadeInUp">
            Meet Our Festive Characters 🎉
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
            {[{
              name: "Santa Claus",
              role: "The Heart of Christmas",
              icon: "🎅",
            },
            {
              name: "Elves",
              role: "Gift Makers",
              icon: "🧝",
            },
            {
              name: "Reindeer",
              role: "Santa's Helpers",
              icon: "🦌",
            }].map((character, i) => (
              <div
                key={i}
                className="p-6 bg-white text-center rounded-lg shadow-lg transform hover:scale-110 hover:-translate-y-3 transition duration-500 hover:shadow-2xl hover:shadow-yellow-400 animate-float"
              >
                <span className="text-6xl animate-wiggle text-yellow-500">{character.icon}</span>
                <h3 className="text-2xl font-bold mt-4 mb-2 text-red-700">
                  {character.name}
                </h3>
                <p className="text-gray-600 font-light">{character.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Magic Christmas Gallery */}
      <section className="bg-red-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-700 mb-8 animate-fadeInUp">Magical Christmas Gallery 🎁</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
                <img
                  src={`https://via.placeholder.com/400x300?text=Christmas+${i + 1}`}
                  alt={`Christmas Scene ${i + 1}`}
                  className="w-full h-60 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown to Christmas */}
      <section className="bg-red-700 text-white py-12 text-center relative overflow-hidden">
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
        @keyframes snowflake {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 0.5;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 1;
          }
        }
        .animate-snowflake {
          animation: snowflake linear infinite;
        }

        @keyframes glowText {
          0% { text-shadow: 0 0 10px #fff, 0 0 20px #ff5733, 0 0 30px #ff5733; }
          50% { text-shadow: 0 0 20px #ff5733, 0 0 30px #ffbd33, 0 0 40px #ff5733; }
          100% { text-shadow: 0 0 10px #fff, 0 0 20px #ff5733, 0 0 30px #ff5733; }
        }
        .animate-glowText {
          animation: glowText 2s ease-in-out infinite;
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
        .animate-wiggle {
          animation: wiggle 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.7;
          }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
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

export default About;
