import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-900 w-[100%]  p-4 flex justify-between'>
     <div className='flex gap-6'>
        <h2 className='text-white'>+549-165269434</h2>
        <h2 className='text-white'>info@vetly.com.ar</h2>
     </div>
        <div className='flex gap-6 text-white'>
        <h2>Theme FAQ'S</h2>
        <h2>Need Helps</h2>
        </div>
    </div>
  )
}

export default Navbar