function FAQ () {
    const faqs = [
        {
            question: "¿Puedo cancelar mi suscripción en cualquier momento?",
            answer: "Sí, FlowState es un servicio de pago mensual sin compromiso de permanencia. Puedes cancelar desde tu panel de configuración con un solo clic."
        },
        {
            question: "¿Cómo funciona la colaboración en equipo?",
            answer: "Simplemente invita a tus compañeros mediante su correo electrónico. Podréis ver quién está trabajando en qué tarea en tiempo real."
        }
    ];

    return(
        <section id="faq" className="relative py-24 bg-linear-to-b from-white via-blue-50 to-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900 rounded-full opacity-5 blur-3xl translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative max-w-3xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto">Resolvemos tus dudas sobre FlowState. Si necesitas más ayuda, <span className="text-blue-600 font-semibold">contacta nuestro equipo</span>.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-white rounded-2xl border border-blue-100 hover:border-blue-400 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                            open={index === 0}
                        >
                            <summary className="flex items-center justify-between p-6 font-semibold text-gray-900 select-none hover:text-blue-600 transition">
                                <span className="flex items-center gap-4">
                                    <span className="shrink-0 w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                                        ?
                                    </span>
                                    {faq.question}
                                </span>
                                <span className="shrink-0 w-6 h-6 text-blue-600 group-open:rotate-180 transition-transform duration-300">
                                    ▼
                                </span>
                            </summary>
                            <div className="border-t border-blue-100 px-6 pb-6 pt-4 text-gray-600 bg-linear-to-r from-blue-50 to-white">
                                <p className="text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ;