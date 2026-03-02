function Caracteristicas() {
    return (
        <section id="caracte" className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Todo lo que necesitas para ganar</h2>
                    <p className="text-slate-500 max-w-xl mx-auto">Nuestra plataforma está diseñada para eliminar el ruido y dejar que te enfoques en lo que realmente importa.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    <div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-transform duration-300 group">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Gestión Centralizada</h3>
                        <p className="text-slate-600">Tableros Kanban y listas de tareas para mantener cada detalle bajo control absoluto.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-transform duration-300 group">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Colaboración Real</h3>
                        <p className="text-slate-600">Comentarios en tiempo real y menciones para que tu equipo nunca pierda el hilo.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-transform duration-300 group">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Analíticas Poderosas</h3>
                        <p className="text-slate-600">Visualiza el progreso de tus metas con reportes automáticos y detallados.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Caracteristicas;