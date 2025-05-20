
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/sections/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import Collection from './pages/Collection.jsx'
import Talleres from './pages/Talleres.jsx'
import Contacto from './pages/Contacto.jsx'
import Autores from './pages/paginas_colleccion/Autores.jsx'
import Obras from './pages/paginas_colleccion/Obras.jsx'
import Titeres from './pages/paginas_colleccion/Titeres.jsx'

function App() {
 

  return (
    <div className="App" style={{height: "inherit", overflowX: 'hidden'}}>
      <Navbar/>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path='/talleres' element={<Talleres/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/autores' element={<Autores/>}/>
        <Route path='/obras' element={<Obras/>}/>
        <Route path='/titeres' element={<Titeres/>}/>
      </Routes>
    </Router>
      
    </div>
      
  )
}

export default App
