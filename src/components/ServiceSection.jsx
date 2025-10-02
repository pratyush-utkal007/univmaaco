import Boost from "../assets/Boost.png";
import Insight from "../assets/insight.png";
import SocialCare from "../assets/social-care.png";
import DataMigration from "../assets/data-migration.png";
import { motion } from "framer-motion";

const ServiceSection = () => {
  return (
    <>
      <section
        className="md:py-20 py-10  md:px-16 sm:px-10 px-6 shadow-2xl bg-[#0B0E1A]   text-center"
        id="services"
      >
        <h2 className="md:text-4xl text-2xl my-6 font-bold inline-block text-white text-center mb-10 font-Krub">
          Our Services
        </h2>
        <div className="grid md:grid-cols-4 text-center gap-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.1 }}
            // Use Framer Motion for hover transforms & shadow so there's no conflict
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 20px 40px rgba(2,6,23,0.12)",
            }}
            whileTap={{ scale: 0.99 }}
            className="md:p-6 p-4 rounded-md bg-gray-50 text-black cursor-pointer transform-gpu"
            style={{ boxShadow: "0 6px 18px rgba(2,6,23,0.06)" }} // default subtle shadow
          >
            <img src={Boost} alt="efficient boost" className="w-16 mx-auto" />
            <h1 className="md:text-2xl font-semibold md:my-5 my-3 text-blue-950 inline-block bg-clip-text">
              Salesforce Implementation and Integration
            </h1>
            <p className="font-medium text-sm md:text-base">
              Unlock Salesforce’s full potential with our expert implementation
              and integration services—seamlessly aligning it with your business
              to streamline processes and boost productivity.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.1 }}
            // Use Framer Motion for hover transforms & shadow so there's no conflict
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 20px 40px rgba(2,6,23,0.12)",
            }}
            whileTap={{ scale: 0.99 }}
            className="md:p-6 p-4 rounded-md bg-gray-50 text-black cursor-pointer transform-gpu"
            style={{ boxShadow: "0 6px 18px rgba(2,6,23,0.06)" }}
          >
            <img src={Insight} alt="efficient boost" className="w-16 mx-auto" />
            <h4 className="md:text-2xl text-xl font-semibold md:my-5 my-3 text-blue-950  hover:text-blue-800 inline-block  bg-clip-text">
              Customization and Configuration
            </h4>
            <p className="font-medium text-sm md:text-base">
              We customize Salesforce to fit your unique business
              needs—optimizing workflows, data, and reporting for CRM solutions
              aligned with your goals
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.1 }}
            // Use Framer Motion for hover transforms & shadow so there's no conflict
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 20px 40px rgba(2,6,23,0.12)",
            }}
            whileTap={{ scale: 0.99 }}
            className="md:p-6 p-4 rounded-md bg-gray-50 text-black cursor-pointer transform-gpu"
            style={{ boxShadow: "0 6px 18px rgba(2,6,23,0.06)" }}
          >
            <img
              src={SocialCare}
              alt="efficient boost"
              className="w-16 mx-auto"
            />
            <h4 className="md:text-2xl text-xl  font-semibold md:my-5 my-3 text-blue-950  hover:text-blue-800 inline-block  bg-clip-text">
              Training and Support
            </h4>
            <p className="font-medium text-sm md:text-base">
              Empower your team with tailored Salesforce training and dedicated
              support—ensuring smooth adoption, enhanced skills, and maximum ROI
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.1 }}
            // Use Framer Motion for hover transforms & shadow so there's no conflict
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 20px 40px rgba(2,6,23,0.12)",
            }}
            whileTap={{ scale: 0.99 }}
            className="md:p-6 p-4 rounded-md bg-gray-50 text-black cursor-pointer transform-gpu"
            style={{ boxShadow: "0 6px 18px rgba(2,6,23,0.06)" }}
          >
            <img
              src={DataMigration}
              alt="efficient boost"
              className="w-16 mx-auto"
            />
            <h4 className="md:text-2xl text  font-semibold md:my-5 my-3 text-blue-950  hover:text-blue-800 inline-block bg-clip-text">
              Data Migration and Cleanup
            </h4>
            <p className="font-medium text-sm md:text-base">
              Seamlessly migrate and clean your data with our expert Salesforce
              services—ensuring integrity, consistency, and a database ready for
              growth.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
