import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {TbBabyCarriage} from "react-icons/Tb"
import { Container } from "react-bootstrap";
import {LiaGripLinesVerticalSolid} from "react-icons/Lia"
import estilos from "../Components/estilos.module.css"






function NavBar(){

    return(
        
        <Container fluid className="">
            <Navbar className="w-100" expand="xl"   >
                
            <Container fluid className="d-flex flex-column align-items-center gap-5  flex-sm-row  "  >
                <Navbar.Brand className="text-light fs-4 w-50 text-center"><Nav.Link as={Link} to={"/"}>
                BikeStore</Nav.Link>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav"  >


                    <Nav className={estilos.NavBar} >
                        <Nav.Link className="text-light mx-2  " as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link className="text-light mx-2 "  as={Link} to="/tiendaOnline">Tienda Online</Nav.Link>
                        <Nav.Link className="text-light mx-2" as={Link} to="/nosotros">Sobre Nosotros</Nav.Link>
                        <Nav.Link className="text-light mx-2" as={Link} to="/contacto"> Contacto <LiaGripLinesVerticalSolid className="mx-2" /> </Nav.Link>
                        <Nav.Link className="text-light "  as={Link} to="/cesta" >Cesta <TbBabyCarriage className="mx-2"/>  </Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container> 
            </Navbar>
        </Container>
        
    );
        
            
    
        


}    

export default NavBar;