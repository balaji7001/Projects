import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const techStack = [
    "HTML",
    "CSS",
    "Java Script",
    "React.js",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Tailwind",
    "Python",
    "Flask",
    "Django",
    "Machine Learning",
    "Deep Learning",
    "Artificial Intelligence",
    "Data Science"
    ];

    export default function HeroAnimation() {
    const [orbits, setOrbits] = useState([0, 1, 2]);
    const [center, setCenter] = useState(2);
    const [nextIndex, setNextIndex] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
        setOrbits((prev) => {
            const newCenter = prev[2];
            setCenter(newCenter);

            const updated = [
            nextIndex,
            prev[0],
            prev[1]
            ];

            setNextIndex((nextIndex + 1) % techStack.length);
            return updated;
        });
        }, 3000);

        return () => clearInterval(interval);
    }, [nextIndex]);

    return (
        <div className="relative w-[340px] h-[340px] flex items-center justify-center">

        {/* ================= CENTER ================= */}
        <div
            className="relative w-[140px] h-[140px] rounded-full
                    bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700
                    shadow-[0_0_50px_rgba(168,85,247,0.6)]
                    flex items-center justify-center z-10"
        >
            <AnimatePresence mode="wait">
            <motion.span
            key={center}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="absolute text-white
                        text-xl font-medium
                        text-center
                        leading-tight
                        tracking-wide"
            >
            {techStack[center]}
            </motion.span>
            </AnimatePresence>
        </div>

        {/* ================= OUTER ORBIT ================= */}
        <motion.div
            animate={{
            rotate: 360,
            boxShadow: [
                "0 0 10px rgba(168,85,247,0.2)",
                "0 0 25px rgba(168,85,247,0.4)",
                "0 0 10px rgba(168,85,247,0.2)"
            ]
            }}
            transition={{
            rotate: { repeat: Infinity, duration: 3, ease: "linear" },
            boxShadow: { repeat: Infinity, duration: 5, ease: "easeInOut" }
            }}
            className="absolute w-[390px] h-[390px] rounded-full border border-purple-500/30"
        >
            <OrbitLabel radius={175} text={techStack[orbits[0]]} />
        </motion.div>

        {/* ================= MIDDLE ORBIT ================= */}
        <motion.div
            animate={{
            rotate: -360,
            boxShadow: [
                "0 0 8px rgba(59,130,246,0.2)",
                "0 0 20px rgba(59,130,246,0.4)",
                "0 0 8px rgba(59,130,246,0.2)"
            ]
            }}
            transition={{
            rotate: { repeat: Infinity, duration: 5, ease: "linear" },
            boxShadow: { repeat: Infinity, duration: 3.5, ease: "easeInOut" }
            }}
            className="absolute w-[290px] h-[290px] rounded-full border border-blue-500/30"
        >
            <OrbitLabel radius={195} text={techStack[orbits[1]]} />
        </motion.div>

        {/* ================= INNER ORBIT ================= */}
        <motion.div
            animate={{
            rotate: 360,
            boxShadow: [
                "0 0 6px rgba(99,102,241,0.2)",
                "0 0 18px rgba(99,102,241,0.4)",
                "0 0 6px rgba(99,102,241,0.2)"
            ]
            }}
            transition={{
            rotate: { repeat: Infinity, duration: 4, ease: "linear" },
            boxShadow: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
            }}
            className="absolute w-[230px] h-[230px] rounded-full border border-indigo-500/30"
        >
            <OrbitLabel radius={110} text={techStack[orbits[2]]} />
        </motion.div>
        </div>
    );
    }

    function OrbitLabel({ radius, text }) {
    return (
        <div
        className="absolute left-1/2 top-1/2"
        style={{
            transform: `translate(-50%, -50%) translateY(-${radius}px)`
        }}
        >
        <div className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm shadow-md">
            {text}
        </div>
        </div>
    );
}
