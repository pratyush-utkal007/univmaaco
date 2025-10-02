import { motion } from "framer-motion";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    text: "Univmaa transformed our CRM experience. The team is professional and reliable!",
  },
  {
    id: 2,
    name: "Sophia Smith",
    text: "Amazing service! They customized Salesforce exactly to our needs.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    text: "The training helped our team adopt Salesforce smoothly. Highly recommended!",
  },
  {
    id: 4,
    name: "Emily Davis",
    text: "Data migration was seamless. They handled everything with care.",
  },
];

export default function ReviewsCarousel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-slate-200 shadow-2xl py-16 px-6 md:px-16 lg:px-32">
      <h2 className="text-center text-3xl font-bold text-slate-800 mb-10 drop-shadow-md">
        What Our Customers Say
      </h2>

      <div
        className="overflow-hidden relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex gap-8"
          animate={
            isHovered
              ? { x: "-100%" } // slide left on hover
              : { x: 0 } // reset when not hovered
          }
          transition={{
            repeat: isHovered ? Infinity : 0,
            duration: 15,
            ease: "linear",
          }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] max-w-sm bg-white rounded-xl p-6  px-20
                         shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }} // zoom effect on hover
            >
              <p className="text-slate-600 italic leading-relaxed">
                "{review.text}"
              </p>
              <h4 className="mt-5 font-semibold text-blue-900">
                — {review.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
