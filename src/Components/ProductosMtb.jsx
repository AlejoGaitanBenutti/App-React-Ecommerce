import { useEffect, useState } from "react";
import {getAllMtb} from "../services/productosServices"
import { Container, Row } from "react-bootstrap";
import CardBikesMtb from "./CardBikesMtb";


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
    <h2 className="text-dark mt-4  fs-1">Bicicletas MTB </h2>
       {/* <input placeholder="Search" type="search" value={buscar} onChange={(e)=> setBuscar(e?.target?.value)}/> colocar este input para buscar productos cuando cree el store  */}
    <Row>
        {prodMtb.map((producto) => (
            
        <CardBikesMtb
        {...producto.data()}  key={producto.seller}
        
        />

        ))}

    </Row>
    <Row>
        <p className="text-decoration-underline mb-4">Todos los productos Mtb --</p>
    </Row>
</Container>

)

}
export default ProductosMtb;