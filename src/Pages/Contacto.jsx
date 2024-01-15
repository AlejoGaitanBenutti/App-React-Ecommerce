import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Components/Foter";
import estilos from "../Components/estilos.module.css"
import NavBar from "../Components/NavBar";

function Contacto(){


    return(

<Container fluid  className="">
    
        <Container fluid className="bg-dark mb-5 ">
            <NavBar/>
        </Container>



        <Container className="pt-4 mt-4 text-start mb-5 pb-5" >
            <Row>
                <Col>
                    <h2 className={estilos.h1Element}>CONTÁCTANOS</h2>
                    <p className={estilos.pElement}><strong>Dirección:</strong><br /> Irigoyen 1247, Crespo Entre Rios, 3116.</p>
                    <p className={estilos.pElement}><strong>Teléfono:</strong><br /> 3436132888</p>
                    <p className={estilos.pElement}><strong>Facebook:</strong><br /> Aficionados Mtb</p>
                    <p className={estilos.pElement}><strong>Email:</strong><br /> alejogbs8@gmail.com</p>
                    <p className={estilos.pElement}><strong>Horario de Negocio:</strong><br /> Lun-Vie 9:30am - 6:00pm <br /> Sábado: 9:00 am - 6:00pm <br />Domingo: Cerrado</p>


                </Col>

                <Col>
                <div >

                <iframe className={estilos.Mapa} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.3909249649196!2d-60.309925699999994!3d-32.0316085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b424a2213ceeeb%3A0x95e13b74f98d5dff!2sHipolito%20Yrigoyen%20%26%20Otto%20Sagem%C3%BCller%2C%20Crespo%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1704916714471!5m2!1ses-419!2sar" width="900" height="450"   loading="lazy"></iframe>
                </div>

                </Col>
            </Row>
        
        </Container>
    
    <Footer/>

</Container>

)
}


export default Contacto;
