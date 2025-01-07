import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const NavBar = () => {
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
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 
        flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 bachdrop-blur-lg shadow-sm" : ""}`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt=""
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : 
            "bg-white shadow-sm bg-opacity-50"}`}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My works
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500
                rounded-full ml-4 font-Ovo"
          >
            Contact <Image src={assets.arrow_icon} className="w-3" alt="" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 right-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className="absolute right-6 top-6"
            onClick={closeMenu}
          >
            <Image src={assets.close_black} alt="" className="w-4 cursor-pointer" />
          </div>

          <li>
            <a className="font-Ovo" href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work" onClick={closeMenu}>
              My works
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
