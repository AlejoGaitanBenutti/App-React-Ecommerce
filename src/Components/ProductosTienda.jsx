import { useState,useEffect } from "react";
import { getAllProductosTienda } from "../services/productosServices";
import { Container, Row } from "react-bootstrap";
import CardProductosTienda from "./CardProductosTienda";
import estilos from "../Components/estilos.module.css"
import { waveform } from "ldrs";

function ProductosTienda(){



    const [prodTienda, setProdTienda] = useState([]);
    const [buscar, setBuscar] = useState("");
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
        const request = async() =>{
            try{
                const data = await getAllProductosTienda(buscar);
                console.log(data);
                setProdTienda(data.docs)
                setLoading(false)
            }catch(e){
                console.log("error",e)
            }
        };

        request();
        

    },
    [buscar]);


    if(loading){
        return (
        <div className={estilos.container}>
            <div className={estilos.bar}></div>
            <div className={estilos.bar}></div>
            <div className={estilos.bar}></div>
            <div className={estilos.bar}></div>
        </div>)
    }else{

    return(

    <Container fluid>

        <Container className="w-75">
            <input placeholder="¿Que estas buscando?" type="search" className={estilos.buscador} value={buscar} onChange={(e) => setBuscar(e?.target?.value)}/>
        </Container>
        <Row className={estilos.ProdTienda}>
            {prodTienda.map((productoTienda) => (

                <CardProductosTienda
                {...productoTienda.data()} key={productoTienda.id}
                />
            ))}
        </Row>


    </Container>
    
    

    )}
}

export default ProductosTienda;