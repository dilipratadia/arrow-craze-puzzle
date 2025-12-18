import { motion } from 'framer-motion';
import {
    Brain,
    ZoomIn,
    CalendarCheck,
    CloudUpload,
    Lightbulb,
    Volume2
} from 'lucide-react';

const FeatureCard = ({ icon, title, desc }) => (
    <motion.div
        whileHover={{ y: -5, borderColor: '#00E676' }}
        className="bg-[#161616] p-8 rounded-2xl border border-white/5 transition-colors duration-300"
    >
        <div className="text-[#00E676] mb-4 bg-[#00E676]/10 w-fit p-3 rounded-xl">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{desc}</p>
    </motion.div>
);

const featuresData = [
    {
        icon: <Brain size={40} />,
        title: "Mind-Bending Puzzles",
        desc: "Find the correct arrow to untangle the block. Tap to remove it and clear the puzzle one by one."
    },
    {
        icon: <ZoomIn size={40} />,
        title: "Zoom & Control",
        desc: "Complete control over your view. Zoom in and out to analyze complex levels and find the hidden solution."
    },
    {
        icon: <CalendarCheck size={40} />,
        title: "Daily Challenges",
        desc: "Check the calendar daily for high-difficulty puzzles. Test your skills with new content every day."
    },
    {
        icon: <CloudUpload size={40} />,
        title: "Secure Cloud Save",
        desc: "Never lose your progress. Uninstall and reinstall freely—your data is secure and restores automatically."
    },
    {
        icon: <Lightbulb size={40} />,
        title: "Helpful Hints",
        desc: "Stuck on a level? Use the hint system to reveal which arrow to tap next."
    },
    {
        icon: <Volume2 size={40} />,
        title: "Immersive Feel",
        desc: "Engaging sound effects and haptic feedback make every tap feel satisfying."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-20 bg-[#0f0f0f]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron']">
                        Game <span className="text-[#00E676]">Features</span>
                    </h2>
                    <div className="h-1 w-20 bg-[#00E676] mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            desc={feature.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
