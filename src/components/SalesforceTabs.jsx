import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "implementation",
    label: "Implementation",
    content: {
      title: "Salesforce Implementation",
      text: "Gain access to revolutionary solutions for your AppExchange strategy and accelerate your time to market by 3X with Univmaa.",
      points: [
        "Sales Cloud",
        "Service Cloud",
        "Marketing Cloud",
        "App Cloud",
        "Experience Cloud",
        "Salesforce CPQ",
      ],
      image: "image/tabhome1.jpg",
    },
  },
  {
    id: "msp",
    label: "MSP Services",
    content: {
      title: "Managed Services",
      text: "Stay focused on your business while we handle your Salesforce ecosystem with proactive monitoring and continuous optimization.",
      points: [
        "24/7 Support",
        "System Monitoring",
        "Admin Tasks",
        "User Training",
      ],
      image: "image/tabhome2.jpg",
    },
  },
  {
    id: "pdo",
    label: "PDO Services",
    content: {
      title: "Product Development",
      text: "Accelerate your AppExchange journey with product development outsourcing (PDO) expertise.",
      points: ["AppExchange Strategy", "Product Roadmap", "Security Reviews"],
      image: "image/tabhome3.jpg",
    },
  },
  {
    id: "datacloud",
    label: "Data Cloud",
    content: {
      title: "Salesforce Data Cloud",
      text: "Unify customer data, personalize experiences, and empower decisions with Salesforce Data Cloud.",
      points: [
        "Data Unification",
        "AI-driven Insights",
        "360° View of Customers",
      ],
      image: "image/tabhome4.jpg",
    },
  },
  {
    id: "agentforce",
    label: "Agentforce",
    content: {
      title: "Salesforce Agentforce",
      text: "Deploy AI-driven agents that enhance customer interactions and automate tasks with precision.",
      points: ["AI Agents", "Automation", "Personalized Experiences"],
      image: "image/tabhome5.jpg",
    },
  },
];

export default function SalesforceTabs() {
  const [activeTab, setActiveTab] = useState("implementation");
  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  // Animation Variants
  const textVariants = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 60 },
  };

  const imageVariants = {
    initial: { opacity: 0, x: 60, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -60, scale: 0.95 },
  };

  return (
    <div className="bg-[#0B0E1A] min-h-screen text-white px-6 md:px-20 py-12 font-sans flex flex-col items-center">
      {/* Capsule Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full border font-medium transition-all ${
              activeTab === tab.id
                ? "bg-blue-500 text-white border-blue-500 shadow-lg"
                : "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
        <AnimatePresence mode="wait">
          {/* Left Text */}
          <motion.div
            key={activeContent.title}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
              {activeContent.title}
            </h2>
            <p className="text-gray-300 mb-4">{activeContent.text}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {activeContent.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            key={activeContent.image}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex-1"
          >
            <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl shadow-xl p-4">
              <img
                src={activeContent.image}
                alt={activeContent.title}
                className="rounded-xl shadow-2xl w-full h-[350px] object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
