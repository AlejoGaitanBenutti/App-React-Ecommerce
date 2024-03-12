import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col} from "react-bootstrap"
import estilos from "./estilos.module.css"

function cardBikesMtb({descripcion, nombre, precio, thumbnail}){

    return (
        <>
            <Col className='mt-5 mb-5 '>
                <Card className={estilos.cardsHome}>
               
                        <Card.Img className={estilos.cardImgHome} variant="top" src={thumbnail} />
                    <Card.Body className='mt-3 '>
                        <Card.Title className='' >{nombre}</Card.Title>
                        <Card.Subtitle className="mt-3 text-muted lead">${precio}</Card.Subtitle>
                        <Card.Text>
                        {descripcion}
                        </Card.Text>
                        <Button className={estilos.buttonForm} variant="succes">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
        
        );


    }
    


export default cardBikesMtb;