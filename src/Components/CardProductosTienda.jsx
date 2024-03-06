import { Col, Card} from "react-bootstrap"
import estilos from "../Components/estilos.module.css"
import ButtonWithLoading from "./ButtonWithLoading";



function CardProductosTienda({thumbnail,precio,nombre}){


    

    return(
        <>
        <Col className=" my-4 d-flex justify-content-center col-xl-3 col-sm-4 px-0  " >
            <Card className={estilos.CardsTienda}>
                    <Card.Img variant="top" className={estilos.imgCardTienda} src={thumbnail} />
                <Card.Body className={estilos.interiorCardTienda} >
                    <Card.Title className={estilos.titleCardTienda} >{nombre}</Card.Title>
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