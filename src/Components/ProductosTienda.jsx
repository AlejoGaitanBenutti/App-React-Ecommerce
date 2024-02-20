import { useState,useEffect } from "react";
import { getAllProductosTienda } from "../services/productosServices";
import { Container, Row } from "react-bootstrap";
import CardProductosTienda from "./CardProductosTienda";
import estilos from "../Components/estilos.module.css"

function ProductosTienda(){



    const [prodTienda, setProdTienda] = useState([]);

    useEffect(()=>{
        const request = async() =>{
            try{
                const data = await getAllProductosTienda();
                console.log(data);
                setProdTienda(data.docs)
            }catch(e){
                console.log("error",e)
            }
        };

        request();
        

    },
    []);




    return(

    <Container fluid>

        <Row className={estilos.ProdTienda}>
            {prodTienda.map((productoTienda) => (

                <CardProductosTienda
                {...productoTienda.data()} key={productoTienda.key}
                />
            ))}
        </Row>


    </Container>
    
    

    )
}

export default ProductosTienda;