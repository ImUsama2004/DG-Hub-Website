import React from 'react'

function SolutionCards() {
  return (
    <div className='flex px-28 justify-between '>
        <section className=' hover:bg-[#eeebeb] w-lg p-6'>
            <h1 className='text-2xl font-bold'>Our Solutions</h1>
            <p className='font-semibold pt-7'>We provide wired and wireless enterprise solutions that guarantee stability, security, and speed to meet the highest expectations of customers. We work with our customers through each stage of a project to provide positive outcomes engineered for success.</p>
        </section>
         <section className=' hover:bg-[#eeebeb] w-lg p-6'>
            <h1 className='text-2xl font-bold'>Staying Ahead of Industry Changes</h1>
            <p className='font-semibold pt-7'>We proactively keep track of market dynamics, regulations and vendor needs to update our technology and help you save considerable time and resources on maintenance.</p>
        </section>
        
        
    </div>
  )
}

export default SolutionCards