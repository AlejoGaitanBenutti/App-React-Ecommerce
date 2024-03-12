import Home from './Pages/Home'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import SobreNosotros from './Pages/SobreNosotros'
import Contacto from './Pages/Contacto'
import Login from './Pages/Login'
import Registro from './Pages/Registro'
import TiendaOnline from './Pages/TiendaOnline'
import AgregarProdTienda from './Pages/AgregarProdTienda'
import NotFound from './Pages/notFound'
import Carrito from './Components/Carrito'
import AuthProvider from './Context/AuthContext'
import { Container } from 'react-bootstrap'
import StoreProvider from './Context/StoreContext'
import HomeProvider from './Context/HomeContext'



function App() {

  

  return (
    
    <Router>
      
      <AuthProvider>
      <StoreProvider>
      <HomeProvider>

        <Container fluid>

          <Routes>
            <Route path='/' element={<Home/>} /> 
            <Route path='/nosotros' element={<SobreNosotros/>} />
            <Route path='/contacto' element ={<Contacto/>} />
            <Route path='/login' element ={<Login/>} />
            <Route path='/registro' element ={<Registro/>} />
            <Route path='/tiendaOnline' element ={<TiendaOnline/>} />
            <Route path='/productos/alta' element ={<AgregarProdTienda/>} />
            <Route path="*" element={<NotFound />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>

        </Container>

      </HomeProvider>
      </StoreProvider>
      </AuthProvider>
        
    </Router>
    
  )
}

export default App
