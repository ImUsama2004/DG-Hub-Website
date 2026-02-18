import React from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

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

function OpenPosition() {
    const navigate = useNavigate()
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
    <div id="open-positions">
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
            className="border-t-4 border-green-500 absolute -top-4 left-0"
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
  )
}

export default OpenPosition