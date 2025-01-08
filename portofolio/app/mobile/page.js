'use client';
import React from 'react';
import NavBar from '@/components/NavBar';
import { motion } from 'framer-motion'; 
import {  mobileData } from '@/assets/assets';

function Mobile() {
  return (
    <>
      <NavBar navigation={true}/>
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
          className="text-center text-5xl font-Ovo"
        >
          Mobile
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        >
       As a self-motivated and fast learner, I excel at acquiring new skills quickly and accurately. 
       With expertise in React and React Native, 
       I have the ability to develop robust and user-friendly mobile applications for both iOS and Android platforms, 
       leveraging modern frameworks and best practices to deliver high-quality solutions.

        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
        >
          {mobileData.map(({ title, description, bgImage, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg duration-500"
              >
                {/* Background Image
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${bgImage})` }}
                ></div> */}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 duration-300"></div>

                {/* Content */}
                <div className="relative z-10 p-6 text-white">
                  <h3 className="text-xl font-bold text-black">{title}</h3>
                  <p className="text-sm mt-2 text-black">{description}</p>
                </div>
              </motion.div>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Mobile;
