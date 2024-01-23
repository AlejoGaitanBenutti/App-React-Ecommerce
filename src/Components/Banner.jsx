import React from "react";
import { Container, Row } from "react-bootstrap";
import estilos from "../Components/estilos.module.css"
import { NavLink } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";


function Banner(){
    return(
        
        
        <Container  className="text-start d-flex flex-column mt-5 w-100 gap-4 ">
        
                <Row><h2 className="text-light fs-1">LA BICI QUE CAMBIARÁ TU CAMINO</h2></Row>
                <Row><h2 className="text-light fs-1"><b className={estilos.letraGrande}>NUEVA OLMO</b> AL TERRA <b className={estilos.letraGrande}>5.0</b></h2></Row>
                <Row><p className={estilos.PBanner}>Explora nuestra tienda en línea y descubre la emocionante variedad de <br />bicicletas</p></Row>
                <Row><NavLink className="text-decoration-none"><p className="text-light text-decoration-underline fs-5" >Quiero saber más <IoIosArrowRoundForward /></p></NavLink></Row>
            
        </Container>
    

    )
}


export default Banner;