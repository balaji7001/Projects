export default function Pricing() {
    return (
        <section className="text-white text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl font-light mb-16 text-center text-sky-500 flex gap-3 justify-center items-center">
            Pricing <img
                src="/Pricing.gif"
                alt="Pricing"
                className="w-10 h-10 object-contain rounded-3xl"
            />
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

            {/* Basic */}
            <div className="group relative bg-[#111] border border-white/10
                            rounded-2xl p-10 overflow-hidden
                            transition-all duration-500
                            hover:-translate-y-3 hover:border-sky-400
                            hover:shadow-[0_0_50px_rgba(56,189,248,0.6)]">

                <div className="absolute inset-0 rounded-2xl opacity-0
                                group-hover:opacity-100 transition-opacity duration-500
                                border border-sky-400
                                shadow-[0_0_50px_rgba(56,189,248,0.7)]"></div>

                <div className="relative z-10">
                <h3 className="text-2xl mb-4">Basic 🤖 </h3>
                <p className="text-4xl text-sky-400 mb-6">₹15,000</p>
                <p className="text-gray-400 text-sm">
                    Static responsive website.
                </p>
                </div>
            </div>

            {/* Pro */}
            <div className="group relative bg-[#111] border border-white/10
                            rounded-2xl p-10 overflow-hidden
                            transition-all duration-500
                            hover:-translate-y-3 hover:border-purple-400
                            hover:shadow-[0_0_50px_rgba(168,85,247,0.6)]">

                <div className="absolute inset-0 rounded-2xl opacity-0
                                group-hover:opacity-100 transition-opacity duration-500
                                border border-purple-400
                                shadow-[0_0_50px_rgba(168,85,247,0.7)]"></div>

                <div className="relative z-10">
                <h3 className="text-2xl mb-4">Pro ☠️ </h3>
                <p className="text-4xl text-purple-400 mb-6">₹30,000</p>
                <p className="text-gray-400 text-sm">
                    Dynamic website + API integration.
                </p>
                </div>
            </div>

            {/* Premium */}
            <div className="group relative bg-[#111] border border-white/10
                            rounded-2xl p-10 overflow-hidden
                            transition-all duration-500
                            hover:-translate-y-3 hover:border-pink-400
                            hover:shadow-[0_0_50px_rgba(236,72,153,0.6)]">

                <div className="absolute inset-0 rounded-2xl opacity-0
                                group-hover:opacity-100 transition-opacity duration-500
                                border border-pink-400
                                shadow-[0_0_50px_rgba(236,72,153,0.7)]"></div>

                <div className="relative z-10">
                <h3 className="text-2xl mb-4">Premium 👑 </h3>
                <p className="text-4xl text-pink-400 mb-6">₹60,000+</p>
                <p className="text-gray-400 text-sm">
                    Full-stack product solution.
                </p>
                </div>
            </div>

            </div>
        </div>
        </section>
    );
}
