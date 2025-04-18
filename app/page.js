'use client';

import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <NavBar navigation={false} />
      <br />
      <Header />
      <About />
      <Education />
      <Experience />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
