import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import { getAllRecambiosMtb } from "../services/productosServices";
import CardRecambios from "./CardRecambios";
import { Container,Row } from "react-bootstrap";
import estilos from "./estilos.module.css"
import { IoIosArrowRoundForward } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";

function CarrouselRecambios(){


    const [recambios, setRecambios]= useState([]);
    const [loading, setLoading]= useState(true)

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }


    useEffect(()=>{

    const request = async ()=>{
    
    try{
        const data = await getAllRecambiosMtb();
        setRecambios(data.docs)
        setLoading(false)
    }catch(e){
        console.log("error",e)
    }


    };

    request();

    },

    []);
    
    
    
    
    if(loading){
        return(<div className={estilos.container}>
            <div className={estilos.bar}></div>
            <div className={estilos.bar}></div>
            <div className={estilos.bar}></div>
            <div className={estilos.bar}></div>
        </div>)
    }else{

    
    return(
        <Container fluid >
            
            <h2 className={estilos.titleBicicletas}>Recambios Mtb </h2>
        
            <Carousel infinite="true" autoPlay="true" pauseOnHover="true" responsive={responsive}>
                
            
                {recambios.map((producto) => (
                        
                        <div className="mb-4  ">
                            <CardRecambios
                            {...producto.data()}  key={producto.id}
                            />
                        
                        </div>
                            ))}
                
                    
            </Carousel>


            <Row>
                <NavLink as={Link} to="#"><p className="text-decoration-underline mb-4 text-dark fs-5">Todos los productos de recambio <IoIosArrowRoundForward /></p></NavLink> 
            </Row>
        </Container>

    )}



}


export default  CarrouselRecambios;