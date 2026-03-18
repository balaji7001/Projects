export default function Services() {
    return (
        <section className="text-white text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl font-light mb-16 text-center text-pink-500 flex gap-3 justify-center items-center">
            Services <img
                src="/Services.gif"
                alt="Services"
                className="w-10 h-10 object-contain rounded-3xl"
            />
            </h2>
            <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="group relative bg-[#111] border border-white/10
                            rounded-2xl p-8 overflow-hidden
                            transition-all duration-500
                            hover:-translate-y-3 hover:border-sky-400
                            hover:shadow-[0_0_40px_rgba(56,189,248,0.5)]">

                <div className="absolute inset-0 rounded-2xl opacity-0
                                group-hover:opacity-100 transition-opacity duration-500
                                border border-sky-400
                                shadow-[0_0_40px_rgba(56,189,248,0.6)]"></div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                                transition-opacity duration-500
                                bg-sky-500/10 blur-2xl"></div>

                <div className="relative z-10">
                <h3 className="text-2xl mb-4 flex items-center gap-3">
                    Web Development
                    <img
                        src="/UiUx.gif"
                        alt="web development"
                        className="w-10 h-10 object-contain rounded-3xl"
                    />
                </h3>
                <p className="text-gray-400">
                    High-performance modern websites built for scale.
                </p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-[#111] border border-white/10
                            rounded-2xl p-8 overflow-hidden
                            transition-all duration-500
                            hover:-translate-y-3 hover:border-purple-400
                            hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]">

                <div className="absolute inset-0 rounded-2xl opacity-0
                                group-hover:opacity-100 transition-opacity duration-500
                                border border-purple-400
                                shadow-[0_0_40px_rgba(168,85,247,0.6)]"></div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                                transition-opacity duration-500
                                bg-purple-500/10 blur-2xl"></div>

                <div className="relative z-10">
                <h3 className="text-2xl mb-4 flex items-center gap-3">
                    UI / UX Designs
                    <img
                        src="/Web Development.gif"
                        alt="Ui / Ux"
                        className="w-10 h-10 object-contain rounded-3xl"
                    />
                </h3>
                <p className="text-gray-400">
                    Clean, elegant, and user-focused design systems.
                </p>
                </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-[#111] border border-white/10
                            rounded-2xl p-8 overflow-hidden
                            transition-all duration-500
                            hover:-translate-y-3 hover:border-pink-400
                            hover:shadow-[0_0_40px_rgba(236,72,153,0.5)]">

                <div className="absolute inset-0 rounded-2xl opacity-0
                                group-hover:opacity-100 transition-opacity duration-500
                                border border-pink-400
                                shadow-[0_0_40px_rgba(236,72,153,0.6)]"></div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                                transition-opacity duration-500
                                bg-pink-500/10 blur-2xl"></div>

                <div className="relative z-10">
                <h3 className="text-2xl mb-4 flex items-center gap-3">
                    Full Stack Applications
                    <img
                        src="/Full Stack.gif"
                        alt="Full Stack"
                        className="w-10 h-10 object-contain rounded-3xl"
                    />
                </h3>

                <p className="text-gray-400">
                    Complete end-to-end product engineering solutions.
                </p>
                </div>
            </div>

            </div>
        </div>
        </section>
    );
}
