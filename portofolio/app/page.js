'use client'
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
    <NavBar/>
    <br></br>
    <Header/>
    <About/>
    <Services/>
    <Works/>
    </>
  );
}
