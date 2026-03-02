function Testimonio() {
    return (
        <section className="relative py-24 bg-linear-to-r from-teal-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            {/* subtle pattern or svg can go here */}
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <blockquote className="text-4xl font-bold italic text-gray-900 leading-relaxed">
                        <span className="absolute -left-6 -top-6 text-blue-600 text-6xl">“</span>
                        FlowState cambió la forma en que nuestro equipo remoto se comunica. <br />
                        Es <span className="text-blue-600">intuitivo</span> y <span className="text-blue-600">veloz</span>.
                    </blockquote>
                    <div className="flex items-center gap-4 mt-8">
                        <div className="w-12 h-12 bg-linear-to-br from-teal-300 to-blue-600 rounded-full shrink-0"></div>
                        <div>
                            <p className="font-semibold text-gray-800">Ana García</p>
                            <p className="to-blue-600 text-sm">Directora Creativa en Techno</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {[
                        {value: '98%', label: 'Satisfacción del cliente'},
                        {value: '+2M', label: 'Tareas completadas'},
                        {value: '15h', label: 'Ahorradas por semana'},
                        {value: '24/7', label: 'Soporte técnico'}
                    ].map((stat) => (
                        <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition">
                            <p className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</p>
                            <p className="text-sm text-blue-600 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    )
} 

export default Testimonio;