import { Col, Card,Button } from "react-bootstrap"
import estilos from "../Components/estilos.module.css"
import ButtonWithLoading from "./ButtonWithLoading";

function CardProductosTienda({thumbnail,precio,nombre,descripcion}){

    return(
        <>
        <Col className="mt-4 my-2" >
            <Card className={estilos.CardsTienda}>
                    <Card.Img variant="top" src={thumbnail} />
                <Card.Body className=' '>
                    <Card.Title >{nombre}</Card.Title>
                    <Card.Subtitle className="my-3 text-muted lead">${precio}</Card.Subtitle>
                    <Card.Text className="border-bottom">
                    
                    </Card.Text >
                    <ButtonWithLoading>Agregar al carrito</ButtonWithLoading>
                    <ButtonWithLoading>Ver Detalles</ButtonWithLoading>
                </Card.Body>
            </Card>
        </Col>
    </>
    )
}

export default CardProductosTienda;