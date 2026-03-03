import './App.css'
import Menu from './components/menu/Menu'
import Caracteristicas from './components/section/Caracteristicas/Caracteristicas'
import Dashboard from './components/section/Dashboard/dashboard'
import Precios from './components/section/Precios/Precios'
import SECTION_HERO from './components/section/SectionHero/Section_Hero'
import Testimonio from './components/section/Testimonio/Testimonio'
import Trusted_By from './components/section/TrustedBy/Trusted_By'
import FAQ from './components/section/FAQ/FAQ'
import CTA from './components/section/CTA/CTA'
import PieDePagina from './components/section/Footer/Footer'



function App() {
   return (
    <>
     <Menu />
     <SECTION_HERO />
     <Dashboard />
     <Trusted_By /> 
     <Caracteristicas />
     <Testimonio />
     <Precios />  
     <FAQ/>
     <CTA/>
     <PieDePagina/>
     
    </>
  )
}

export default App
