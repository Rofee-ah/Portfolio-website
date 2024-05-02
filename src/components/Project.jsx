import React from 'react';
import { PROJECTS } from '../constant/index';
import { motion } from "framer-motion"


const Project = () => {
  
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y:-100}}
      transition={{duration: 0.5}}
      className='my-20 text-center text-4xl'> Projects </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex  flex-wrap lg:justify-center'>
            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0, x:-100}}
            transition={{duration: 1}}
            className='w-full ml-24 lg:w-1/4'>
              <img
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                className='mb-6 rounded'
                items-center 
                justify-center
              />
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0, x:100}}
            transition={{duration: 1}}
            className='w-ful  max-w-xl lg:w-3/4 ml-24'>
                <h6 className='mb-2 font-semibold'>{project.title} </h6>
                <p className='mb-4 text-neutral-400'>{project.description}</p>
            
                <a href={project.link} target='_blank' rel='noreferrer'>
                  <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>
                    View Project
                  </button>
                </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
