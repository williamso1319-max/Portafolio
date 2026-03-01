import heroImg from './imagen/photo-1460925895917-afdab827c52f.avif'

function Dashboard() {
    const stats = [
        { name: 'Proyectos', value: '24' },
        { name: 'Miembros', value: '12' },
        { name: 'Tareas', value: '137' },
    ]

    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {/* Card */}
                <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 sm:p-12 flex flex-col justify-between">
                    <div>
                        
                        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-prose">Bienvenido al Dashboard de FlowState. Gestiona tus proyectos, colabora con tu equipo y mantén todo bajo control con una interfaz limpia y rápida.</p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <button className="inline-flex items-center gap-2 px-5 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:scale-[1.01] transition">Nuevo Proyecto</button>
                            <button className="px-5 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition">Importar</button>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-3">
                        {stats.map((s) => (
                            <div key={s.name} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                                <div className="text-sm text-gray-500 dark:text-gray-400">{s.name}</div>
                                <div className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">{s.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg min-h-70">
                    <img src={heroImg} alt="Equipo colaborando" className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" aria-hidden="true"></div>
                    <div className="absolute left-6 bottom-6 text-white">
                        <h3 className="text-lg font-bold">Colabora mejor</h3>
                        <p className="text-sm opacity-90">Comunicación centralizada y flujos optimizados.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;