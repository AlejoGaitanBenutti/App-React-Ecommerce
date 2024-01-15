import { useEffect, useState } from "react";
import {getAllBmx} from "../services/productosServices"
import { Container, Row } from "react-bootstrap";
import CardBikesBmx from "./CardBikesBmx";



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
    <h2 className="text-dark mt-5 fs-1">Bicicletas BMX </h2>
        {/*colocar este input para buscar productos cuando cree el store  */}
    <Row>
        {prodBmx.map((producto) => (
            
        <CardBikesBmx
        {...producto.data()}  key={producto.seller}
        
        />
        ))}




    </Row>
    <Row>
        <p className="text-decoration-underline mb-4">Todos los productos BMX --</p>
    </Row>
</Container>

)

}
export default ProductosBmx;