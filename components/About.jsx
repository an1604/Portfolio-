import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import {motion } from 'motion/react';
import { useTheme } from '@/app/context/ThemeContext';

const About = () => {
    const { isDarkMode } = useTheme();
    console.log("Theme state:", isDarkMode); // Debug log
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='about' className='w-full px-4 sm:px-8 md:px-[10%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo '>Introduction</motion.h4>
        
        <motion.h2 
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay: 0.5}}
        className='text-center text-3xl sm:text-4xl md:text-5xl font-Ovo'> About me
        </motion.h2>
        
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-10 sm:gap-20 my-10 sm:my-20'>
            
            <motion.div 
            initial={{opacity:0, scale:0.9}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:0.6, delay: 0.3}}
            className='w-48 sm:w-64 md:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user'
                className='w-full rounded-3xl'/>
            </motion.div>

            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6, delay: 0.8}}
            className='flex-1'>
                <p className='mb-6 sm:mb-10 max-w-2xl text-sm sm:text-base font-Ovo'>
                I am an aspiring software developer with expertise in Python, Java, full-stack development,
                and experience in AI-driven solutions and cybersecurity.
                I am passionate about creating innovative solutions and contributing to impactful projects in software development,
                with a focus on AI and cybersecurity.
                </p>

                <motion.ul 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.8, delay: 1}}
                className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description},index) =>(
                        <motion.li 
                        whileHover={{scale:1.05}}
                        key={index} className='border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer
                        hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white 
                        dark:shadow-white dark:hover:bg-darkHover/50'> 
                            <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-6 sm:w-7 my-2 sm:my-3'/>
                            <h3 className='my-2 sm:my-4 font-semibold text-sm sm:text-base dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-xs sm:text-sm dark:text-white/80'>{description}</p>   
                        </motion.li>
                    ))}
                </motion.ul>
                <motion.h4
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay: 1.3}} 
                className='my-4 sm:my-6 text-sm sm:text-base text-gray-700 font-Ovo dark:text-white/80'>
                    Tools I use
                    <motion.ul 
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:0.6, delay: 1.5}}
                    className='flex flex-wrap items-center gap-2 sm:gap-5'>
                        {toolsData(isDarkMode).map((tool, index)=>(
                            <motion.li 
                            whileHover={{ scale:1.1}}
                            key={index} className='flex items-center justify-center w-10
                            sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer
                            hover:-translate-y-1 duration-500'>
                                <Image src={tool} alt='Tool' className='w-4 sm:w-7'/>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.h4>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About