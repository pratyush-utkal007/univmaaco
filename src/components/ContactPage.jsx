import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContactPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // 🔑 Web3Forms submit handler
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Your Web3Forms Access Key
    formData.append("access_key", "69a3d0f0-6e0b-46d1-8ade-aa88506555ef");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSuccess(true);
      setError(null);
      event.target.reset();
      setIsChecked(false); // reset checkbox
    } else {
      setError("Something went wrong!");
      setSuccess(false);
    }
  };

  return (
    <div className="bg-[#0B0E1A] text-white font-sans">
      <Navbar />
      {/* ===== Contact Info Section ===== */}
      <motion.h2
        className="text-3xl md:text-4xl pt-28 font-bold text-center py-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Contact Us
      </motion.h2>

      {/* Image */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <img
          src="/image/contactimg.jpg"
          alt="Contact"
          className="rounded-xl shadow-lg w-[90%] md:w-[50%] object-cover"
        />
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="grid md:grid-cols-3 gap-10 px-8 md:px-20 py-14"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl font-bold mb-4">
            Collaborate with Industry-Leading Experts
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Drive innovation with our team of seasoned Salesforce experts –
            together, we transform concepts into reality and deliver excellence.
          </p>
        </motion.div>

        {/* Odisha Office */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h4 className="text-xl font-semibold mb-4">Odisha</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <Phone className="w-5 h-5 text-blue-400 mt-1" />
              +91 8904466684
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-blue-400 mt-1" />
              Idco Info Park, Technology Corridor, Chandaka Industrial Estate,
              Patia, Bhubaneswar, Odisha 751024
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-5 h-5 text-blue-400 mt-1" />
              helpdesk@univmaaa.com
            </li>
          </ul>
        </motion.div>

        {/* Bengaluru Office */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h4 className="text-xl font-semibold mb-4">Bengaluru</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <Phone className="w-5 h-5 text-blue-400 mt-1" />
              +91 9777293266
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-blue-400 mt-1" />
              Shantiniketan Tech Park, 10th Floor, Tower B, Prestige, Whitefield
              Bengaluru - 560048
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-5 h-5 text-blue-400 mt-1" />
              helpdesk@univmaaa.com
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* ===== Contact Form Section ===== */}
      <motion.div
        className="min-h-screen flex items-center justify-center px-6 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <motion.div
          className="w-full max-w-2xl bg-transparent"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            Let's work <span className="text-blue-400">Together</span>
          </motion.h2>
          <motion.p
            className="text-center text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Tell us about yourself and we’ll figure out the best solution for
            you
          </motion.p>

          {/* Form */}
          <motion.form
            className="space-y-4"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <input
              type="text"
              name="first_name"
              placeholder="First Name *"
              className="w-full px-4 py-3 rounded-md text-black focus:outline-none bg-zinc-600"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name *"
              className="w-full px-4 py-3 rounded-md text-black focus:outline-none bg-zinc-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Company Email *"
              className="w-full px-4 py-3 rounded-md text-black focus:outline-none bg-zinc-600"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company *"
              className="w-full px-4 py-3 rounded-md text-black focus:outline-none bg-zinc-600"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full px-4 py-3 rounded-md text-black focus:outline-none bg-zinc-600"
            />
            <textarea
              name="notes"
              placeholder="Notes"
              rows="4"
              className="w-full px-4 py-3 rounded-md text-black focus:outline-none bg-zinc-600"
            ></textarea>

            {/* Fake Google reCAPTCHA */}
            <motion.div
              className="w-full bg-zinc-600 rounded-md flex items-center justify-between px-4 py-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <label className="flex items-center gap-2 text-black">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                I’m not a robot
              </label>
              <img
                src="/image/contactimg2.png"
                alt="reCAPTCHA"
                className="h-6"
              />
            </motion.div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={!isChecked}
              whileHover={{ scale: isChecked ? 1.05 : 1 }}
              whileTap={{ scale: isChecked ? 0.95 : 1 }}
              className={`w-full ${
                isChecked
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-500 cursor-not-allowed"
              } text-white font-semibold py-3 rounded-md mt-4`}
            >
              SUBMIT
            </motion.button>
          </motion.form>

          {/* Success / Error Messages */}
          {success && (
            <motion.p
              className="text-green-400 text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              ✅ Your message has been sent successfully!
            </motion.p>
          )}
          {error && (
            <motion.p
              className="text-red-400 text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              {error}
            </motion.p>
          )}
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
