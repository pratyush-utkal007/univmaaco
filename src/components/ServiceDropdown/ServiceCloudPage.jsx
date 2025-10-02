import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// 🚀 Section Variants for Smooth Scroll Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function ServiceCloudPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);

  // 🔑 Web3Forms submit handler
  const onSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.target);
    formData.append("access_key", "69a3d0f0-6e0b-46d1-8ade-aa88506555ef"); // replace with your key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
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
        event.target.reset();
        setIsChecked(false);
      } else {
        setError("Something went wrong. Try again later.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      {/* ========================== Section 1 ========================== */}
      <section className="bg-[#0D1117] pt-28 text-white px-6 md:px-52 py-16 grid md:grid-cols-2 gap-10 items-center relative">
        {/* Left Content */}
        <div className="space-y-6" data-aos="fade-right">
          {/* Heading & Content */}
          <h2 className="text-3xl md:text-5xl font-bold">
            Salesforce <span className="text-sky-500">Service Cloud</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-xl">
            Empower your service team, leveraging AI and automation to create a
            seamless, customer-centric service experience.
          </p>

          {/* Explore More Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="inline-block px-6 py-3 bg-gradient-to-r from-sky-500 to-purple-600 rounded-md font-semibold text-white shadow hover:opacity-90 transition"
          >
            Explore More →
          </button>

          {/* Modal */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Modal Content */}
                <motion.div
                  className="bg-white rounded-2xl shadow-xl max-w-3xl w-full mx-4 p-6 relative overflow-hidden"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
                  >
                    ✕
                  </button>

                  {/* Modal Content */}
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    {/* Text Content */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        Discover Salesforce Service Cloud
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Deliver personalized support, resolve cases faster, and
                        build long-term trust with customers using AI-driven
                        insights and automation.
                      </p>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center">
                      <img
                        src="image/servicemodal.jpg"
                        alt="Sales Cloud"
                        className="rounded-lg shadow-md w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Form */}
        <div
          id="form"
          data-aos="fade-left"
          className="bg-gradient-to-b from-purple-600 to-black p-8 rounded-2xl shadow-lg w-3/4 max-w-md mx-auto mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-6">Fill the form</h3>
          {success ? (
            <p className="text-green-400 font-semibold text-center">
              ✅ Thank you! We&apos;ll get back to you soon.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                className="w-full px-4 py-3 rounded-md text-black h-10"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="w-full px-4 py-3 rounded-md text-black h-10"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                required
                className="w-full px-4 py-3 rounded-md text-black h-10"
              />
              <input
                type="email"
                name="email"
                placeholder="Business Email"
                required
                className="w-full px-4 py-3 rounded-md text-black h-10 "
              />
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                required
                className="w-full px-4 py-3 rounded-md text-black h-10"
              />

              {error && <p className="text-red-400 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full py-3 bg-sky-500 hover:bg-sky-600 rounded-md font-semibold text-white transition"
              >
                SUBMIT
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ========================== Section 2 ========================== */}
      <motion.section
        className="bg-black text-white px-6 md:px-20 py-16 grid md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Left Illustration */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="image/serviceimg.jpg"
            alt="Data-Driven Selling"
            className="w-80 md:w-[420px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div variants={fadeInUp} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Empower Your Service Team with{" "}
            <span className="text-blue-400">to deliver more with less</span>
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            The rules for customer engagement have changed! Today’s buyers are
            informed, discerning, and expect personalized experiences.
          </p>
          <p className="text-gray-300 mb-6 text-lg">
            Salesforce Sales Cloud is a powerful platform designed to empower
            your sales team and transform your sales operations with advanced
            features like AI-driven insights, predictive analytics, integration
            with other Salesforce clouds and more!
          </p>
          <motion.a
            onClick={() => {
              navigate("/contactus");
              window.scrollTo(0, 0); // 👈 reset scroll
            }}
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-3 hover:cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 rounded-md font-semibold"
          >
            Let’s Connect ➝
          </motion.a>
        </motion.div>
      </motion.section>

      {/* ========================== Section 3 ========================== */}
      <motion.section
        className="bg-black text-white px-6 md:px-20 py-16 grid md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Left Content */}
        <motion.div variants={fadeInUp} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Put Customers at the Heart of Your Business with{" "}
            <span className="text-blue-400">Data & AI</span>
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            By harnessing the power of AI, Service Cloud provides predictive
            insights, automates routine tasks, and personalizes interactions,
            allowing your service teams to focus on what matters most—resolving
            customer issues efficiently. With AI-driven features like Einstein
            Service Replies, your agents can analyze customer conversation in
            real time, generate replies and gain access to intelligent
            recommendations and predictive analytics, enabling them to
            anticipate customer needs and offer proactive solutions.
          </p>
          <p className="text-gray-300 mb-6 text-lg">
            Einstein AI transforms this data into actionable insights,
            predicting customer behavior, automating tasks, and personalizing
            interactions. Let AI do the heavy lifting for revenue growth and
            customer satisfaction.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/image/serviceimg2.jpg"
            alt="Data & AI"
            className="w-96 md:w-[500px]"
          />
        </motion.div>
      </motion.section>

      {/* ========================== Section 4 ========================== */}
      <motion.section
        className="bg-[#071426] text-white px-6 md:px-20 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          variants={fadeInUp}
        >
          Industries We Serve
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-10"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          As a company committed to excellence, we offer solutions that meet
          your unique & evolving business needs.
        </motion.p>

        {/* Industries Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {[
            "Manufacturing",
            "Finance",
            "Healthcare",
            "Retail",
            "Hi-tech",
            "Real Estate",
          ].map((industry, i) => (
            <motion.div
              key={i}
              className="p-6 bg-[#0c1b33] rounded-lg shadow hover:shadow-lg cursor-pointer"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/image/icon.jpg"
                alt={industry}
                className="w-12 h-12 mx-auto mb-3"
              />
              <p className="font-semibold">{industry}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ========================== Section 5 (Workspace Image) ========================== */}
      <motion.section
        className="bg-[#071426] text-white px-6 md:px-20 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          variants={fadeInUp}
        >
          One Workspace for Every Service Need
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          Leverage AI and automation to create a seamless, customer-centric
          service experience.
        </motion.p>

        {/* Image */}
        <motion.div
          className="flex justify-center"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <img
            src="image/serviceimg3.png"
            alt="Workspace for Every Service Need"
            className="w-full max-w-5xl rounded-lg "
          />
        </motion.div>
      </motion.section>

      {/* ========================== Section 5 ========================== */}
      <motion.section
        className="bg-black text-white px-6 md:px-20 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          variants={fadeInUp}
        >
          Deliver Value Across Every Customer{" "}
          <span className="text-blue-400">Touchpoint</span>
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 mb-12"
          variants={fadeInUp}
        >
          Empower agents with a perfect set of productivity tools that deliver
          smart, fast, and personalized customer service.
        </motion.p>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Case Management",
              desc: "Optimize your customer support with our case management system. Automatically route cases, meet service level agreements, and empower agents with knowledge for faster resolutions.",
            },
            {
              title: "Self-Service Experience",
              desc: "Empower your customers with 24/7 access to information and support through self-service portals. Reduce agent workload and improve customer satisfaction by enabling self-service solutions.",
            },
            {
              title: "Omni-Channel Routing",
              desc: "Intelligent omni-channel routing helps you efficiently distribute work across your team based on agent skills and availability, ensuring faster response times and improved customer satisfaction.",
            },
            {
              title: "Service Analytics",
              desc: "Gain actionable insights, visualize trends, and optimize service operations with Salesforce Service Cloud Analytics and boost customer satisfaction and loyalty.",
            },
            {
              title: "Generative AI-Powered Service Replies",
              desc: "Instantly generate relevant responses across multiple channels with AI-powered replies. Reduce agent workload and increase customer satisfaction through faster resolutions.",
            },
            {
              title: "Incident Detection & Response",
              desc: "Proactively identify and address potential service disruptions. Leverage Service Cloud's incident management capabilities to minimize downtime and ensure business continuity.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`p-6 rounded-lg shadow ${
                item.highlight
                  ? "bg-gradient-to-b from-purple-600 to-purple-800"
                  : "bg-[#0c1b33]"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ========================== Section 6 - CTA ========================== */}
      <div className="bg-slate-950 text-white px-6 md:px-20 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3, once: false }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-800 to-teal-950 rounded-lg text-center p-10 max-w-5xl mx-auto my-16"
        >
          <h2 className="text-2xl font-bold mb-4">
            Have Questions? Let’s Discuss!
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Discover possibilities and navigate through the diverse world of
            Salesforce. Be a part of our thriving community.
          </p>
          <motion.button
            whileHover={{ scale: 1.06, backgroundColor: "#1e40af" }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              navigate("/contactus");
              window.scrollTo(0, 0); // 👈 reset scroll
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md"
          >
            Request a Consultation ➝
          </motion.button>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
