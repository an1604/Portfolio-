import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { useTheme } from '@/app/context/ThemeContext'
import { assets } from '@/assets/assets'

const Experience = () => {
  const { isDarkMode } = useTheme();

  // Placeholder for experience data - will be moved to assets.js in step 2
  const experienceData = [
    {
      title: "Software Engineer (Student Position)",
      company: "Jit security",
      location: "Tel Aviv",
      startDate: "February 2025",
      endDate: "Present",
      responsibilities: [
        "Focused on Python development with extensive use of Docker.",
        "Wrote and tested features using Pytest."
      ]
    },
    {
      title: "Computer Programming Instructor",
      company: "Sunspark College",
      location: "",
      startDate: "January 2022",
      endDate: "September 2024",
      responsibilities: [
        "Designed and delivered a comprehensive curriculum on computer and network systems.",
        "Taught programming languages (VB, Python, Java) to high school students, focusing on real-world applications.",
        "Mentored 20-30 students per class, helping them develop independent coding projects and problem-solving skills."
      ]
    },
    {
      title: "Intern",
      company: "Colman Dev Club Collaboration",
      location: "",
      startDate: "November 2022",
      endDate: "June 2023",
      responsibilities: [
        "Worked on JavaScript and React projects, contributing to front-end development and enhancing web applications.",
        "Participated in workshops, collaborating with peers to develop and deploy practical web solutions.",
        "Implemented dynamic features for projects, improving user experience and functionality."
      ]
    }
  ];

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
        Aspiring software developer with expertise in Python, Java, full-stack development, and experience in AI-driven solutions and cybersecurity. Passionate about creating innovative solutions and contributing to impactful projects in software development, focusing on AI and cybersecurity.
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
              src={isDarkMode ? assets.code_icon_dark : assets.code_icon} 
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