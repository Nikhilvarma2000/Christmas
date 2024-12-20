// Events.jsx
import React from "react";
import Navbar from "../components/Navbar";

function Events() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-red-600 via-red-400 to-yellow-200 flex items-center justify-center text-white text-center overflow-hidden">
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
            🎊 Upcoming Events 🎊
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-wider animate-pulse">
            Celebrate the joy of Christmas with our magical events and festivities!
          </p>
        </div>
      </section>

      {/* Santa on Reindeer Chariot Section */}
      <section className="bg-white py-12 relative overflow-hidden">
        <div className="container mx-auto text-center relative">
          <h2 className="text-4xl font-bold text-red-700 mb-8 animate-fadeInUp">
            🎅 Santa's Grand Arrival 🎅
          </h2>
          <div className="relative w-full h-64">
            <img
              src="https://via.placeholder.com/800x400?text=Santa+on+Reindeer+Chariot"
              alt="Santa on Reindeer Chariot"
              className="absolute top-10 w-72 md:w-96 animate-flyChariot"
            />
          </div>
          <p className="text-gray-700 font-light max-w-4xl mx-auto mt-6 animate-fadeInUp">
            Santa is coming to town on his magical reindeer chariot! Witness the most enchanting arrival filled with cheer, joy, and festive spirit.
          </p>
        </div>
      </section>

      {/* Event Highlights Section */}
      <section className="bg-yellow-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-700 mb-10 animate-fadeInUp">
            Event Highlights ✨
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {[{
              title: "Christmas Carol Night",
              description: "Sing along to classic carols and enjoy a beautiful evening with loved ones.",
              icon: "🎶",
            },
            {
              title: "Gift Exchange Party",
              description: "Share gifts and smiles with friends and family in a magical setting.",
              icon: "🎁",
            },
            {
              title: "Lighting Ceremony",
              description: "Witness the grand lighting of the Christmas tree and festive decorations!",
              icon: "🎄",
            }].map((event, i) => (
              <div
                key={i}
                className="p-6 bg-white text-center rounded-lg shadow-lg transform hover:scale-105 transition duration-500 hover:shadow-2xl animate-float"
              >
                <span className="text-6xl text-yellow-500 animate-wiggle">{event.icon}</span>
                <h3 className="text-2xl font-bold mt-4 mb-2 text-red-700">{event.title}</h3>
                <p className="text-gray-700 font-light">{event.description}</p>
              </div>
            ))}
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

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0);
          }
          50% {
            transform: rotate(5deg);
          }
        }
        .animate-wiggle {
          animation: wiggle 1.5s ease-in-out infinite;
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

        @keyframes flyChariot {
          0% {
            transform: translateX(-100%) translateY(0);
            opacity: 0.8;
          }
          50% {
            transform: translateX(50%) translateY(-10px);
            opacity: 1;
          }
          100% {
            transform: translateX(120%) translateY(0);
            opacity: 0.8;
          }
        }
        .animate-flyChariot {
          animation: flyChariot 8s linear infinite;
        }
      `}</style>
    </>
  );
}

export default Events;
