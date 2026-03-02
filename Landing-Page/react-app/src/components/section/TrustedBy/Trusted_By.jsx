function Trusted_By() {
    // componente estilizado para un look moderno y minimalista usando TailwindCSS
    return (
        <section className="bg-gray-50 py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900">Confían en nosotros</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
                        Más de 1,000 empresas confían en FlowState para mejorar su productividad y colaboración.
                    </p>
                </div>

                <div className="mt-16">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-6 text-center">
                        Empresas que confían en nosotros
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
                        {['TECHNO','GLOBAL','SYNERGY','HORIZON'].map((c) => (
                            <div key={c} className="flex items-center justify-center p-8 bg-white rounded-lg shadow hover:shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1">
                                {/* placeholder logo or text */}
                                <span className="text-base sm:text-xl font-semibold tracking-wide text-gray-800">{c}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Trusted_By;