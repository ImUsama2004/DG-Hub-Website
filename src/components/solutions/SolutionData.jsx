import React, { useState } from 'react'
import { service } from './service'
function SolutionData() {
  const [ activeIndex, setActiveIndex] = useState(0)
    return (
    <div className='flex max-w-6xl mx-auto flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden my-10 border border-gray-100'>
        {/* Side Bar */}
        <div className="w-full md:w-1/3 bg-gray-50 border-r border-gray-200">
        {service.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-full text-left px-6 py-4 transition-all duration-200 border-l-4 outline-none ${
              activeIndex === index
                ? "bg-white border-blue-600 text-blue-700 font-bold shadow-sm"
                : "bg-transparent border-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

        {/* Content Data */}
      <div className="w-full md:w-2/3 p-8 md:p-12 min-h-100">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 transition-opacity duration-300">
          {service[activeIndex].title}
        </h2>

        {/* Multi-line Description */}
        <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
          {service[activeIndex].description}
        </p>
      </div>
    </div>
  )
}
export default SolutionData
