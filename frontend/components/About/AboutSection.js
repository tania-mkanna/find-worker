"use client";
import Image from "next/image";
import "./AboutSection.css"

export default function About(){
    return(
        <div className="About-contaioner" id="about"> 
            <div className="left">
                <h1>About Us</h1>
                <p>We connect you with trusted professionals in your community for all your home and business needs. Whether you need an electrician, plumber, or cleaner, we carefully verify every expert to ensure quality and reliability.Our goal is to make finding reliable services simple and hassle-free. With Find Fixer, you can trust that you’re getting the best help without worrying about the details.Join thousands of happy users who rely on us for fast, trustworthy service — because your satisfaction is our priority.</p>
            </div>
            <div className="right">
                <Image
                alt="AboutUs"
                src="/AboutUs.png"
                height={450}
                width={450}
                className="AboutImages"
                id="top"
                ></Image>
            </div>
                
        </div>
    );
}