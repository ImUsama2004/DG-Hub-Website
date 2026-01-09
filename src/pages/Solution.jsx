import React from 'react'
import SolutionCards from '../components/solutions/SolutionCards'
import SolutionData from '../components/solutions/SolutionData'

function Solution() {
  return (
    <div>
        {/* header */}
        <header className='bg-[url("src/assets/solution.jpg")] bg-cover h-screen bg-center text-white'>
           <div className=' pt-36 pl-28'>
             <h1 className='text-7xl font-bold'>Solutions</h1>
            <p className='pt-12 font-semibold text-2xl'>Empower Your Business with Our Cutting-Edge Solutions</p>
           </div>
        </header>
        {/*capabilities  */}
        <div className=' py-20 px-28 flex justify-start gap-48'>
            <h1 className='w-md text-5xl font-bold '>
                <span className='border-t-3 w-[10%] text-blue-700  absolute'></span>
                Capabilities</h1>
            <p className='w-md font-semibold  '>At Switch Technologies, we provide advanced technology solutions and consulting services to help businesses optimize their operations and achieve their digital transformation goals.</p>
        </div>
        <SolutionCards/>
        {/* Comprehensive IT Solutions */}
        <div className=' py-20 px-28 flex justify-start gap-48'>
            <h1 className='w-md text-5xl font-bold '>
                <span className='border-t-3 w-[10%] text-blue-700  absolute'></span>
                Comprehensive IT Solutions</h1>
            <p className='w-md font-semibold'>Switch Technologies designs, implements & supports world class solutions to meet any IT challenge. Explore some of the solutions that we offer below:</p>
        </div>

        <SolutionData/>

    </div>
    )
}

export default Solution