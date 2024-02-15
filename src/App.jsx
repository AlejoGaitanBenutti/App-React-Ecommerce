import Home from './Pages/Home'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import SobreNosotros from './Pages/SobreNosotros'
import Contacto from './Pages/Contacto'
import Login from './Pages/Login'
import Registro from './Pages/Registro'



function App() {


  return (
    
    <Router>
    

    

  
        <Routes>
      
          <Route path='/' element={<Home/>} /> 
          <Route path='/nosotros' element={<SobreNosotros/>} />
          <Route path='/contacto' element ={<Contacto/>} />
          <Route path='/login' element ={<Login/>} />
          <Route path='/registro' element ={<Registro/>} />
        </Routes>
  
    </Router>
    
  )
}

export default App
