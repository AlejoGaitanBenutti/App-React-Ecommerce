import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import estilos from "../Components/estilos.module.css"

function AlertNavigation({variant, text, duration, link,icon}){

    const navigate= useNavigate();

    if(duration !== 0 && Link){

        setTimeout(()=>{
            navigate(link)
        },
        duration);
    }



    return(

        <>
        <Alert className={estilos.Alerta} variant={variant}> {icon} {text}</Alert>
        </>

    )


}

export default AlertNavigation;