import { useState } from 'react';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-black bg-opacity-80 fixed w-full z-[100]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <img src="/logo.png" alt="Ange la Tulipe Noire" className="h-8 sm:h-12" />
                        <h1 className="text-xl sm:text-2xl font-bold text-yellow-500 ml-2">Ange la Tulipe Noire</h1>
                    </div>
                    
                    {/* Menu mobile */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-yellow-500 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Menu desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#home" className="hover:text-yellow-500 transition">Accueil</a>
                        <a href="#services" className="hover:text-yellow-500 transition">Services</a>
                        <a href="#about" className="hover:text-yellow-500 transition">À propos</a>
                        <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
                    </div>
                </div>

                {/* Menu mobile déroulant */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#home" className="block px-3 py-2 text-base hover:text-yellow-500 transition">Accueil</a>
                            <a href="#services" className="block px-3 py-2 text-base hover:text-yellow-500 transition">Services</a>
                            <a href="#about" className="block px-3 py-2 text-base hover:text-yellow-500 transition">À propos</a>
                            <a href="#contact" className="block px-3 py-2 text-base hover:text-yellow-500 transition">Contact</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
