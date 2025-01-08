'use client'
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode,setIsDarkMode] = useState(false);

  // Detect the preferences on the os and set the mode of the useState variable accordingly
  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage)) && 
      window.matchMedia('(prefers-color-scheme: dark)').matches){
        setIsDarkMode(true);
    }else{
      setIsDarkMode(false);
    }
  },[])

  useEffect(()=>{
    if (isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkMode])

  return (
    <>
    <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} navigation={false}/>
    <br></br>
    <Header isDarkMode={isDarkMode}/>
    <About isDarkMode={isDarkMode}/>
    <Services isDarkMode={isDarkMode}/>
    <Work isDarkMode={isDarkMode}/>
    <Contact isDarkMode={isDarkMode}/>
    <Footer isDarkMode={isDarkMode}/>
    </>
  );
}
