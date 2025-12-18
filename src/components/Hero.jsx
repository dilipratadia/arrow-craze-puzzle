import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <motion.div
                    animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-[10%] text-[#00E676]"
                >
                    <ArrowUp size={48} />
                </motion.div>
                <motion.div
                    animate={{ y: [10, -10, 10], rotate: [45, 50, 45] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-40 right-[15%] text-[#00E676]"
                >
                    <ArrowUp size={64} />
                </motion.div>
                <motion.div
                    animate={{ y: [-15, 5, -15], rotate: [-12, -7, -12] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-20 left-[20%] text-white opacity-50"
                >
                    <ArrowUp size={32} />
                </motion.div>
                <div className="bg-gradient-to-b from-[#00E676]/5 to-transparent absolute inset-0" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight font-['Orbitron'] mb-6 leading-tight"
                >
                    UNTANGLE THE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-emerald-400">
                        PUZZLE
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-4 max-w-2xl mx-auto text-xl text-gray-400"
                >
                    The trending puzzle game where you tap to clear. Challenge your mind with progressive difficulty and daily brain teasers.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-10 flex justify-center gap-4"
                >
                    <a
                        href="https://play.google.com/store/apps/details?id=com.dividivi.arrowcrazepuzzle"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 bg-[#00E676] text-black px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(0,230,118,0.4)] hover:shadow-[0_0_50px_rgba(0,230,118,0.6)] hover:-translate-y-1 transition-all duration-300"
                    >
                        <img
                            src="icons8-google-play-store-96.png"
                            alt="Google Play Store"
                            className="w-8 h-8"
                        />
                        Download on Google Play
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
