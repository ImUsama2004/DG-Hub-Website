import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../components/careers/Header";
import CardData from "../components/CardData";
import OpenPosition from "../components/careers/OpenPosition";

// ================= Animations =================
const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Careers() {
  const navigate = useNavigate();

  const careerData = [
    {
      title: "Trust",
      data: "Trust is the foundation of our company, and we work hard every day to earn and maintain the trust of our customers.",
    },
    {
      title: "Accountability",
      data: "We hold ourselves accountable for delivering on our promises, taking ownership of our mistakes and making things right.",
    },
    {
      title: "Integrity",
      data: "We are committed to operating with honesty, transparency, and ethical principles in all aspects of our business.",
    },
    {
      title: "Customer Focus",
      data: "Our customers are at the center of everything we do, and we strive to deliver products and services that meet and exceed their expectations.",
    },
  ];

 

  return (
    <div className="overflow-x-hidden">
      <Header />

      {/* ================= Section 1 ================= */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInScale}
        className="py-24 px-10 md:px-28 flex flex-col md:flex-row gap-12 md:gap-48"
      >
        <h1 className="md:w-[40%] text-5xl font-bold relative">
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="border-t-4 border-blue-700 absolute -top-4 left-0"
          ></motion.span>
          What We Are Built On
        </h1>

        <p className="md:w-[60%] font-medium text-gray-700 leading-relaxed text-lg">
          Switch Technologies is built on Trust, Integrity, and Dependability.
          The company maintains realistic expectations while cultivating a
          symbiotic relationship for growth.
        </p>
      </motion.div>

      {/* ================= Core Values ================= */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-28 gap-10 pb-20"
      >
        {careerData.map((item, index) => (
          <motion.div key={index} variants={fadeInScale}>
            <CardData title={item.title} data={item.data} />
          </motion.div>
        ))}
      </motion.div>

      {/* ================= Why Us ================= */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInScale}
        className="py-24 px-10 md:px-28 flex flex-col md:flex-row gap-12 md:gap-48 bg-gray-50"
      >
        <h1 className="md:w-[40%] text-5xl font-bold relative">
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="border-t-4 border-blue-700 absolute -top-4 left-0"
          ></motion.span>
          Why Us
        </h1>

        <p className="md:w-[60%] font-medium text-gray-700 leading-relaxed text-lg">
          Join our team and grow your career with a company that values
          innovation, collaboration, and personal development.
        </p>
      </motion.div>

        <OpenPosition/>

    </div>
  );
}

export default Careers;
