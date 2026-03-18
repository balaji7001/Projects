export default function CTA() {
  const phoneNumber = "+91 9xxxxxxxxx "; // 🔥 Replace with your number (with country code)
    const message = encodeURIComponent(
        "Hi, Are you interested in building a premium website with Us "
    );


    return (
        <section className="relative text-white text-white py-32 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[500px] h-[500px] bg-pink-500/20 blur-[180px] rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-6">

            <h2 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
            Let’s Build Something <span className="text-pink-500">Extraordinary</span>
            </h2>

            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            High-performance. Scalable. Premium digital experiences
            tailored for ambitious brands.
            </p>

            <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-12 py-4 border border-pink-500
                        text-pink-500 overflow-hidden group transition duration-500 rounded-2xl  "
            >
            <span className="relative z-10 group-hover:text-black transition ">
                Start Your Project
            </span>

            <span className="absolute inset-0 bg-pink-500
                            scale-x-0 group-hover:scale-x-100
                            origin-left transition-transform duration-500 "></span>
            </a>

        </div>
        </section>
    );
}
