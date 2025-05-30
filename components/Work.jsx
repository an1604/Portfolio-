import React, { useState } from 'react';
import Image from 'next/image';
import { assets, workData } from '@/assets/assets';
import { motion } from 'motion/react';
import { useTheme } from '@/app/context/ThemeContext';
import ProjectPopup from './ProjectPopup';

const Work = () => {
    const isDarkMode = useTheme();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project, event) => {
        if (project.title === 'Campaign Connect') {
            event.preventDefault();
            setSelectedProject(project);
            setIsPopupOpen(true);
        }
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="work"
            className="w-full px-[12%] py-10 scroll-mt-20"
        >
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="text-center mb-2 text-lg font-Ovo"
            >
                My portfolio
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-Ovo"
            >
                My latest works
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex justify-center items-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
            >
                Explore my latest works and projects in this section! Click the Icon
                <a
                    href="https://github.com/an1604"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 ml-2 text-blue-600 hover:underline"
                >
                    <Image
                        src={assets.github}
                        alt="GitHub"
                        width={40}
                        height={40}
                        className="cursor-pointer hover:opacity-80"
                    />
                </a>
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10 dark:text-black"
            >
                {workData.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        onClick={(e) => handleProjectClick(project, e)}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                            style={{ backgroundImage: `url(${project.bgImage})` }}
                        >
                            {/* Content */}
                            <div
                                className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2
                                transform -translate-x-1/2 py-3 px-5 flex items-center justify-between
                                transition-all duration-500 group-hover:bottom-7"
                            >
                                <div>
                                    <h2 className="text-lg font-bold">{project.title}</h2>
                                    <p className="text-sm text-gray-600">{project.description}</p>
                                </div>
                                <div className="border rounded-full border-black w-9 aspect-square flex 
                                items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                    <Image
                                        src={assets.send_icon}
                                        alt="send icon"
                                        className="w-5"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </a>
                ))}
            </motion.div>

            <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                href="https://github.com/an1604" //TODO: MAKE THE LINK TO BE OPENED IN A DEFFERENT TAB 
                className="w-max flex items-center gap-2 text-gray-700 border-[0.5px] 
                border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white 
                dark:border-white dark:hover:bg-darkHover"
            >
                Show more{' '}
                <Image
                    src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
                    alt="right arrow"
                    className="w-4"
                />
            </motion.a>

            {/* Project Popup */}
            <ProjectPopup 
                isOpen={isPopupOpen} 
                onClose={handleClosePopup} 
                project={selectedProject}
            />
        </motion.div>
    );
};

export default Work;
