import React from "react"
import estilos from "../Components/estilos.module.css"
import { Container } from "react-bootstrap"



const Footer = () => 
<Container fluid className={estilos.Footer}>
<footer >

    <div className="container text-center text-md-left">
        <div className="row ">
            <div className="col-md-3 mt-md-0 mt-3">
                <h5 className={estilos.HFooter}>StoreBikes</h5>
                <p className={estilos.AFooter}>¡Pedalea hacia el futuro!</p>
            </div>

            

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className={estilos.HFooter}>informacion</h5>
                <ul className="list-unstyled">
                    <li><a className={estilos.AFooter} href="#!">Términos y Condiciones</a></li>
                    <li><a className={estilos.AFooter} href="#!">Política de privacidad</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className={estilos.HFooter}>tienda</h5> 
                <ul className="list-unstyled">
                    <li><a className={estilos.AFooter} href="#!">Sobre Nosotros</a></li>
                    <li><a className={estilos.AFooter} href="#!">Contacto</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className={estilos.HFooter}>contacta aquí</h5>
                <ul className="list-unstyled">
                    <li className="mb-3">
                        <a className={estilos.AFooter} href="#!">Email: alejogbs8@gmail.com</a>
                    </li>
                    <li className="mb-3">
                    
                        <a className={estilos.AFooter} href="#!">Teléfono: 3436132888</a>
                    </li>
                    <li>
                        <p className={estilos.AFooter}>Direccion: Irigoyen 1247</p>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3 text-light" >© 2024 Copyright:
        <a href="#" className="text-light"> Gaitan Benutti Alejo</a>
    </div>

</footer>
</Container>
export default Footer