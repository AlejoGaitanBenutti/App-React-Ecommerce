import { Container,Row, Form, Button} from "react-bootstrap";
import Input from "../Components/Input";
import {  useForm } from "react-hook-form";
import estilos from "../Components/estilos.module.css"
import NavBar from "../Components/NavBar";
import Footer from "../Components/Foter";
import { useState } from "react";
import AlertNavigation from "../Components/AlertNavigation";

function Login(){

    // Register de react hook forms
    const { register,
        handleSubmit, 
        formState: { errors },
        } = useForm({mode: "onChange"});


        // estados
    const [alert, setAlert] = useState({
        variant:"",
        text:"",
        link:"/",
        duration:0,

    });


    // crear funcion para el onsubmit y ejecutar los cambios de estado







    return(
    




    <Container fluid className={estilos.containLogin}>

        <Container fluid className="bg-dark">

            <NavBar/>

        </Container  >
            
            

        <Container fluid className={estilos.containFormLogin}>

                        <Row>  
                <h5 className={estilos.signIn}> Sign In</h5>
            </Row>
            


            <Form className={estilos.Form} onSubmit={handleSubmit()}>
        
                <Input  type="email"
                        label="Email" 
                        placeholder="ejemplo@hotmail.com"
                        register={{
                            ...register("email",
                            {required:true}),
                        }}
                        errors={errors}
                        name="email"
                
                />

                <Input  type="password"
                    label="Contraseña"
                        placeholder="Ingrese su contraseña"
                        register={{
                        ...register("password",
                        {required:true,
                        minlength:5,
                        maxlength:18
                        }),
                        }}
                        errors={errors}
                        name="password"
                    
                    >

                    <Form.Text>
                        {/* el Min Length  */}
                            {errors?.password?.type==="minLength" &&
                                            <div>Escribir mas de 5 caracteres</div>}
                            {/* el max Length */}
                            {errors?.password?.type==="maxLength" && 
                                            <div>Escribir menos de 18 caracteres</div>}
                    </Form.Text>

                </Input>
                <Row className="d-flex justify-content-center flex-column align-items-center mt-3 ">
                    <Button className={estilos.buttonLogin} type="submit" variant="light">Ingresar</Button>
                    <Button className={estilos.buttonLoginDos}>Registrarse</Button>
                </Row>
                
                

            </Form>

            

        </Container>

        <Footer/>
        
    </Container>
    )
}

export default Login;