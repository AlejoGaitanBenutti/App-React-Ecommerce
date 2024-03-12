import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext, useEffect, useState } from "react";
import { getAllRecambiosMtb } from "../services/productosServices";
import CardRecambios from "./CardRecambios";
import { Container,Row } from "react-bootstrap";
import estilos from "./estilos.module.css"
import { IoIosArrowRoundForward } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";
import { HomeContext } from "../Context/HomeContext";

function CarrouselRecambios(){


    const {loading, setLoading, setRecambios, recambios,responsive} = useContext(HomeContext)


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
        <Container >
            
            <h2 className={estilos.titleBicicletas}> Recambios MTB </h2>
        
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
                <NavLink as={Link} to="#"><p className={estilos.AllProducts} >Todos los productos de recambio <IoIosArrowRoundForward /></p></NavLink> 
            </Row>
        </Container>

    )}



}


export default  CarrouselRecambios;