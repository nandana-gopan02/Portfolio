import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png'
import mail from '../assets/mail.png'

function Contact() {

  const[formData,setFormData]= useState({
    name:"",
    email:"",
    message:""
  })


  
  const handleSubmit =(e)=>{
    e.preventDefault()

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,e.target,import.meta.env.VITE_PUBLIC_KEY).then((result)=>{
      alert("Message sent");
      setFormData({name:"",email:"",message:""})
    }).catch(()=>alert("Oops! Something went wrong.Please try again"));
  }

  return (
    <div className='pt-24 pb-5 px-4'>
     <h1 className='font-bold text-2xl md:text-3xl'>Contact Me</h1>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
      <div className='space-y-6 md:space-y-9'>
        <h1 className='text-xl font-semibold pt-7 md:pt-15'>Let's Talk</h1>
        <p className='text-zinc-600 leading-relaxed '>I'm open to discussing web development projects or parternship opportunities.</p>
        <div className="space-y-2 text-zinc-700">
        <p>
          <span className="font-medium">Email:</span>{" "}
          <a href="mailto:nandanasreepillai@gmail.com" className="text-zinc-900 hover:underline">
            nandanasreepillai@gmail.com
          </a>
        </p>

        <p>
          <span className="font-medium">Location:</span> Kerala, India
        </p>
        </div>
        <div className='flex gap-7'>
              <a href="https://www.linkedin.com/in/nandanagopan/"  target="_blank" rel="noreferrer" className="hover:scale-110 transition">
                <img src={linkedin} alt="" className='w-8 h-8' />
              </a>
              <a href="https://github.com/nandana-gopan02"  target="_blank" rel="noreferrer" className="hover:scale-110 transition">
                <img src={github} alt="" className='w-8 h-8' />
              </a>
        
            </div>
      </div>

      <div className=''>
        <form action="" className='space-y-5' onSubmit={handleSubmit}>
          <label>Your Name</label><br />
          <input type="text"
                 id='name'
                 name='name'
                 value={formData.name} 
                 placeholder='Enter Your Name' 
                 onChange={(e)=> setFormData({...formData,name:e.target.value})}
                 required 
                 className='w-full bg-zinc-200 hover:bg-zinc-300 h-10 rounded-xl px-4 py-3 transition focus:outline-none '/><br />
          
          <label>Email</label><br />
          <input type="email" 
                 name="email" 
                 id="email" 
                 value={formData.email} 
                 placeholder='Enter Your Email' 
                 onChange={(e)=>setFormData({...formData,email:e.target.value})}
                 required 
                 className='w-full bg-zinc-200 hover:bg-zinc-300 h-10 rounded-xl px-4 py-3 transition focus:outline-none ' /><br />
          
          <label>Message</label><br />
          <textarea name="message" 
                    id="message" 
                    rows={4} 
                    value={formData.message} 
                    placeholder='Enter Your Message' 
                    onChange={(e)=>setFormData({...formData,message:e.target.value})}
                    required 
                    className='w-full h-full bg-zinc-200 hover:bg-zinc-300 rounded-xl px-4 py-3 transition focus:outline-none '></textarea><br />

          <button type="submit" className='mt-4 border md:border border-zinc-900 py-1 md:py-2 px-3 md:px-4 rounded-full cursor-pointer bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 text-white hover:opacity-90 hover:-translate-y-0.5 transition-all'>SEND</button>
        </form>
      </div>
     </div>
    </div>
  )
}

export default Contact
