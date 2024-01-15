import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col} from "react-bootstrap"

function cardBikesMtb({descripcion, nombre, precio, thumbnail}){

    return (
        <>
            <Col className='mt-5 mb-5'>
                <Card style={{ width: '20rem', height:' 22rem', padding:'0.3em' }}>
                        <Card.Img variant="top" src={thumbnail} />
                    <Card.Body className='mt-3'>
                        <Card.Title >{nombre}</Card.Title>
                        <Card.Subtitle className="my-3 text-muted lead">${precio}</Card.Subtitle>
                        <Card.Text>
                        {descripcion}
                        </Card.Text>
                        <Button variant="succes">Comprar</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
        
        );


    }
    


export default cardBikesMtb;