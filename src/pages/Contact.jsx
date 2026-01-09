import React from 'react'
import Header from '../components/contact/Header'
import Form from '../components/contact/From'

function Contact() {
  return (
  <div className='flex flex-col'>
   <Header/>
   <div className='flex justify-around'>
    {/* address section */}
    <section className=' pt-14' >
      <div className='border-b border-gray-700 pb-18 w-lg'>
                   <h1 className='text-blue-600 tracking-wider text-2xl font-bold font-sans'>New York Office</h1>
                  <p className=' tracking-wider pt-2 leading-7 text-black font-semibold '>78 Horseblock Road, Unit 6<br/>
            Yaphank, New York 11980</p>

            <h1 className=' pt-5 tracking-widest text-blue-600 text-2xl font-bold font-sans'>Mailling Address</h1>
                  <p className='tracking-widest py-1 pt-2 text-black font-sans font-semibold'>PO Box 5529</p>
                  <p className='py-1 tracking-widest text-black font-sans font-semibold'>Rocky Point, NY 11778</p>
                  <p className='py-1 text-black tracking-widest font-sans font-semibold'>P: (631) 228-4405</p>
                  <p className='py-1 text-black tracking-widest font-sans font-semibold'>F: (631) 821-2843</p>
      </div>
      {/* emails */}
      <div className='pt-10'>
          <h1 className='text-blue-600 font-sans text-2xl font-bold'>General</h1>
                  <p className=' py-2 text-black font-sans'>info@switchtechnologies.com</p>
          <h1 className='text-blue-600 text-2xl font-bold font-sans'>Sales</h1>
                  <p className='py-2 text-black'>sales@switchtechnologies.com</p>
          <h1 className='text-blue-600 text-2xl font-bold font-sans'>Technical Support</h1>
                  <p className='py-2 text-black'>support@switchtechnologies.com</p>
          <h1 className='text-blue-600 text-2xl font-sans font-bold'>Billing</h1>
                  <p className='py-2 text-black'>billing@switchtechnologies.com</p>
      </div>
    </section>
    <Form/>
   </div>
  </div>
)}

export default Contact