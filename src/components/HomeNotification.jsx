import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // ✅ Lucide Close Icon

export default function HomeNotification() {
  const [showPopup, setShowPopup] = useState(false);

  // Show popup automatically on page load
  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <div className="relative">
      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            key="popup" // ✅ ensures AnimatePresence works correctly
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-4 sm:p-6 md:p-10 w-full max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-4xl shadow-2xl relative flex flex-col md:flex-row gap-6 md:gap-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Side: Image */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                  src="/image/homemodal2.png"
                  alt="Dreamforce 2026"
                  className="rounded-lg shadow-lg border border-gray-200 w-full object-cover"
                />
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800 mb-3 leading-snug">
                  🌍 Dreamforce 2026 <br className="hidden md:block" /> San
                  Francisco Awaits!
                </h2>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4">
                  The world’s largest AI + CRM conference is back — bigger,
                  bolder, and more innovative than ever.
                </p>
                <p className="mb-6 text-gray-700 font-medium text-sm sm:text-base">
                  We’ll be there with{" "}
                  <span className="text-blue-600">expert insights</span>,{" "}
                  <span className="text-blue-600">live demos</span>, and{" "}
                  <span className="text-blue-600">exclusive networking</span>.
                  Let’s connect and shape the future together!
                </p>

                {/* CTA Button */}
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md font-semibold transition text-sm sm:text-base"
                >
                  📩 Register Your Interest
                </motion.button> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
