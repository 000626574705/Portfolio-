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
        <p className='text-xl mt-4 text-gray-500'>I am a highly motivated Full Stack Developer currently pursuing my B.Tech degree from the prestigious Institute of Engineering and Technology in Indore. My passion for web development extends to both frontend and backend technologies, and I have a strong drive for excellence in all aspects of my work. Recently, I had the honor of being selected as a contributor at the esteemed GirlScript Summer of Code 23, where I collaborated with talented individuals to create meaningful full-stack projects. </p><br/>
        <p className='text-xl text-gray-500'>
        In addition to my accomplishments in frontend development, I am proud to share that I emerged victorious with my team in the highly competitive Techathon 2.0, showcasing my proficiency in both frontend and backend technologies. Recognizing the importance of a holistic approach to development, I have broadened my skill set to include expertise in AI tools, allowing me to work smartly and integrate intelligent solutions into my projects.
        </p>
        <p className='text-xl text-gray-500'>
        My commitment to continuous learning is reflected in my recent exploration of Docker and cPanel, technologies that enhance the efficiency and scalability of web applications. By staying up-to-date with the latest industry trends, I aim to push the boundaries of what is possible in the realm of full-stack development. I am enthusiastic about contributing to the growth and success of impactful projects by leveraging a comprehensive skill set that spans frontend, backend, AI, and infrastructure management.
        </p>
      </div>
    </div>
  );
};

export default About;
