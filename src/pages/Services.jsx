// Services.jsx
import React from "react";
import Navbar from "../components/Navbar";

function Services() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-blue-500 via-blue-300 to-white flex items-center justify-center text-white text-center overflow-hidden">
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
            🎁 Our Services 🎁
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-wider animate-pulse">
            Explore the magical services we offer to make your Christmas unforgettable!
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-700 mb-8 animate-fadeInUp">
            Our Magical Services 🎄
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
            {[{
              title: "Santa Home Visits",
              description: "Book a special home visit from Santa and bring the magic of Christmas directly to your doorstep.",
              icon: "🎅",
            },
            {
              title: "Gift Delivery",
              description: "Let us deliver beautifully wrapped gifts right on time for Christmas Eve.",
              icon: "🎁",
            },
            {
              title: "Holiday Decorations",
              description: "Transform your home into a winter wonderland with our festive decoration services.",
              icon: "🏠",
            }].map((service, i) => (
              <div
                key={i}
                className="p-6 bg-blue-100 text-center rounded-lg shadow-lg transform hover:scale-110 hover:rotate-2 transition duration-500 hover:shadow-xl animate-float"
              >
                <span className="text-6xl animate-wiggle text-blue-500">{service.icon}</span>
                <h3 className="text-2xl font-bold mt-4 mb-2 text-red-700">{service.title}</h3>
                <p className="text-gray-700 font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-8 animate-fadeInUp">
            Special Christmas Packages 🎉
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              title: "Premium Santa Experience",
              description: "A complete Santa package including photos, stories, and gift delivery.",
              image: "https://via.placeholder.com/400x300",
            },
            {
              title: "Festive Home Makeover",
              description: "Transform your home with lights, trees, and beautiful decorations!",
              image: "https://via.placeholder.com/400x300",
            },
            {
              title: "Carols & Cookies Night",
              description: "An evening of carols, hot cocoa, and delicious Christmas cookies for families.",
              image: "https://via.placeholder.com/400x300",
            }].map((packageItem, i) => (
              <div
                key={i}
                className="overflow-hidden bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-500 hover:shadow-2xl"
              >
                <img
                  src={packageItem.image}
                  alt={packageItem.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-red-700 mb-2">{packageItem.title}</h3>
                  <p className="text-gray-600 font-light">{packageItem.description}</p>
                </div>
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
      `}</style>
    </>
  );
}

export default Services;
