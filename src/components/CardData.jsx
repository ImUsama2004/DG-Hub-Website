import React from 'react'

// Destructure title and data from props
function CardData({ title, data }) {
  return (
    <section className='hover:bg-[#eeebeb] h-full p-8 border border-gray-100 rounded-xl transition-all shadow-sm flex flex-col'>
      <h1 className='text-2xl font-bold text-gray-800 border-b pb-4'>
        {title}
      </h1>
      <p className='font-semibold pt-7 text-gray-600 whitespace-pre-line leading-relaxed'>
        {data}
      </p>
    </section>
  )
}

export default CardData