import React from "react";
import { Container, Row } from "react-bootstrap";
import estilos from "../Components/estilos.module.css"
import { NavLink } from "react-router-dom";

function Banner(){
    return(
        
        
        <Container  className="text-start bg-dark d-flex flex-column w-100 gap-4 bg-transparent ">
        
                <Row><h2 className="text-light fs-1">LA BICI QUE CAMBIARÁ TU CAMINO</h2></Row>
                <Row><h2 className="text-light"><b className="fs-1">NUEVA OLMO</b> AL TERRA <b className="fs-1">5.0</b></h2></Row>
                <Row><p className={estilos.PBanner}>Explora nuestra tienda en línea y descubre la emocionante variedad de <br />bicicletas</p></Row>
                <Row><NavLink className="text-decoration-none"><p className="text-light text-decoration-underline fs-5" >Quiero saber más --></p></NavLink></Row>
            
        </Container>
    

    )
}


export default Banner;