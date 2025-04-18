import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '@/app/context/ThemeContext';

const Education = () => {
  const { isDarkMode } = useTheme();
  // Education data is hardcoded here for simplicity
  // In a full implementation, you might want to fetch this from data.json
  const education = {
    degree: "Bachelor of Science in Computer Science",
    institution: "The College of Management",
    location: "Rishon LeZion",
    start_date: "March 2022",
    expected_graduation_date: "March 2025",
    current_gpa: "83"
  };

  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      id='education' 
      className='w-full px-4 sm:px-8 md:px-[10%] py-10 scroll-mt-20'
    >
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
        className='text-center text-3xl sm:text-4xl md:text-5xl font-Ovo'
      >
        Education
      </motion.h2>
      
      <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
        className='flex justify-center my-10 sm:my-20'
      >
        <motion.div 
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6, delay: 0.5}}
          className='max-w-3xl w-full'
        >
          <div className='border-[0.5px] border-gray-400 rounded-xl p-6 sm:p-8
            hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black 
            dark:border-white dark:shadow-white dark:hover:bg-darkHover/50'
          >
            <h3 className='text-xl sm:text-2xl font-semibold mb-4 font-Ovo dark:text-white'>
              {education.degree}
            </h3>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base'>
              <div>
                <p className='text-gray-700 dark:text-white/80'>
                  <span className='font-semibold'>Institution:</span> {education.institution}
                </p>
                <p className='text-gray-700 dark:text-white/80'>
                  <span className='font-semibold'>Location:</span> {education.location}
                </p>
              </div>
              
              <div>
                <p className='text-gray-700 dark:text-white/80'>
                  <span className='font-semibold'>Started:</span> {education.start_date}
                </p>
                <p className='text-gray-700 dark:text-white/80'>
                  <span className='font-semibold'>Expected Graduation:</span> {education.expected_graduation_date}
                </p>
                <p className='text-gray-700 dark:text-white/80'>
                  <span className='font-semibold'>Current GPA:</span> {education.current_gpa}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Education; 