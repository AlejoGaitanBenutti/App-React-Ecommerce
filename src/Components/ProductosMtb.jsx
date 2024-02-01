import { useEffect, useState } from "react";
import {getAllMtb} from "../services/productosServices";
import { Container, Row } from "react-bootstrap";
import CardBikesMtb from "./CardBikesMtb";
import estilos from "../Components/estilos.module.css";
import { NavLink, Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

function ProductosMtb(){

    const [prodMtb, setProdMtb] = useState([]);
    
useEffect(()=>{

const request = async () =>{

    try{
        const data= await getAllMtb();
        console.log(data);
        setProdMtb(data.docs);
    } catch(e){
        console.log("error", e);
    }

};

request();


}
,
[]);


return(

<Container className="border-bottom">
    <h2 className={estilos.titleBicicletas}>Bicicletas MTB </h2>
       {/* <input placeholder="Search" type="search" value={buscar} onChange={(e)=> setBuscar(e?.target?.value)}/> colocar este input para buscar productos cuando cree el store  */}
    <Row>
        {prodMtb.map((producto) => (
            
        <CardBikesMtb
        {...producto.data()}  key={producto.seller}
        
        />

        ))}

    </Row>
    <Row>
    <NavLink as={Link} to="#"><p className="text-decoration-underline text-dark mb-4 fs-5">Todos los productos Mtb <IoIosArrowRoundForward /></p></NavLink>
    </Row>
</Container>

)

}
export default ProductosMtb;