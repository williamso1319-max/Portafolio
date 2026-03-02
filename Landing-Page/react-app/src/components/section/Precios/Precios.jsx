function  Precios() {
    return (
        <section id="precios" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4">Planes sencillos para todos</h2>
                <p class="text-slate-500">Escoge el plan que mejor se adapte a tu crecimiento.</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                
                <div class="p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition flex flex-col">
                    <h3 class="font-bold text-lg mb-2">Individual</h3>
                    <div class="mb-6">
                        <span class="text-4xl font-extrabold">$0</span>
                        <span class="text-slate-500">/mes</span>
                    </div>
                    <ul class="space-y-4 mb-8 flex-1">
                        <li class="flex items-center gap-2 text-sm text-slate-600"><svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg> Hasta 3 proyectos</li>
                        <li class="flex items-center gap-2 text-sm text-slate-600"><svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg> Tareas ilimitadas</li>
                    </ul>
                    <button class="w-full py-3 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition">Empezar Gratis</button>
                </div>
                
                <div class="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl shadow-blue-200 transform md:-translate-y-4 flex flex-col">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="font-bold text-lg">Pro Equipo</h3>
                        <span class="px-3 py-1 bg-blue-600 text-[10px] font-bold uppercase rounded-full">Más popular</span>
                    </div>
                    <div class="mb-6">
                        <span class="text-4xl font-extrabold">$12</span>
                        <span class="text-slate-400">/mes</span>
                    </div>
                    <ul class="space-y-4 mb-8 flex-1">
                        <li class="flex items-center gap-2 text-sm text-slate-300"><svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg> Proyectos ilimitados</li>
                        <li class="flex items-center gap-2 text-sm text-slate-300"><svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg> 100GB Almacenamiento</li>
                        <li class="flex items-center gap-2 text-sm text-slate-300"><svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg> Analíticas avanzadas</li>
                    </ul>
                    <button class="w-full py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-700 transition">Probar 14 días gratis</button>
                </div>
              
                <div class="p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition flex flex-col">
                    <h3 class="font-bold text-lg mb-2">Empresa</h3>
                    <div class="mb-6">
                        <span class="text-4xl font-extrabold">$49</span>
                        <span class="text-slate-500">/mes</span>
                    </div>
                    <ul class="space-y-4 mb-8 flex-1">
                        <li class="flex items-center gap-2 text-sm text-slate-600"><svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg> Todo lo Pro</li>
                        <li class="flex items-center gap-2 text-sm text-slate-600"><svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg> Seguridad SSO</li>
                        <li class="flex items-center gap-2 text-sm text-slate-600"><svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg> Soporte Prioritario</li>
                    </ul>
                    <button class="w-full py-3 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition">Contactar Ventas</button>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Precios;