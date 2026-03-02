function PieDePagina() {
    const links = {
        producto: [
            { label: 'Funciones', href: '#' },
            { label: 'Integraciones', href: '#' },
            { label: 'Enterprise', href: '#' }
        ],
        company: [
            { label: 'Sobre nosotros', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Contacto', href: '#' }
        ]
    };

    const socials = [
        { icon: 'twitter', label: 'Twitter', href: '#' },
        { icon: 'linkedin', label: 'LinkedIn', href: '#' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/williamso1319-max/Portafolio' }
    ];

    const handleSocialClick = (e, social) => {
        e.preventDefault()
        // Copiar al portapapeles
        navigator.clipboard.writeText(social.href)
        // Mostrar notificación visual (opcional)
        alert(`${social.label} copiado: ${social.href}`)
        // Navegar a la página
        window.open(social.href, '_blank')
    }

    return(
        <footer className="relative py-16 bg-linear-to-b from-blue-50 to-white border-t border-blue-100">
            <div className="max-w-7xl mx-auto px-4">
                {/* Top Section */}
                <div className="grid md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-blue-100">
                    {/* Brand */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <span className="font-bold text-lg text-gray-900">FlowState</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">La plataforma que ayuda a los equipos a mantenerse en flow.</p>
                    </div>

                    {/* Producto */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Producto</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            {links.producto.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="hover:text-blue-600 transition duration-200">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Compañía */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Compañía</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            {links.company.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="hover:text-blue-600 transition duration-200">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Legal</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li><a href="#" className="hover:text-blue-600 transition duration-200">Privacidad</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition duration-200">Términos</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition duration-200">Cookies</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs">© 2026 FlowState. Todos los derechos reservados.</p>
                    <div className="flex gap-5">
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => social.icon === 'github' && handleSocialClick(e, social)}
                                className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer"
                            >
                                {social.icon === 'twitter' && (
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-7 9-7"></path></svg>
                                )}
                                {social.icon === 'linkedin' && (
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path></svg>
                                )}
                                {social.icon === 'github' && (
                                
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                )}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
 export default PieDePagina;