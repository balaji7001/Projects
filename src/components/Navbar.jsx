import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="relative z-50 text-white px-10 py-6 flex justify-between items-center">
        <h1 className="text-xl font-light tracking-widest">
            ME 😎
        </h1>

        <div className="space-x-8 text-sm">
            {/* Scroll links */}
            <a href="#services" className="hover:text-yellow-500 transition">
            Services
            </a>

            <a href="#pricing" className="hover:text-yellow-500 transition">
            Pricing
            </a>

            {/* Router link */}
            <Link to="/projects" className="hover:text-yellow-500 transition">
            Projects
            </Link>
            <a href="#Contact" className="hover:text-yellow-500 transition">
            Contact
            </a>
            <a href="#Connect US" className="hover:text-yellow-500 transition">
            Connect US
            </a>
        </div>
        </nav>
    );
}
