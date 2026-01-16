import React from 'react'

function Education() {
  return (
<div className="pt-12 px-4">
  <h1 className="font-bold text-2xl">
    Education & Experience
  </h1>

  {/* <div className="px-10 pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-40 gap-y-8 place-items-center">
    
    <div className="w-70 lg:w-86 xl:w-[24rem] h-52 border rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="font-semibold text-lg mb-3">
        Internship
      </h2>
      <p className="text-sm text-gray-600 text-justify">
        A 4-month internship at Kerala Infrastructure and Technology for
        Education (KITE), Thiruvananthapuram.
      </p>
    </div>

    <div className="w-70 lg:w-86 xl:w-[24rem] h-52 border rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="font-semibold text-lg mb-3">
        Internship
      </h2>
      <p className="text-sm text-gray-600 text-justify">
        A 4-month internship at Kerala Infrastructure and Technology for
        Education (KITE), Thiruvananthapuram.
      </p>
    </div>

    <div className="w-70 lg:w-86 xl:w-[24rem] h-52 border rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="font-semibold text-lg mb-3">
        Internship
      </h2>
      <p className="text-sm text-gray-600 text-justify">
        A 4-month internship at Kerala Infrastructure and Technology for
        Education (KITE), Thiruvananthapuram.
      </p>
    </div>

  </div> */}
  

  <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
    <div className='w-80 md:w-96 lg:w-[26rem] h-62 p-6 rounded-xl border-black/10 border hover:border-black hover:-translate-y-1 transition-all'>
        <h3 className='text-xl font-bold mb-4'>Education</h3>
        <ul className='list-disc list-inside text-gray-900 space-y-2'>
            <li>
                <strong> Master of Computer Applications</strong> - Mahatma Gandhi University(2023-2025)
            </li>
            <li>
                <strong> Master of Computer Applications</strong> - Mahatma Gandhi University(2023-2025)
            </li>
        </ul>
    </div>

    <div className='w-80 md:w-96 lg:w-[26rem] h-62 p-6 rounded-xl border-black/10 border  hover:border-black hover:-translate-y-1 transition-all'>
        <h3 className='text-xl font-bold mb-4'>Work Experience</h3>
        <strong>Internship </strong> - Kerala Infrastructure and Technology for Education(KITE)
        <ul className='list-disc list-inside space-y-1'>
            <li>
                A 4-month internship
            </li>
            <li>Government Sectored Company</li>
        </ul>
    </div>

  </div>
</div>


  )
}

export default Education
