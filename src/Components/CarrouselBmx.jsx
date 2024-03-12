import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext, useEffect, useState } from "react";
import {getAllBmx} from "../services/productosServices"
import { Container, Row } from "react-bootstrap";
import CardBikesBmx from "./CardBikesBmx";
import estilos from "../Components/estilos.module.css"
import { IoIosArrowRoundForward } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";
import { HomeContext } from "../Context/HomeContext";


function CarrouselBmx(){


    const {loading, setLoading, setProdBmx, prodBmx,responsive} = useContext(HomeContext)
        
    useEffect(()=>{

    const request = async () =>{

        try{
            const data= await getAllBmx();
            console.log(data);
            setProdBmx(data.docs);
            setLoading(false)
        

        } catch(e){
            console.log("error", e);
        }

    };

    request();

    }
    ,
    []);

    if(loading){
        return(
        <div className={estilos.container}>
            <div className={estilos.bar}></div>
            <div className={estilos.bar}></div>
            <div className={estilos.bar}></div>
            <div className={estilos.bar}></div>
        </div>)
        }else{
            return(
            <Container >
                <h2 className={estilos.titleBicicletas}>Bicicletas BMX </h2>
                    {/*colocar este input para buscar productos cuando cree el store  */}
                <Carousel slidesToSlide={1} infinite="true" number autoPlay="true" pauseOnHover="true" responsive={responsive}>
                            
                    {prodBmx.map((producto) => (
                            
                            <div  >
                                <CardBikesBmx
                                {...producto.data()}  key={producto.id}
                                />
                            
                            </div>
                                ))}
                    
                        
                </Carousel>

                <Row>
                    <NavLink as={Link} to="#"><p className={estilos.AllProducts}>Todos los productos BMX <IoIosArrowRoundForward /></p></NavLink> 
                </Row>
            </Container>

            )
        }

}
export default CarrouselBmx;