import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import {motion } from 'motion/react';

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-2 sm:gap-4 px-4">
      <motion.div 
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{duration:0.8, type:"spring", stiffness: 100 }}
      >
        {/* TODO: REPLACE THE PROFILE IMAGE! */}
        <Image src={assets.profile_img} alt="Profile picture of Aviv Nataf" className="rounded-full w-24 sm:w-32" />
      </motion.div>

      <motion.h3 
      initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.6, delay:0.3 }}
      className="flex items-end gap-2 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 font-Ovo">
        Hi! I'm Aviv Nataf <Image src={assets.hand_icon} alt="Waving hand icon" className="w-5 sm:w-6" />
      </motion.h3>

      <motion.h1 
      initial={{y:-30, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.8, delay:0.5 }}
      className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-Ovo">
            Junior Developer / Cybersecurity Enthusiast.
     </motion.h1>


      <motion.p
      initial={{opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.6, delay:0.7 }}
      className="max-w-2xl mx-auto font-Ovo text-sm sm:text-base px-2">
        Aspiring developer skilled in Python, Java, full-stack, AI, and cybersecurity, passionate about innovative, impactful solutions.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4">
        <motion.a
        initial={{y:30, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.6, delay:1 }}
          href="#contact"
          className="px-6 sm:px-10 py-2 sm:py-3 border border-white rounded-full bg-black text-white flex items-center gap-2
          dark:bg-transparent text-sm sm:text-base"
        >
          Contact me <Image src={assets.right_arrow_white} alt="Right arrow icon" className="w-3 sm:w-4" />
        </motion.a>

        <motion.a
        initial={{y:30, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.6, delay:1.2 }}
          href="/aviv_nataf_resume.pdf"
          download
          className="px-6 sm:px-10 py-2 sm:py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black text-sm sm:text-base"
        >
          My resume <Image src={assets.download_icon} alt="Download icon" className="w-3 sm:w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
