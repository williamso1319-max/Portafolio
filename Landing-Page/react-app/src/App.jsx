import './App.css'
import Menu from './components/menu/Menu'
import Dashboard from './components/section/Dashboard/dashboard'
import SECTION_HERO from './components/section/SectionHero/Section_Hero'
import Trusted_By from './components/section/TrustedBy/Trusted_By'

function App() {
   return (
    <>
     <Menu />
     <SECTION_HERO />
     <Dashboard />
     <Trusted_By /> 
    </>
  )
}

export default App
