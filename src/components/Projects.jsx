export default function Projects() {
    return (
        <section className="text-white text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl font-light mb-16 text-center text-purple-400">
            Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="group relative bg-[#111] border border-white/10
                            rounded-2xl p-6 overflow-hidden
                            transition-all duration-500
                            hover:-translate-y-3 hover:border-indigo-400
                            hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]">

                <h3 className="text-xl mb-3">E-Commerce Platform</h3>
                <p className="text-gray-400 text-sm">
                Scalable commerce solution with secure payment integration.
                </p>

                {/* Existing Glow Blob */}
                <div className="absolute -bottom-16 -right-16
                                w-48 h-48 bg-indigo-500/30
                                blur-[120px] rounded-full pointer-events-none
                                opacity-70 group-hover:opacity-100
                                transition-opacity duration-500">
                </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-[#111] border border-white/10
                            rounded-2xl p-6 overflow-hidden
                            transition-all duration-500
                            hover:-translate-y-3 hover:border-purple-400
                            hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]">

                <h3 className="text-xl mb-3">Portfolio Website</h3>
                <p className="text-gray-400 text-sm">
                High-performance animated portfolio for creative professionals.
                </p>

                <div className="absolute -bottom-16 -right-16
                                w-48 h-48 bg-purple-500/30
                                blur-[120px] rounded-full pointer-events-none
                                opacity-70 group-hover:opacity-100
                                transition-opacity duration-500">
                </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-[#111] border border-white/10
                            rounded-2xl p-6 overflow-hidden
                            transition-all duration-500
                            hover:-translate-y-3 hover:border-pink-400
                            hover:shadow-[0_0_40px_rgba(236,72,153,0.5)]">

                <h3 className="text-xl mb-3">SaaS Dashboard</h3>
                <p className="text-gray-400 text-sm">
                Modern admin dashboard with analytics & data visualization.
                </p>

                <div className="absolute -bottom-16 -right-16
                                w-48 h-48 bg-pink-500/30
                                blur-[120px] rounded-full pointer-events-none
                                opacity-70 group-hover:opacity-100
                                transition-opacity duration-500">
                </div>
            </div>

            </div>
        </div>
        </section>
    );
}
