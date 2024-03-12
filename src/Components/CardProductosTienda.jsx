import { Col, Card} from "react-bootstrap"
import estilos from "../Components/estilos.module.css"
import ButtonWithLoading from "./ButtonWithLoading";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";




function CardProductosTienda({thumbnail,precio,nombre,stock}){

    const {logueo, setLogueo } = useContext(AuthContext)

    function Stock({ stock, children }) {

        if(children === "agotado"  ){
        return (
        <p className={estilos.stockAgotado}>
            {children && children}
            {stock}
        </p>
        
        )}else{
            return(
                <p className={estilos.stockDisponible}>
            {children && children}
            {stock}
        </p>
            )
        }
    }



    
    return(
        <>
        <Col className=" my-4 d-flex justify-content-center col-xl-3 col-sm-4 px-0  " >
            <Card className={estilos.CardsTienda}>
                    <span > <Stock>{stock}</Stock> </span>
                    <Card.Img variant="top" className={estilos.imgCardTienda} src={thumbnail} />
                <Card.Body className={estilos.interiorCardTienda} >
                
                    <Card.Title className={estilos.titleCardTienda} >{nombre}</Card.Title>
                    <Card.Subtitle className="my-3 text-muted lead ">ARS{precio}</Card.Subtitle>
                    
                    <Card.Text className="border-bottom">
                    
                    </Card.Text >
                    <ButtonWithLoading>Agregar al carrito</ButtonWithLoading>
                    <ButtonWithLoading >Ver Detalles</ButtonWithLoading>

                    {logueo && (
                    <ButtonWithLoading >Modificar</ButtonWithLoading>)}
                </Card.Body>

            </Card>
        </Col>
    </>
    )
}

export default CardProductosTienda;