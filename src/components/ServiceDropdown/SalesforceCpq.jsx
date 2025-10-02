import {
  FaFileInvoice,
  FaChartLine,
  FaHandshake,
  FaMoneyBillWave,
  FaShoppingCart,
  FaRocket,
  FaProjectDiagram,
  FaFileContract,
  FaBoxes,
  FaCheckCircle,
  FaSyncAlt,
  FaNetworkWired,
  FaLayerGroup,
} from "react-icons/fa";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
/* ---------------- BENEFITS DATA ---------------- */
const benefits = [
  {
    id: 1,
    icon: <FaFileInvoice className="text-4xl text-blue-400" />,
    title: "Minimize Quote Inaccuracies",
    description: "Ensure accurate quotes every time, reducing costly errors.",
  },
  {
    id: 2,
    icon: <FaChartLine className="text-4xl text-blue-400" />,
    title: "Enhanced Pricing & Discount Visibility",
    description:
      "Access clear pricing and discount data for informed decision-making.",
  },
  {
    id: 3,
    icon: <FaHandshake className="text-4xl text-blue-400" />,
    title: "Improved Negotiation Management",
    description: "Gain better insights to handle negotiations effectively.",
  },
  {
    id: 4,
    icon: <FaMoneyBillWave className="text-4xl text-blue-400" />,
    title: "Intelligent Invoicing",
    description: "Prevent invoicing errors with automated checks and balances.",
  },
  {
    id: 5,
    icon: <FaShoppingCart className="text-4xl text-blue-400" />,
    title: "Guided Selling",
    description:
      "Equip your sales team with tools to select the best product configurations.",
  },
  {
    id: 6,
    icon: <FaRocket className="text-4xl text-blue-400" />,
    title: "Boost Proposal Productivity",
    description: "Streamline the proposal process for faster turnaround.",
  },
];

/* ---------------- FEATURES DATA ---------------- */
const features = [
  {
    icon: <FaProjectDiagram size={40} className="text-blue-500" />,
    title: "Guided Selling",
    description:
      "Assist your sales team with step-by-step product selection and configurations for each customer every time.",
  },
  {
    icon: <FaCheckCircle size={40} className="text-blue-500" />,
    title: "Approval Workflows",
    description:
      "Streamline approval processes for discounts, custom deals, and contract approvals.",
  },
  {
    icon: <FaBoxes size={40} className="text-blue-500" />,
    title: "Product Bundling",
    description:
      "Package products and services into custom bundles to offer more value to customers.",
  },
  {
    icon: <FaFileContract size={40} className="text-blue-500" />,
    title: "Contract Management",
    description:
      "Seamlessly integrate quoting with contract creation and lifecycle management.",
  },
  {
    icon: <FaMoneyBillWave size={40} className="text-blue-500" />,
    title: "Multi-Currency Support",
    description:
      "Handle global transactions effortlessly with multi-currency quoting capabilities.",
  },
  {
    icon: <FaSyncAlt size={40} className="text-blue-500" />,
    title: "Subscription Management",
    description:
      "Manage subscriptions with automated pricing and streamlined contract renewals.",
  },
  {
    icon: <FaNetworkWired size={40} className="text-blue-500" />,
    title: "Multi-Channel Sales Enablement",
    description:
      "Empower partners and customers with CPQ access via Experience Cloud or B2B Commerce.",
  },
  {
    icon: <FaLayerGroup size={40} className="text-blue-500" />,
    title: "Multi-Dimensional Quoting",
    description:
      "Configure products with multiple price dimensions, enabling independent adjustments.",
  },
];

/* ---------------- MAIN PAGE ---------------- */
export default function SalesforceCpqPage() {
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
    event.preventDefault(); // ✅ fixed (was e.preventDefault)

    const formData = new FormData(event.target);
    formData.append("access_key", "69a3d0f0-6e0b-46d1-8ade-aa88506555ef"); // your API key

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
        setError(null);

        // ✅ Toast notification
        toast.success("Form submitted successfully!");

        // ✅ Reset form
        event.target.reset();

        // Hide success message after 4s
        setTimeout(() => setSuccess(false), 4000);
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
      <div className="bg-[#0B0E1A] text-white">
        {/* ================= HERO SECTION ================= */}
        <section className="bg-[#0D1117] text-white px-6 md:px-52 py-16 grid md:grid-cols-2 gap-10 items-center relative">
          {/* Left Content */}
          <div className="space-y-6" data-aos="fade-right">
            {/* Heading & Content */}
            <h2 className="text-3xl md:text-5xl font-bold">
              Salesforce{" "}
              <span className="text-sky-500">
                Salesforce CPQ Consulting & Implementation
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-xl">
              Accelerate sales process with accurate sales quotes, reduced
              errors and faster quote-to-cash cycles with Salesforce CPQ.
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
                    className="bg-white rounded-2xl shadow-xl max-w-3xl w-full mx-4 p-10 relative overflow-hidden"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl"
                    >
                      ✕
                    </button>

                    {/* Modal Content */}
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      {/* Text Content */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                          Discover Salesforce CPQ Cloud
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          CPQ Cloud (Configure, Price, Quote) simplifies complex
                          sales processes. Automate quotes, reduce errors,
                          optimize pricing, and empower your sales teams to
                          close deals faster and smarter.
                        </p>
                      </div>

                      {/* Image */}
                      <div className="flex justify-center">
                        <img
                          src="/image/cpq.jpg"
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
                  className="w-full px-4 py-3 rounded-md text-black h-10"
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

        {/* ================= BENEFITS SECTION ================= */}
        <section className="px-6 md:px-20 py-20 relative">
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Benefits of Salesforce CPQ
            </h2>
            <p className="text-gray-300">
              Empower Your Sales Team with Precision and Speed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-700 rounded-lg p-6 bg-[#0D1117] hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-center">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= FEATURES SECTION ================= */}
        <section className="bg-[#0D1117] text-white px-6 md:px-20 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Features of Salesforce CPQ
            </h2>
            <p className="text-gray-400 mt-2">
              Eliminate Sales and Billing Bottlenecks for Smoother Operations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white text-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
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
              onClick={() => {
                navigate("/contactus");
                window.scrollTo(0, 0); // 👈 reset scroll
              }}
              whileTap={{ scale: 0.96 }}
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
}
