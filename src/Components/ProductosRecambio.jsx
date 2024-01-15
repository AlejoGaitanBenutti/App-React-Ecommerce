import { useEffect, useState } from "react";
import { getAllRecambiosMtb } from "../services/productosServices";
import CardRecambios from "./CardRecambios";
import { Container,Row } from "react-bootstrap";

function ProductosRecambios(){


    const [recambios, setRecambios]= useState([]);


    useEffect(()=>{

    const request = async ()=>{
    
    try{
        const data = await getAllRecambiosMtb();
        setRecambios(data.docs)
    }catch(e){
        console.log("error",e)
    }


    };

    request();

    },

    []);
    
    
    
    
    
    return(
        <Container >
            
            <h2 className="text-dark mt-5 fs-1">Recambios Mtb </h2>
        <Row>

        {recambios.map((producto) => (

        <CardRecambios
        {...producto.data()} key={producto.seller}
        
        
        />



        ))}



        </Row>



        </Container>

    )



}


export default ProductosRecambios