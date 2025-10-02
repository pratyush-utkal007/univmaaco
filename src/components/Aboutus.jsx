import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const features = [
  {
    title: "Salesforce, Simplified & Supercharged",
    desc: "We turn Salesforce into your business growth engine — easy to use, tailored to you, and built for speed.",
  },
  {
    title: "Startup Agility, Enterprise Impact",
    desc: "Univmaa blends the fast, innovative spirit of a startup with the reliability big businesses demand.",
  },
  {
    title: "Future-Ready Cloud Solutions",
    desc: "From automation to AI, our Salesforce-powered solutions keep your business ahead of the curve.",
  },
  {
    title: "Customer Success  Above All",
    desc: "Every solution we design starts with one goal — driving measurable results and lasting success for you.",
  },
  {
    title: "Innovation Without Boundaries",
    desc: "We don’t follow trends — we set them. Expect bold ideas and cutting-edge Salesforce integrations.",
  },
  {
    title: "Your Trusted Salesforce Partner",
    desc: "Beyond technology, we build partnerships. With Univmaa, you gain a long-term ally for growth.",
  },
];
const beliefCards = [
  {
    icon: "⏱️",
    title: "Timely Delivery",
    desc: "Delivering value, and ensuring projects are on time.",
  },
  {
    icon: "⭐",
    title: "High Quality",
    desc: "We consistently surpass client expectations with high-quality work.",
  },
  {
    icon: "⚙️",
    title: "Structured Approach",
    desc: "We harness technology for efficiency and organization.",
  },
  {
    icon: "🤝",
    title: "Customer Support",
    desc: "Exceptional service and support are our cornerstones.",
  },
];

// Entry animation used for grid cards
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, type: "spring", stiffness: 120 },
  }),
};

const Aboutus = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/contactus");
    window.scrollTo(0, 0);
  };

  const ctrl0 = useAnimation();
  const ctrl1 = useAnimation();
  const ctrl2 = useAnimation();
  const ctrl3 = useAnimation();
  const controlsArr = [ctrl0, ctrl1, ctrl2, ctrl3];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHoverStart = (index) => {
    setHoveredIndex(index);
    controlsArr.forEach((ctrl, i) => {
      if (i !== index) {
        ctrl.start({
          rotateY: [0, 360],
          transition: { duration: 0.8, ease: "easeInOut" },
        });
      } else {
        ctrl.start({ rotateY: 0, transition: { duration: 0 } });
      }
    });
  };

  const handleHoverEnd = () => {
    setHoveredIndex(null);
    controlsArr.forEach((ctrl) =>
      ctrl.start({ rotateY: 0, transition: { duration: 0.3 } })
    );
  };

  const cardHover = {
    scale: 1.03,
    y: -6,
    transition: { duration: 0.3, type: "spring", stiffness: 220 },
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        className="relative text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/image/aboutimg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-950/80"></div>

        <div className="relative z-10 pt-16">
          <motion.h1
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0 }}
            className="text-sm sm:text-lg md:text-2xl pt-10 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Univmaa is a Salesforce-focused IT solutions company delivering
            cutting-edge cloud solutions, CRM optimization, automation, and
            integration services that empower businesses worldwide.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 bg-black overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          whileHover={cardHover}
          className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg rounded-xl p-6 sm:p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
            Our Mission
          </h2>
          <p className="text-white text-sm sm:text-lg md:text-xl leading-relaxed">
            We are dedicated to becoming one of the leading cloud technology
            service providers by offering quality and affordable services to our
            customers through continuously expanding our workforce potential...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          whileHover={cardHover}
          className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg rounded-xl p-6 sm:p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
            Our Vision
          </h2>
          <p className="text-white text-sm sm:text-lg md:text-xl leading-relaxed">
            Innovation being the core of our business, we want to constantly
            challenge the conventional and make a tangible impact...
          </p>
        </motion.div>
      </section>

      {/* Why Choose Univmaa */}
      <section className="bg-black text-white py-16 sm:py-20 px-4 sm:px-6 md:px-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Why Choose Univmaa?
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-xl text-gray-300">
            We deliver excellence and create value for customers...
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: false }}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 6,
                boxShadow: "0px 0px 25px rgba(99,102,241,0.7)",
              }}
              transition={{ duration: 0.35 }}
              className="bg-white text-black rounded-xl p-6 sm:p-8 shadow-lg cursor-pointer transform-gpu"
            >
              <div className="text-indigo-600 text-3xl sm:text-4xl mb-4">
                <FaCheckCircle />
              </div>
              <h3 className="font-bold text-base sm:text-xl mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* We Believe In */}
      <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 overflow-x-hidden">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            We Believe in
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-sm sm:text-base md:text-xl">
            We believe innovation is more than just technology...
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10 sm:mb-16">
          {beliefCards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: false }}
              variants={cardVariants}
              animate={controlsArr[i]}
              onHoverStart={() => handleHoverStart(i)}
              onHoverEnd={handleHoverEnd}
              whileHover={{
                scale: 1.05,
                y: -6,
                boxShadow: "0 0 25px rgba(59,130,246,0.6)",
              }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="bg-white text-black rounded-lg p-6 text-center shadow-md cursor-pointer"
            >
              <div className="text-blue-500 text-3xl sm:text-4xl mb-4">
                {card.icon}
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3, once: false }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-center p-6 sm:p-10 max-w-5xl mx-auto"
        >
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-4">
            Have Questions? Let’s Discuss!
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Discover possibilities and navigate through the diverse world of
            Salesforce. Be a part of our thriving community.
          </p>
          <motion.button
            whileHover={{ scale: 1.06, backgroundColor: "#1e40af" }}
            whileTap={{ scale: 0.96 }}
            onClick={handleRedirect}
            className="bg-blue-500 hover:bg-blue-700 text-white w-full sm:w-auto px-5 sm:px-6 py-3 rounded-lg font-medium shadow-md text-sm sm:text-base"
          >
            Request a Consultation ➝
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Aboutus;
