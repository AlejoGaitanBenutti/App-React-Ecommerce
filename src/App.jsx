import Home from './Pages/Home'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import SobreNosotros from './Pages/SobreNosotros'
import Contacto from './Pages/Contacto'
import Login from './Pages/Login'
import Registro from './Pages/Registro'
import TiendaOnline from './Pages/TiendaOnline'
import AgregarProdTienda from './Pages/AgregarProdTienda'




function App() {


  return (
    
    <Router>
    

    

  
        <Routes>
      
          <Route path='/' element={<Home/>} /> 
          <Route path='/nosotros' element={<SobreNosotros/>} />
          <Route path='/contacto' element ={<Contacto/>} />
          <Route path='/login' element ={<Login/>} />
          <Route path='/registro' element ={<Registro/>} />
          <Route path='/tiendaOnline' element ={<TiendaOnline/>} />
          <Route path='/productos/alta' element ={<AgregarProdTienda/>} />
          
        </Routes>
  
    </Router>
    
  )
}

export default App
