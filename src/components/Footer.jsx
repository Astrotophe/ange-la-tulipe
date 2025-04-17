import { FaInstagram, FaGraduationCap } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-900 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                {/* Left Section: Copyright and Links */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-sm">© 2025 Ange la Tulipe Noire. Tous droits réservés.</p>
                    <div className="flex space-x-4 mt-2">
                        <a href="#conditions" className="text-sm text-gray-400 hover:text-yellow-500 transition">Conditions</a>
                        <a href="#confidentialite" className="text-sm text-gray-400 hover:text-yellow-500 transition">Confidentialité</a>
                        <a href="#mentions-legales" className="text-sm text-gray-400 hover:text-yellow-500 transition">Mention Légale</a>
                    </div>
                </div>

                {/* Center Section: Social Media Icons */}
                <div className="flex space-x-6 mb-4 md:mb-0">
                    <div className="flex flex-col items-center">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition">
                            <FaInstagram size={24} />
                        </a>
                        <span className="text-xs mt-1">Instagram</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="https://superprof.fr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition">
                            <FaGraduationCap size={24} />
                        </a>
                        <span className="text-xs mt-1">Superprof</span>
                    </div>
                </div>

                {/* Right Section: Privacy Settings */}
                <div className="text-center md:text-right">
                    <a href="#privacy-settings" className="text-sm text-gray-400 hover:text-yellow-500 transition flex items-center justify-center md:justify-end">
                        <span>Vos paramètres de confidentialité</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4m-6-4c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4m-2-8h4m-4 8h4"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
