
import Image from "next/image";
import "./ContactSection.css"
import { BlackButton } from "../ButtonBalck/BlackButton";
export default function Contact(){

    return(

        <main id="contactSection">
            <div className="content">
                <h1>Contact Us</h1>
                <p>feel free to contact us for any questions or inquiries</p>
            </div>
            <div className="contact-container">
                
                <div className="left">
                    {/* 2)Address */}
                    <div className="box">
                            
                            <Image
                            alt="addressIcon"
                            src="/AddressIcon.png"
                            height={3}
                            width={50}
                            className="icon"
                        ></Image>
                        
                        <div className="text" >
                            <h2>Address</h2>
                            <p>Tyre</p>
                        </div>

                    </div>

                    {/* 2)phone */}
                    <div className="box">
                        <Image
                            alt="phoneIcon"
                            src="/PhoneIcon.png"
                            height={3}
                            width={50}
                            className="icon"
                        ></Image>
                        <div className="text">
                            <h2>Phone</h2>
                            <p>+96181034376</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="box">
                        <Image
                            alt="EmailIcon"
                            src="/EmailIcon.png"
                            height={3}
                            width={50}
                            className="icon"
                        ></Image>
                        <div className="text">
                            <h2>Email</h2>
                            <p>findFinxer@hotmial.com</p>
                        </div>
                    </div>

                </div>

                <div className="right">
                    <form  action="https://api.web3forms.com/submit" method="POST"> 

                        <input type="hidden" name="access_key" value="200a5b08-dc82-4ad5-b2f2-1e2a39a767d6" />
                        <input type="text" name="FirstName" className="FirstName" placeholder="First Name"  required/>
                        <input type="text" name="LastName" className="LastName" placeholder="Last Name" required/>
                        <input type="email" name="email" className="email" placeholder="Email" required/>
                        <input type="text" name="mobile" className="mobile" placeholder="Mobile" required/>
                        <h4>Type Your Message Here...</h4>
                        <textarea placeholder="Type Here..." required></textarea>
                        <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                        
                        <BlackButton lable="Send" />
                    </form>
                    
                </div>
                
            </div>
        </main>
    );
}