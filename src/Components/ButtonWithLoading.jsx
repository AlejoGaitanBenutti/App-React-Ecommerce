import React from "react";
import { Button,Spinner } from "react-bootstrap";
import estilos from "../Components/estilos.module.css"


function ButtonWithLoading({
    variant='primary',
    type ='submit',
    loading, 
    children,
}) {
return (
    

        <Button className={estilos.buttonForm} type={type} variant={variant} disabled={loading} children>
            {loading && <Spinner className="align-self-center  " animation="border" size="sm" />}
            {children}
        </Button>

);
}

export default ButtonWithLoading;