import React, { useState } from "react";
import { ClipboardList, Cpu, Send, Headphones } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MuleSoftIntegrationSection() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // 🔑 Web3Forms submit handler
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

  // Toggle accordion and scroll smoothly
  const toggleSection = (id, key) => {
    setOpen((prev) => ({
      ...prev,
      [id]: prev[id] === key ? null : key,
    }));

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200);
  };

  const useCases = [
    {
      id: "section3",
      title: "Enhancing eCommerce Efficiency",
      img: "/image/mulesoft1.jpeg",
      challenge:
        "Disconnected inventory, order management, and fulfillment systems created bottlenecks.",
      solution:
        "MuleSoft’s API-led integration synchronized inventory tracking, order processing, and logistics in real time.",
      benefits:
        "Faster order processing, increased accuracy, and seamless omnichannel shopping experiences.",
      footer: "Streamline your eCommerce operations – Contact us today!",
      footerLink: "/contactus", // 👈 Add this
    },
    {
      id: "section4",
      title: "Empowering Agentforce for Seamless Sales Operations",
      img: "/image/mulesoft2.jpeg",
      challenge:
        "Fragmented customer data leads to inconsistent communication and inefficiencies for sales teams.",
      solution:
        "Salesforce Mulesoft integration, marketing automation, and sales platforms, creating a unified customer view.",
      benefits:
        "Increase in sales efficiency, automated workflows, and improved customer engagement.",
      footer: "Enhance your sales operations – Get started with MuleSoft!",
      footerLink: "/contactus", // 👈 Add this
    },
    {
      id: "section5",
      title: "Elevating Customer Service with Connected Experiences",
      img: "/image/mulesoft3.jpeg",
      challenge:
        "Support teams lacked a 360-degree customer view, leading to slower response times and fragmented service.",
      solution:
        "Salesforce Mulesoft integration, support systems, and self-service portals, to ensure real-time data synchronization.",
      benefits:
        "Faster case resolution, enhanced customer satisfaction, and reduced operational costs.",
      footer: "Deliver next-level customer service – Talk to our experts!",
      footerLink: "/contactus", // 👈 Add this
    },
  ];

  return (
    <>
      <Navbar />
      {/* SECTION 1 */}
      <motion.section
        className="relative bg-[#0A0F1C] text-white py-20 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-400 text-sm uppercase tracking-wider mb-3">
              Seamless connectivity for a future-ready enterprise
            </p>
            <h2 className="text-4xl font-bold leading-snug mb-6">
              Fuelling the API Economy with <br /> Seamless Integration
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Univmaa, a Salesforce Summit Partner and MuleSoft expert, helps
              enterprises simplify integration challenges through API-led
              connectivity. Our solutions enable modularity, autonomy, and
              real-time orchestration, ensuring seamless collaboration across
              systems and the digital ecosystem.
            </p>
            <p className="text-gray-300 mb-8 text-lg">
              With deep industry expertise, best practices, and pre-built
              accelerators, we empower businesses to accelerate digital
              transformation, optimize processes, and future-proof their
              technology landscape.
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
                    className="bg-white rounded-2xl shadow-xl max-w-3xl w-full mx-4 p-9 relative overflow-hidden"
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
                          Discover Mulesoft
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          MuleSoft connects applications, data, and devices with
                          an API-led approach. It enables businesses to
                          accelerate digital transformation by integrating
                          systems faster, automating workflows, and delivering
                          connected customer experiences.
                        </p>
                      </div>

                      {/* Image */}
                      <div className="flex justify-center">
                        <img
                          src="/image/mulesoft4.jpg"
                          alt="Sales Cloud"
                          className="rounded-lg shadow-md w-full h-64 md:h-80 object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Form */}
          <motion.div
            id="form"
            className="bg-gradient-to-b from-purple-600 to-black p-8 rounded-2xl shadow-lg w-3/4 max-w-md mx-auto mt-20"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 2 - End-to-End MuleSoft Services */}
      <motion.section
        className="bg-[#0B1221] text-white py-20 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            End-to-End MuleSoft Services
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <ClipboardList size={28} />,
              title: "Advisory & Strategy",
              text: "Define a strategic roadmap for Mulesoft API integration, driving faster business outcomes and future-proofing operations.",
            },
            {
              icon: <Cpu size={28} />,
              title: "Architecture & Implementation",
              text: "Leverage pre-built accelerators, best practices, and MuleSoft expertise to ensure seamless adoption and integration.",
            },
            {
              icon: <Send size={28} />,
              title: "End-to-End Delivery",
              text: "From design to deployment, our agile, model-driven approach ensures standardized, accelerated API development.",
            },
            {
              icon: <Headphones size={28} />,
              title: "Post Go-Live Support",
              text: "Optimize and manage your API ecosystem with best-in-class monitoring tools, ensuring continuous performance and growth.",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-4 bg-white text-black p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-sky-500 p-3 rounded-full text-white">
                {card.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SECTION 3, 4, 5 - Use Cases */}
      <motion.section
        className="bg-black py-16 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-white text-3xl font-bold text-center mb-12">
          Mulesoft Use Cases
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {useCases.map((item, idx) => (
            <motion.div
              key={item.id}
              id={item.id}
              className="bg-purple-700 rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className={`w-full h-full ${
                  idx % 2 === 0 ? "order-1" : "order-2"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className={`p-8 flex flex-col justify-center ${
                  idx % 2 === 0 ? "order-2" : "order-1"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {item.title}
                </h3>

                {["challenge", "solution", "benefits"].map((key) => (
                  <div key={key} className="border-b border-purple-400 py-2">
                    <button
                      className="flex justify-between items-center w-full text-left text-purple-200 font-medium"
                      onClick={() => toggleSection(item.id, key)}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                      <span>{open[item.id] === key ? "−" : "+"}</span>
                    </button>

                    <AnimatePresence>
                      {open[item.id] === key && (
                        <motion.p
                          className="text-gray-200 mt-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          {item[key]}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Footer as clickable link */}
                <a
                  href={item.footerLink}
                  className="text-yellow-300 text-sm mt-6"
                >
                  {item.footer}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SECTION - MuleSoft Case Studies */}
      <motion.section
        className="bg-[#0A0F1C] py-16 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-white text-3xl font-bold text-center mb-12">
          MuleSoft Case Studies
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* Case Study 1 */}
          <motion.div
            className="bg-gradient-to-r from-purple-800 to-purple-600 rounded-xl shadow-lg grid md:grid-cols-2 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-full">
              <img
                src="/image/mulesoft5.jpeg"
                alt="Customer Onboarding"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Automating Customer Onboarding for a Leading Financial
                Institution
              </h3>
              <p className="text-gray-200 mb-2">
                <strong>Challenge:</strong> Inefficient onboarding due to
                disconnected legacy systems, leading to delays and high
                operational costs.
              </p>
              <p className="text-gray-200 mb-6">
                <strong>Solution:</strong> MuleSoft API integration streamlined
                workflows and connected disparate systems for seamless data
                flow.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { text: "50% faster onboarding" },
                  { text: "Improved data accuracy" },
                  { text: "Enhanced customer experience" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white text-black rounded-lg p-4 text-center shadow-md hover:scale-105 transition-transform"
                  >
                    <p className="font-semibold">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Case Study 2 */}
          <motion.div
            className="bg-gradient-to-r from-purple-800 to-purple-600 rounded-xl shadow-lg grid md:grid-cols-2 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-8 flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Optimizing Order Management for a Global E-Commerce Company
              </h3>
              <p className="text-gray-200 mb-2">
                <strong>Challenge:</strong> Slow order processing and inventory
                mismatches caused by unintegrated sales and supply chain
                platforms.
              </p>
              <p className="text-gray-200 mb-6">
                <strong>Solution:</strong> MuleSoft’s Anypoint Platform unified
                order management, inventory tracking, and fulfillment for
                real-time visibility.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { text: "40% faster order processing" },
                  { text: "Improved inventory accuracy" },
                  { text: "Enhanced operational efficiency" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white text-black rounded-lg p-4 text-center shadow-md hover:scale-105 transition-transform"
                  >
                    <p className="font-semibold">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="w-full order-1 md:order-2">
              <img
                src="/image/mulesoft6.jpeg"
                alt="Order Management"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section - Integration Platforms + Why Univmaa */}
      <section className="bg-[#0a1128] text-white py-20 px-6 space-y-32">
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/image/marketingimg3.png"
            alt="Integration Help"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Need Help with Other Integration Platforms?
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              While MuleSoft is our specialty, our expertise doesn’t stop there.
              Whether you’re using{" "}
              <strong>Dell Boomi, Integrate.io, Celigo</strong>, or any other
              integration platform, our team can support your end-to-end
              integration needs. From strategy and implementation to ongoing
              optimization, we help you build seamless, scalable integrations
              that power business transformation.
            </p>
            <p className="font-semibold">
              Looking for support beyond MuleSoft?{" "}
              <span className="text-blue-400">Contact us</span> to discuss your
              unique integration requirements.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Univmaa?</h2>
            <ul className="space-y-4 text-lg">
              <li>
                ✅ Salesforce Summit & MuleSoft Expert Partner with 15+ Years of
                Experience
              </li>
              <li>
                ✅ 3x Faster Deployment with Pre-Built Connectors & Reusable
                APIs
              </li>
              <li>
                ✅ AI-Driven Automation for Optimized Workflows &
                Decision-Making
              </li>
            </ul>
          </div>

          <img
            src="/image/marketingimg2.png"
            alt="Why Choose Univmaa"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Final CTA */}
      <motion.section
        className="bg-[#0a1128] py-20 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-4xl mx-auto text-center rounded-2xl p-12 shadow-lg"
          style={{
            background: "linear-gradient(135deg, #0d1a66, #0a2f91, #0a74d3)",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get in Touch with Our Experts
          </h2>

          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Ready to transform your digital ecosystem? Fill out the form, and
            our Salesforce MuleSoft experts will connect with you to accelerate
            your business. Join leading enterprises trusting{" "}
            <span className="font-semibold">Univmaa</span> for digital
            innovation. Let’s build the future together!
          </p>

          <button
            onClick={() => {
              navigate("/contactus");
              window.scrollTo(0, 0); // 👈 reset scroll
            }}
            className="inline-block bg-gradient-to-r from-sky-400 to-purple-500 hover:opacity-90 transition text-white font-semibold px-8 py-3 rounded-lg shadow-md"
          >
            Request a Consultation →
          </button>
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
}
