import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  GraduationCap,
  ShoppingCart,
  Megaphone,
  Headphones,
  Plus,
  Minus,
  BarChart3,
} from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// 🚀 Section Variants for Smooth Scroll Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

// Reusable FAQ Item Component
const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none"
      >
        <span
          className={`${open ? "text-blue-400" : "text-gray-200"} font-medium`}
        >
          {q}
        </span>
        {open ? (
          <Minus className="w-5 h-5 text-blue-400" />
        ) : (
          <Plus className="w-5 h-5 text-gray-400" />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4 text-gray-300"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function AgentforcePage() {
  const [isChecked, setIsChecked] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  // 🔑 Web3Forms submit handler

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
        setIsChecked(false);
      } else {
        setError("Something went wrong. Try again later.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  // 🔹 Agents Data
  const agents = [
    {
      icon: <Headphones className="w-10 h-10 text-blue-400" />,
      title: "Service Agent",
      desc: "Provides 24/7 automated support, resolving inquiries and escalating complex cases to human agents.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-400" />,
      title: "Sales Development Representative (SDR) Agent",
      desc: "Engages with leads, manages and books meetings to keep your sales pipeline moving efficiently.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-blue-400" />,
      title: "Sales Coach",
      desc: "Offers personalized coaching to help sales teams refine pitches and close deals effectively.",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-blue-400" />,
      title: "Personal Shopper Agent",
      desc: "Acts as a virtual concierge, delivering personalized product recommendations and guiding customers through purchases.",
    },
    {
      icon: <Megaphone className="w-10 h-10 text-blue-400" />,
      title: "Campaign Agent",
      desc: "Automates end-to-end marketing campaigns, optimizing them with AI to ensure personalization and maximize performance.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-blue-400" />,
      title: "Data Analyst Agent",
      desc: "Transforms raw data into actionable insights, providing dashboards and forecasts to support smarter decision-making.",
    },
  ];

  const resources = [
    {
      id: 1,
      title: "Salesforce’s Next-Gen Agentforce Platform",
      img: "/image/agentforceimg.png",
      desc: "Salesforce’s new Agentforce claims an extraordinary capability: resolving over 90% of customer inquiries across industries such as healthcare, finance, travel, and entertainment. Discover how Salesforce’s Next-Gen Agentforce is revolutionizing AI-driven customer support.",
      more: "At the core of the new Agentforce Platform is the Einstein Service Agent, blending AI automation with human support to resolve inquiries faster. It spans sales, service, marketing, and commerce. Key features include: Seamless Digital + Human Collaboration, Omni-channel Flexibility, Real-time Analytics, and Cross-Platform Integration.",
    },
    {
      id: 2,
      title: "Agentforce – The Third Wave of AI Revolution",
      img: "/image/agentforceimg2.jpg",
      // desc: Agentforce represents the third wave of the AI revolution, moving beyond automation to intelligent decision-making and personalized customer engagement.",
      more: "With Agentforce, businesses can harness AI that not only automates tasks but also understands context, learns continuously, and adapts to customer needs in real time. This wave of AI delivers smarter recommendations, predictive insights, and seamless experiences across sales, service, and marketing—helping organizations innovate faster and stay competitive.\n\nKey Highlights:\n- Context-aware AI that adapts to every interaction\n- Predictive insights to drive proactive decision-making\n- Smarter automation that goes beyond repetitive tasks\n- Enhanced personalization across customer journeys\n- Seamless integration with Salesforce ecosystem",
    },
    {
      id: 3,
      title: "Salesforce Agentforce: Predictive, AI-Driven Support",
      img: "/image/agentforceimg3.png",
      // desc: "Discover how Salesforce Agentforce empowers organizations with predictive, AI-driven support to resolve customer issues faster and deliver proactive solutions.",
      more: "Agentforce combines predictive intelligence with real-time analytics to transform support operations. By analyzing historical interactions, customer behavior, and contextual data, it anticipates issues before they arise and guides agents with actionable recommendations. This ensures higher resolution rates, faster response times, and more personalized customer experiences.\n\nKey Highlights:\n- Predictive case resolution with AI-driven recommendations\n- Real-time insights for faster decision-making\n- Proactive alerts to identify and solve issues early\n- Context-aware support across multiple channels\n- Enhanced customer satisfaction through personalized interactions",
    },
  ];

  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Navbar />
      {/* ========================== Section 1 ========================== */}
      <section className="bg-[#0D1117] text-white px-6 md:px-20 py-16  grid md:grid-cols-2 gap-10 items-center relative">
        {/* Left Content */}
        <div className="space-y-6 ps-20 " data-aos="fade-right">
          <h2 className="text-3xl md:text-5xl font-bold">
            Salesforce <span className="text-sky-500">Agentforce</span>
            <p className="text-3xl">
              Revolutionizing Customer Engagement with{" "}
              <span className="text-sky-500">AI Agents</span>
            </p>
          </h2>
          <p className="text-gray-300 text-lg max-w-xl">
            Empower your business by seamlessly leveraging autonomous AI agents
            across sales, service, and marketing, ensuring personalized and
            efficient customer interactions. From automating workflows to
            providing proactive support, Agentforce is the next step in
            enhancing your Salesforce ecosystem.
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
                  className="bg-white rounded-2xl shadow-xl max-w-3xl w-full mx-4 p-8 relative overflow-hidden"
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
                        Discover Agentforce{" "}
                        <span className="text-sky-500">3.0</span>
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Agentforce 3.0 is Salesforce’s latest innovation in{" "}
                        <span className="font-semibold">AI-powered agents</span>
                        . Designed to automate workflows, enhance customer
                        experiences, and empower teams, Agentforce 3.0 brings a
                        new era of{" "}
                        <span className="text-purple-600 font-semibold">
                          intelligent business automation
                        </span>
                        .
                      </p>
                      <ul className="mt-4 list-disc list-inside text-gray-600 space-y-1">
                        <li>
                          Autonomous AI Agents for sales, service & marketing
                        </li>
                        <li>Seamless integration with Salesforce ecosystem</li>
                        <li>
                          Proactive customer engagement with real-time insights
                        </li>
                      </ul>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center">
                      <img
                        src="/image/agentforcemodal.jpg"
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
                className="w-full px-4 py-3 rounded-md text-black h-10"
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

      {/* ========================== Section 2 - Agentforce Features ========================== */}
      <motion.section
        className="bg-[#0b1221] text-white py-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Top Banner Image */}
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto mb-12">
          <img
            src="/image/agentforceimg4.jpeg"
            alt="What is Agentforce"
            className="rounded-lg shadow-lg "
          />
        </motion.div>

        {/* Title */}
        <motion.div variants={fadeInUp} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tailored AI Agents Aligned with <br /> Your Business Needs
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Harness AI agents designed to fit seamlessly into your workflows and
            operations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-[#111a2e] border border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-blue-400 transition duration-300"
            >
              <div className="mb-4">{agent.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{agent.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {agent.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ========================== Section 3 - Why Salesforce Agentforce ========================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="bg-[#0D1117] text-white px-6 md:px-20 py-20 text-center"
      >
        {/* Title */}
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Why Salesforce Agentforce?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Because your business deserves smarter, AI-powered automation.
        </motion.p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { value: "24/7", label: "Customer Support & Engagement" },
            { value: "30%", label: "Acceleration in the Sales Cycle" },
            { value: "40%", label: "Increase in Case Deflection" },
            { value: "45%", label: "Increase in Overall ROI" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-blue-600 hover:bg-blue-700 transition p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="mt-2 text-sm text-gray-100">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Image  */}

        <motion.div
          variants={fadeInUp}
          className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src="/image/agentforceimg5.jpeg"
            alt="Salesforce Updated Platform"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </motion.section>

      {/* ========================== Section 4 - Univmaa Effect ========================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="bg-[#0D1117] text-white px-6 md:px-20 py-20 text-center"
      >
        {/* Title */}
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Explore the <span className="text-sky-400">“UNIVMAA Effect”</span>
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {[
            {
              title: "Consultation",
              desc: "Assessing your business needs and create a tailored plan for deploying AI agents aligned with your objectives.",
              icon: "👨‍💼",
              bg: "bg-gradient-to-b from-purple-600 to-black text-white",
            },
            {
              title: "Implementation",
              desc: "Configuring Salesforce Agentforce and seamlessly integrating AI agents into workflows to meet customer engagement goals.",
              icon: "⚙️",
              bg: "bg-gradient-to-b from-purple-600 to-black text-white",
            },
            {
              title: "Customization",
              desc: "Designing specialized AI agents with custom features and integrations with a no/low-code approach, enabling fast and efficient deployment.",
              icon: "🛠️",
              bg: "bg-gradient-to-b from-purple-600 to-black text-white",
            },
            {
              title: "Training and Support",
              desc: "Providing your team with the necessary training and resources to effectively manage, optimize, and scale AI agents for ongoing success.",
              icon: "📘",
              bg: "bg-gradient-to-b from-purple-600 to-black text-white",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className={`${item.bg} p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300`}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm opacity-90">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ========================== Section 5 - Univmaa Difference ========================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="bg-[#0D1117] text-white px-6 md:px-20 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Image */}
        <motion.div variants={fadeInUp} className="flex justify-center">
          <img
            src="/image/marketingimg2.png"
            alt="Univmaa Salesforce Agentforce"
            className="rounded-xl shadow-lg max-h-[400px] object-contain"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            What sets <span className="text-sky-400">UNIVMAA</span> apart as the
            go-to partner for Salesforce Agentforce?
          </h2>

          {/* Accordion */}
          <div className="space-y-4">
            {[
              {
                title: "Developing Tailored AI Use Cases",
                content:
                  "With Univmaa, your AI agents go beyond standard tasks. We develop custom AI use cases that enable Agentforce to automate complex processes and manage omnichannel interactions.",
              },
              {
                title: "Integrating the heartbeat of Agentforce - Data Cloud",
                content:
                  "We seamlessly integrate Agentforce with Salesforce Data Cloud, ensuring AI agents work with real-time customer data for maximum personalization.",
              },
              {
                title: "Compliance & Data Governance",
                content:
                  "Our implementations follow industry-leading compliance and data governance practices, keeping your operations secure and reliable.",
              },
            ].map((item, idx) => {
              const [open, setOpen] = React.useState(idx === 0); // first open by default
              return (
                <div
                  key={idx}
                  className="border border-gray-700 rounded-lg overflow-hidden"
                >
                  {/* Header */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-full px-6 py-4 bg-[#111827] flex justify-between items-center text-left font-semibold text-sky-400"
                  >
                    {item.title}
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2 text-gray-400 text-xl"
                    >
                      +
                    </motion.span>
                  </button>

                  {/* Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: open ? "auto" : 0,
                      opacity: open ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-gray-300 bg-[#1F2937]">
                      {item.content}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.section>

      {/* ========================== Section 6 - Agentforce Capabilities ========================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="bg-black text-white px-6 md:px-20 py-20"
      >
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            Agentforce can transform any team and workflow with{" "}
            <span className="text-sky-300">AI agents</span>.
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 "
        >
          {[
            {
              img: "/image/agentforceimg7.jpeg",
              title: "The most complete enterprise agentic platform.",
              desc: "Agentforce is a complete, extensible, and open platform, letting you build and deploy digital labour for your customers and employees leveraging the existing workflows, data, and integrations that power your business today. Agentforce can take action across every channel and be integrated into any system, making it easy to add agentic automation across your entire business.",
            },
            {
              img: "/image/agentforceimg6.jpeg",
              title: "Tools to manage the entire agent lifecycle.",
              desc: "Build, test, and supervise Agentforce with low-code and pro-code tools to deploy AI agents with confidence. AI powered assistance helps you configure Agentforce from natural language, and helps batch test at scale. Powerful supervision tools help you understand how Agentforce is performing and gives suggestions on how to refine the configuration.",
            },
            {
              img: "/image/agentforceimg8.jpeg",
              title: "Relevant, accurate results for every business.",
              desc: "The Atlas Reasoning Engine is how Agentforce understands, decides, and acts autonomously to provide trusted, accurate answers for every request. It starts by understanding the user intent and scope of the problem, deciding what data is needed and what actions are required, and then autonomously executes those actions to complete the task.",
            },
            {
              img: "/image/agentforceimg9.jpeg",
              title: "Trust and guardrails, out-of-the-box.",
              desc: "Agentforce contains a powerful set of low code guardrails and security tools designed to keep data secure, prevent abuse, and reduce hallucinated and biased responses. These guardrails are on by default and are easily configurable by admins and business users to ensure Agentforce performs the way they should and not deviate from their instructions.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 rounded-2xl shadow-lg overflow-hidden p-6  w-full"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-40 mx-auto mb-6 object-contain"
              />
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ========================== Section 7 - Featured Resources ========================== */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            Featured Resources
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-indigo-900 to-purple-900 rounded-xl shadow-lg overflow-hidden flex flex-col"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setCurrentIndex(i);
                      setShowMore(false);
                      setSelected(resources[i]);
                    }}
                    className="mt-auto text-indigo-300 hover:text-white font-medium transition"
                  >
                    Explore →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-[9999] bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>

                <h2 className="text-2xl font-bold mb-4 text-black">
                  {selected.title}
                </h2>
                <p className="text-gray-600 mb-4">{selected.desc}</p>
                {showMore && (
                  <p className="text-gray-700 whitespace-pre-line">
                    {selected.more}
                  </p>
                )}

                {/* More / Back */}
                {!showMore ? (
                  <button
                    onClick={() => setShowMore(true)}
                    className="text-sky-500 font-semibold mt-4"
                  >
                    More →
                  </button>
                ) : (
                  <button
                    onClick={() => setShowMore(false)}
                    className="text-sky-500 font-semibold mt-4 flex items-center gap-1"
                  >
                    ← Back
                  </button>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ========================== Section 8 - FAQs ========================== */}
      <section
        id="faqs"
        className="relative z-50 py-20 px-6 bg-black text-white"
      >
        <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "What is Agentforce, and how does it benefit my business?",
              a: "Agentforce is an AI-powered solution that integrates seamlessly with Salesforce to automate workflows across sales, service, and marketing, ensuring personalized customer engagement and increased efficiency.",
            },
            {
              q: "What types of AI agents are available with Agentforce?",
              a: "Agentforce provides a range of specialized AI agents designed to streamline business processes. These include a Service Agent for 24/7 support, an SDR Agent to engage leads and schedule meetings, a Sales Coach that delivers personalized coaching, a Personal Shopper Agent for product recommendations, and a Campaign Agent that automates and optimizes marketing campaigns.",
            },
            {
              q: "How does UNIVMAA ensure seamless integration of Agentforce?",
              a: "Univmaa provides consultation, implementation, customization, and training services to align AI agents with your workflows. We focus on delivering tailored solutions, integrated with Salesforce Data Cloud for seamless, data-driven interactions across all channels.",
            },
            {
              q: "What measurable results can businesses expect from implementing Agentforce?",
              a: "Businesses implementing Agentforce have achieved 30% faster sales cycles  40% increase in case deflection 45% boost in overall ROI",
            },
            {
              q: "How does Univmaa ensure data security and compliance during deployment?",
              a: "At Univmaa, we prioritize data governance and compliance. Agentforce implementations are aligned with GDPR, FEDRAMP, and the India Privacy Act, ensuring that your operations remain secure and compliant with global standards.",
            },
          ].map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </section>

      {/* ========================== Section 9 - CTA ========================== */}
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
