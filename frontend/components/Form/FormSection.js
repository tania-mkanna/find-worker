import { useRef, useState } from "react";
import "./FormSection.css"
import { GreenButton } from "../ButtonGreen/GreenButton";
import { BlackButton } from "../ButtonBalck/BlackButton";
export default function Form(){

    // user type
    const[userType,setUserType]=useState("user");

    const user=()=> setUserType("user");
    const proficiency=()=>setUserType("proficiency");


    // form type
    const [formType,setFormType]=useState("login");

    const signup=()=>setFormType("signup");
    const login=()=>setFormType("login");


    // handle Login new 
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        };

        const res = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            const userData = await res.json();
            localStorage.setItem("user", JSON.stringify(userData)); // Save user globally
            alert("Login successful!");
            window.location.href = "/profile"; // Navigate to profile page
        } else {
            alert("Invalid credentials");
        }
    };

        


    return(
        <>
            <div id="loginSec" className="loginSec">
                <div className="userType">
                    <GreenButton 
                        lable="User"
                        className={`${userType ==="user"?"selected" :""}`}
                        onClick={user}
                    />
                    <GreenButton 
                        lable="Proficiency"
                        className={` ${userType ==="proficiency"?"selected" :""}`}
                        onClick={proficiency}
                    />
                    {/* <button className={`userBtn ${userType ==="user"?"selected" :""}`} onClick={user}>User</button>
                    <button className={`userBtn ${userType ==="proficiency"?"selected" :""}`} onClick={proficiency}>Proficiency</button> */}
                </div>
                
                <div className="form">
                    {formType === "login" ? (
                        
                        
                        <form>
                            <input type="email" name="email" className="email" placeholder="Email" required />
                            <input type="password" name="password" className="password" placeholder="Password" required />
                            {userType !== "proficiency" && (
                                <input type="text" name="address" className="address" placeholder="address" required />

                            )}
                            
                            <BlackButton lable="Login" onClick={handleLogin}/>
                           

                            <p>Don't have an account </p>
                            
                            <h4 onClick={signup}>Create an Acoount</h4>
                        </form>
                        
                        
                    ):(
                        <form>
                            <input type="name" name="FullName" className="fullName" placeholder="Full Name"  required/>
                            <input type="number" name="phoneNumber" className="phoneNumber" placeholder="Phone Number"  />
                            <input type="email" name="email" className="email" placeholder="Email"  required />
                            <input type="password" name="password" className="password" placeholder="Password"  required />
                            <input type="text" name="address" className="address" placeholder="address"  required />
                           
                            {userType === "proficiency" && (
                              <input type="text" name="TypeOfWork" className="TypeOfWork" placeholder="Type Of Work"  required />  
                            )}
                           
                            <BlackButton 
                            lable="Sign Up" 
                            
                            />


                            <p>Already have an account </p>
                            <h4 onClick={login}>Back to Login</h4>
                            
                        </form>
                    )}

                </div>
  
            </div>
            

        </>


    );

    
  
    
}


