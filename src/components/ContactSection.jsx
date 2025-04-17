function ContactSection() {
    const sendMessage = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Message envoyé avec succès ! Nous vous contacterons bientôt.');
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    };

    return (
        <section id="contact" className="py-20 contact-bg parallax">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black bg-opacity-70 py-12">
                <h2 className="text-4xl font-bold text-center mb-12">Prenons rendez-vous</h2>
                <div className="max-w-lg mx-auto">
                    <div className="space-y-4">
                        <input type="text" id="name" placeholder="Votre nom" className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                        <input type="email" id="email" placeholder="Votre email" className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                        <textarea id="message" placeholder="您的消息" rows="5" className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
                        <button onClick={sendMessage} className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">Envoyer</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
