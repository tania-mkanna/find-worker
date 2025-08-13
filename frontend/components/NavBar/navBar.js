import Link from "next/link";
import "./navBar.css"

export default function NavBar({clickAbout, clickHero,clickContact,clickForm}){

    return(
        <nav className="largeScreen">
            <div >
                <Link href="/" >Find Fixer</Link>
            </div>
            
                <div className="navLinks">
                    <a  onClick={clickHero} >Home</a>
                    <a onClick={clickAbout}>About</a>
                    <a onClick={clickContact}>Contact</a>
                    <Link href="/proficiencies">proficiencies</Link>
                    <a onClick={clickForm}>Login</a>
                </div>

            
            <div className="flex items-center space-x-4"></div>
        </nav>
    );
}