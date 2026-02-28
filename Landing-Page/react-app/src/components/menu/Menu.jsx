import './Menu.css'
import { useState } from 'react'


function Menu(){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div id='menu'>
            <div className='menu-container'>
                <a href='/' className='logo'>FlowState</a>
                
                <button 
                    className={`hamburger ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label='Toggle menu'
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href='#caracte' onClick={() => setIsOpen(false)}>Características</a>
                    <a href='#precios' onClick={() => setIsOpen(false)}>Precios</a>
                    <a href='#faq' onClick={() => setIsOpen(false)}>FAQ</a>
                    <a href='#prueba' className='btn-cta' onClick={() => setIsOpen(false)}>Pruébalo Gratis</a>
                </nav>
            </div>
        </div>
    )
}

export default Menu;