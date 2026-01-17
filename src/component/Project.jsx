import React from 'react'
import { FaGithub } from 'react-icons/fa'

function Project() {
  return (
    <div className="pt-24 px-4">
        <h1 className='font-bold text-2xl md:text-3xl'>Project</h1>

    <div class=" pt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
 
  <div class="p-6 rounded-xl border-zinc-200 border hover:border-zinc-300 bg-zinc-200/80 hover:bg-zinc-300 text-black shadow-md hover:-translate-y-1 transition-all">
    <h2 class="text-xl font-bold">MovieApp <span className='text-sm'>(Ongoing)</span></h2>
    <p className='pt-2 text-m text-justify'>Developed a responsive movie application using React.js and Tailwind CSS with seamless cross-device support. Integrated the TMDB API to dynamically fetch and display movie data, enhancing performance and user experience.</p>
    <div className='mt-6'>
    <a href="https://github.com/nandana-gopan02/Movie-App" target='_blank' rel='noopener noreferrer' className='mt-6 border md:border border-zinc-900 py-1 md:py-2 px-3 md:px-4 rounded-full cursor-pointer bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 text-white hover:opacity-90 hover:-translate-y-0.5 transition-all'>GitHub</a>
    </div>
  </div>

 
  <div class="p-6 rounded-xl border-zinc-200 border hover:border-zinc-300 bg-zinc-200/80 hover:bg-zinc-300/80 text-black shadow-md hover:-translate-y-1 transition-all">
    <h2 class="text-xl font-bold">BidWise</h2>
    <p className='pt-2 text-m text-justify'>Developed a full-stack online bidding platform using the MERN stack, enabling users to create auctions, place bids, and manage items efficiently. Implemented role-based access for Admin, Buyer, and Seller, allowing sellers to showcase items and buyers to participate in real-time bidding.</p>
    <div className='mt-6'>
    <a href="https://github.com/nandana-gopan02/BidWise" target='_blank' rel='noopener noreferrer' className='mt-6 border md:border border-zinc-900 py-1 md:py-2 px-3 md:px-4 rounded-full cursor-pointer bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 text-white hover:opacity-90 hover:-translate-y-0.5 transition-all'>GitHub</a>
    </div>
  </div>

  
  <div class="p-6 rounded-xl border-zinc-200 border hover:border-zinc-300 bg-zinc-200/80 hover:bg-zinc-300/80 text-black shadow-md hover:-translate-y-1 transition-all">
    <h2 class="text-xl font-bold">Portfolio</h2>
    <p className='pt-2 text-m text-justify'>A personal portfolio website to showcase projects and skills.</p>
    <div className='mt-6'>
    <a href="https://github.com/nandana-gopan02/Movie-App" target='_blank' rel='noopener noreferrer' className='mt-6 border md:border border-zinc-900 py-1 md:py-2 px-3 md:px-4 rounded-full cursor-pointer bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 text-white hover:opacity-90 hover:-translate-y-0.5 transition-all'>GitHub</a>
    </div>
  </div>

  <div class="p-6 rounded-xl border-zinc-200 border hover:border-zinc-300 bg-zinc-200/80 hover:bg-zinc-300/80 text-black shadow-md hover:-translate-y-1 transition-all">
    <h2 class="text-xl font-bold">To-Do App</h2>
    <p className='pt-2 text-m text-justify'>Developed a To-Do application using React that allows users to add, delete, and mark tasks as completed. Implemented localStorage to persist tasks, ensuring data is retained across sessions.</p>
    <div className='mt-6'>
    <a href="https://github.com/nandana-gopan02/Movie-App" target='_blank' rel='noopener noreferrer' className='mt-6 border md:border border-zinc-900 py-1 md:py-2 px-3 md:px-4 rounded-full cursor-pointer bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 text-white hover:opacity-90 hover:-translate-y-0.5 transition-all'>GitHub</a>
    </div>
  </div>

</div>
     
</div>
  )
}

export default Project





        {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-6 rounded-xl border border-black hover: -translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.21)]'>
                <h3>MovieApp</h3>
                <p>React app used for Sreaching Movie using TMDB API </p>
                <div>
                    <span className='py-1 px-3 rounded-full text-sm hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>React</span>
                </div>
            </div>
        </div> */}
        {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6'>
            <div className='w-120  h-52 p-6 rounded-xl border-black/10 border hover:border-black bg-gray-200 hover:bg-gray-300 hover:-translate-y-1 transition-all'>
                <h3 className='font-bold text-xl'>MovieApp</h3>
                <p className='pt-2 text-m text-justify'>React app used for Sreaching Movie using TMDB APIReact app used for Sreaching Movie using TMDB APIReact app used for Sreaching Movie using TMDB APIReact app used for Sreaching Movie using TMDB API</p>
            </div>
        </div> */}