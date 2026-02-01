import React from 'react'
import { motion } from "framer-motion"
import CardData from "../components/CardData"
import { unmatchedExpert, forSchool, forBuisness } from '../components/Company/company'
import Header from '../components/Company/Header'
import TeamCard from "../components/TeamCard";

function Company() {
  const teamData = [
    { name: "Muhammad Adeel", role: "Frontend Developer", image: "src/assets/admin1.jpg" },
    { name: "Ali Khan", role: "Backend Developer", image: "src/assets/admin1.jpg" },
    { name: "Sara Ahmed", role: "UI/UX Designer", image: "src/assets/admin1.jpg" },
  ];

  // Animation settings
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="overflow-x-hidden">
      <Header />

      {/* for unmatched */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariant}
        className='py-20 px-28 flex justify-start gap-48'
      >
        <h1 className='w-md text-5xl font-bold relative'>
          <motion.span 
            initial={{ width: 0 }} whileInView={{ width: "10%" }} transition={{ duration: 1 }}
            className='border-t-3 text-blue-700 absolute -top-2'
          ></motion.span>
          Unmatched Experts
        </h1>
        <p className='w-md font-semibold'>
          Our company prides itself on having a team of unmatched experts in their respective fields, with years of experience and a deep understanding of industry trends and best practices.
        </p>
      </motion.div>

      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariant}
        className='grid grid-cols-1 md:grid-cols-2 px-28 gap-10 pb-20'
      >
        {unmatchedExpert.map((item, index) => (
          <motion.div key={index} variants={cardVariant}>
            <CardData title={item.title} data={item.data} />
          </motion.div>
        ))}
      </motion.div>

      {/* leadership */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariant}
        className='py-20 px-28 flex justify-start gap-48'
      >
        <h1 className='w-md text-5xl font-bold relative'>
          <motion.span 
            initial={{ width: 0 }} whileInView={{ width: "10%" }} transition={{ duration: 1 }}
            className='border-t-3 text-blue-700 absolute -top-2'
          ></motion.span>
          Leadership
        </h1>
        <p className='w-md font-semibold'>
          Switch Technologies has three principal Partners that manage contracted technicians and all company projects. They also act as lead project managers and technicians on major integration projects and complex tasks.
        </p>
      </motion.div>

      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariant}
        className="mx-28 py-12"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {teamData.map((member, index) => (
            <motion.div key={index} variants={cardVariant}>
              <TeamCard name={member.name} role={member.role} image={member.image} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* for school */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariant}
        className='py-20 px-28 flex justify-start gap-48'
      >
        <h1 className='w-md text-5xl font-bold relative'>
          <motion.span 
            initial={{ width: 0 }} whileInView={{ width: "10%" }} transition={{ duration: 1 }}
            className='border-t-3 text-blue-700 absolute -top-2'
          ></motion.span>
          For schools
        </h1>
        <p className='w-md font-semibold'>
          There are a few reasons why a school district should consider making the switch to a seamless digital future with Switch Technologies
        </p>
      </motion.div>

      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariant}
        className='grid grid-cols-1 md:grid-cols-2 px-28 gap-10 pb-20'
      >
        {forSchool.map((item, index) => (
          <motion.div key={index} variants={cardVariant}>
            <CardData title={item.title} data={item.data} />
          </motion.div>
        ))}
      </motion.div>

      {/* for businesses */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariant}
        className='py-20 px-28 flex justify-start gap-48'
      >
        <h1 className='w-md text-5xl font-bold relative'>
          <motion.span 
            initial={{ width: 0 }} whileInView={{ width: "10%" }} transition={{ duration: 1 }}
            className='border-t-3 text-blue-700 absolute -top-2'
          ></motion.span>
          For business
        </h1>
        <p className='w-md font-semibold'>
          A properly planned and executed technology solution by Switch Technologies can provide numerous benefits for small businesses, including increased efficiency, improved customer experience, cost savings, increased flexibility, and a competitive advantage.
        </p>
      </motion.div>

      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariant}
        className='grid grid-cols-1 md:grid-cols-2 px-28 gap-10 pb-20'
      >
        {forBuisness.map((item, index) => (
          <motion.div key={index} variants={cardVariant}>
            <CardData title={item.title} data={item.data} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Company