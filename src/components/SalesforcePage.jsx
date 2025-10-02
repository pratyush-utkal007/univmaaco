import React, { useState, useEffect } from "react";
import img1 from "../assets/animation-img-4.png";
import img2 from "../assets/animation-img-2.png";
import img3 from "../assets/animation-img-3.png";
import img4 from "../assets/animation-img-4.png";
import img5 from "../assets/animation-img-5.png";
import img6 from "../assets/animation-img-6.png";
import astroagentforce from "../assets/astroagentforce-fly.png";
import logo from "../assets/salesforcelogo.jpg";
import business from "../assets/business.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ---------------- Main Component ---------------- */
export default function SalesforcePage() {
  return (
    <div className="bg-[#0B0E1A] text-white font-sans overflow-hidden">
      {/* Section 1 - Showcase Slider */}
      <SalesforceShowcase />

      {/* Section 2 - Partner Stats */}
      <SalesforcePartner />
    </div>
  );
}

/* ---------------- Showcase Slider ---------------- */
function SalesforceShowcase() {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 2);
    }, 3000); // 3s per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/backgrounds/grid-bg.png')" }}
    >
      <AnimatePresence mode="wait">
        {index === 0 ? (
          <motion.div
            key="orbit"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-20 gap-12 md:gap-24"
          >
            {/* Left text */}
            <div className="max-w-xl text-center md:text-left transform md:translate-x-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Salesforce <span className="text-blue-500">Data Cloud</span>
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Unify customer data, personalize experiences and empower
                decisions with Salesforce Data Cloud. Bring your entire
                organization together around enhanced customer experience.
              </p>
              <button
                onClick={() => {
                  navigate("/datacloud");
                  window.scrollTo(0, 0); // 👈 reset scroll
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-md shadow-md hover:opacity-90 transition"
              >
                Know More ➝
              </button>
            </div>

            {/* Right animation */}
            <OrbitAnimation />
          </motion.div>
        ) : (
          <motion.div
            key="agentforce"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-20 gap-12 md:gap-24"
          >
            {/* Left text */}
            <div className="max-w-xl text-center md:text-left transform md:translate-x-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Salesforce <span className="text-blue-500">Agentforce</span>
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Build and deploy AI agents that work with your team, delivering
                next-gen AI-driven automation and personalized customer
                interactions at every touchpoint with precision.
              </p>
              <button
                onClick={() => {
                  navigate("/agentforce");
                  window.scrollTo(0, 0); // 👈 reset scroll
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-md shadow-md hover:opacity-90 transition"
              >
                Know More ➝
              </button>
            </div>

            {/* Right animation */}
            <AgentforceAnimation />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animations */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
          transform-origin: 50% 50%;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-scaleIn {
          animation: scaleIn 1.5s ease-out forwards;
        }
        @keyframes scaleIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          60% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-pulseIcon {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.9);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
}

/* ---------------- Orbit Animation ---------------- */
function OrbitAnimation() {
  const icons = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
  ];

  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] flex items-center justify-center">
      {/* Orbit circle */}
      <div className="absolute w-4/5 h-4/5 rounded-full border-[6px] sm:border-[8px] md:border-[10px] border-blue-500"></div>

      {/* Salesforce Logo center */}
      <div className="absolute w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center shadow-lg animate-scaleIn z-10">
        <img
          src={logo}
          alt="Salesforce"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 object-contain"
        />
      </div>

      {/* Rotating orbit icons */}
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="relative w-full h-full animate-spin-slow">
          {icons.map((item, i) => {
            const angle = (i / icons.length) * 360;
            const radius =
              window.innerWidth < 640
                ? 100
                : window.innerWidth < 1024
                ? 130
                : 170;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={item.id}
                className="absolute bg-white rounded-full shadow-lg animate-pulseIcon flex items-center justify-center"
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: "translate(-50%, -50%)",
                  animationDelay: `${i * 0.3}s`,
                  width: "70px",
                  height: "70px",
                }}
              >
                <img
                  src={item.img}
                  alt={`orbit-icon-${item.id}`}
                  className="w-10 h-10 object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Agentforce Animation ---------------- */

function AgentforceAnimation() {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[30rem] md:h-[26rem] flex items-center justify-center">
      {/* Robot image with float animation */}
      <motion.img
        src={astroagentforce}
        alt="Agentforce Robot"
        className="w-40 sm:w-56 md:w-[22rem] h-auto object-contain relative z-10"
        animate={{ y: [-75, 75, -75] }} // move up & down
        transition={{
          duration: 10, // 8 seconds full cycle
          repeat: Infinity, // loop forever
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

/* ---------------- Partner Section ---------------- */
function SalesforcePartner() {
  return (
    <div className="bg-[#0B0E1A] text-white font-sans py-16 px-6 md:px-20">
      <div className="flex flex-col items-center gap-10">
        {/* Top side - Image with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-4xl"
        >
          <img
            src={business}
            alt="Salesforce Partner"
            className="rounded-lg shadow-lg w-full object-cover filter brightness-75 hover:brightness-100 transition"
          />
        </motion.div>

        {/* Bottom side - Text + Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center max-w-4xl"
        >
          <p className="text-5xl md:text-4xl font-semibold text-gray-100 mb-8 leading-snug tracking-wide">
            Empower your business with{" "}
            <span className="font-extrabold text-yellow-400 animate-pulse">
              Agentforce Bots
            </span>
            , crafted to automate workflows, enhance customer engagement.{" "}
          </p>

          {/* Stats */}
        </motion.div>
      </div>
    </div>
  );
}
