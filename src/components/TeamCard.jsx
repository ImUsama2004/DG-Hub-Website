import React from "react";
const TeamCard = ({ name, role, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
      <img
        src={image}
        alt={name}
        className=" mx-auto object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-blue-700">{role}</p>
    </div>
  );
};

export default TeamCard;
