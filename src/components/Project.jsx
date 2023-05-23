 /*eslint-disable */
import React from 'react'
import rekart from "../assets/portfolio/rekart.jpg"

const Project = () => {

  const portfolios =[
    {
      id:1,
      src:rekart
    },

  ]




  return (
    <div name="Projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-12 mt-16'>
            <p className='text-4xl font-bold  inline border-b-4 border-cyan-500'>Projects</p>
            <p className='py-6 text-xl text-slate-600'>Check out some of my  work right here</p>
        </div>
        
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 h-50'>
        {
          portfolios.map(({id, src}) =>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center '>
            <button className='w-1/2 px-6 py-m m-4 duration 200 hover:scale-105'>Demo</button>
            <button className='w-1/2 px-6 py-m m-4 duration 200 hover:scale-105'>Code</button>
             </div>
        </div>
        
            
          ))
        }
           
        </div>
      </div>
    </div>
  );
}

export default Project
