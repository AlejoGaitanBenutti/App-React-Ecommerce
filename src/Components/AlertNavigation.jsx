import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";


function AlertNavigation({variant, text, duration, link}){

    const navigate= useNavigate();

    if(duration !== 0 && Link){

        setTimeout(()=>{
            navigate(link)
        },
        duration);
    }



    return(

        <>
        <Alert className="mt-1" variant={variant}> {text} </Alert>
        </>

    )


}

export default AlertNavigation;