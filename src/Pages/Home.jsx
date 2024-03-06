import React from "react";
import NavBar from "../Components/NavBar";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import estilos from "../Components/estilos.module.css"
import firebase from "../Config/firebase";
import CarrouselBmx from "../Components/CarrouselBmx";
import BannerDos from "../Components/BannerDos";
import ServicioEnvios from "../Components/Envios";
import Footer from "../Components/Foter";
import CarrouselMtb from "../Components/CarrouselMtb";
import CarrouselRecambios from "../Components/CarrouselRecambio";
import { Whatsapp } from "../Components/Whatsapp";




function Home (){
    console.log(firebase); // mostrando que anda firebase en consola
    return(
    <>
        <Whatsapp/>
        
        <header>
            <Container fluid className={estilos.StylesHome}>
                <NavBar/>
                <Banner /> 
            </Container>
        </header>

        <main>
            
            <Container fluid>
                <section  >
                    <Container fluid  >
                        
                        <CarrouselMtb/>
        
                    </Container>
                </section> 

                <section >
                    <Container fluid >
                        <CarrouselBmx/>
                    </Container>
                </section>

                <section>
                    <Container fluid>
                        <BannerDos />
                    </Container>
                </section>

                <section>
                    <Container fluid>
                        <CarrouselRecambios/>
                    </Container>
                </section>

                <section>
                    <Container fluid>
                        <ServicioEnvios />
                    </Container>
                </section>

                <footer>
                    <Container fluid>
                        <Footer/>
                    </Container>
                </footer>

            </Container>
        </main>
    </>
    )

}

export default Home;