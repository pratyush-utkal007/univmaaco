import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

// ⭐ Star Rating (with clearError prop)
function StarRating({ name, max = 5, onChange, value, clearError = () => {} }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(max)].map((_, i) => (
        <span
          key={i}
          onClick={() => {
            onChange(i + 1);
            clearError();
          }}
          className={`cursor-pointer text-3xl transition ${
            i < value ? "text-yellow-400" : "text-white hover:text-yellow-300"
          }`}
        >
          ★
        </span>
      ))}
      <input type="hidden" name={name} value={value} />
    </div>
  );
}

// 📌 Steps
const steps = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Experience" },
  { id: 3, title: "Category Ratings" },
  { id: 4, title: "Suggestions" },
  { id: 5, title: "Recommendation" },
  { id: 6, title: "Fun Elements" },
  { id: 7, title: "Agreement" },
];

// 🎯 Modern headings that rotate
const headings = [
  "✨ Share Your Voice",
  "🚀 Your Experience Matters",
  "💜 We Value Your Feedback",
  "🌟 Help Us Improve",
  "💡 Shape What’s Next",
];

export default function FeedbackWizard() {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);

  // Form state
  const [formValues, setFormValues] = useState({
    name: "",
    contact: "",
    company: "",
    liked_feature: "",
    improvement: "",
    ease_of_use: 5,
    nps: 5,
    work_again: "Yes",
  });

  const [ratings, setRatings] = useState({
    overall_experience: 0,
    quality: 0,
    ui: 0,
  });

  const [emojiValue, setEmojiValue] = useState(3);
  const emojis = ["😡", "😞", "😐", "😊", "😍"];
  const tags = ["Innovative", "Reliable", "Fast", "Friendly", "Professional"];
  const [selectedTags, setSelectedTags] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [validationError, setValidationError] = useState("");

  // ⏱ Rotate heading
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % headings.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  // 📝 Handle input (clears validation error when user types)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError("");
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    if (validationError) setValidationError("");
  };

  // 🚦 Validation
  const validateStep = () => {
    if (step === 1) {
      if (!formValues.name.trim()) return " ⚠ Please enter your name.";
      if (!formValues.contact.trim())
        return " ⚠ Please enter your email/phone.";
    }
    if (step === 2 && ratings.overall_experience === 0)
      return "⚠ Please rate your experience.";
    if (step === 3) {
      if (ratings.quality === 0) return " ⚠ Please rate quality.";
      if (ratings.ui === 0) return " ⚠ Please rate UI.";
    }
    if (step === 4) {
      if (!formValues.liked_feature.trim()) return " ⚠ Enter liked feature.";
      if (!formValues.improvement.trim()) return " ⚠ Suggest an improvement.";
    }
    if (step === 5 && (formValues.nps === "" || formValues.nps === null))
      return "⚠ Please select NPS.";
    if (step === 6 && selectedTags.length === 0)
      return " ⚠ Pick at least one tag.";
    if (step === 7 && !isChecked) return " ⚠ You must agree before submitting.";
    return "";
  };

  // ⏩ Next Step
  const goNext = () => {
    const validation = validateStep();
    if (validation) setValidationError(validation);
    else {
      setValidationError("");
      setStep(step + 1);
    }
  };

  // ✅ Submit (Web3Forms Integration)
  const onSubmit = async (e) => {
    e.preventDefault();
    const validation = validateStep();
    if (validation) return setValidationError(validation);
    setValidationError("");

    try {
      const formData = new FormData(e.target);
      formData.append("access_key", "69a3d0f0-6e0b-46d1-8ade-aa88506555ef");

      //   // Append controlled values that aren't directly in the form
      //   formData.set("overall_experience", ratings.overall_experience);
      //   formData.set("quality", ratings.quality);
      //   formData.set("ui", ratings.ui);
      //   formData.set("ease_of_use", formValues.ease_of_use);
      //   formData.set("emoji_mood", emojis[emojiValue - 1]);
      //   formData.set("tags", selectedTags.join(", "));
      //   formData.set("agreement", isChecked ? "Yes" : "No");

      // ✅ Build formatted message body
      const message = `
New Feedback Received:

👤 Name: ${formValues.name || "Anonymous"}
📧 Contact: ${formValues.contact || "N/A"}
🏢 Company: ${formValues.company || "N/A"}

⭐ Overall Experience: ${ratings.overall_experience}/5
📊 Quality: ${ratings.quality}/5
🖥 UI: ${ratings.ui}/5
🎯 Ease of Use: ${formValues.ease_of_use}/10

💡 Liked Feature: ${formValues.liked_feature || "N/A"}
🔧 Improvement: ${formValues.improvement || "N/A"}

📣 NPS: ${formValues.nps}/10
🔁 Work Again: ${formValues.work_again}

🎉 Mood: ${emojis[emojiValue - 1]}
🏷 Tags: ${selectedTags.join(", ") || "None"}
✅ Agreement: ${isChecked ? "Agreed" : "Not Agreed"}
`;
      formData.append("message", message);
      formData.append("subject", "New Feedback Submission");
      formData.append("from_name", formValues.name || "Anonymous");
      formData.append(
        "from_email",
        formValues.contact.includes("@")
          ? formValues.contact
          : "no-reply@example.com"
      );

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((r) => r.json());

      if (res.success) {
        setSuccess(true);
        setTimeout(() => {
          navigate("/");
        }, 2000); // Redirect after 2s
      } else {
        setError("⚠ Something went wrong. Try again later.");
      }
    } catch (err) {
      setError("⚠ Network error. Please try again.");
    }
  };

  // 🎭 Animation variants
  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-900 p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full max-w-2xl bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl p-10 text-white"
        >
          {/* 🔥 Dynamic Heading */}
          <div className="h-12 flex items-center justify-center mb-6">
            <AnimatePresence mode="wait">
              <motion.h2
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-extrabold text-center"
              >
                {headings[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/30 rounded-full h-2 mb-6">
            <motion.div
              className="bg-yellow-300 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(step / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Steps */}
          <form onSubmit={onSubmit} className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="bg-white/10 p-6 rounded-xl shadow-xl"
              >
                {/* Step Content */}
                {step === 1 && (
                  <>
                    <h3 className="text-2xl mb-4">👤 Personal Info</h3>
                    <input
                      type="text"
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full p-3 mb-3 rounded-lg text-black"
                    />
                    <input
                      type="text"
                      name="contact"
                      value={formValues.contact}
                      onChange={handleChange}
                      placeholder="Email / Phone"
                      className="w-full p-3 mb-3 rounded-lg text-black"
                    />
                    <input
                      type="text"
                      name="company"
                      value={formValues.company}
                      onChange={handleChange}
                      placeholder="Company"
                      className="w-full p-3 mb-3 rounded-lg text-black"
                    />
                  </>
                )}
                {step === 2 && (
                  <>
                    <h3 className="text-2xl mb-4">⭐ Experience</h3>
                    <p>Overall Experience</p>
                    <StarRating
                      name="overall_experience"
                      value={ratings.overall_experience}
                      onChange={(val) =>
                        setRatings((r) => ({ ...r, overall_experience: val }))
                      }
                      clearError={() => setValidationError("")}
                    />
                    <p className="mt-4">🎯 Ease of Use</p>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      name="ease_of_use"
                      value={formValues.ease_of_use}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      className="w-full"
                    />
                  </>
                )}
                {step === 3 && (
                  <>
                    <h3 className="text-2xl mb-4">📊 Category Ratings</h3>
                    <p>Quality</p>
                    <StarRating
                      name="quality"
                      value={ratings.quality}
                      onChange={(val) =>
                        setRatings((r) => ({ ...r, quality: val }))
                      }
                      clearError={() => setValidationError("")}
                    />
                    <p>UI</p>
                    <StarRating
                      name="ui"
                      value={ratings.ui}
                      onChange={(val) => setRatings((r) => ({ ...r, ui: val }))}
                      clearError={() => setValidationError("")}
                    />
                  </>
                )}
                {step === 4 && (
                  <>
                    <h3 className="text-2xl mb-4">💡 Suggestions</h3>
                    <input
                      type="text"
                      name="liked_feature"
                      value={formValues.liked_feature}
                      onChange={handleChange}
                      placeholder="Liked Feature"
                      className="w-full p-3 mb-3 rounded-lg text-black"
                    />
                    <input
                      type="text"
                      name="improvement"
                      value={formValues.improvement}
                      onChange={handleChange}
                      placeholder="Improvement Suggestion"
                      className="w-full p-3 mb-3 rounded-lg text-black"
                    />
                  </>
                )}
                {step === 5 && (
                  <>
                    <h3 className="text-2xl mb-4">📣 Recommendation</h3>
                    <label>NPS (0–10)</label>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      name="nps"
                      value={formValues.nps}
                      onChange={handleChange}
                      className="w-full"
                    />
                    <p className="mt-4">Work again?</p>
                    <select
                      name="work_again"
                      value={formValues.work_again}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg text-black"
                    >
                      <option>Yes</option>
                      <option>No</option>
                      <option>Maybe</option>
                    </select>
                  </>
                )}
                {step === 6 && (
                  <>
                    <h3 className="text-2xl mb-4">🎉 Fun Elements</h3>
                    <p>Mood</p>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={emojiValue}
                      onChange={(e) => {
                        setEmojiValue(Number(e.target.value));
                        if (validationError) setValidationError("");
                      }}
                      className="w-full"
                    />
                    <motion.span
                      key={emojiValue}
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      className="text-5xl mt-3 block text-center"
                    >
                      {emojis[emojiValue - 1]}
                    </motion.span>
                    <p className="mt-4">Tags</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tags.map((tag) => (
                        <button
                          type="button"
                          key={tag}
                          onClick={() => toggleTag(tag)}
                          className={`px-3 py-1 rounded-full border ${
                            selectedTags.includes(tag)
                              ? "bg-white text-purple-700"
                              : "bg-transparent border-white"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {step === 7 && (
                  <>
                    <h3 className="text-2xl mb-4">✅ Agreement</h3>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {
                          setIsChecked(!isChecked);
                          if (validationError) setValidationError("");
                        }}
                        className="w-5 h-5"
                      />
                      I agree to share my feedback
                    </label>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {validationError && (
              <p className="text-red-700 text-center mt-3">{validationError}</p>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-5 py-2 rounded-lg bg-white/30 text-white hover:bg-white/40"
                >
                  ⬅ Back
                </button>
              )}
              {step < steps.length ? (
                <button
                  type="button"
                  onClick={goNext}
                  className="ml-auto px-5 py-2 rounded-lg bg-yellow-400 text-black font-bold hover:bg-yellow-300"
                >
                  Next ➡
                </button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="ml-auto px-6 py-2 rounded-lg bg-green-400 text-black font-bold hover:bg-green-300"
                >
                  🚀 Submit
                </motion.button>
              )}
            </div>
          </form>

          {/* Thank You Overlay */}
          {success && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white rounded-3xl"
            >
              <h3 className="text-3xl font-bold mb-4">🎊 Thank You!</h3>
              <p className="text-lg text-center max-w-md">
                Your voice matters 💌 You’ve helped us make things better 🚀
              </p>
              <p className="mt-4 text-sm opacity-80">
                Stay tuned — exciting updates are on the way ✨
              </p>
            </motion.div>
          )}

          {/* Error Overlay */}
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-red-400 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-4">⚠ Oops!</h3>
              <p>{error}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
