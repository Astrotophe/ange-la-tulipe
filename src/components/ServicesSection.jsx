function ServicesSection() {
    return (
        <section id="services" className="py-20 services-bg parallax">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black bg-opacity-70 py-12">
                <h2 className="text-4xl font-bold text-center mb-12">Mes Services de Coaching</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                        <img src="https://img.icons8.com/ios-filled/100/FFD700/barbell.png" alt="Programmes Musculation" className="service-icon mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Programmes Musculation</h3>
                        <p>Plans d'entraînement sur mesure pour la prise de muscle, la force ou la définition musculaire.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                        <img src="https://img.icons8.com/ios-filled/100/FFD700/healthy-eating.png" alt="Coaching Nutrition" className="service-icon mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Coaching Nutrition</h3>
                        <p>Conseils diététiques adaptés pour optimiser vos performances et atteindre vos objectifs physiques.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                        <img src="https://img.icons8.com/ios-filled/100/FFD700/checklist.png" alt="Suivi Personnalisé" className="service-icon mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Suivi Personnalisé</h3>
                        <p>Suivi régulier pour ajuster vos entraînements et maximiser vos progrès en salle.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
