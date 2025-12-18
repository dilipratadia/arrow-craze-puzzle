import { motion } from 'framer-motion';
import { ArrowUp, CheckCircle, Heart, PlayCircle } from 'lucide-react';

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
                        <div className="aspect-square rounded-2xl bg-[#111] border border-white/10 p-8 relative overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00E676]/10 to-transparent"></div>
                            <div className="text-center z-10">
                                <ArrowUp size={80} className="text-[#00E676] mx-auto mb-4 animate-bounce" />
                                <p className="text-2xl font-bold">Level 125</p>
                                <p className="text-sm text-gray-500">Sample Game View</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
