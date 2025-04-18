import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useTheme } from '@/app/context/ThemeContext';
import { assets } from '@/assets/assets';
import educationData from '@/data.json';

const Education = () => {
  const { isDarkMode } = useTheme();
  const education = educationData.education;

  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      id='education' 
      className='w-full px-4 sm:px-8 md:px-[10%] py-16 sm:py-20 scroll-mt-20'
    >
      {/* Section Title with Animation */}
      <motion.h4 
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Academic Background
      </motion.h4>
      
      <motion.h2 
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay: 0.5}}
        className='text-center text-3xl sm:text-4xl md:text-5xl font-Ovo mb-10 sm:mb-16'
      >
        Education
      </motion.h2>
      
      {/* Main Content Container */}
      <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
        className='flex flex-col items-center justify-center max-w-5xl mx-auto'
      >
        {/* Education Card with Animation */}
        <motion.div 
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.7, delay: 0.3}}
          whileHover={{y:-5}}
          className='w-full bg-white dark:bg-darkHover/30 rounded-2xl shadow-md p-8 sm:p-10 
                    border border-gray-200 dark:border-white/10 relative overflow-hidden'
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 -translate-y-1/3 translate-x-1/3 bg-rose-100/50 
                         dark:bg-rose-900/10 rounded-full z-0"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 translate-y-1/2 -translate-x-1/3 bg-blue-100/50 
                         dark:bg-blue-900/10 rounded-full z-0"></div>
          
          {/* Education Content */}
          <div className="relative z-10">
            {/* Degree Title */}
            <motion.div 
              initial={{opacity:0, x:-20}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:0.5, delay: 0.5}}
              className="mb-6"
            >
              <h3 className='text-2xl sm:text-3xl font-semibold mb-2 font-Ovo text-gray-800 dark:text-white'>
                {education.degree}
              </h3>
              <div className="w-20 h-1 bg-rose-400 dark:bg-rose-500 rounded-full"></div>
            </motion.div>
            
            {/* Education Details */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base'>
              {/* Left Column */}
              <motion.div
                initial={{opacity:0, y:10}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay: 0.6}}
              >
                <div className="flex items-start mb-4">
                  <div className="mt-1 mr-3">
                    <Image 
                      src={assets.edu_icon}
                      alt="Institution" 
                      width={16} 
                      height={16} 
                      className="opacity-80"
                    />
                  </div>
                  <div>
                    <p className='text-gray-500 dark:text-white/60 text-sm mb-1'>Institution</p>
                    <p className='text-gray-800 dark:text-white font-medium'>{education.institution}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Image 
                      src={assets.web_icon}
                      alt="Location" 
                      width={16} 
                      height={16} 
                      className="opacity-80"
                    />
                  </div>
                  <div>
                    <p className='text-gray-500 dark:text-white/60 text-sm mb-1'>Location</p>
                    <p className='text-gray-800 dark:text-white font-medium'>{education.location}</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Right Column */}
              <motion.div
                initial={{opacity:0, y:10}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay: 0.7}}
              >
                <div className="flex items-start mb-4">
                  <div className="mt-1 mr-3">
                    <Image 
                      src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                      alt="Period" 
                      width={16} 
                      height={16} 
                      className="opacity-80"
                    />
                  </div>
                  <div>
                    <p className='text-gray-500 dark:text-white/60 text-sm mb-1'>Period</p>
                    <p className='text-gray-800 dark:text-white font-medium'>
                      {education.start_date} - {education.expected_graduation_date}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Image 
                      src={assets.project_icon}
                      alt="GPA" 
                      width={16} 
                      height={16} 
                      className="opacity-80"
                    />
                  </div>
                  <div>
                    <p className='text-gray-500 dark:text-white/60 text-sm mb-1'>Current GPA</p>
                    <p className='text-gray-800 dark:text-white font-medium'>{education.current_gpa}/100</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Education; 