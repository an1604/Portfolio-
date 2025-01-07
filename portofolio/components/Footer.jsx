import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="Logo" className="w-36 mx-auto mb-2" />
      </div>
      <div className="w-max flex items-center gap-2 mx-auto">
        <Image src={assets.mail_icon} alt="Email Icon" className="w-6" />
        <span>nataf12386@gmail.com</span>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t
      border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; {new Date().getFullYear()} Aviv Nataf. All rights reserved.</p>
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
                src={assets.github}
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
