'use client';
import React from 'react';
import NavBar from '@/components/NavBar';
import { motion } from 'framer-motion'; 
import { devopsData } from '@/assets/assets';

function Devops() {
  return (
    <>
      <NavBar navigation={true} />
      <br />
      <br />
      <motion.div
        className="w-full px-[12%] py-10 scroll-mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl font-Ovo dark:text-white"
        >
          DevOps/DevSecOps/Automations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo dark:text-gray-300"
        >
          As an enthusiast in DevOps, DevSecOps, and automation, I specialize in building secure, scalable, 
          and efficient workflows. My expertise includes deploying production-ready applications using Docker, 
          Ansible, and AWS, automating CI/CD pipelines with integrated security practices, 
          and leveraging tools like Selenium for comprehensive testing and automation. 
          I am passionate about delivering streamlined solutions that enhance development processes while ensuring robust security.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
        >
          {devopsData.map(({ title, description, bgImage, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg duration-500 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 duration-300"></div>

                {/* Content */}
                <div className="relative z-10 p-6 text-black dark:text-gray-100">
                  <h3 className="text-xl font-bold dark:text-white">{title}</h3>
                  <p className="text-sm mt-2 dark:text-gray-300">{description}</p>
                </div>
              </motion.div>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Devops;
