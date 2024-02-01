import { useEffect, useState } from "react";
import {getAllBmx} from "../services/productosServices"
import { Container, Row } from "react-bootstrap";
import CardBikesBmx from "./CardBikesBmx";
import estilos from "../Components/estilos.module.css"
import { IoIosArrowRoundForward } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";


function ProductosBmx(){

    const [prodBmx, setProdBmx] = useState([]);
    



useEffect(()=>{

const request = async () =>{

    try{
        const data= await getAllBmx();
        console.log(data);
        setProdBmx(data.docs);

    

    } catch(e){
        console.log("error", e);
    }

};

request();


}
,
[]);

return(


<Container >
    <h2 className={estilos.titleBicicletas}>Bicicletas BMX </h2>
        {/*colocar este input para buscar productos cuando cree el store  */}
    <Row>
        {prodBmx.map((producto) => (
            
        <CardBikesBmx
        {...producto.data()}  key={producto.seller}
        
        />
        ))}




    </Row>
    <Row>
        <NavLink as={Link} to="#"><p className="text-decoration-underline mb-4 text-dark fs-5">Todos los productos BMX <IoIosArrowRoundForward /></p></NavLink> 
    </Row>
</Container>

)

}
export default ProductosBmx;