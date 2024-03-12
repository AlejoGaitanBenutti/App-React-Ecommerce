import { Container,Col, Row } from "react-bootstrap";
import NavBar from "../Components/NavBar"
import ProductosTienda from "../Components/ProductosTienda";
import estilos from "../Components/estilos.module.css"
import Footer from "../Components/Foter";


function TiendaOnline(){


    return(
        <Container fluid >
            <Container fluid className="bg-dark">
                <NavBar/>
            </Container>
                

            <Container fluid className="d-flex" >

            


                <Container   className={estilos.containTienda}>
                    <ProductosTienda/>
                </Container>

            </Container>
        
            <Footer/>
        </Container>
    )
}


export default TiendaOnline;