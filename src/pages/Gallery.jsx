// Gallery.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Gallery() {
  const [category, setCategory] = useState("all");

  const images = [
    { id: 1, src: "https://via.placeholder.com/400x300?text=Family+1", category: "family" },
    { id: 2, src: "https://via.placeholder.com/400x300?text=Events+1", category: "events" },
    { id: 3, src: "https://via.placeholder.com/400x300?text=Nature+1", category: "nature" },
    { id: 4, src: "https://via.placeholder.com/400x300?text=Family+2", category: "family" },
    { id: 5, src: "https://via.placeholder.com/400x300?text=Events+2", category: "events" },
    { id: 6, src: "https://via.placeholder.com/400x300?text=Nature+2", category: "nature" },
    { id: 7, src: "https://via.placeholder.com/400x300?text=Family+3", category: "family" },
    { id: 8, src: "https://via.placeholder.com/400x300?text=Events+3", category: "events" },
    { id: 9, src: "https://via.placeholder.com/400x300?text=Nature+3", category: "nature" },
  ];

  const filteredImages = category === "all" ? images : images.filter(img => img.category === category);

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-purple-600 via-red-500 to-yellow-300 flex items-center justify-center text-white text-center overflow-hidden">
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
            🎄 Christmas Memories 🎄
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-wider animate-pulse">
            A collection of magical moments to cherish forever.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-red-700 mb-4">Filter by Category</h2>
          <div className="flex justify-center space-x-4">
            {['all', 'family', 'events', 'nature'].map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${category === cat ? 'bg-red-700 text-white' : 'bg-gray-200 text-gray-800 hover:bg-red-400 hover:text-white'}`}
                onClick={() => setCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-700 mb-8 animate-fadeInUp">📸 Festive Photo Gallery 📸</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                className="overflow-hidden rounded-lg shadow-lg transform hover:scale-110 hover:shadow-2xl transition duration-500 group"
              >
                <img
                  src={img.src}
                  alt={`Memory ${img.id}`}
                  className="w-full h-60 object-cover cursor-pointer group-hover:opacity-75 group-hover:scale-105 transition-transform duration-500"
                  onClick={() => window.open(img.src, '_blank')}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-lg font-bold">View Full Image</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Lightbox Text Section */}
      <section className="bg-yellow-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-700 mb-6 animate-fadeInUp">
            ✨ Relive the Magic ✨
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto animate-floatSlow">
            Each photo and video captures a magical memory—perfect moments of joy, wonder, and love.
          </p>
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

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-floatSlow {
          animation: floatSlow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default Gallery;
