import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HeroSection() {
    const [selectedImage, setSelectedImage] = useState(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const images = [
        '/carroussel/01.jpeg',
        '/carroussel/02.jpeg',
        '/carroussel/03.jpeg',
        '/carroussel/04.jpeg',
        '/carroussel/05.jpeg',
        '/carroussel/06.jpeg',
        '/carroussel/07.jpeg',
        '/carroussel/08.jpeg'
    ];

    return (
        <section id="home" className="h-screen flex items-center justify-center relative parallax" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-5xl font-extrabold mb-4">Devenez plus fort avec Ange</h2>
                        <p className="text-lg mb-6">Coaching en musculation personnalisé pour sculpter votre corps, gagner en force et atteindre vos objectifs fitness.</p>
                        <a href="#contact" className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">Commencer maintenant</a>
                    </div>
                    <div className="px-4">
                        <Slider {...settings}>
                            {images.map((image, index) => (
                                <div key={index} className="px-2 h-full">
                                    <div 
                                        className="relative h-64 w-full overflow-hidden shadow-lg cursor-pointer"
                                        onClick={() => setSelectedImage(image)}
                                    >
                                        <img 
                                            src={image} 
                                            alt={`Slide ${index + 1}`}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            {/* Overlay pour l'image en taille originale */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl w-full mx-4">
                        <button 
                            className="absolute top-4 right-4 text-white text-2xl z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                        <img 
                            src={selectedImage} 
                            alt="Image en taille originale"
                            className="max-h-[90vh] w-auto mx-auto"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

export default HeroSection;
