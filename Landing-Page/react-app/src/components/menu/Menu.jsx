
import { useState } from 'react';
import Autenticar from '../Autenticar/Autenticar'

const navLinks = [
  { name: 'Características', href: '#caracte' },
  { name: 'Precios', href: '#precios' },
  { name: 'FAQ', href: '#faq' },
];

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="text-2xl font-extrabold text-gray-800">FlowState</a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-gray-700 hover:text-blue-600 transition cursor-pointer font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Botones de Acción */}
              <div className="flex items-center space-x-4 border-l pl-6 border-gray-200">
                <button 
                  onClick={() => setShowAuth(true)}
                  className="text-gray-700 hover:text-blue-600 font-semibold transition"
                >
                  Iniciar Sesión
                </button>
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md shadow-blue-100"
                >
                  Pruébalo Gratis
                </button>
              </div>
            </nav>

            {/* Hamburger Button (Mobile) */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col justify-center items-center w-8 h-8">
                <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-800 my-1 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`${isOpen ? 'max-h-80' : 'max-h-0'} overflow-hidden md:hidden transition-all duration-300 bg-white`}>
            <nav className="flex flex-col space-y-3 py-6 border-t border-gray-100">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-gray-700 px-2 hover:text-blue-600 font-medium">
                  {link.name}
                </a>
              ))}
              <hr className="border-gray-100" />
              <button 
                onClick={() => { setShowAuth(true); setIsOpen(false); }}
                className="text-gray-700 px-2 text-left font-semibold hover:text-blue-600"
              >
                Iniciar Sesión
              </button>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg mx-2 text-center font-bold"
              >
                Pruébalo Gratis
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* RENDERIZADO DEL MODAL */}
      {showAuth && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300" 
            onClick={() => setShowAuth(false)}
          ></div>
          
          <div className="relative w-full max-w-md animate-in zoom-in duration-200">
             <button 
               onClick={() => setShowAuth(false)}
               className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm font-medium flex items-center gap-1"
             >
               ✕ Cerrar
             </button>
             
             {/* Tu componente de login */}
             <Autenticar onClose={() => setShowAuth(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;