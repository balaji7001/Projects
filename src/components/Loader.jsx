import { motion } from "framer-motion";

export default function Loader() {
    const line1 = "Welcome To";
    const line2 = "My World! ";

    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-[99999]">
            <div className="flex flex-col items-center space-y-4">

                {/* Line 1 - original size */}
                <div className="flex space-x-1">
                    {line1.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.6,
                                ease: "easeOut"
                            }}
                            className="text-4xl md:text-6xl font-light tracking-widest text-white"
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                {/* Line 2 - larger size, delayed after line 1 finishes + glow pulse */}
                <motion.div
                    className="flex space-x-1"
                    initial={{ textShadow: "0 0 0px rgba(255,255,255,0)" }}
                    animate={{ textShadow: "0 0 30px rgba(255,255,255,0.9), 0 0 60px rgba(180,100,255,0.7), 0 0 100px rgba(140,60,255,0.5)" }}
                    transition={{
                        delay: line1.length * 0.08 + line2.length * 0.08 + 0.3,
                        duration: 1.2,
                        ease: "easeOut",
                    }}
                >
                    {line2.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: line1.length * 0.08 + index * 0.08,
                                duration: 0.6,
                                ease: "easeOut"
                            }}
                            className="text-5xl md:text-7xl font-light tracking-widest text-white"
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.div>

            </div>
        </div>
    );
}
