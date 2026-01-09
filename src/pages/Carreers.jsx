import React from 'react'
import Header from '../components/careers/Header'
import CardData from '../components/CardData'
function Carreers() {
    const careerData = [
        {
            title:`Trust`,
            data:`Trust is the foundation of our company, and we work hard every day to earn and maintain the trust of our customers.`
        },
        {
            title:`Accountability`,
            data:`We hold ourselves accountable for delivering on our promises, taking ownership of our mistakes and making things right.`
        },
        {
            title:`Integrity`,
            data:`We are committed to operating with honesty, transparency, and ethical principles in all aspects of our business.`
        },
        {
            title:`Customer Focus`,
            data:`Our customers are at the center of everything we do, and we strive to deliver products and services that meet and exceed their expectations.`
        },
    ]

  return (
    <div>
        <Header/>

            <div className=' py-20 px-28 flex justify-start gap-48'>
                <h1 className='w-md text-5xl font-bold '>
                    <span className='border-t-3 w-[10%] text-blue-700  absolute'></span>
                        What We Are Built On</h1>
                <p className='w-md font-semibold  '>
                    Switch Technologies is built on Trust, Integrity, and Dependability. The company is fair and maintains realistic expectations for their employees while cultivating a symbiotic relationship for growth. A shared vision in customer success and team building is at the foundation of every department.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 px-28 gap-10 pb-20'>
                    {careerData.map((item, index) => (
                    <CardData 
                        key={index} 
                        title={item.title} 
                        data={item.data} 
                    />
                    ))}
                </div>
            <div className=' py-20 px-28 flex justify-start gap-48'>
                <h1 className='w-md text-5xl font-bold '>
                    <span className='border-t-3 w-[10%] text-blue-700  absolute'></span>
                        Why Us</h1>
                <p className='w-md font-semibold  '>
                    Join our team and grow your career with a company that values innovation, collaboration, and personal development. An IT technician can make his mark at Switch Technologies by: providing excellent customer service, taking initiative to develop technical knowledge, staying up to date with the latest industry trends and technologies. The tech should also striving to increase efficiency and reliability by automating processes implement best practices be proactive in developing relationships with customers and partners to build trust establish a positive reputation.</p>
            </div>
    </div>
  )
}

export default Carreers