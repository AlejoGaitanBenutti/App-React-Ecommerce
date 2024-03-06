import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import {getAllBmx} from "../services/productosServices"
import { Container, Row } from "react-bootstrap";
import CardBikesBmx from "./CardBikesBmx";
import estilos from "../Components/estilos.module.css"
import { IoIosArrowRoundForward } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";


function CarrouselBmx(){

    const [prodBmx, setProdBmx] = useState([]);
    const [loading, setLoading] = useState(true);

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
        <Container fluid >
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
                <NavLink as={Link} to="#"><p className="text-decoration-underline mb-4 text-dark fs-5">Todos los productos BMX <IoIosArrowRoundForward /></p></NavLink> 
            </Row>
        </Container>

)}

}
export default CarrouselBmx;