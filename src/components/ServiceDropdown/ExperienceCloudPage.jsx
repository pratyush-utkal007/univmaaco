import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // for + and - icons
import Footer from "../Footer";
import Navbar from "../Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
// 🚀 Section Variants for Smooth Scroll Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function ExperienceCloudPage() {
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

  const [openIndex, setOpenIndex] = useState(null);

  const expandCards = [
    {
      title: "Secure User Management",
      desc: "Manage users with advanced authentication, role-based access control, and permissions to ensure security.",
    },
    {
      title: "Mobile-First Design",
      desc: "Deliver a seamless, responsive experience across devices, optimized for mobile performance.",
    },
    {
      title: "Integrated Data Platform",
      desc: "Unify customer data across systems to create personalized, data-driven experiences.",
    },
    {
      title: "Custom Reporting",
      desc: "Gain deeper insights with tailored reports and analytics for smarter decision-making.",
    },
  ];

  return (
    <>
      <Navbar />
      {/* ========================== Section 1 ========================== */}
      <section className="bg-[#0D1117] pt-32 text-white px-6 md:px-52 py-16 grid md:grid-cols-2 gap-10 items-center relative">
        {/* Left Content */}
        <div className="space-y-6" data-aos="fade-right">
          {/* Heading & Content */}
          <h2 className="text-3xl md:text-5xl font-bold">
            Salesforce <span className="text-sky-500">Experience Cloud</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-xl">
            Create powerful and personalized digital experiences to share,
            collaborate and connect with customers, partners, or employees.
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
                        Discover Experience Cloud
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Experience Cloud enables you to build portals, forums,
                        and websites that connect your customers, partners, and
                        employees. Deliver personalized experiences, streamline
                        collaboration, and boost engagement with intuitive
                        automation and analytics.
                      </p>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center">
                      <img
                        src="/image/experiencemodal.png"
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
            src="/image/experienceimg.png"
            alt="Data-Driven Selling"
            className="w-80 md:w-[420px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div variants={fadeInUp} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Deliver customer - centric{" "}
            <span className="text-blue-400">Digital Experiences </span> Whenever
            they are
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            Salesforce Experience Cloud empowers businesses to create
            personalized, customer-centric digital experiences across channels.
            With Salesforce Experience Cloud Implementation, unify your customer
            data into a single source of truth that can enable you to deliver
            personalized, seamless digital experiences. With a flexible,
            scalable platform supported by powerful AI and an extensive
            ecosystem of tools, Salesforce Experience Cloud ensures seamless,
            impactful interactions that drive stronger relationships, higher
            engagement, and a greater return on investment.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              navigate("/contactus");
              window.scrollTo(0, 0); // 👈 reset scroll
            }}
            className="inline-block px-6 py-3 bg-gradient-to-r hover:cursor-pointer from-blue-500 to-purple-600 rounded-md font-semibold"
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
          <h2 className="text-4xl md:text-4xl font-bold mb-6">
            Establish A Single Point Ecosystem for{" "}
            <span className="text-blue-400">Your Business</span>
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            Univmaa can help you create a community platform of sellers,
            vendors, customers, and other business stakeholders.
            <li>Create A Powerful Digital Presence</li>
            <li>Assign Individual Priority Based Tasks</li>
            <li>Pick a Wide Range of Templates</li>
            <li>Launch Your Brand Faster Than Ever</li>
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/image/experienceimg2.png"
            alt="Data & AI"
            className="w-96 md:w-[500px]"
          />
        </motion.div>
      </motion.section>

      {/* ========================== Section 3.5 (Accordion Features) ========================== */}
      <motion.section
        className="bg-black text-white px-6 md:px-20 py-16 grid md:grid-cols-2 gap-12 items-center"
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
            src="/image/experienceimg3.png"
            alt="Experience Cloud Illustration"
            className="w-full max-w-md"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Transform Your Business into <br />{" "}
            <span className="text-sky-400">An Experience</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Leading brands understand the power of investing in brand equity and
            prioritize Salesforce Experience Cloud implementation to create
            exceptional experiences for their customers that go beyond just a
            buy and sell transaction.
          </p>

          {/* Accordion */}
          <div className="space-y-4">
            {expandCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="border border-gray-700 rounded-lg overflow-hidden"
              >
                {/* Card Header */}
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <h3 className="font-medium">{card.title}</h3>
                  {openIndex === i ? (
                    <Minus className="w-5 h-5 text-sky-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-sky-400" />
                  )}
                </button>

                {/* Expandable Content */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openIndex === i
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-6 overflow-hidden"
                >
                  <p className="text-gray-400 pb-4">{card.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              navigate("/contactus");
              window.scrollTo(0, 0); // 👈 reset scroll
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-gradient-to-r hover:cursor-pointer from-sky-500 to-purple-600 rounded-md font-semibold shadow hover:opacity-90 transition"
          >
            Let&apos;s Connect →
          </motion.a>
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
          Salesforce Experience Cloud Services by{" "}
          <span className="text-blue-400">Univmaa</span>
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 mb-12"
          variants={fadeInUp}
        ></motion.p>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Customer Service Solutions:",
              desc: "Implement self-service portals, knowledge bases, forums, and live chat to resolve issues faster and efficiently involve support agents only when needed.",
            },
            {
              title: "Account Management:",
              desc: "Configure business account portals for direct access to account information, with integrations for seamless profile updates and quick request submissions.",
              //   highlight: true,
            },
            {
              title: "Partner Platforms:",
              desc: "Build branded communities for partner collaboration, automating workflows, and tracking leads through integrated solutions.",
            },
            {
              title: "Innovative Communities:",
              desc: "Create market-leading platforms for peer collaboration, idea exchange, and eCommerce integration disrupting your industry.",
            },
            {
              title: "Employee Communities:",
              desc: "Facilitate internal processes, training, and remote work with customized employee communities, supporting communication and development.",
            },
            {
              title: "Custom Development & Integration:",
              desc: "Leverage Salesforce APIs and tools to build custom features, integrate with third-party systems, and extend platform capabilities.",
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
