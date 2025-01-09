import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { useTheme } from '@/app/context/ThemeContext';

const Footer = () => {
  const isDarkMode = useTheme();
  
  return (
    <div className="mt-20">
      {/* Logo Section */}
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="w-36 mx-auto mb-2"
        />
      </div>

      {/* Email Section */}
      <div className="w-max flex items-center gap-2 mx-auto">
        <Image
          src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
          alt="Email Icon"
          className="w-6"
        />
        <span>nataf12386@gmail.com</span>
      </div>

      {/* Footer Bottom Section */}
      <div
        className="text-center sm:flex items-center justify-between border-t
        border-gray-400 mx-[10%] mt-12 py-6"
      >
        {/* Copyright Section */}
        <p>&copy; {new Date().getFullYear()} Aviv Nataf. All rights reserved.</p>

        {/* Social Media Links */}
        <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/aviv-nataf-757aa1247/"
            >
              <Image
                src={assets.linkedin}
                alt="LinkedIn Icon"
                className="w-8 h-8 hover:opacity-80 transition-opacity duration-300"
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/an1604"
            >
              <Image
                src={isDarkMode ? assets.github_dark : assets.github}
                alt="GitHub Icon"
                className="w-8 h-8 hover:opacity-80 transition-opacity duration-300"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
