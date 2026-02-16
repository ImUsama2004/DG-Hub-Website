import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../components/careers/Header";
import CardData from "../components/CardData";

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

  // ================= Core Values =================
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

  // ================= Job Data =================
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      experience: "2+ Years",
    },
    {
      id: 2,
      title: "Backend Developer (Node.js)",
      location: "Lahore, Pakistan",
      experience: "3+ Years",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Islamabad, Pakistan",
      experience: "1–2 Years",
    },
    {
      id: 4,
      title: "Full Stack Developer (MERN)",
      location: "Remote",
      experience: "2+ Years",
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

      {/* ================= Open Positions ================= */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInScale}
        className="py-24 px-10 md:px-28"
      >
        <h1 className="text-5xl font-bold mb-12 relative">
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="border-t-4 border-blue-700 absolute -top-4 left-0"
          ></motion.span>
          Open Positions
        </h1>

        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="w-full text-left border-collapse">
            {/* Table Head */}
            <thead className="bg-gray-200 hover:bg-gray-300">
              <tr>
                <th className="p-5 font-semibold text-gray-800">
                  Job Title
                </th>
                <th className="p-5 font-semibold text-gray-800">
                  Location
                </th>
                <th className="p-5 font-semibold text-gray-800">
                  Experience
                </th>
                <th className="p-5 text-center font-semibold text-gray-800">
                  Action
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {jobs.map((job) => (
                <tr
                  key={job.id}
                  className="border-t hover:bg-gray-300 transition"
                >
                  <td className="p-5 font-medium">{job.title}</td>
                  <td className="p-5 text-gray-600">{job.location}</td>
                  <td className="p-5 text-gray-600">{job.experience}</td>

                  <td className="p-5 text-center">
                    <button
                      onClick={() => navigate(`/job/${job.id}`)}
                      className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 hover: cursor-pointer transition"
                    >
                      Apply Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

export default Careers;
