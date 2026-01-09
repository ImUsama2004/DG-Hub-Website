import React from 'react'
import Header from "../components/partners/Header"
function Partners() {
  return (
    <div>
        <Header/>
        <div className=' py-20 px-28 flex justify-start gap-48'>
                <h1 className='w-md text-5xl font-bold '>
                    <span className='border-t-3 w-[10%] text-blue-700  absolute'></span>
                        Our Trusted Partners</h1>
                <p className='w-md font-semibold  '>
                    We are certified to work with industry leading organizations to offer our customers best in class solutions. Our long standing partnerships enable us to provide our customer base outstanding products and support throughout the entire ownership experience with the full backing of the manufacturer. These relationships guarantee continued success and enable innovation as your dynamic environments continue to push forward.</p>
            </div>
    </div>
  )
}

export default Partners