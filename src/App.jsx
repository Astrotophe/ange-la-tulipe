import { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            document.querySelectorAll('.parallax').forEach(section => {
                const speed = 0.5;
                const offset = -(scrolled * speed) % window.innerHeight;
                section.style.backgroundPositionY = `${offset}px`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-gray-900 text-white">
            <NavBar />
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;
