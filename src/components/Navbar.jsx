import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Privacy', href: 'https://dilipratadia.github.io/privacypolicy/' },
    { name: 'Terms', href: 'https://dilipratadia.github.io/terms-and-conditions/' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >
                        <img src="Logo.png" alt="Logo" className="h-10 w-10 rounded-lg shadow-[0_0_15px_rgba(0,230,118,0.3)]" />
                        <span className="font-bold text-xl tracking-wider uppercase font-['Orbitron']">
                            Arrow Craze <span className="text-[#00E676]">Puzzle</span>
                        </span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target={link.href.startsWith('http') ? "_blank" : "_self"}
                                rel="noreferrer"
                                className="text-gray-300 hover:text-[#00E676] transition-colors duration-300 text-sm font-medium tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://play.google.com/store/apps/details?id=com.dividivi.arrowcrazepuzzle"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#00E676] text-black px-5 py-2 rounded-full font-bold text-sm shadow-[0_0_15px_rgba(0,230,118,0.4)] hover:shadow-[0_0_25px_rgba(0,230,118,0.6)] transition-all"
                        >
                            Play Now
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white hover:text-[#00E676]">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#111] border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.dividivi.arrowcrazepuzzle"
                                className="block mt-4 text-center bg-[#00E676] text-black font-bold py-3 rounded-lg"
                            >
                                Download App
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
