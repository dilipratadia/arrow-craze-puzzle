import { motion } from 'framer-motion';
import { CheckCircle, Heart, PlayCircle } from 'lucide-react';

const Step = ({ icon, title, desc }) => (
    <div className="flex items-start gap-4">
        <div className="mt-1 bg-[#1a1a1a] p-2 rounded-lg border border-white/5">{icon}</div>
        <div>
            <h4 className="font-bold text-lg mb-1">{title}</h4>
            <p className="text-gray-400 text-sm">{desc}</p>
        </div>
    </div>
);

const About = () => {
    return (
        <section id="about" className="py-20 bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Orbitron']">
                            How to <span className="text-[#00E676]">Play</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Arrow Craze Puzzle is designed to be simple to learn but hard to master. As you progress, the levels become more intricate.
                        </p>

                        <div className="space-y-6">
                            <Step
                                icon={<CheckCircle className="text-[#00E676]" size={24} />}
                                title="Tap to Clear"
                                desc="Find the arrow that has a clear path and tap it to fly away."
                            />
                            <Step
                                icon={<Heart className="text-[#00E676]" size={24} />}
                                title="Lives System"
                                desc="You can make up to 3 mistakes. Be careful and think before you tap!"
                            />
                            <Step
                                icon={<PlayCircle className="text-[#00E676]" size={24} />}
                                title="Second Chance"
                                desc="Out of moves? Watch a quick reward video to get 3 more lives and continue."
                            />
                        </div>
                    </motion.div>

                    {/* Game Preview Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-12 lg:mt-0 relative"
                    >
                        <div className="rounded-2xl bg-[#111] border border-white/10 p-4 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00E676]/10 to-transparent"></div>
                            <img
                                src="GamePreview.png"
                                alt="Arrow Craze Puzzle Game Preview"
                                className="w-full h-auto rounded-xl relative z-10 shadow-[0_0_30px_rgba(0,230,118,0.2)]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
