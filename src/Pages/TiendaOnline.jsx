import { Container } from "react-bootstrap";
import NavBar from "../Components/NavBar"
import ProductosTienda from "../Components/ProductosTienda";


function TiendaOnline(){











    return(
        <Container fluid>
            <Container fluid className="bg-dark">
                <NavBar/>
            </Container>
        
            <Container fluid >

            <ProductosTienda/>

            </Container>
        
        
        </Container>
    )
}


export default TiendaOnline;