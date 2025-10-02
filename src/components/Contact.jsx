import { useRef, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CgCloseO } from "react-icons/cg";
import { motion } from "framer-motion";

const Contact = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const form = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "69a3d0f0-6e0b-46d1-8ade-aa88506555ef");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

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
      event.target.reset();
      setFeedbackOpen(false);
    } else {
      setError("Something went wrong!");
      setSuccess(false);
    }
  };

  return (
    <div
      className="bg-[#0B0E1A] px-4 sm:px-8 md:px-12 lg:px-20 py-10 md:py-20"
      id="contact-us"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 w-full space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Get answers to your questions
          </h1>
          <p className="text-white text-sm sm:text-base leading-relaxed">
            Transforming businesses with Salesforce-powered digital experiences.
            From CRM optimization and automation to seamless integrations, we
            deliver solutions that drive growth and efficiency. Want to
            collaborate or explore possibilities? I’d love to hear from you!
          </p>

          {/* Contact Cards */}
          {[
            {
              icon: <IoMdMail className="text-indigo-600 text-2xl" />,
              text: "helpdesk@univmaaa.com",
              link: "mailto:helpdesk@univmaaa.com",
            },
            {
              icon: <FiPhoneCall className="text-indigo-600 text-2xl" />,
              text: "+91-9777293266",
              link: "tel:+91-9777293266",
            },
            {
              icon: <IoLocationOutline className="text-indigo-600 text-2xl" />,
              text: (
                <a
                  href="https://www.google.com/maps?q=Shantiniketan+Tech+Park,+10th+Floor,+Tower+B,+Prestige,+Whitefield+Bengaluru+-+560048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white"
                >
                  Shantiniketan Tech Park, 10th Floor, Tower B, Prestige,
                  Whitefield Bengaluru - 560048
                </a>
              ),
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex items-center gap-4 p-3 border rounded-md shadow-sm hover:shadow-lg transition cursor-pointer text-sm sm:text-base"
            >
              {item.icon}
              {item.link ? (
                <a
                  href={item.link}
                  className="text-white hover:text-indigo-600 transition"
                >
                  {item.text}
                </a>
              ) : (
                <p className="text-gray-800">{item.text}</p>
              )}
            </motion.div>
          ))}

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/8917315757"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex items-center gap-4 p-3 border rounded-md shadow-sm hover:shadow-lg transition cursor-pointer text-sm sm:text-base"
          >
            <img
              src="/image/whatsappimg.png"
              alt="WhatsApp"
              className="w-6 h-6"
            />
            <span className="text-white">Chat on WhatsApp</span>
          </motion.a>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 w-full bg-[#0B0E1A] shadow-xl rounded-xl p-6 sm:p-8 border border-gray-200"
        >
          <form ref={form} onSubmit={onSubmit} className="grid gap-4">
            {/* Inputs with responsive layout */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                className="p-3 border rounded-md text-sm sm:text-base"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="p-3 border rounded-md text-sm sm:text-base"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                className="p-3 border rounded-md text-sm sm:text-base"
              />
              <input
                type="email"
                name="workEmail"
                placeholder="Work Email"
                required
                className="p-3 border rounded-md text-sm sm:text-base"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="p-3 border rounded-md text-sm sm:text-base"
              />
              <select
                name="employees"
                className="p-3 border rounded-md text-sm sm:text-base"
              >
                <option value="">Employees</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="200+">200+</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="p-3 border rounded-md text-sm sm:text-base"
              />
              <select
                name="country"
                className="p-3 border rounded-md text-sm sm:text-base"
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <select
              name="productInterest"
              className="p-3 border rounded-md text-sm sm:text-base"
            >
              <option value="">Product Interest</option>
              <option value="Artificial Intelligence">
                Artificial Intelligence
              </option>
              <option value="Sales Force Automation and CRM">
                Sales Force Automation and CRM
              </option>
              <option value="Customer Service Support and Help Desk">
                Customer Service Support and Help Desk
              </option>
              <option value="Marketing Automation">Marketing Automation</option>
              <option value="Commerce Platform">Commerce Platform</option>
              <option value="Data Cloud and CDP">Data Cloud and CDP</option>
              <option value="Business Intelligence and Analytics Software">
                Business Intelligence and Analytics Software
              </option>
              <option value="Integration Software">Integration Software</option>
              <option value="Team Productivity">Team Productivity</option>
              <option value="Customer Application Development">
                Customer Application Development
              </option>
              <option value="Net Zero Software">Net Zero Software</option>
              <option value="Success Plans">Success Plans</option>
              <option value="Professional Services">
                Professional Services
              </option>
              <option value="Other">Other</option>
            </select>

            <textarea
              name="message"
              rows="5"
              placeholder="Questions / Comments"
              className="p-3 border rounded-md text-sm sm:text-base"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold shadow-lg transition text-sm sm:text-base"
            >
              CONTACT ME
            </button>
          </form>

          {/* Success/Error */}
          {success && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-4 text-green-600 flex items-center gap-2 text-sm sm:text-base"
            >
              <FaRegCircleCheck className="text-xl" />
              <p>Successfully Submitted!</p>
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-4 text-red-600 flex items-center gap-2 text-sm sm:text-base"
            >
              <CgCloseO className="text-xl" />
              <p>{error}</p>
            </motion.div>
          )}

          {/* Feedback Button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setFeedbackOpen(true)}
              className="text-blue-600 underline text-sm sm:text-base"
            >
              Send Feedback
            </button>
          </div>
        </motion.div>
      </div>

      {/* Feedback Modal */}
      {feedbackOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex mt-12 items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-lg p-6 sm:p-8 rounded-xl shadow-lg relative">
            <button
              onClick={() => setFeedbackOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">
              How are we doing?
            </h3>

            <form
              onSubmit={onSubmit}
              className="grid gap-4  text-sm sm:text-base"
            >
              <select
                name="feedbackType"
                className="p-3 border rounded-md"
                required
              >
                <option value="">What kind of feedback do you have?</option>
                <option value="General">General</option>
                <option value="Bug">Bug</option>
                <option value="Feature">Feature Request</option>
              </select>

              <textarea
                name="feedbackMessage"
                rows="4"
                placeholder="What's on your mind?"
                className="p-3 border rounded-md"
                required
              ></textarea>

              <div>
                <label className="block mb-2 text-gray-700">
                  How would you rate our site?
                </label>
                <div className="flex gap-2 text-xl sm:text-2xl cursor-pointer">
                  {" "}
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>⭐</span>
                  ))}{" "}
                </div>
              </div>

              <select name="recommendScore" className="p-3 border rounded-md">
                <option value="">Select your score (0-10)</option>
                {[...Array(11).keys()].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>

              <input
                type="email"
                name="optionalEmail"
                placeholder="Email (optional)"
                className="p-3 border rounded-md"
              />

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold shadow-lg transition"
              >
                SEND FEEDBACK
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
