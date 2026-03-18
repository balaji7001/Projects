import { useNavigate } from "react-router-dom";
import HeroAnimation from "./HeroAnimation";

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section className="relative min-h-screen text-white flex items-center">

        <div className="w-full max-w-[1400px] mx-auto
                        px-6 md:px-12 lg:px-20  text-orange-300
                        flex flex-col md:flex-row
                        items-center justify-between">

            <div className="max-w-xl text-center md:text-left">

            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
                Crafting Digital <br /> Excellence  👨‍💻
            </h1>

            <p className="text-gray-400 mb-8">
                We build high-performance, modern web solutions
                for ambitious brands.
            </p>

            <button
                onClick={() => navigate("/projects")}
                className="relative px-8 py-3 border border-yellow-500
                        text-yellow-500 overflow-hidden
                        group transition duration-500"
            >
                <span className="relative z-10 group-hover:text-black transition">
                View Projects
                </span>

                <span className="absolute inset-0 bg-yellow-500
                                scale-x-0 group-hover:scale-x-100
                                origin-left transition-transform duration-500"></span>
            </button>

            </div>

            <div className="hidden md:block relative mt-16 md:mt-0">
            <HeroAnimation />
            </div>

        </div>

        </section>
    );
}
