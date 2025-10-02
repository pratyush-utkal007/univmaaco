import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Rocket, Award } from "lucide-react";

import Footer from "./Footer";
import Navbar from "./Navbar";
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const zoomIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};
export default function ApplicationForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    jobCategory: "",
    experience: "",
    country: "",
    state: "",
    city: "",
    location: "",
    zip: "",
    resumeLink: "",
    reference: "",
  });
  // Modal start
  const [form1, setForm1] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    skills: "",
    experience: "",
    resume: null, // file upload
  });

  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const Submit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      // Replace with your own Web3Forms access_key
      data.append("access_key", "69a3d0f0-6e0b-46d1-8ade-aa88506555ef");
      data.append("subject", "New Job Application - Univmaa");
      data.append("from_name", form.name || "");
      data.append("name", form.name || "");
      data.append("email", form.email || "");
      data.append("phone", form.phone || "");
      data.append("address", form.address || "");
      data.append("education", form.education || "");
      data.append("skills", form.skills || "");
      data.append("experience", form.experience || "");
      data.append(
        "message",
        `New job application from ${form.name || "Unknown"}. Skills: ${
          form.skills || "N/A"
        }`
      );

      if (form.resume) {
        // Web3Forms accepts attachments[] for files
        data.append("attachments[]", form.resume);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        // Reset form values to empty
        setForm({
          name: "",
          email: "",
          phone: "",
          address: "",
          education: "",
          skills: "",
          experience: "",
          resume: null,
        });

        // Show modal success message
        setSuccess(true);
        setShowModal(true);

        // Auto-close modal after 3 seconds
        setTimeout(() => {
          setShowModal(false);
          setSuccess(false);
        }, 3000);
      } else {
        alert(result.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Error submitting form. Check console for details.");
    }
  };

  //Modal finish
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const data = new FormData();
    data.append("access_key", "69a3d0f0-6e0b-46d1-8ade-aa88506555ef"); // Replace with your Web3Forms key
    data.append("subject", "New Job Application - Univmaa");
    data.append("from_name", `${form.firstName} ${form.lastName}`);

    Object.keys(form).forEach((key) => {
      data.append(key, form[key]);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus("success");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          education: "",
          jobCategory: "",
          experience: "",
          country: "",
          state: "",
          city: "",
          location: "",
          zip: "",
          resumeLink: "",
          reference: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#0f172a] text-white">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center py-28 px-6 md:px-20"
          style={{
            backgroundImage: "url('/image/applyimg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              🚀 Build Your Career with Univmaa
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg text-gray-200"
            >
              Join a team that values innovation, growth, and people.
              <br /> Apply today or send your CV <br />
              <a
                href="mailto:helpdesk@univmaaa.com"
                className="text-sky-400 hover:underline"
              >
                helpdesk@univmaaa.com
              </a>
            </motion.p>
          </div>
        </div>
        {/* Job Application Form Section */}
        <section className="py-20 px-6 md:px-20 bg-[#0f172a]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl mx-auto bg-[#111827] rounded-xl shadow-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-center mb-6">
              Job Application Form
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {[
                {
                  name: "firstName",
                  placeholder: "First Name",
                  required: true,
                },
                { name: "lastName", placeholder: "Last Name", required: true },
                {
                  name: "email",
                  placeholder: "Email",
                  type: "email",
                  required: true,
                  col: 2,
                },
                { name: "phone", placeholder: "Phone", col: 2 },
                {
                  name: "education",
                  type: "select",
                  options: ["Bachelors", "Masters", "PhD", "Other"],
                },
                {
                  name: "jobCategory",
                  type: "select",
                  options: [
                    "Salesforce Developer",
                    "Salesforce Trainee",
                    "Other",
                  ],
                },
                { name: "experience", placeholder: "Years of Experience" },
                { name: "country", placeholder: "Country" },
                { name: "state", placeholder: "State / Province" },
                { name: "city", placeholder: "City" },
                { name: "location", placeholder: "Preferred Location" },
                { name: "zip", placeholder: "Zip" },
                {
                  name: "resumeLink",
                  placeholder: "Resume Link (Google Drive / OneDrive)",
                  required: true,
                  col: 2,
                },
                { name: "reference", placeholder: "Reference", col: 2 },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className={field.col === 2 ? "col-span-2" : ""}
                >
                  {field.type === "select" ? (
                    <select
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      className="p-3 rounded bg-[#1f2937] text-white w-full"
                    >
                      <option value="">
                        {field.placeholder || field.name}
                      </option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="p-3 rounded bg-[#1f2937] text-white w-full"
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="col-span-2 py-3 rounded bg-gradient-to-r from-sky-500 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition"
              >
                {status === "loading" ? "Submitting..." : "Submit Application"}
              </motion.button>
            </form>

            {status === "success" && (
              <p className="text-green-400 text-center mt-4">
                ✅ Application submitted successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center mt-4">
                ❌ Failed to submit. Please try again.
              </p>
            )}
          </motion.div>
        </section>

        {/* Life at Univmaa Section */}
        <section className="py-20 px-6 md:px-20 bg-[#0f172a]">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Life at Univmaa 🌍
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/image/apply1.jpeg",
                title: "Team Bonding",
                desc: "We believe in work-life balance and celebrate every milestone together.",
              },
              {
                img: "/image/apply2.jpg",
                title: "Learning Culture",
                desc: "Access to mentorship, certifications, and constant skill upgradation.",
              },
              {
                img: "/image/apply3.jpg",
                title: "Workspaces",
                desc: "A modern and collaborative environment where ideas come alive.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-[#1f2937] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-300">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Growth Path Section */}
        {/* <section className="py-20 px-6 md:px-20 bg-[#111827]">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Your Growth Path 🚀
          </motion.h2>
          <div className="relative max-w-4xl mx-auto">
            {[
              {
                role: "Intern",
                desc: "Kickstart your journey with hands-on training.",
              },
              {
                role: "Developer",
                desc: "Take charge of real-world Salesforce projects.",
              },
              {
                role: "Team Lead",
                desc: "Guide teams and shape product solutions.",
              },
              {
                role: "Manager",
                desc: "Drive global impact with leadership.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                className={`mb-10 flex ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="bg-[#1f2937] p-6 rounded-xl shadow-lg w-80">
                  <h3 className="text-xl font-bold mb-2 text-sky-400">
                    {step.role}
                  </h3>
                  <p className="text-gray-300">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section> */}
        <motion.section
          className="px-6 md:px-20 py-20 bg-[#004d73]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2
            variants={fadeInLeft}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          >
            Your Growth Path 🚀
          </motion.h2>

          <div className="space-y-16 max-w-5xl mx-auto">
            {[
              {
                time: "Intern",
                activity: "Kickstart your journey with hands-on training.",
              },
              {
                time: "Developer",
                activity: "Take charge of real-world Salesforce projects.",
              },
              {
                time: "Team Lead",
                activity: "Guide teams and shape product solutions.",
              },
              {
                time: "Manager",
                activity: "Drive global impact with leadership.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="bg-[#111827] p-6 rounded-xl shadow-lg w-full md:w-1/2">
                  <span className="text-sky-400 font-bold">{step.time}</span>
                  <p className="text-gray-300 mt-2">{step.activity}</p>
                </div>

                <div className="hidden md:block w-1 md:w-2 h-16 md:h-20 bg-gradient-to-b from-sky-400 to-purple-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Perks & Benefits Section */}
        <section className="py-20 px-6 md:px-20 bg-[#111827]">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Perks & Benefits 🎁
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: "💻",
                title: "Hybrid Work",
                desc: "Flexible work-from-home options.",
              },
              {
                icon: "📈",
                title: "Career Growth",
                desc: "Structured learning & mentorship.",
              },
              {
                icon: "🏖️",
                title: "Paid Leaves",
                desc: "Enjoy a healthy work-life balance.",
              },
              {
                icon: "🎉",
                title: "Events & Fun",
                desc: "Hackathons, parties & team outings.",
              },
            ].map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-[#1f2937] p-6 rounded-xl text-center shadow-lg hover:scale-105 transition"
              >
                <div className="text-4xl mb-3">{perk.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{perk.title}</h3>
                <p className="text-gray-300">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20 px-6 md:px-20 bg-[#111827]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Why Build Your Career With Us?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Briefcase className="w-10 h-10 text-sky-400" />,
                title: "Challenging Projects",
                desc: "Work on transformative projects with world-leading clients and industries.",
                gradient: "from-sky-400/40 to-blue-600/20",
              },
              {
                icon: <Users className="w-10 h-10 text-purple-400" />,
                title: "Collaborative Culture",
                desc: "Thrive in an inclusive environment built on teamwork and innovation.",
                gradient: "from-purple-400/40 to-pink-600/20",
              },
              {
                icon: <Rocket className="w-10 h-10 text-green-400" />,
                title: "Career Advancement",
                desc: "Accelerate your growth with mentorship, learning, and new opportunities.",
                gradient: "from-green-400/40 to-emerald-600/20",
              },
              {
                icon: <Award className="w-10 h-10 text-yellow-400" />,
                title: "Recognition & Impact",
                desc: "Be valued for your contributions while making a lasting difference.",
                gradient: "from-yellow-400/40 to-orange-600/20",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className={`relative group bg-[#1f2937]/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-2xl hover:border-transparent hover:scale-[1.05] transition duration-500`}
              >
                {/* Gradient Border Glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 blur-xl transition`}
                ></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-black/40 shadow-inner">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {card.title}
                  </h3>
                  <p className="text-gray-300">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-16 px-6 md:px-20 text-center bg-gradient-to-r from-sky-700 to-purple-700">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-4"
          >
            🌟 Ready to Shape the Future with Univmaa?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-gray-200 mb-6"
          >
            Don’t wait. Take the first step in building a rewarding career with
            us.
          </motion.p>

          {/* CTA Section */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#0f172a] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
          >
            Apply Now
          </motion.a>

          {showModal && (
            <div className="fixed inset-0 bg-black/70 flex items-center pt-20 justify-center z-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-lg bg-[#111827] rounded-xl shadow-2xl p-6 relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                >
                  &times;
                </button>

                {/* Form Title */}
                <h2 className="text-2xl font-bold text-center text-white mb-4">
                  Job Application Form
                </h2>

                {/* Application Form */}
                <form onSubmit={Submit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={form1.name}
                    onChange={(e) =>
                      setForm1({ ...form1, name: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#1f2937] border border-gray-700 text-gray-300"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form1.email}
                    onChange={(e) =>
                      setForm1({ ...form1, email: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#1f2937] border border-gray-700 text-gray-300"
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form1.phone}
                    onChange={(e) =>
                      setForm1({ ...form1, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#1f2937] border border-gray-700 text-gray-300"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Address"
                    value={form1.address}
                    onChange={(e) =>
                      setForm1({ ...form1, address: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#1f2937] border border-gray-700 text-gray-300"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Education"
                    value={form1.education}
                    onChange={(e) =>
                      setForm1({ ...form1, education: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#1f2937] border border-gray-700 text-gray-300"
                    required
                  />

                  <textarea
                    placeholder="Skills"
                    value={form1.skills}
                    onChange={(e) =>
                      setForm1({ ...form1, skills: e.target.value })
                    }
                    rows="2"
                    className="w-full px-3 py-2 rounded-lg bg-[#1f2937] border border-gray-700 text-gray-300"
                    required
                  />

                  <textarea
                    placeholder="Experience"
                    value={form1.experience}
                    onChange={(e) =>
                      setForm1({ ...form1, experience: e.target.value })
                    }
                    rows="2"
                    className="w-full px-3 py-2 rounded-lg bg-[#1f2937] border border-gray-700 text-gray-300"
                    required
                  />

                  {/* Resume File Upload */}
                  <input
                    type="url"
                    value={form1.resume}
                    placeholder="Resume Link (Google Drive/Dropbox/OneDrive)"
                    className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-700 text-gray-400"
                    required
                    onChange={(e) =>
                      setForm1({ ...form1, resume: e.target.value })
                    }
                  />

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-blue-700 transition"
                  >
                    Submit Application
                  </motion.button>
                </form>
              </motion.div>
            </div>
          )}

          {showModal && success && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-bold text-green-600">
                  ✅ Data submitted successfully!
                </h2>
              </div>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
}
