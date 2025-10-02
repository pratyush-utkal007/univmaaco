import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import HomeNotification from "./HomeNotification";
import { useNavigate } from "react-router-dom";
const HeroSection2 = () => {
  const staticText = "Univmaa Technologies";
  const animatedText = "is one of the fast-growing IT Consulting Companies.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("ltr");

  const navigate = useNavigate();

  // Typing effect
  useEffect(() => {
    let timeout;
    if (direction === "ltr" && index < animatedText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + animatedText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 120);
    } else if (direction === "rtl" && index >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(animatedText.slice(index));
        setIndex((prev) => prev - 1);
      }, 120);
    }

    return () => clearTimeout(timeout);
  }, [index, direction, animatedText]);

  // Reset typing
  useEffect(() => {
    if (direction === "ltr" && index === animatedText.length) {
      const reset = setTimeout(() => {
        setDirection("rtl");
        setIndex(animatedText.length - 1);
      }, 5000);
      return () => clearTimeout(reset);
    }
    if (direction === "rtl" && index < 0) {
      const reset = setTimeout(() => {
        setDirection("ltr");
        setDisplayedText("");
        setIndex(0);
      }, 5000);
      return () => clearTimeout(reset);
    }
  }, [index, direction, animatedText.length]);

  // 🔥 Background Slideshow
  const backgrounds = [
    "/image/hero-bg.jpg",
    "/image/hero-bg2.jpg",
    "/image/hero-bg4.jpg",
    "/image/hero-bg5.jpg",
  ];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  // 🔥 Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section md:p-16 px-10 sm:py-32 py-24 flex flex-col md:flex-row items-center md:justify-between justify-center md:gap-24 w-full md:min-h-screen transition-all duration-1000"
        id="home"
        style={{
          backgroundImage: `linear-gradient(rgba(22, 22, 22, 0.712), rgba(0, 0, 0, 0.801)), url(${backgrounds[bgIndex]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:px-28 px-4 mx-auto text-center w-full z-10">
          <motion.h1
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="md:text-5xl text-xl font-bold text-white"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-500 to-blue-200">
              {staticText}
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <p className="md:mt-4 mt-2 md:text-xl text-slate-300 mb-6">
              We are a strong and diverse team of professionals with a common
              purpose of providing innovative digital solutions by{" "}
              <b>simplifying the complexities</b>.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-violet-600 border-2 border-violet-600 text-white md:px-10 px-2 md:py-3 py-1 rounded-sm hover:bg-transparent hover:text-violet-400 duration-300"
            >
              Get started
            </button>
          </motion.div>
        </div>
        <HomeNotification />
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="bg-[#0B0E1A] rounded-xl shadow-2xl max-w-lg w-full p-6 text-center border border-gray-700">
                <img
                  src="/image/homemodal.png"
                  alt="Salesforce"
                  className="w-40 mx-auto mb-4"
                />

                <h2 className="text-2xl font-bold text-white mb-4 leading-snug">
                  We don’t just deliver projects — we build digital partnerships
                  that help businesses grow faster and smarter.
                </h2>

                <p className="text-gray-400 text-sm mb-4 font-medium uppercase tracking-wide">
                  What We Deliver Beyond Code
                </p>

                <ul className="text-left text-gray-300 space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">➝</span>
                    <span>
                      <span className="font-semibold text-white">Growth:</span>{" "}
                      We design platforms that scale with your business.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">➝</span>
                    <span>
                      <span className="font-semibold text-white">
                        Innovation:
                      </span>{" "}
                      Bold ideas powered by Salesforce, AI, and Cloud.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">➝</span>
                    <span>
                      <span className="font-semibold text-white">Trust:</span>{" "}
                      Transparent processes, no jargon — just clarity.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">➝</span>
                    <span>
                      <span className="font-semibold text-white">
                        Reliability:
                      </span>{" "}
                      On-time, every time — your success is our priority.
                    </span>
                  </li>
                </ul>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="border border-gray-400 px-6 py-2 rounded-md text-gray-300 hover:bg-gray-700 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroSection2;
