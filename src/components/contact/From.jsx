import React from 'react'

function From() {
  return (
    <div>
        <form action="#" className='flex flex-col pt-12 gap-7 w-lg'>
        <h1 className='text-xl font-bold font-sans '>GET IN TOUCH</h1>
        <select name="" id="" className='border-b font-semibold'> 
            <option value="" reqired= "true" >How can we help your business today?</option>
            <option value="">Service Request</option>
            <option value="">General Injury</option>
        </select>
        <input type="text" placeholder='First Name' className='border-b h-10 placeholder:font-semibold placeholder-black' />
        <input type="text" placeholder='Last Name' className='border-b h-10 placeholder:font-semibold placeholder-black' />
        <input type="Email" placeholder='Email' className='border-b h-10 placeholder:font-semibold placeholder-black' />
        <input type="text" placeholder='Company' className='placeholder:font-semibold placeholder-black border-b h-10'/>
        <input type="text" placeholder='Phone Number' className='placeholder:font-semibold placeholder-black border-b h-10'/>
        <textarea name="" id="" placeholder='Message' className='placeholder:font-semibold placeholder-black h-32'></textarea>
        <input className='bg-black text-white w-36 h-12 text-lg font-bold' type="button" value="Submit" />
        </form>
    </div>
  )
}

export default From