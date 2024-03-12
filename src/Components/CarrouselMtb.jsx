import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import estilos from "./estilos.module.css"
import { getAllMtb } from "../services/productosServices";
import CardBikesMtb from "./CardBikesMtb";
import { IoIosArrowRoundForward } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";
import { HomeContext } from "../Context/HomeContext";

function CarrouselMtb(){

    const {loading, setLoading, setProdMtb, prodMtb,responsive} = useContext(HomeContext)



    useEffect(()=>{

        const request = async () =>{
        
            try{
                const data= await getAllMtb();
                console.log(data);
                setProdMtb(data.docs);
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
        <Container  >
            <h2 className={estilos.titleBicicletas}> Bicicletas MTB </h2>
            <Carousel className=""   infinite="true" autoPlay="true" pauseOnHover="true" responsive={responsive}>
                
            
                {prodMtb.map((producto) => (
                        
                        <div className="mb-4  ">
                            <CardBikesMtb
                            {...producto.data()}  key={producto.id}
                            />
                        
                        </div>
                            ))}
                
                    
            </Carousel>

            <Row>
                <NavLink as={Link} to="#"><p className={estilos.AllProducts}>Todos los productos MTB <IoIosArrowRoundForward /></p></NavLink> 
            </Row>
        </Container>
        );
}
}
export default CarrouselMtb;