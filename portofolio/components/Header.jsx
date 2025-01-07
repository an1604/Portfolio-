import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4">
      <div>
        {/* TODO: REPLACE THE PROFILE IMAGE! */}
        <Image src={assets.profile_img} alt="Profile picture of Aviv Nataf" className="rounded-full w-32" />
      </div>

      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Aviv Nataf <Image src={assets.hand_icon} alt="Waving hand icon" className="w-6" />
      </h3>

      <h1 className="text-xl sm:text-4xl lg:text-5xl font-Ovo">
            Junior Developer / Cybersecurity Enthusiast.
     </h1>


      <p className="max-w-2xl mx-auto font-Ovo">
        Aspiring developer skilled in Python, Java, full-stack, AI, and cybersecurity, passionate about innovative, impactful solutions.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2
          dark:bg-transparent"
        >
          Contact me <Image src={assets.right_arrow_white} alt="Right arrow icon" className="w-4" />
        </a>

        <a
          href="/aviv_nataf_resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My resume <Image src={assets.download_icon} alt="Download icon" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
