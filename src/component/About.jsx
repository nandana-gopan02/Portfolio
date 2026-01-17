import React from 'react'
import html from '../assets/HTML.png'
import css from '../assets/CSS.png'
import js from '../assets/Javascript.png'
import bootstrap from '../assets/bootstrap.png'
import react from '../assets/react.png'
import node from '../assets/node-js.png'
import sql from '../assets/sql.png'
import git from '../assets/github.png'
import python from '../assets/python.png'
import mongo from '../assets/mongodb.svg'

function About() {
  return (
    <div className=' pt-24 pl-4 '>
        <h1 className='font-bold text-2xl md:text-3xl'>About Me</h1>
        <p className='pt-4 text-lg text-justify leading-loose'>I am a motivated Full Stack Web Developer and MCA graduate with a strong foundation in computer science and hands-on experience building modern web applications. I specialize in developing responsive, scalable, and user-friendly solutions using technologies such as JavaScript, React, Node.js, Python and MongoDB.
            <br />
            I enjoy building clean, high-quality web applications that balance performance and user experience. With strong problem-solving skills and a passion for continuous learning, I love turning complex ideas into practical solutions and contributing effectively to real-world projects.
        </p>
        <h1 className='font-bold text-xl md:text-2xl pt-18'>Tech Stacks & Skills</h1>
        <div className="pt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 place-items-center ">
            <div className="w-20 h-20 m-3 flex items-center justify-center">
                <img
                src={html}
                alt="HTML"
                className="w-full h-full object-contain"
                />  
            </div>

            <div className="w-20 h-20 m-3 flex items-center justify-center">
                <img
                src={css}
                alt="CSS"
                className="w-full h-full object-contain"
                />
            </div>

            <div className="w-20 h-20 m-3 flex items-center justify-center">
                <img
                src={js}
                alt="JS"
                className="w-full h-full object-contain"
                />
            </div>

            <div className="w-20 h-20 m-3 flex items-center justify-center">
                <img
                src={bootstrap}
                alt="Bootstrap"
                className="w-full h-full object-contain"
                />
            </div>

            <div className="w-20 h-20 m-3 flex items-center justify-center">
                <img
                src={react}
                alt="React"
                className="w-full h-full object-contain"
                />
            </div>

            <div className="w-20 h-20 m-3 flex items-center justify-center">
                <img
                src={node}
                alt="Node"
                className="w-full h-full object-contain"
                />
            </div>

            <div className="w-20 h-20 m-3 flex items-center justify-center">
                <img
                src={sql}
                alt="SQL"
                className="w-full h-full object-contain"
                />
            </div>

            <div className="w-20 h-20 m-3 flex items-center justify-center">
                <img
                src={python}
                alt="Python"
                className="w-full h-full object-contain"
                />
            </div>

              <div className="w-20 h-20 m-3 flex items-center justify-center">
                <img
                src={mongo}
                alt="Python"
                className="w-full h-full object-contain"
                />
            </div>

            <div className="w-20 h-20 m-3 flex items-center justify-center">
                <img
                src={git}
                alt="Git"
                className="w-full h-full object-contain"
                />
            </div>
        </div>

    </div>
  )
}

export default About



            // <div className="w-20 h-20 m-3 flex items-center justify-center">
            //     <div className='grid place-items-center'>
            //     <img
            //     src={html}
            //     alt="HTML"
            //     className="w-full h-full object-contain"
            //     />
            //     <p>HTML</p>
            //     </div>
            // </div>