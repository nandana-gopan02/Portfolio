import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png'
import mail from '../assets/mail.png'

function Home() {
  return (
  <section className='min-h-screen flex items-center justify-center px-4'> 
    <div className='text-center max-w-2xl'>
      <h1 className='font-bold text-4xl md:text-6xl pb-6'>Hi,I'm Nandana Gopan</h1>
      {/* <p className='text-xl '>Full Stack Developer skilled in the MERN stack,<br /> 
        with strong experience in frontend development <br />
         and building responsive web applications.</p> */}
         <TypeAnimation 
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Full Stack Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1500,
        'Frontend Developer',
        1500,
        'Backend Developer',
        1500
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.5em', display: 'inline-block' }}
      repeat={Infinity}
      className='font-medium text-gray-700'
    />
    <div className='flex justify-center items-center pt-7 gap-10'>
      <a href="mailto:nandanasreepillai@gmail.com"  target="_blank" rel="noreferrer" className="hover:scale-110 transition">
        <img src={mail} alt="" className='w-10 h-10' />
      </a>
      <a href="https://www.linkedin.com/in/nandanagopan/"  target="_blank" rel="noreferrer" className="hover:scale-110 transition">
        <img src={linkedin} alt="" className='w-10 h-10' />
      </a>
      <a href="https://github.com/nandana-gopan02"  target="_blank" rel="noreferrer" className="hover:scale-110 transition">
        <img src={github} alt="" className='w-10 h-10' />
      </a>

    </div>
    </div>
  </section>
  )
}

export default Home
