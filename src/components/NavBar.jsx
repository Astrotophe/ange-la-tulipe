function NavBar() {
    return (
        <nav className="bg-black bg-opacity-80 fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center space-x-4">
                        <img src="/logo.png" alt="Ange la Tulipe Noire" className="h-12" />
                        <h1 className="text-2xl font-bold text-yellow-500">Ange la Tulipe Noire</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#home" className="hover:text-yellow-500 transition">Accueil</a>
                        <a href="#services" className="hover:text-yellow-500 transition">Services</a>
                        <a href="#about" className="hover:text-yellow-500 transition">À propos</a>
                        <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
