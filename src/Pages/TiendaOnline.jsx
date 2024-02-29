import { Container } from "react-bootstrap";
import NavBar from "../Components/NavBar"
import ProductosTienda from "../Components/ProductosTienda";
import estilos from "../Components/estilos.module.css"
import Footer from "../Components/Foter";

function TiendaOnline(){











    return(
        <Container fluid className={estilos.containTienda}>
            <Container fluid className="bg-dark">
                <NavBar/>
            </Container>
        
            <Container fluid >

            <ProductosTienda/>

            </Container>
        
            <Footer/>
        </Container>
    )
}


export default TiendaOnline;