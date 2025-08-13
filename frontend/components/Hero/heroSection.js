import Link from "next/link";
import "./heroSection.css";
import { GreenButton } from "../ButtonGreen/GreenButton";
import Image from "next/image";
export default function Hero(){

    return (
        <main id="hero">

            <div className="header-contain" >
                {/* left header */}

                <div className="left-header">
                    <h1>Need help? Find your fixer.</h1>
                    <p> Quickly connect with trusted professionals near you for all your home needs — fast, easy, and reliable.</p>
                    <div>
                        <Link href="/professionals">


                        <GreenButton lable="Find Proficiencies"/>
                   
                        </Link>

                    </div>
                </div>
                     {/* <button className="btn">Find Proficiencies</button> */}
                {/* right headr */}

                <div className="right-header">
                    <Image
                    alt="Local handyman working"
                    src="/handyman.png"
                    width={650}
                    height={650}
                    className="handyman" 
                    />
                </div>
            </div>
        </main>
    );
}