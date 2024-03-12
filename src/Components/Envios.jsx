import { Container,Row, Col } from "react-bootstrap";
import estilos from "../Components/estilos.module.css"





function ServicioEnvios(){

return(
    <Container fluid className={estilos.Envios}>
        <Row className=" d-flex gap-2  w-75 py-4 " >

            <Col className="text-start mt-5 ">
                <Col className="d-flex "> <img className={estilos.iconos} src="src\iconos\fast-delivery_10746494.png" alt="Logo envio" /> <h3 className={estilos.elementH3envios}>ENVÍO GRATUITO</h3></Col>
                <Col><p className={estilos.elementPenvios}>Realizamos el envio gratis por compras mayores a ARS$ 50.000</p></Col>
            </Col>

            <Col className="text-start mt-5  ">
                <Col className="d-flex"><img className={estilos.iconos} src="src\iconos\puesta a punto.png" alt="Icono puesta a punto" /> <h3  className={estilos.elementH3envios}>PUESTA A PUNTO</h3></Col>
                <Col><p className={estilos.elementPenvios}>servicio integral que garantizará que tu bicicleta funcione a la perfección y te proporcione el rendimiento que mereces</p></Col>
            </Col>

            <Col className="text-start mt-5 ">
                <Col className="d-flex"><img className={estilos.iconos} src="src\iconos\paquete.png" alt="icono paquete"/> <h3  className={estilos.elementH3envios}>EMBALAJE SEGURO</h3></Col>
                <Col><p className={estilos.elementPenvios}>Experimenta la diferencia con nuestro servicio de "Embalaje Seguro" y deja que tus productos lleguen a su destino en perfecto estado</p></Col>
            </Col>

            <Col className="text-start mt-5 ">
                <Col className="d-flex"><img className={estilos.iconos} src="src\iconos\billetera.png" alt="icono billetera"/><h3  className={estilos.elementH3envios}>LOS MEJORES PRECIOS</h3></Col>
                <Col><p className={estilos.elementPenvios}>Ofrecemos las mejores bicicletas y repuestos a los mejores precios</p></Col>
            </Col>

        </Row>

    </Container> 



)

}

export default ServicioEnvios;