import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png'
import mail from '../assets/mail.png'
import resume from '../assets/Resume.pdf'

function Home() {
  return (
  <section className='min-h-[calc(100vh-6rem)]  flex items-center justify-center pt-40'> 
    <div className='text-center max-w-2xl'>
      <h1 className='font-bold text-3xl md:text-6xl pb-6'>Hi,I'm Nandana Gopan</h1>
 
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
      repeat={Infinity}
      className='inline-block font-medium text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl'
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
          <div className='flex justify-center items-center pt-6'>
                <a href={resume} target='_blank' className=' bg-black text-white px-6 py-2 rounded-full'>Resume</a>
          </div>
    </div>
  </section>
  )
}

export default Home




{/* <div class="relative h-full w-full bg-white"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div> */}