import { Col, Container,Row } from "react-bootstrap";

function ImgNosotros(){

return(

<Container fluid  className="mb-5 pb-4">
    <Row xl={3} className="d-flex gap-2 justify-content-center  ">
        <Col lg={6} className="px-0 " ><img className="w-100" src="src\Imagenes\ImgNosotros1.jpg" alt="Imagen trabajando uno" /></Col>
        <Col lg={6} className="px-0" ><img className="w-100" src="src\Imagenes\ImgNosotros2.jpg" alt="Imagen trabajando dos" /></Col>
    </Row>
</Container>

)
}

export default ImgNosotros;