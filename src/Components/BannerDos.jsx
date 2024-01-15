import { Container,Row,Col } from "react-bootstrap";
import estilos from "../Components/estilos.module.css"


function BannerDos(){

    return(

        <Container fluid className={estilos.BannerDos} >
            <Container className="d-flex flex-column justify-content-center ">
                <Col className="text-start w-75  d-flex flex-column gap-3  ">
                    <Row><h2 className={estilos.H2Banner}> CONOCEMOS LO MEJOR PARA TU MTB </h2></Row>
                    <Row><p className={estilos.PBanner}>Dos amantes de las bicis, una tienda y años de experiencia.</p></Row>
                    <button className={estilos.ButtonBanner}>Sobre nosotros</button>
                </Col>
            </Container>
        </Container>






    )





};


export default BannerDos;