// src/components/CareerPortal.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Users,
  UserPlus,
  Lightbulb,
  Award,
  Briefcase,
  MapPin,
  Clock,
  ChevronRight,
  Globe,
  Sparkles,
  HeartHandshake,
  BookOpen,
  Star,
  Plus,
  Minus,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

// ------------------- Animation variants -------------------
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

export default function CareerPortal() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const [faqIndex, setFaqIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    skills: "",
    passout: "",
    resume: null,
  });

  // ------------------- Data: jobs, perks, values, journey, faqs -------------------
  const jobs = [
    {
      title: " Senior Salesforce Developer",
      location: "Bangalore, India",
      type: "Full-time",
      Description:
        "Join our innovative team to work on dynamic Salesforce projects! We are seeking a skilled Salesforce Developer with a solid background in programming, database management, and web application development. This role is ideal for someone who thrives in a fast-paced environment and is looking to leverage their technical skills to make a substantial impact.",
      Responsibilities:
        "Design, develop, and implement customized Salesforce solutions – Write robust code and database queries to support web application development – Manage Salesforce roles, profiles, sharing rules, workflows, and groups. – Implement system integrations that leverage Salesforce APIs. – Maintain and enhance existing Salesforce applications and ensure optimal performance. – Participate in the planning of application changes, development, and installation of upgrades and new releases. – Collaborate with team members on various development projects and ensure solutions meet business requirements and best practices.",
      Skills:
        "Excellent problem-solving skills and attention to detail. – Strong communication and interpersonal skills. – Ability to work independently and in a team-oriented, collaborative environment. – Good knowledge of Salesforce administration, customization, enhancement, and integration.",
    },
    {
      title: "Salesforce Developer Trainee ",
      location: "Hyderabad, India",
      type: "Full-time",
      Description:
        "Kickstart your career with our Salesforce team! We are looking for enthusiastic Salesforce Developer Trainees who are eager to learn and grow in the dynamic world of Salesforce development and administration. This role is ideal for fresh graduates or entry-level professionals with a passion for technology, programming, and CRM solutions. You will receive hands-on training, mentorship, and the opportunity to work on real-time projects to build a strong foundation in Salesforce.",
      Responsibilities:
        "Assist in the design, development, and customization of Salesforce applications.Write and maintain code, database queries, and workflows under the guidance of senior developers.Participate in training sessions and workshops to enhance Salesforce knowledge and skills.Collaborate with team members on various development projects and learn best practices.Provide support in testing and debugging Salesforce applications.",
      Skills:
        "Basic understanding of programming concepts and languages (e.g., Java, JavaScript, Apex), Familiarity with databases and web application basics is a plus, Strong problem-solving attitude and willingness to learn, Good communication and teamwork skills, Ability to adapt quickly and take initiative in a fast-paced environment, Knowledge of Salesforce basics (Trailhead modules or certifications) will be an added advantage.",
    },
    {
      title: "Salesforce Consultant",
      location: "Remote",
      type: "Contract",
      Description:
        "We are seeking an experienced Salesforce Consultant to join our team on a contract basis. As a Salesforce Consultant, you will collaborate with clients to analyze business needs, design scalable Salesforce solutions, and ensure successful implementation of CRM strategies. This role is ideal for professionals who have strong expertise in Salesforce configuration, customization, and stakeholder management.",
      Responsibilities:
        "Work closely with clients to gather requirements and translate them into effective Salesforce solutions. Configure and customize Salesforce to meet business objectives. Provide expert guidance on Salesforce best practices and industry standards. Collaborate with developers, administrators, and project managers to deliver high-quality solutions. Support testing, training, and deployment of Salesforce projects. Ensure ongoing system improvements and troubleshoot issues as needed.",
      Skills:
        "Proven experience as a Salesforce Consultant or similar role, Strong knowledge of Salesforce Sales Cloud, Service Cloud, or other relevant clouds, Ability to design and implement business workflows, reports, and dashboards, Excellent communication and client-facing skills, Salesforce certifications (Administrator, Consultant, or Developer) preferred, Strong problem-solving and analytical skills, Ability to work independently in a remote environment.",
    },
  ];

  const perks = [
    {
      icon: <Users className="w-8 h-8 text-sky-400" />,
      title: "Collaborative Culture",
      desc: "Work with passionate people who inspire innovation and growth.",
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: "Global Opportunities",
      desc: "Be part of projects that make an impact worldwide.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-pink-400" />,
      title: "Learning & Growth",
      desc: "Access training, mentorship, and career development programs.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-green-400" />,
      title: "Diversity & Inclusion",
      desc: "Celebrate differences and create a workplace where everyone belongs.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-orange-400" />,
      title: "Continuous Learning",
      desc: "Get sponsored certifications, e-learning access, and workshops.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Recognition",
      desc: "Celebrate success through awards and employee appreciation programs.",
    },
  ];

  // Culture hexagon (the hex icons above dark rects)
  const cultureValues = [
    {
      icon: <Users className="w-10 h-10 text-sky-600" />,
      title: "Teamwork",
      description:
        "We embrace collaboration and honor the strengths of each team member",
    },
    {
      icon: <UserPlus className="w-10 h-10 text-sky-600" />,
      title: "Inclusivity",
      description:
        "We support a workplace where diverse perspectives and identities are welcome and respected",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-sky-600" />,
      title: "Innovation",
      description:
        "We aggressively challenge the status quo and foster creativity",
    },
    {
      icon: <Award className="w-10 h-10 text-sky-600" />,
      title: "Excellence",
      description:
        "We strive to deliver the highest value to our clients and colleagues",
    },
  ];

  // Gradient value cards used later (distinct from culture hex shapes)
  const gradientValues = [
    {
      title: "Integrity",
      desc: "We act with honesty and fairness.",
      color: "from-sky-500 to-blue-600",
    },
    {
      title: "Innovation",
      desc: "We push boundaries to create new possibilities.",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Collaboration",
      desc: "We achieve more together.",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Excellence",
      desc: "We deliver quality in everything we do.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const journey = [
    { stage: "Onboarding", desc: "Start strong with training and mentorship." },
    {
      stage: "Skill Building",
      desc: "Grow with certifications and workshops.",
    },
    { stage: "Leadership", desc: "Take ownership and lead teams/projects." },
    { stage: "Impact", desc: "Drive change with global contributions." },
  ];

  const faqs = [
    {
      q: "How do I apply for a job at Univmaa?",
      a: "Click on 'Apply Now' in the below section. You can submit your resume directly through our portal.",
    },
    {
      q: "What does the interview process look like?",
      a: "Our process usually involves an HR screening, a technical/functional interview, and a culture fit round.",
    },
    {
      q: "Does Univmaa support remote work?",
      a: "Yes! Many roles are hybrid or remote depending on the business needs and project requirements.",
    },
    {
      q: "Can I apply for multiple roles?",
      a: "Yes! You can apply to all roles that match your skills and interests.",
    },
    {
      q: "Will I get feedback if rejected?",
      a: "We do our best to share constructive feedback whenever possible to support candidates in improving for future opportunities.",
    },
  ];

  const benefits = [
    {
      icon: <span className="text-black text-2xl">💰</span>,
      title: "Competitive compensation",
      description:
        "including offering attractive base salaries, potential annual incentive bonuses, and referral bonuses for introducing new talent to our firm.",
    },
    {
      icon: <span className="text-black text-2xl">👥</span>,
      title: "Comprehensive suite of employee benefits",
      description:
        "such as medical, dental, vision, paid time off, parental leave, back-up childcare, and more.",
    },
    {
      icon: <span className="text-black text-2xl">⏳</span>,
      title: "Future enhancing investment opportunities",
      description: "including retirement plans and financial planning support.",
    },
    {
      icon: <span className="text-black text-2xl">💻</span>,
      title: "Hybrid working model",
      description: "that blends time spent in-office, remote, and on-the-go.",
    },
  ];

  // ------------------- Handle form submit (Web3Forms) -------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      // <-- replace with your own Web3Forms access_key if needed
      data.append("access_key", "69a3d0f0-6e0b-46d1-8ade-aa88506555ef");
      data.append("subject", "New Job Application - Univmaa");
      data.append("from_name", form.name || "");
      data.append("name", form.name || "");
      data.append("email", form.email || "");
      data.append("phone", form.phone || "");
      data.append("address", form.address || "");
      data.append("education", form.education || "");
      data.append("skills", form.skills || "");
      data.append("year of passout", form.passout || "");
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
      console.log("data=========>>" + data);

      const result = await response.json();
      // console.log("Web3Forms result", result);

      if (result.success) {
        setSuccess(true);
        setShowModal(false);

        // WhatsApp notification to owner (replace phoneNumber as needed)
        const phoneNumber = "918917315757";

        // Build professional message with line breaks
        const msg = `📩 *New Job Application Received*

        -> *Name:* ${form.name}
        -> *Email:* ${form.email}
        -> *Phone:* ${form.phone}
        -> *Address:* ${form.address}
        -> *Education:* ${form.education}
        -> *Skills:* ${form.skills}
        -> *Year Of Passout:* ${form.passout}
        
        Please check your email for full details.`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          msg
        )}`;
        window.open(url, "_blank");

        // reset form
        setForm({
          name: "",
          email: "",
          phone: "",
          address: "",
          education: "",
          skills: "",
          passout: "",
          resume: null,
        });

        // hide success after a few seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert(result.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Error submitting form. Check console for details.");
    }
  };

  // ------------------- JSX -------------------
  return (
    <>
      <Navbar />
      <div className="text-white">
        {/* Success Toast */}
        {success && (
          <div className="fixed top-5 right-5 bg-emerald-600 text-white px-5 py-3 rounded-lg shadow z-50">
            ✅ Your application has been submitted successfully!
          </div>
        )}

        {/* ---------------- HERO (video background) ---------------- */}
        <motion.section
          className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          variants={zoomIn}
        >
          {/* background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="image/career.mp4" type="video/mp4" />
          </video>

          {/* overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* content */}
          <div className="relative z-10 px-6">
            <motion.h1
              variants={fadeInUp}
              custom={0}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Your Career at <span className="text-sky-400">Univmaa</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-gray-300 max-w-3xl mx-auto mb-8"
            >
              At Univmaa, we don’t just offer jobs — we build careers with
              purpose. Joining our team means being part of a culture that
              values innovation, collaboration and continuous learning.
            </motion.p>
            <motion.div variants={fadeInUp} custom={2}>
              <button
                onClick={() => {
                  navigate("/salesforcetour");
                  window.scrollTo(0, 0); // 👈 reset scroll
                }}
                whileHover={{ scale: 1.03 }}
                className="px-8 py-3 bg-gradient-to-r from-sky-500 to-purple-600 rounded-lg font-semibold shadow-lg hover:opacity-95 transition"
              >
                Take a Tour →
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* ---------------- CAREERS BANNER (blue background with left text and right hex image) ---------------- */}
        <section className="bg-[#004d73] py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our people power the future of connected wealth.
              </h2>
              <p className="text-lg text-white mb-8 leading-relaxed max-w-2xl">
                We are committed to helping our clients solve their most
                demanding challenges, and work every day to help them strengthen
                the financial wellbeing of millions of investors. This
                commitment is only possible because we invest in the brightest
                minds in the business. Our future is full of possibility, and we
                invite you to join us.
              </p>
              <a
                href="#open-positions"
                className="inline-flex items-center gap-2 bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-400 transition"
              >
                VIEW OPEN POSITIONS <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Right hexagon image */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 clip-hex-large border-4 border-yellow-500 overflow-hidden">
                  <img
                    src="/image/careerimg1.png"
                    alt="Careers Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Culture & Values (hexagon icons above rectangles) ---------------- */}

        <section className="bg-black py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            {/* Title */}
            <div className="flex items-center justify-center mb-12">
              <div className="h-[1px] w-16 bg-gray-400" />
              <h2 className="mx-6 text-3xl md:text-4xl font-semibold text-white">
                Our Culture and Values
              </h2>
              <div className="h-[1px] w-16 bg-gray-400" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-32">
              {cultureValues.map((val, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  className="flex flex-col items-center"
                >
                  {/* Card wrapper */}
                  <div className="relative w-full">
                    {/* Hexagon */}
                    <div className="clip-hex absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white shadow-md flex items-center justify-center border border-gray-300">
                      {val.icon}
                    </div>

                    {/* Rectangle card */}
                    <div className="bg-[#004d73] text-white p-6 pt-16 min-h-[220px] flex flex-col items-center justify-start">
                      <h3 className="text-xl font-semibold mb-3">
                        {val.title}
                      </h3>
                      <p className="text-sm leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <style jsx>{`
          .clip-hex {
            clip-path: polygon(
              50% 0%,
              93% 25%,
              93% 75%,
              50% 100%,
              7% 75%,
              7% 25%
            );
          }
        `}</style>

        {/* ----------------------------Our Benefits--------------------------- */}

        <section className="bg-[#004d73] py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center mb-6"
            >
              <div className="h-[1px] w-16 bg-gray-400" />
              <h2 className="mx-6 text-3xl md:text-4xl font-semibold text-white ">
                Our Benefits
              </h2>
              <div className="h-[1px] w-16 bg-gray-400" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white md:text-xl max-w-4xl mx-auto mb-14"
            >
              The forward-thinking compensation and benefits programs we offer
              help our people maximize well-being, work-life balance, income,
              and savings for the future. Because we know that in a healthy
              environment, people thrive.
            </motion.p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 text-left">
              {benefits.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-start gap-5"
                >
                  {/* Hexagon icon */}
                  <div className="clip-hex w-16 h-16 bg-[#f2b705] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-lg text-white">
                      {item.title}
                    </h3>
                    <p className="text-white text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hexagon Shape */}
          <style jsx>{`
            .clip-hex {
              clip-path: polygon(
                25% 5%,
                75% 5%,
                100% 50%,
                75% 95%,
                25% 95%,
                0% 50%
              );
            }
          `}</style>
        </section>

        {/* ---------------- Why Work With Us (perks) ---------------- */}
        <motion.section
          className="px-6 md:px-20 py-20 text-center bg-[#0b0f15]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2
            variants={fadeInLeft}
            className="text-3xl md:text-4xl font-bold mb-12 text-white"
          >
            Why Work With Us?
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="bg-[#111827] rounded-xl p-8 shadow-lg hover:scale-105 transition"
              >
                {perk.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-white">
                  {perk.title}
                </h3>
                <p className="text-gray-400">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ---------------- A Day in the Life (timeline) ---------------- */}
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
            A Day in the Life @ Univmaa
          </motion.h2>

          <div className="space-y-16 max-w-5xl mx-auto">
            {[
              { time: "9:00 AM", activity: "Team Standup & Coffee Chat ☕" },
              { time: "11:00 AM", activity: "Client Collaboration 💡" },
              { time: "2:00 PM", activity: "Deep Work & Innovation 🚀" },
              { time: "5:00 PM", activity: "Knowledge Sharing 📘" },
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

        {/* ---------------- Growth Journey ---------------- */}
        <motion.section
          className="px-6 md:px-20 py-20 bg-[#0b0f15]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeInRight}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          >
            Your Growth Journey
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-8">
            {journey.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="bg-[#111827] rounded-xl p-6 shadow-md w-52 text-center hover:scale-105 transition"
              >
                <Star className="w-8 h-8 text-sky-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white">{step.stage}</h3>
                <p className="text-gray-400 text-sm mt-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ---------------- Opportunities (jobs list) ---------------- */}
        <motion.section
          className="px-6 md:px-20 py-20 bg-[#004d73]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2
            variants={zoomIn}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
            id="open-positions"
          >
            Current Opportunities
          </motion.h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="bg-[#111827] rounded-lg shadow-lg overflow-hidden border border-gray-800"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#1f2937] transition"
                >
                  <div>
                    <h3 className="font-semibold text-lg flex items-center gap-2 text-white">
                      <Briefcase className="w-5 h-5 text-sky-400" />
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-400 flex gap-4 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {job.type}
                      </span>
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-6 h-6 text-sky-400 transform transition-transform ${
                      openIndex === i ? "rotate-90" : ""
                    }`}
                  />
                </button>

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
                  <h4 className="text-white font-semibold mb-2">
                    Description:
                  </h4>
                  <p className="text-gray-300 py-4">{job.Description}</p>

                  {job.Responsibilities && (
                    <>
                      <h4 className="text-white font-semibold mb-2">
                        Responsibilities:
                      </h4>
                      <p className="text-gray-300 mb-4">
                        {job.Responsibilities}
                      </p>
                    </>
                  )}

                  {job.Skills && (
                    <>
                      <h4 className="text-white font-semibold mb-2">
                        Skills & Qualifications:
                      </h4>
                      <p className="text-gray-300 mb-4">{job.Skills}</p>
                    </>
                  )}
                  <button
                    onClick={() => {
                      navigate("/apply");
                      window.scrollTo(0, 0); // 👈 reset scroll
                    }}
                    whileHover={{ scale: 1.03 }}
                    className="inline-block mb-6 px-5 py-2 bg-gradient-to-r from-sky-500 to-purple-600 rounded-md font-semibold text-white shadow hover:opacity-90 transition"
                  >
                    Apply Now →
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ---------------- FAQs ---------------- */}
        <motion.section
          className="px-6 md:px-20 py-20 bg-[#0b0f15]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2
            variants={fadeInRight}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          >
            Candidate FAQs
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="bg-[#111827] rounded-lg shadow-md"
              >
                <button
                  onClick={() => setFaqIndex(faqIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 font-medium text-left text-white"
                >
                  {faq.q}
                  {faqIndex === i ? (
                    <Minus className="w-5 h-5 text-sky-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-sky-400" />
                  )}
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    faqIndex === i
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="px-6 overflow-hidden"
                >
                  <p className="text-gray-400 pb-4">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ---------------- CTA ---------------- */}
        <motion.section
          className="px-6 md:px-20 py-20 text-center bg-[#004d73]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2
            variants={zoomIn}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to Shape the Future with Us?
          </motion.h2>
          <motion.p
            variants={zoomIn}
            className="text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Don’t just look for a job. Build a career with impact. Let’s grow
            together at Univmaa.
          </motion.p>
          <motion.button
            onClick={() => setShowModal(true)}
            whileHover={{ scale: 1.03 }}
            className="px-8 py-3 bg-gradient-to-r from-sky-500 to-purple-600 rounded-lg font-semibold shadow-lg hover:opacity-90 transition"
          >
            Apply Now →
          </motion.button>
        </motion.section>

        {/* ---------------- Modal (Apply) ---------------- */}
        {showModal && (
          <div className="fixed inset-0 pt-24 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-[#111827] rounded-2xl p-8  w-full max-w-lg relative shadow-xl">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-bold text-center mb-4 text-white">
                Submit Your Application
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 text-gray-300"
                encType="multipart/form-data"
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                  required
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Education"
                  className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                  required
                  value={form.education}
                  onChange={(e) =>
                    setForm({ ...form, education: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Skills"
                  className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                  required
                  value={form.skills}
                  onChange={(e) => setForm({ ...form, skills: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Years of Passout"
                  className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:ring-2 focus:ring-sky-500 outline-none text-white"
                  required
                  value={form.passout}
                  onChange={(e) =>
                    setForm({ ...form, passout: e.target.value })
                  }
                />
                <input
                  type="url"
                  value={form.resume}
                  placeholder="Resume Link (Google Drive/Dropbox/OneDrive)"
                  className="w-full px-4 py-3 rounded-lg bg-[#1f2937] border border-gray-700 text-gray-400"
                  required
                  onChange={(e) => setForm({ ...form, resume: e.target.value })}
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-sky-500 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition text-white"
                >
                  Submit Application →
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ---------------- Hexagon clip styles ---------------- */}
        <style>{`
        /* small hex (icons) */
        .clip-hex {
          clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
        }
        /* larger hex for hero/careers image */
        .clip-hex-large {
          clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%);
          border-radius: 12px; /* soft rounding for the corners */
        }
      `}</style>
      </div>
      <Footer />
    </>
  );
}
