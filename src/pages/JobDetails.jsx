import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/jobdetails/Header";
import { div } from "framer-motion/client";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const jobs = {
    1: { title: "Frontend Developer", responsibilities: ["Develop responsive UI using React.js", "Collaborate with backend team", "Optimize application performance", "Write reusable components"], requirements: ["2+ years React experience", "Strong JavaScript knowledge", "Understanding of REST APIs", "Good problem solving skills"] },
    2: { title: "Backend Developer (Node.js)", responsibilities: ["Build and maintain server-side applications", "Integrate with databases and APIs", "Implement security and performance best practices", "Collaborate with frontend developers"], requirements: ["3+ years Node.js experience", "Knowledge of Express.js or similar frameworks", "Experience with MongoDB/PostgreSQL", "Problem solving and debugging skills"] },
    3: { title: "UI/UX Designer", responsibilities: ["Design web and mobile interfaces", "Create wireframes, prototypes, and mockups", "Collaborate with developers for implementation", "Ensure a consistent brand experience"], requirements: ["1–2 years UI/UX experience", "Proficiency in Figma or Adobe XD", "Strong portfolio of design projects", "Understanding of user-centered design principles"] },
    4: { title: "Full Stack Developer (MERN)", responsibilities: ["Develop full-stack applications using MERN", "Work on frontend and backend features", "Maintain and optimize databases", "Participate in code reviews and Agile processes"], requirements: ["2+ years MERN stack experience", "Strong React and Node.js skills", "Experience with MongoDB and REST APIs", "Ability to work in a collaborative environment"] },
  };

  const job = jobs[id];

  const [formData, setFormData] = useState({
    name: "", country: "", city: "", email: "", phone: "", salary: "", address: "", relocate: "", experience: "", cv: null,
  });

  if (!job) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
        <button onClick={() => navigate("/careers")} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Back to Careers
        </button>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      setFormData({ ...formData, cv: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Logic to disable button if any field is empty
  const isFormValid = Object.values(formData).every((value) => value !== "" && value !== null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
    setFormData({ name: "", country: "", city: "", email: "", phone: "", salary: "", address: "", relocate: "", experience: "", cv: null });
  };

  return (
    <div>
    <Header/>
    <div className="max-w-5xl mx-auto px-6 py-16">
      
      {/* Job Title */}
      <h1 className="text-4xl font-bold mb-10 text-green-600 relative cursor-pointer inline-block">
        <span className="relative after:inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
          {job.title}
        </span>
      </h1>
      {/* Responsibilities */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Responsibilities</h2>
        {/* marker:text-green-600 bullets green kaye */}
        <ul className="list-disc pl-6 space-y-2 text-gray-700 marker:text-green-600">
          {job.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Requirements</h2>
        {/* marker:text-green-600 bullets green kaye */}
        <ul className="list-disc pl-6 space-y-2 text-gray-700 marker:text-green-600">
          {job.requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Application Form */}
      <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-xl">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Apply for this Position</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition" required />
            <input name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition" required />
            <input name="city" placeholder="City" value={formData.city} onChange={handleChange} className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition" required />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition" required />
            <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition" required />
            <input name="salary" placeholder="Desired Salary" value={formData.salary} onChange={handleChange} className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition" required />
            <input name="address" placeholder="Complete Address" value={formData.address} onChange={handleChange} className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition" required />
            
            <select name="relocate" value={formData.relocate} onChange={handleChange} className="w-full px-4 py-4 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-green-500 focus:outline-none transition" required>
              <option value="">Willing to Relocate?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <input name="experience" placeholder="Experience (Years)" value={formData.experience} onChange={handleChange} className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition" required />

            <div>
              <label className="block mb-2 font-semibold text-gray-700 ml-1">Upload CV (PDF, DOC)</label>
              <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleChange} className="w-full border border-gray-300 p-3 rounded-xl bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" required />
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-4 rounded-xl font-bold text-lg shadow-md transform transition active:scale-95 ${
                isFormValid 
                ? "bg-green-600 text-white hover:bg-green-700 hover:-translate-y-0.5" 
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {isFormValid ? "Submit Application" : "Please fill all fields"}
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default JobDetails;