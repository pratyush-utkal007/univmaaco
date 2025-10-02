import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabData = [
  {
    id: "vision",
    title: "Our Vision",
    content:
      "Our vision is to create innovative solutions that empower communities and drive sustainable growth.",
  },
  {
    id: "mission",
    title: "Our Mission",
    content:
      "Our mission is to deliver high-quality products and services that exceed our customers’ expectations.",
  },
  {
    id: "values",
    title: "Our Values",
    content:
      "Integrity, innovation, collaboration, and commitment to excellence are the core values that guide us.",
  },
];

const Values = () => {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <div className="max-w-5xl mx-auto p-4 min-h-screen min-w-full bg-slate-100 flex flex-col items-center justify-center">
      {/* Tab Buttons */}
      <div className="flex justify-center flex-wrap mb-6">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 m-2 rounded-full font-semibold transition-all duration-300
              ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Card Content */}
      <div className="relative w-full md:w-3/4">
        <AnimatePresence mode="wait">
          {tabData
            .filter((tab) => tab.id === activeTab)
            .map((tab) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 20, scale: 1 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                className="bg-blue-950 text-white rounded-3xl shadow-2xl p-8 md:p-12 text-center md:text-left cursor-pointer hover:scale-105 hover:shadow-3xl transition-transform duration-300"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                  {tab.title}
                </h2>
                <p className="text-lg md:text-xl">{tab.content}</p>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Values;
