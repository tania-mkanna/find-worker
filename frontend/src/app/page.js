"use client"
import Image from "next/image";
import NavBar from "../../components/NavBar/navBar";
import Hero from "../../components/Hero/heroSection";
import About from "../../components/About/AboutSection";
import Contact from "../../components/Contact/ContactSection";
import Form from "../../components/Form/FormSection";


export default function Home() {


  // scroll to home

  const scrollToHero=()=>{
    const HeroSection=document.getElementById("hero");
    if(HeroSection){
      HeroSection.scrollIntoView({behavior:"smooth"});
    }
  };
  // 
  // scroll to about
  
  const scrollToAbout=()=>{
    const aboutSection=document.getElementById("about");
    if(aboutSection){
       aboutSection.scrollIntoView({behavior:"smooth"});
    }
   
  };
  // 
  // scroll to contact
  const scrollToContact=()=>{

    const contactSection=document.getElementById("contactSection");
    if(contactSection){
      contactSection.scrollIntoView({behavior:"smooth"});
    }
    
  };
   const scrollToForm=()=>{

    const formSection=document.getElementById("loginSec");
    if(formSection){
      formSection.scrollIntoView({behavior:"smooth"});
    }
    
  };

  

  return (
    <div>
      <NavBar  clickAbout={scrollToAbout} clickHero={scrollToHero} clickContact={scrollToContact} clickForm={scrollToForm}/>
      <Hero/>
      <About />
      <Contact/>
      <Form/>
    </div>
  );

}
