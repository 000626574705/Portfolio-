 /*eslint-disable */
import React from 'react'

const About = () => {
  return (
    <div name="about"className='w-full h-screen bg-gradient-to-b from-gray-800 to-black 
    text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-4'>
            <p className='text-4xl font-bold inline border-b-4 border-b-cyan-500 text-white'>About</p>
        </div>
        <p className='text-xl mt-4 text-gray-500'>I am a highly motivated Frontend Developer currently pursuing my B.Tech degree from the prestigious Institute of Engineering and Technology in Indore. I am deeply passionate about web development and possess a strong drive for excellence in all aspects of my work. Recently, I had the honor of being selected as a contributor at the esteemed GirlScript Summer of Code 23, where I had the opportunity to collaborate with talented individuals to create meaningful projects. </p><br/>
        <p className='text-xl text-gray-500'>
        Furthermore, I am proud to have emerged victorious with my team in the highly competitive Techathon 2.0. My focus lies not only on web development but also on honing my skills in web design. I am dedicated to continuous learning, staying up-to-date with the latest industry trends, and employing cutting-edge techniques to deliver exceptional user experiences. I am committed to pushing the boundaries of what is possible in the realm of frontend development and contributing to the growth and success of impactful projects.
        </p>
      </div>
    </div>
  );
};

export default About;
