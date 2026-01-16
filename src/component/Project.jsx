import React from 'react'

function Project() {
  return (
    <div className="pt-12 px-4">
        <h1 className='font-bold text-2xl'>Project</h1>
        {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-6 rounded-xl border border-black hover: -translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.21)]'>
                <h3>MovieApp</h3>
                <p>React app used for Sreaching Movie using TMDB API </p>
                <div>
                    <span className='py-1 px-3 rounded-full text-sm hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>React</span>
                </div>
            </div>
        </div> */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-6'>
            <div className='border border-black w-90 h-52 p-6 rounded-xl bg-gray-200 hover:bg-gray-300 hover:-translate-y-1 transition-all'>
                <h3 className='font-bold text-xl'>MovieApp</h3>
                <p className='pt-2 text-m text-justify'>React app used for Sreaching Movie using TMDB APIReact app used for Sreaching Movie using TMDB APIReact app used for Sreaching Movie using TMDB APIReact app used for Sreaching Movie using TMDB API</p>
            </div>
        </div>
     
    </div>
  )
}

export default Project
