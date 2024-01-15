import { Container,Col,Row } from "react-bootstrap";
import estilos from "../Components/estilos.module.css"

function NosotrosInfo(){



return(

    <Container  className="py-4  ">
        <Col className="mx-4">
            <Row  ><h1 className={estilos.h1Element}><strong className={estilos.Strong}> Store Bikes</strong> TU TIENDA DE BICICLETAS DIRIGIDA POR <br /> PROFESIONALES. </h1> </Row> 
            <Row ><p className={estilos.pElement}>Somos una bicicleteria con mas de 20 años en el negocio y tenemos todo para el armado de bicicletas adecuadas a cada persona según uso, presupuesto y gustos. Una bike para cada persona, armá la tuya como quieras! Bicicletas de competición, XC, 4X, DH, Urban. La mayor variedad en bikes, partes, repuestos y las mejores marcas.</p></Row>
        </Col>
    </Container>
    

    )
}



export default NosotrosInfo;