import React from 'react'
function Header() {
  return (
    <div className='bg-[url("src/assets/contact.png")] bg-cover bg-center h-screen'>
        <header className='flex flex-col w-[55%] ml-32 mt-32'>
          <h1 className='text-white text-7xl font-bold mb-10'>
            Contact Us
        </h1>
        <p className='text-white text-xl leading-10'>We know your time is valuable and that is why we appreciate your visit to our website. Feel free to contact us about any questions you may have. We are confident that once you experience what our professional and capable staff have to offer your organization, you will make the decision to SWITCH.</p>
        </header>
    </div>
  )
}

export default Header