import React from "react";
import NavBar from "../Components/NavBar";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import estilos from "../Components/estilos.module.css"
import firebase from "../Config/firebase";
import ProductosMtb from "../Components/ProductosMtb";
import ProductosBmx from "../Components/ProductosBmx";
import BannerDos from "../Components/BannerDos";
import ProductosRecambios from "../Components/ProductosRecambio";
import ServicioEnvios from "../Components/Envios";
import Footer from "../Components/Foter";



function Home (){
    console.log(firebase); // mostrando que anda firebase en consola
    return(
    <>
        
        <Container fluid className={estilos.StylesHome}>
            
            <NavBar/>
            
            <Banner /> 
            
        </Container>

        <Container fluid>
            <ProductosMtb/>
            <ProductosBmx/>
            <BannerDos />
            <ProductosRecambios/>
            <ServicioEnvios />
            <Footer/>
        </Container>
    </>
    )

}

export default Home;