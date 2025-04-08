import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { useTheme } from '@/app/context/ThemeContext'
import { assets, experienceData } from '@/assets/assets'

const Experience = () => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div 
      id='experience' 
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{ duration:1 }}
    >
      <motion.h4
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.3, delay:0.5 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Work History
      </motion.h4>

      <motion.h2
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        My Experience
      </motion.h2>

      <motion.p 
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        My career journey includes working with cutting-edge technologies at Jit Security, mentoring students as a programming instructor, and contributing to development projects through collaborative environments. Each role has sharpened my technical expertise while developing my ability to communicate complex concepts and deliver impactful solutions.
      </motion.p>

      <motion.div
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, delay:0.9 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'
      >
        {experienceData.map((experience, index) => (
          <motion.div
            whileHover={{scale:1.05}} 
            key={index} 
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black
            cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
            dark:hover:bg-darkHover dark:hover:shadow-white'
          >
            <Image 
              src={isDarkMode ? experience.iconDark : experience.icon} 
              alt='' 
              className='w-10'
            />
            <h3 className='text-lg font-semibold my-3 text-gray-700 dark:text-white'>{experience.title}</h3>
            <h4 className='text-md my-1 text-gray-600 dark:text-white/90'>
              {experience.company}{experience.location ? `, ${experience.location}` : ''}
            </h4>
            <p className='text-sm text-gray-500 dark:text-white/70 italic mb-4'>
              {experience.startDate} - {experience.endDate}
            </p>
            
            <div className='space-y-2'>
              {experience.responsibilities.map((responsibility, idx) => (
                <p key={idx} className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                  • {responsibility}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Experience 