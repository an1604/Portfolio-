import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useTheme } from "@/app/context/ThemeContext";

const NavBar = ({navigation}) => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(scrollY > 50){
        setIsScroll(true);
      }else{
        setIsScroll(false);
      }
    })
  },[])

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 
        flex items-center justify-between z-50 
        ${isScroll ? "bg-white bg-opacity-50 bachdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white-/20" : ""}`}
      >
        <a href={navigation ? "/" :"#top"}>
          <Image
            src={isDarkMode ? assets.logo_dark: assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt=""
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : 
            "bg-white shadow-sm bg-opacity-50 dark:border dark:border-whire/50 dark:bg-transparent"}`}
        >
          <li>
            <a className="font-Ovo" href={navigation ? "/#top" : "#top"}>
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href={navigation ? "/#about" : "#about"}>
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href={navigation ? "/#experience" : "#experience"}>
              Experience
            </a>
          </li>
          <li>
            <a className="font-Ovo" href={navigation ? "/#services" : "#services"}>
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href={navigation ? "/#work" : "#work"}>
              My works
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            {/* LinkedIn Link */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/aviv-nataf-757aa1247/"
            >
              <Image
                src={assets.linkedin}
                alt="LinkedIn Icon"
                className="w-6 h-6 hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            
            {/* GitHub Link */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/an1604"
            >
              <Image
                src={isDarkMode ? assets.github_dark : assets.github}
                alt="GitHub Icon"
                className="w-6 h-6 hover:opacity-80 transition-opacity duration-300"
              />
            </a>
          </div>

          <button onClick={()=>setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6" />
          </button>

          <a
            href={navigation ? '/#contact' : "#contact"}
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500
                rounded-full ml-4 font-Ovo dark:border-white/50 "
          >
            Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className="w-3" alt="" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 
            fixed top-0 bottom-0 right-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 
             dark:bg-darkHover dark:text-white ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className="absolute right-6 top-6"
            onClick={closeMenu}
          >
            <Image 
              src={isDarkMode ? assets.close_white : assets.close_black} 
              alt="" 
              className="w-4 cursor-pointer" 
            />
          </div>

          {/* Social Media Links in Mobile Menu */}
          <div className="flex items-center justify-center gap-4 mb-6 mt-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/aviv-nataf-757aa1247/"
            >
              <Image
                src={assets.linkedin}
                alt="LinkedIn Icon"
                className="w-7 h-7 hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/an1604"
            >
              <Image
                src={isDarkMode ? assets.github_dark : assets.github}
                alt="GitHub Icon"
                className="w-7 h-7 hover:opacity-80 transition-opacity duration-300"
              />
            </a>
          </div>

          <li>
            <a className="font-Ovo" href={navigation ? "/#top" : "#top"} onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href={navigation ? "/#about" : "#about"} onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href={navigation ? "/#experience" : "#experience"} onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li>
            <a className="font-Ovo" href={navigation ? "/#services" : "#services"} onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href={navigation ? "/#work" : "#work"} onClick={closeMenu}>
              My works
            </a>
          </li>
          <li>
            <a className="font-Ovo" href={navigation ? "/#contact" : "#contact"} onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
