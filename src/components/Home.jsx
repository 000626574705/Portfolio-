/*eslint-disable */
import React from 'react'
import HeroImage from "../assets/shreeti.jpg";
import {BiChevronsRight} from "react-icons/bi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b  from-black via-black to-gray-800 '>
     <div className='max-w-screen-lg mx-auto flex flex-col items-center
     justify-center h-full px-8 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-white text-4xl sm:text-7xl font-bold '>
                
                I'm a Frontend Developer
            </h2>
            <p className='text-gray-400 py-4 max-w-md'>
                I am pursuing B.Tech from IET Indore,
                Currently I Love to work on web application using technologies like 
                React, Tailwind , Nodejs also learn Figma for Web designing.
            </p>
            <div >
                <Link to="about" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                from-cyan-500 to-blue-500 cursor-pointer'>
                    more to know
                   <span className='group-hover:rotate-90 duration-300'><BiChevronsRight size={25} className='ml-1'/></span> 
                </Link>
            </div>
        </div>
        <div>
            <img src={HeroImage} alt="my profile" className='rounded-3xl mx-auto w-2/3 md:w-full'/>
        </div>
     </div>
    </div>
  )
}

export default Home;
