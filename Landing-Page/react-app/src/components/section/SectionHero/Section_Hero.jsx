


function SECTION_HERO (){
    return(
        <section id="hero" className="bg-linear-to-br from-gray-50 to-white">
            <div className="max-w-3xl mx-auto text-center py-24 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                    Eleva tu productividad <span className="text-blue-600">al siguiente nivel</span>
                </h1>

                <p className="mt-6 text-lg sm:text-xl text-gray-700">
                    Simplifica tus proyectos, optimiza tus flujos de trabajo y colabora sin esfuerzo con FlowState. La herramienta definitiva para equipos modernos.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
                        Comenzar Ahora
                    </button>
                    <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
                        Ver Demo
                    </button>
                </div>
            </div>
        </section>
    )
}


export default SECTION_HERO;