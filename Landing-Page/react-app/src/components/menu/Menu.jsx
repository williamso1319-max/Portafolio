
import { useState } from 'react'


function Menu(){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* logo */}
                    <a href="/" className="text-2xl font-extrabold text-gray-800">
                        FlowState
                    </a>

                    {/* desktop nav */}
                    <nav className="hidden md:flex space-x-6">
                        <a href="#caracte" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
                            Características
                        </a>
                        <a href="#precios" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
                            Precios
                        </a>
                        <a href="#faq" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
                            FAQ
                        </a>
                        <a
                            href="#prueba"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Pruébalo Gratis
                        </a>
                    </nav>

                    {/* hamburger (mobile) */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            className="flex flex-col justify-center items-center w-8 h-8 text-gray-800 focus:outline-none"
                        >
                            <span
                                className={`block h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                            ></span>
                            <span
                                className={`block h-0.5 w-6 bg-gray-800 my-1 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}
                            ></span>
                            <span
                                className={`block h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                            ></span>
                        </button>
                    </div>
                </div>

                {/* mobile menu */}
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                    <nav className="flex flex-col space-y-2 py-4">
                        <a href="#caracte" className="text-gray-700 px-2" onClick={() => setIsOpen(false)}>
                            Características
                        </a>
                        <a href="#precios" className="text-gray-700 px-2" onClick={() => setIsOpen(false)}>
                            Precios
                        </a>
                        <a href="#faq" className="text-gray-700 px-2" onClick={() => setIsOpen(false)}>
                            FAQ
                        </a>
                        <a
                            href="#prueba"
                            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg mx-2 text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Pruébalo Gratis
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Menu;