import Link from "next/link";
import "./footer.css"
export default function Footer(){

    return(
        <footer>
            <div className="footerContains">
                <div className="columns col1">
                    <h2>Find Fixer</h2>
                    <p>© 2025 Find Fixer. Helping you find trusted professionals near you.</p>
                </div>

                <div className="columns col2">
                    <h2>Quick Links</h2>
                    <Link href="/About">About</Link>
                    <Link href="/Contact">Contact</Link>
                </div>

                <div className=" columns col3">
                    <h2>Support</h2>
                    <Link href="/">Help</Link>
                    <Link href="/">FAQs</Link>
                    <Link href="/">Term & Conditions</Link>
                    <Link href="/">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}