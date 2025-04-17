function AboutSection() {
    return (
        <section id="about" className="py-20 about-bg parallax">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black bg-opacity-70 py-12">
                <h2 className="text-4xl font-bold text-center mb-12">À propos d'Ange</h2>
                <div className="flex flex-col md:flex-row items-center mb-12">
                    <img src="/ange_portrait.jpg" alt="Ange" className="w-64 h-64 rounded-full mb-6 md:mb-0 md:mr-8 object-cover" />
                    <p className="text-lg">Ange la Tulipe Noire est un compétiteur émérite et coach sportif d'exception spécialisé en musculation. Ancien pratiquant de sports de combat, il a forgé sa discipline et sa résilience sur le ring avant de se consacrer à la catégorie Men's Physique. Sacré champion de l'Arnold Classic et du Grand Prix de Monaco, Ange met son expérience de haut niveau au service de ses clients, les guidant avec expertise et passion pour transformer leur physique et leur mental.</p>
                </div>
                
                {/* Section des vidéos */}
                <h3 className="text-3xl font-bold text-center mb-8">Ange dans les médias</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="relative w-full aspect-video bg-black">
                        <video
                            controls
                            className="w-full h-full object-contain rounded-lg"
                        >
                            <source src="/videos/ange1.mp4" type="video/mp4" />
                            Votre navigateur ne prend pas en charge la lecture de vidéos.
                        </video>
                    </div>
                    <div className="relative w-full aspect-video bg-black">
                        <video
                            controls
                            className="w-full h-full object-contain rounded-lg"
                        >
                            <source src="/videos/ange2.mp4" type="video/mp4" />
                            Votre navigateur ne prend pas en charge la lecture de vidéos.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
