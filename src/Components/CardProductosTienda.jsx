import { Col, Card,Button } from "react-bootstrap"
import estilos from "../Components/estilos.module.css"
import ButtonWithLoading from "./ButtonWithLoading";



function CardProductosTienda({thumbnail,precio,nombre,descripcion}){


    

    return(
        <>
        <Col className=" my-4 d-flex justify-content-center col-sm-12 col-md-6 col-lg-6 col-xl-3   " >
            <Card className={estilos.CardsTienda}>
                    <Card.Img variant="top" className="w-75 m-auto" src={thumbnail} />
                <Card.Body className=' '>
                    <Card.Title >{nombre}</Card.Title>
                    <Card.Subtitle className="my-3 text-muted lead ">ARS{precio}</Card.Subtitle>
                    
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