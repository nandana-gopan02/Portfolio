import React, { useState } from 'react'
import logo from '../assets/logo1.png'
import { Link } from 'react-scroll'
// import resume from '../assets/Resume.pdf'
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
const[isOpen,setIsOpen]=useState(false)

  return (
    <>
    <nav className='bg-black fixed top-0 left-0 w-full'>
      <div className='h-20 items-center flex justify-between'>
      {/* logo */}
        <div>
          <img className='w-30 md:w-40' src={logo} alt="" />
        </div>
      {/* button desktop */}
        <div className='hidden sm:block space-x-2 px-8 '>
          <Link to='about'    className='text-white text-lg px-4 cursor-pointer hover:underline' smooth duration={500}>About</Link>
          <Link to='education'className='text-white text-lg px-4 cursor-pointer hover:underline' smooth duration={500}>Education</Link>
          <Link to='project'  className='text-white text-lg px-4 cursor-pointer hover:underline' smooth duration={500}>Project</Link>
          <Link to='contact'  className='text-white text-lg px-4 cursor-pointer hover:underline' smooth duration={500}>Contact</Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className='text-white px-6 text-3xl block sm:hidden '><CiMenuBurger/></button>

      </div>
      {/* button mobile */}
        <div className={`${isOpen ? "block" : "hidden"} sm:hidden bg-zinc-200 space-y-2 pb-3 place-items-center`}>
          <Link to='about'    className='text-black text-lg px-4 block cursor-pointer hover:underline' smooth duration={500} onClick={()=>setIsOpen(false)}>About</Link>
          <Link to='education'className='text-black text-lg px-4 block cursor-pointer hover:underline' smooth duration={500} onClick={()=>setIsOpen(false)} >Education</Link>
          <Link to='project'  className='text-black text-lg px-4 block cursor-pointer hover:underline' smooth duration={500} onClick={()=>setIsOpen(false)}>Project</Link>
          <Link to='contact'  className='text-black text-lg px-4 block cursor-pointer hover:underline' smooth duration={500} onClick={()=>setIsOpen(false)}>Contact</Link>
        </div>


    </nav>
    


    </>
  )
}

export default Navbar



{/* <nav className='fixed top-0 left-0 w-full h-24 flex items-center justify-between bg-black backdrop-blur-md bg-opacity-80 z-50 px-8'>
    <div>
      <img className='w-30 md:w-40' src={logo} alt="" />
    </div>
   
    <div className='hidden sm:block md:flex space-x-15 text-white text-lg '>
        <Link to='about'    className='cursor-pointer hover:underline' smooth duration={500}>About</Link>
        <Link to='education'className='cursor-pointer hover:underline' smooth duration={500}>Education</Link>
        <Link to='project'  className='cursor-pointer hover:underline' smooth duration={500}>Project</Link>
        <Link to='contact'  className='cursor-pointer hover:underline' smooth duration={500}>Contact</Link>
    </div>
    </nav> */}
