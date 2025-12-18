const FooterLink = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-[#00E676] transition-colors text-sm font-medium"
    >
        {children}
    </a>
);

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-6">
                        <img src="Logo.png" alt="Logo" className="h-8 w-8 rounded opacity-80" />
                        <span className="text-lg font-bold tracking-wider text-gray-300">ARROW CRAZE PUZZLE</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        <FooterLink href="https://dilipratadia.github.io/privacypolicy/">Privacy Policy</FooterLink>
                        <FooterLink href="https://dilipratadia.github.io/terms-and-conditions/">Terms & Conditions</FooterLink>
                        <FooterLink href="https://play.google.com/store/apps/details?id=com.dividivi.arrowcrazepuzzle">Google Play</FooterLink>
                    </div>

                    <p className="text-gray-600 text-sm text-center">
                        &copy; 2025 Dilip Ratadia. All rights reserved.<br />
                        Available on Android Devices.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
