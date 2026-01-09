import React from 'react'
import Header from '../components/Services/Header'
import ServicesData from "../components/Services/ServicesData"
import CardData from "../components/CardData"
function Services() {
    const servicesItems = [
        {
            title: `Personalized Attention`,
            data: `Clients can develop a more personal relationship with Switch Technologies support representatives and receive more customized solutions to their technical issues.`
        },{
            title: `Specialized Expertise`,
            data: `Switch Technologies specializes in specific areas of technology and offers more specialized expertise to its clients. We maintain a deeper knowledge and experience in the areas that our clients need support in.`
        },{
            title: `Flexibility`,
            data: `Switch Technologies is very flexible and agile in their approach to solving problems. We are often able to pivot quickly and adapt to the specific needs of our clients, which can be a significant advantage in the fast-paced world of technology.`
        },{
            title: `Cost-Effective`,
            data: `Switch Technologies maintains low overhead costs and therefore is able oftentimes to offer its services at a lower price point than its competitors.`
        },{
            title: `Company Culture`,
            data: `Switch Technologies has a strong and unique company culture, which can be appealing to clients who value working with companies that share their values and mission.`
        }, 
    ]
  return (
    <div>
        <Header/>

           <div className=' py-20 px-28 flex justify-start gap-48'>
            <h1 className='w-md text-5xl font-bold '>
                <span className='border-t-3 w-[10%] text-blue-700  absolute'></span>
                Our Services</h1>
            <p className='w-md font-semibold  '>
                With a focus on     efficiency, innovation, and security, we aim to empower businesses to succeed in today’s rapidly evolving digital landscape.</p>
            </div>

        <ServicesData/>

           <div className=' py-20 px-28 flex justify-start gap-48'>
            <h1 className='w-md text-5xl font-bold '>
                <span className='border-t-3 w-[10%] text-blue-700  absolute'></span>
                What Makes Us Different</h1>
            <p className='w-md font-semibold'>
               A highly skilled tech support company with fewer than 50 employees is able to provide a more personalized, specialized, flexible, cost-effective, and culturally aligned experience to clients compared to larger tech companies, making them an attractive option for those seeking technical support. How is Switch different?</p>
            </div>

        {/* THE GRID: Passing data via props */}
        <div className='grid grid-cols-1 md:grid-cols-2 px-28 gap-10 pb-20'>
             {servicesItems.map((item, index) => (
               <CardData 
                   key={index} 
                  title={item.title} 
                  data={item.data} 
               />
              ))}
        </div>
    </div>
  )
}

export default Services