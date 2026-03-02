function CTA (){
    return (
        <section id="contact" className="relative py-24 bg-linear-to-b from-blue-800 via-blue-900 to-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
            <div className="absolute -left-32 -top-20 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-navy-900 rounded-full opacity-10 blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
            <h2 className="text-4xl font-extrabold mb-4 drop-shadow-sm">¿Listo para transformar tu flujo de trabajo?</h2>
            <p className="text-blue-200 mb-10 text-lg">Únete a más de <span className="font-semibold text-white">10,000</span> profesionales que ya confían en FlowState.</p>

            <form className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-3xl flex flex-col md:flex-row items-center gap-3 justify-center max-w-2xl mx-auto">
                <input
                    aria-label="Tu correo"
                    placeholder="Tu correo electrónico"
                    className="w-full md:flex-1 bg-white/10 placeholder-blue-200 text-white px-4 py-3 rounded-lg border border-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex gap-3 mt-2 md:mt-0">
                    <button type="submit" className="px-6 py-3 bg-linear-to-br from-blue-500 to-blue-600 text-white rounded-lg font-bold hover:from-blue-600 hover:to-blue-700 transition">
                        Empezar
                    </button>
                    <button type="button" className="px-5 py-3 bg-transparent border border-white/20 text-blue-100 rounded-lg hover:bg-white/5 transition">Hablar con ventas</button>
                </div>
            </form>
            <p className="text-bold text-white/80 mt-6">Prueba gratuita de 14 días · Sin tarjeta de crédito</p>
        </div>
    </section>
    )
}

export default CTA;