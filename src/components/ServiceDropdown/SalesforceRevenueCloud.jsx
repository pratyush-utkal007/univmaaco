import React from "react";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const SalesforceRevenueCloud = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);

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
      <div className="bg-[#0D0D2B] text-white font-sans">
        <section className="bg-[#0D1117] text-white pt-32 px-6 md:px-52 py-16 grid md:grid-cols-2 gap-10 items-center relative">
          {/* Left Content */}
          <div className="space-y-6" data-aos="fade-right">
            {/* Heading & Content */}
            <h2 className="text-3xl md:text-5xl font-bold">
              Salesforce{" "}
              <span className="text-sky-500">Revenue Cloud Advanced (RCA)</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-xl">
              Salesforce Revenue Cloud Advanced brings direct, partner, and
              self-service sales into one powerful ecosystem, automating every
              revenue touchpoint with Agentforce.
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
                          Discover Salesforce Revenue Cloud
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Revenue Cloud helps your business unify revenue
                          processes, automate billing, and forecast revenue
                          accurately. Streamline order management, subscription
                          billing, and analytics in a single platform to
                          maximize revenue growth.
                        </p>
                      </div>

                      {/* Image */}
                      <div className="flex justify-center">
                        <img
                          src="/image/revenueimg.jpg"
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
            <h3 className="text-2xl font-bold text-center mb-6">
              Fill the form
            </h3>
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

        {/* Key Features Section */}
        <section className="bg-black py-16 px-6 pt-32 lg:px-20 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-3"
          >
            Key Features of Salesforce RCA
          </motion.h2>
          <p className="text-gray-400 mb-12">
            Streamline Direct, Partner, and Self-Service Sales with AI-Powered
            Precision
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              {
                title: "Unified Sales Console",
                desc: "Manage direct, partner, and digital sales from one interface—boosting visibility and reducing complexity.",
              },
              {
                title: "Agentforce-Ready",
                desc: "Supports Agentforce & AI capabilities, automating tasks across the entire product-to-cash lifecycle.",
              },
              {
                title: "API-First Approach",
                desc: "Easy integration with other systems using a modern API-first approach.",
              },
              {
                title: "Unified Product Catalog",
                desc: "Centralize all product details to help sales close deals faster.",
              },
              {
                title: "Headless Architecture",
                desc: "Flexible and scalable architecture for modern enterprises.",
              },
              {
                title: "Transaction Line Editor (TLE)",
                desc: "Edit line items seamlessly in transactions with real-time feedback.",
              },
              {
                title: "Guided Selling",
                desc: "Empower reps with AI-driven recommendations for the best product options.",
              },
              {
                title: "End-to-End Process",
                desc: "Automates everything from lead to cash collection in one unified flow.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-blue-950 text-white p-6 rounded-lg shadow"
              >
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-white-700">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-[#0D0D2B] py-16 px-6 lg:px-20 text-white">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Benefits of Salesforce RCA:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Smarter Selling Across Channels",
                desc: "Empowers teams to close deals quicker with unified sales console and guided tools.",
              },
              {
                title: "Seamless Automation from Quote to Cash",
                desc: "Agentforce automation improves accuracy, reduces manual effort, and accelerates revenue.",
              },
              {
                title: "Automated, Accurate Order Orchestration",
                desc: "Real-time automation and integration streamline fulfillment, billing, and finance.",
              },
              {
                title: "Unified Billing and Payments",
                desc: "Automate invoicing, collections, and payments to cut manual effort and boost cash flow.",
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#121233] p-6 rounded-lg border border-gray-700"
              >
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

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
      </div>
      <Footer />
    </>
  );
};

export default SalesforceRevenueCloud;
