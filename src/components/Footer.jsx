import { IoMdMail } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocation } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import fbLogo from "../assets/facebook.png";
import instaLogo from "../assets/instagram.png";
import twitterLogo from "../assets/twitter.png";
import LinkedInLogo from "../assets/linkedin.png";
import logo from "../assets/univmaalogo.png";

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/aboutus" },
    { label: "Services", path: "/servicecloud" },
    { label: "Career", path: "/career" },
    { label: "Contact us", path: "/contactus" },
  ];

  const infoLinks = [
    { label: "Terms & Conditions", path: "/Terms&Conditions" },
    { label: "Privacy Policy", path: "/policy" },
    { label: "Feedback", path: "/feedback" },
  ];

  const industryLinks = [
    "Banking",
    "Automotive",
    "Capital Market",
    "Education",
    "Healthcare",
    "Information Service",
    "Insurance",
    "Manufacturing",
    "Travel and Hospitality",
    "Life Science",
    "Utilities",
  ];

  const serviceLinks = [
    { label: "Salesforce Sales Cloud", path: "/salescloud" },
    { label: "Salesforce Service Cloud", path: "/servicecloud" },
    { label: "Salesforce Marketing Cloud", path: "/marketingcloud" },
    { label: "Salesforce Experience Cloud", path: "/experiencecloud" },
    { label: "Salesforce Health Cloud", path: "/healthcloud" },
    { label: "Revenue Cloud Advanced", path: "/revenuecloud" },
    { label: "Salesforce CPQ", path: "/cpq" },
  ];

  // Split industries into two groups for 2 columns
  const industriesCol1 = industryLinks.slice(
    0,
    Math.ceil(industryLinks.length / 2)
  );
  const industriesCol2 = industryLinks.slice(
    Math.ceil(industryLinks.length / 2)
  );

  // Navigate + scroll
  const navigateTo = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white px-6 md:px-16 pt-12 pb-6 relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-72 h-72 bg-blue-700/20 rounded-full blur-3xl -top-16 -left-16"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-purple-700/20 rounded-full blur-3xl bottom-0 right-0"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 15 }}
        />
      </div>

      {/* Footer Grid */}
      <div className="relative grid md:grid-cols-6 sm:grid-cols-2 gap-8 z-10 max-h-full mx-auto">
        {/* Logo + About */}
        <motion.div>
          {/* Logo */}
          <img src={logo} alt="Univmaa Logo" className="w-24 h-auto mb-3" />

          {/* Text */}
          <p className="text-slate-300 text-sm leading-relaxed mb-5">
            <span className="font-semibold text-white">Univmaa</span> delivers
            trusted Salesforce consulting and IT services.
          </p>
        </motion.div>
        {/* Industries (Split into 2 Columns) */}
        <motion.div className="pr-11">
          <h3 className="md:text-2xl text-xl border-b ps-4 border-slate-400 inline-block font-semibold text-violet-100 mb-3">
            Industries
          </h3>
          <div className="grid grid-cols-2 gap-16 mt-3 text-sm">
            <ul className="space-y-2">
              {industriesCol1.map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer text-slate-300 hover:translate-x-2 hover:text-orange-400 duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {industriesCol2.map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer text-slate-300 hover:translate-x-2 hover:text-orange-400 duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div>
          <h3 className="md:text-2xl text-xl border-b border-slate-400 inline-block font-semibold text-violet-100 mb-3">
            Services
          </h3>
          <ul className="space-y-2 mt-3 text-sm">
            {serviceLinks.map((item, i) => (
              <li
                key={i}
                onClick={() => navigate(item.path)}
                className="cursor-pointer text-slate-300 hover:translate-x-2 hover:text-orange-400 duration-300"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div>
          <h3 className="md:text-2xl text-xl border-b border-slate-400 inline-block font-semibold text-violet-100 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 mt-3 ps-11 text-sm">
            {quickLinks.map((item, i) => (
              <li
                key={i}
                onClick={() => navigateTo(item.path)}
                className="cursor-pointer text-slate-300 hover:translate-x-2 hover:text-orange-400 duration-300"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Information */}
        <motion.div>
          <h3 className="md:text-2xl text-xl border-b border-slate-400 inline-block font-semibold text-violet-100 mb-3">
            Information
          </h3>
          <ul className="space-y-2 mt-3 text-sm">
            {infoLinks.map((item, i) => (
              <li
                key={i}
                onClick={() => navigateTo(item.path)}
                className="cursor-pointer text-slate-300 hover:translate-x-2 hover:text-orange-400 duration-300"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact & Follow */}
        <motion.div>
          <h3 className="md:text-2xl text-xl border-b border-slate-400 inline-block font-semibold text-violet-100 mb-3">
            Contact & Follow
          </h3>
          <div className="space-y-3 mt-3 text-slate-300 text-sm">
            <p className="flex items-center gap-2 hover:text-orange-400 duration-300">
              <IoMdMail className="text-lg" />
              <a href="mailto:helpdesk@univmaa.com">helpdesk@univmaa.com</a>
            </p>
            <p className="flex items-center gap-2 hover:text-orange-400 duration-300">
              <FiPhoneCall className="text-lg" />
              <a href="tel:+918904466684">+91 8904466684 / +91 9777293266</a>
            </p>
            <p className="flex items-start gap-2">
              <IoLocation className="text-lg mt-1" />
              <span>
                Shantiniketan Tech Park, 10th Floor, Tower B, Prestige,
                Whitefield Bengaluru - 560048
              </span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            {[fbLogo, instaLogo, twitterLogo, LinkedInLogo].map((icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={icon} alt="social icon" className="w-7" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="border-t border-slate-700 text-center text-slate-400 py-5 mt-10 text-sm z-10 relative"
      >
        <p>© 2025 Univmaa. All rights reserved.</p>

        <p className="mt-2">
          Designed & Developed by{" "}
          <span className="text-orange-400 font-medium">Univmaa Tech Team</span>
        </p>

        <div className="flex justify-center gap-6 mt-3">
          <a href="/sitemap" className="hover:text-orange-400 duration-300">
            Sitemap
          </a>
          <a href="/support" className="hover:text-orange-400 duration-300">
            Support
          </a>
          <a href="/faq" className="hover:text-orange-400 duration-300">
            FAQ
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
