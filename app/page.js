'use client';

import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import About from "@/components/About";
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
      <Experience />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
