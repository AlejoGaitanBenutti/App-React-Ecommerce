import { Container } from "react-bootstrap";
import estilos from "./estilos.module.css"

function Carrito(){

    let contador= 0;

    return(

        <Container className="d-flex">
            <img className={estilos.Carrito} src="src\Imagenes\carrito Logo.svg" alt="Logo Carrito Compras" />
            
        </Container>
    )
}



export default Carrito;