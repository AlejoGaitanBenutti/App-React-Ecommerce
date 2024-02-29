import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {TbBabyCarriage} from "react-icons/Tb"
import { Container } from "react-bootstrap";
import estilos from "../Components/estilos.module.css"






function NavBar(){

    return(
        
        <Container fluid className="">
            <Navbar className="w-100" expand="lg" aria-label="Primary"   >
                
            <Container fluid className="align-items-center gap-5 flex-sm-row  "  >
                <Navbar.Brand className="text-light fs-4 w-50 text-center mt-3"><Nav.Link as={Link} to={"/"}>
                <b>Bike</b>Store</Nav.Link>
                </Navbar.Brand>
                
                <Navbar.Toggle className="bg-white " aria-controls="basic-navbar-nav" />

                <Navbar.Collapse className="rounded " id="basic-navbar-nav"  >


                    <Nav className={estilos.NavBar} >
                        <Nav.Link className={estilos.itemsNav} as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link className={estilos.itemsNav}  as={Link} to="/tiendaOnline">Tienda Online</Nav.Link>
                        <Nav.Link className={estilos.itemsNav} as={Link} to="/nosotros">Sobre Nosotros</Nav.Link>
                        <Nav.Link className={estilos.itemsNav} as={Link} to="/contacto"> Contacto  </Nav.Link>
                        <Nav.Link className={estilos.itemsNav}  as={Link} to="/cesta" >Cesta <TbBabyCarriage className="mx-1 "/>  </Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container> 
            </Navbar>
        </Container>
        
    );
        
            
    
        


}    

export default NavBar;