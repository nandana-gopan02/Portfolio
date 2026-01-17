import React from 'react'
import logo from '../assets/logo1.png'
import { Link } from 'react-scroll'
import resume from '../assets/Resume.pdf'

function Navbar() {
  return (
    <>
    {/* <nav className='fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[90%] md:w-[70%] bg-white shadow-md rounded-full px-6 py-3'>
      <img className='w-20  mx-8' src={logo} alt="" />
     <div className=' md:flex space-x-10'>
        <Link to='about'    className='cursor-pointer' smooth duration={500}>About</Link>
        <Link to='education'className='cursor-pointer' smooth duration={500}>Education</Link>
        <Link to='project'  className='cursor-pointer' smooth duration={500}>Project</Link>
        <Link to='contact'  className='cursor-pointer' smooth duration={500}>Contact</Link>
     </div>
    
    <button className='bg-black text-white mx-10 p-2.5 rounded-4xl cursor-pointer '>Resume</button> 
      
    </nav> */}
    <div className='bg-white'>
    <nav className='fixed top-0 left-0 w-full h-24 flex items-center justify-between 
                  bg-black backdrop-blur-md bg-opacity-80 z-50 px-8'>
    <div>
      <img className='w-30 md:w-40' src={logo} alt="" />
    </div>
    <div className='md:flex space-x-15 text-white text-lg '>
        <Link to='about'    className='cursor-pointer hover:underline' smooth duration={500}>About</Link>
        <Link to='education'className='cursor-pointer hover:underline' smooth duration={500}>Education</Link>
        <Link to='project'  className='cursor-pointer hover:underline' smooth duration={500}>Project</Link>
        <Link to='contact'  className='cursor-pointer hover:underline' smooth duration={500}>Contact</Link>
    </div>
      <div>
            <a href={resume} target='_blank' className='bg-white text-black px-6 py-2 rounded-full'>Resume</a>
      </div>
    </nav>
    </div>
    </>
  )
}

export default Navbar
