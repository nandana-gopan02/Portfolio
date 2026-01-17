import React from 'react'

function Education() {
  return (
<div className="pt-24 px-4">
  <h1 className="font-bold text-2xl md:text-3xl">
    Education & Experience
  </h1>

  <div className='pt-3 md:pt-10 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
    <div className='p-6 px-3 md:px-10 rounded-xl bg-white hover:bg-zinc-200/80 border-black/10 border hover:border-zinc-200/80 hover:-translate-y-1 transition-all'>
        <h3 className='text-xl font-bold mb-4'>Education</h3>
        <ul className='list-disc list-inside text-gray-900 space-y-2'>
            <li>
                <strong> Master of Computer Applications</strong> <br /> Mar Athanasios College For Advanced Studies Tiruvalla(2023-2025)
            </li>
            <li>
                <strong> Bachelor of Computer Science</strong> <br /> IHRD College of Applied Science, Perissery(2023-2025)
            </li>
        </ul>
    </div>

    <div className='p-6 px-3 md:px-10 rounded-xl bg-white hover:bg-zinc-200/80 border-black/10 border  hover:border-zinc-200/80 hover:-translate-y-1 transition-all'>
        <h3 className='text-xl font-bold mb-4'>Work Experience</h3>
        
        <strong>Internship </strong> - Kerala Infrastructure and Technology for Education(KITE)
        <ul className='list-disc list-inside space-y-1'>
            <li>
                Completed a 4-month internship at a government sector organization
            </li>
            <li>Worked on a live web application using PHP (CodeIgniter)</li>
            <li>Collaborated with industry professionals in a team-based environment</li>
            <li>Used Git for version control and project collaboration</li>
        </ul>
    </div>

  </div>
</div>


  )
}

export default Education
