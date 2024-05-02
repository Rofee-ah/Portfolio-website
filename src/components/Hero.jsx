import React from 'react';
import { HERO_CONTENT } from '../constant/index';
import rofiat from '../assets/pictures/res.jpg';
import { motion } from 'framer-motion';

const container =(delay)=>({
hidden:{x: -100, opacity:0},
visible:{x: 100,
   opacity:1, 
   transition:{duration:0.5, delay:delay}
}
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col item-center lg:items-start'>
            <motion.h1
              // initial={{x:-100, opacity: 0 }}
              // animate={{ x: 0, opacity: 1 }}
              // transition={{duration: 0.5, delay: 2 }}
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className='pb-16 lg:text-8xl text-4xl font-bold lg:font-bold tracking-tight lg:mt-16 items-center justify-center'>
              Rofiat Lawal
            </motion.h1>
           <motion.span 
          //  variants={container(0.5)}
          //     initial='hidden'
          //     animate='visible' 
      
              className='bg-gradient-to-r from-pink-300  via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tigh text-transparent items-center justify-center'>
              Frontend Developer
            </motion.span>
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}
            className='my-2 max-w-xl py-6 font-light tracking-tighter'>
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className='w-full lg:w-2/5 lg:p-8 rounded'>
          <div className='flex justify-center rounded'>
            <motion.img  whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:0.5}}
             src={rofiat} alt='rofiat' className='rounded' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
