import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import {
  BarChart3,
  Cpu,
  Database,
  Cloud,
  Users,
  Layers,
  Activity,
  Settings,
  Share2,
} from "lucide-react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SalesforceTableauPage() {
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

  /* ---------------- Form Submit ---------------- */
  const onSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.target);
    formData.append("access_key", "69a3d0f0-6e0b-46d1-8ade-aa88506555ef");

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
      } else {
        setError("Something went wrong. Try again later.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  /* ---------------- Tableau Data ---------------- */
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      title: "Transform Data into Actionable Insights",
      desc: "Integrating Tableau with Salesforce enables seamless data analysis through intuitive dashboards and AI-driven insights.",
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: "Connect, Analyze, and Act in Real-Time",
      desc: "With 100+ native connectors, Tableau CRM pulls data from clouds, databases, apps, and files.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      title: "AI-Driven Analytics for Strategic Growth",
      desc: "Harness the power of Salesforce Einstein AI to predict trends, automate processes, and uncover opportunities.",
    },
    {
      icon: <Layers className="w-8 h-8 text-blue-400" />,
      title: "Flexible Deployment for Every Business Need",
      desc: "Deploy Tableau CRM on-premises, public cloud, or Salesforce Hyperforce.",
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: "Comprehensive Data Management & Governance",
      desc: "Ensure data quality, security, and governance with Tableau CRM’s advanced tools.",
    },
    {
      icon: <Share2 className="w-8 h-8 text-blue-400" />,
      title: "Seamless Collaboration & Sharing",
      desc: "Empower teams by securely sharing dashboards, reports, and insights across your organization in real time.",
    },
  ];

  const services = [
    {
      icon: <Users className="w-7 h-7 text-blue-400" />,
      title: "Tableau Managed Services",
      desc: "End-to-end support to ensure your analytics environment runs smoothly.",
    },
    {
      icon: <Settings className="w-7 h-7 text-blue-400" />,
      title: "Tableau Consulting & Advisory",
      desc: "Expert guidance to align Tableau with your strategic goals.",
    },
    {
      icon: <Activity className="w-7 h-7 text-blue-400" />,
      title: "Rapid Tableau Implementation",
      desc: "Quick, customized deployments designed to meet your needs.",
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-blue-400" />,
      title: "Custom Dashboard Development",
      desc: "Personalized dashboards that deliver actionable insights.",
    },
    {
      icon: <Database className="w-7 h-7 text-blue-400" />,
      title: "Integration with CRMs, ERPs, & AI",
      desc: "Unified data integrations across platforms for holistic analytics.",
    },
    {
      icon: <Layers className="w-7 h-7 text-blue-400" />,
      title: "Performance Optimization",
      desc: "Ensure peak performance with real-time insights and quick load times.",
    },
  ];

  /* ---------------- Animation Variants ---------------- */
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const labelVariants = {
    hidden: { opacity: 0, x: -40 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#0D1117] text-white">
        {/* ---------------- Hero Section ---------------- */}
        <section className="px-6 md:px-20 py-16 grid md:grid-cols-2 pt-36 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6 ps-16 " data-aos="fade-right">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Salesforce <span className="text-sky-500">Tableau</span>
              <span className="block text-2xl md:text-3xl mt-2 font-medium text-gray-300">
                Revolutionizing Customer Engagement with
                <span className="text-sky-500 font-semibold"> AI Agents</span>
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-xl">
              Discover the future of business with autonomous AI agents built
              natively into Salesforce. Accelerate sales with intelligent
              automation. Elevate customer service through proactive, always-on
              support. Drive marketing impact with personalized engagement at
              scale.
            </p>
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
                          Unlock Insights with{" "}
                          <span className="text-blue-600">Tableau</span>
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Tableau empowers organizations to turn{" "}
                          <span className="font-semibold">
                            raw data into actionable insights
                          </span>
                          . With its intuitive visualizations and AI-driven
                          analytics, Tableau helps teams make better, faster
                          decisions.
                        </p>
                        <ul className="mt-4 list-disc list-inside text-gray-600 space-y-1">
                          <li>Interactive dashboards for real-time analysis</li>
                          <li>Connect to 100+ data sources seamlessly</li>
                          <li>
                            AI-powered predictions with Einstein Discovery
                          </li>
                          <li>Scalable and secure for enterprise needs</li>
                        </ul>
                      </div>

                      {/* Image */}
                      <div className="flex justify-center">
                        <img
                          src="/image/tableaumodal.png"
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
            className="bg-gradient-to-b from-purple-600 to-black p-8 rounded-2xl shadow-lg w-3/4 max-w-md mx-auto mt-10 md:mt-0"
            data-aos="fade-left"
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
                  className="w-full px-4 py-3 rounded-md text-black"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-3 rounded-md text-black"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  required
                  className="w-full px-4 py-3 rounded-md text-black"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  required
                  className="w-full px-4 py-3 rounded-md text-black"
                />
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  required
                  className="w-full px-4 py-3 rounded-md text-black"
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

        {/* ---------------- Tableau Features ---------------- */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Why Choose Salesforce Tableau CRM?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  custom={i}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-xl p-6 text-left shadow-md hover:shadow-blue-500/20 transition"
                >
                  {item.icon}
                  <h3 className="text-lg font-semibold mt-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Tableau Services ---------------- */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Salesforce Tableau Integration Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  custom={i}
                  viewport={{ once: true }}
                  className="bg-gray-950 border border-gray-800 rounded-xl p-6 shadow hover:shadow-blue-500/20 transition"
                >
                  {item.icon}
                  <h3 className="text-lg font-semibold mt-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- ROI Section (Last Section with Better Animations) ---------------- */}
        <section className="bg-black text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center gap-14">
          {/* Left Side - Image with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="relative flex items-center justify-center w-full md:w-1/2"
          >
            <img
              src="/image/tableauimg.png"
              alt="Tableau CRM"
              className="rounded-xl shadow-lg object-contain max-h-[400px] w-full"
            />
          </motion.div>

          {/* Right Side - FadeUp Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={1}
            viewport={{ once: true }}
            className="max-w-lg w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              Drive ROI & Business Outcomes
            </h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-gray-300 mb-6 leading-relaxed"
            >
              We prioritize your business goals from day one, ensuring Tableau
              CRM delivers measurable value. Our experts work closely with your
              teams to:
            </motion.p>
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="list-disc list-inside text-gray-300 space-y-2 mb-8"
            >
              {[
                "Gather user stories and align solutions with business needs.",
                "Drive user adoption through training and best practices.",
                "Monitor outcomes and demonstrate ROI with data-backed results.",
              ].map((point, i) => (
                <motion.li key={i} variants={fadeUp} custom={i + 3}>
                  {point}
                </motion.li>
              ))}
            </motion.ul>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigate("/contactus");
                window.scrollTo(0, 0); // 👈 reset scroll
              }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-sky-500 to-purple-600 rounded-md font-semibold text-white shadow hover:opacity-90 transition"
            >
              Let&apos;s Connect →
            </motion.a>
          </motion.div>
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
        <Footer />
      </div>
    </>
  );
}
