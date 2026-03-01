function Trusted_By() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Confían en nosotros</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Más de 1,000 empresas confían en FlowState para mejorar su productividad y colaboración.
                    </p>
                </div>

                <div className="mt-12">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8 text-center">Empresas que confían en nosotros</p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 items-center">
                        {['TECHNO','GLOBAL','SYNERGY','HORIZON'].map((c) => (
                            <div key={c} className="flex items-center justify-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                                <span className="text-lg sm:text-2xl font-semibold tracking-wide text-gray-700">{c}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Trusted_By;