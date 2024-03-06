import { Container } from "react-bootstrap"
import { NavLink,Link } from "react-router-dom"
import estilos from "./estilos.module.css"

export const  Whatsapp=()=>{

return(

    <Container >
        <NavLink target="blank" as={Link} to="https://wa.me/3436132888?text=Hola!,%20me%20gustaría%20recibir%20información%20sobre%20los%20productos">
                <svg  className={estilos.logoWsp} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 128 128">
                    <path fill="#fff" d="M64,123c32.5,0,59-26.5,59-59c0-15.8-6.1-30.6-17.3-41.7C94.6,11.1,79.8,5,64,5C31.5,5,5,31.4,5,64 c0,10.4,2.7,20.5,7.9,29.5l-5.6,20.6c-1.2,4.4,2.8,8.5,7.3,7.3l21.3-5.6C44.4,120.5,54.1,123,64,123L64,123z"></path><path fill="#444b54" d="M107.9,20.2C96.2,8.5,80.6,2,64,2C29.8,2,2,29.8,2,64c0,10.5,2.6,20.8,7.7,29.9l-5.3,19.4 c-0.9,3.1,0,6.3,2.3,8.6c2.3,2.3,5.5,3.2,8.6,2.4l20.2-5.3c8.8,4.6,18.6,7,28.6,7c34.2,0,62-27.8,62-62 C126,47.5,119.6,31.9,107.9,20.2z M64,120c-9.3,0-18.6-2.4-26.8-6.8c-0.4-0.2-0.9-0.4-1.4-0.4c-0.3,0-0.5,0-0.8,0.1l-21.3,5.6 c-1.5,0.4-2.5-0.4-2.9-0.8c-0.4-0.4-1.2-1.4-0.8-2.9l5.6-20.6c0.2-0.8,0.1-1.6-0.3-2.3C10.5,83.5,8,73.8,8,64C8,33.1,33.1,8,64,8 c15,0,29.1,5.8,39.6,16.4C114.2,35,120.1,49.1,120,64C120,94.9,94.9,120,64,120z"></path><g><path fill="#71c2ff" d="M97.3,30.7C88.4,21.9,76.6,17,64,17C38.1,17,17,38,17,64c0,8.3,2.2,16.4,6.3,23.5c1.6,2.8,2,6.1,1.2,9.2 l-2.9,10.5l11.2-2.9c1-0.3,2-0.4,3-0.4c2,0,4,0.5,5.7,1.5C48.4,109,56.1,111,64,111h0c25.9,0,47-21.1,47-47 C111,51.4,106.1,39.6,97.3,30.7z M92.9,85.1c-1.2,3.4-7.2,6.8-10,7c-2.7,0.2-5.2,1.2-17.7-3.7c-15-5.9-24.5-21.3-25.2-22.3 c-0.7-1-6-8-6-15.3c0-7.3,3.8-10.8,5.2-12.3c1.4-1.5,2.9-1.8,3.9-1.8c1,0,2,0,2.8,0c1.1,0,2.2,0.1,3.3,2.5 c1.3,2.9,4.2,10.2,4.5,10.9c0.4,0.7,0.6,1.6,0.1,2.6c-0.5,1-0.7,1.6-1.5,2.5c-0.7,0.9-1.6,1.9-2.2,2.6c-0.7,0.7-1.5,1.5-0.6,3 c0.9,1.5,3.8,6.3,8.2,10.2c5.6,5,10.4,6.6,11.9,7.3c1.5,0.7,2.3,0.6,3.2-0.4c0.9-1,3.7-4.3,4.7-5.8c1-1.5,2-1.2,3.3-0.7 c1.4,0.5,8.6,4.1,10.1,4.8c1.5,0.7,2.5,1.1,2.8,1.7C94.1,78.7,94.1,81.6,92.9,85.1z"></path></g>
                </svg>
            </NavLink>
    </Container>
)



}