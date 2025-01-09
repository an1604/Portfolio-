'use client';

import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeProvider } from "./context/ThemeContext";


export default function Home() {
  return (
    <ThemeProvider>
      <NavBar navigation={false} />
      <br />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
