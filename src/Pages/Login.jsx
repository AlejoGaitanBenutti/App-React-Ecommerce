import { Container,Row, Form, Button} from "react-bootstrap";
import Input from "../Components/Input";
import {  useForm } from "react-hook-form";
import estilos from "../Components/estilos.module.css"
import NavBar from "../Components/NavBar";
import Footer from "../Components/Foter";
import { useState } from "react";
import AlertNavigation from "../Components/AlertNavigation";
import { Link } from "react-router-dom";
import { login } from "../services/authServices";
import { regisMessage } from "../Utils/errorMassage";
import ButtonWithLoading from "../Components/ButtonWithLoading";

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




    const onSubmit= async (dataForm)=>{

        try{
            console.log(dataForm);
            const response= await login(dataForm)
            console.log(response);
            setAlert({
                variant:"success",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16.3083 4.38394C15.7173 4.38394 15.4217 4.38394 15.1525 4.28405C15.1151 4.27017 15.0783 4.25491 15.042 4.23828C14.781 4.11855 14.5721 3.90959 14.1541 3.49167C13.1922 2.52977 12.7113 2.04882 12.1195 2.00447C12.04 1.99851 11.96 1.99851 11.8805 2.00447C11.2887 2.04882 10.8077 2.52977 9.84585 3.49166C9.42793 3.90959 9.21897 4.11855 8.95797 4.23828C8.92172 4.25491 8.88486 4.27017 8.84747 4.28405C8.57825 4.38394 8.28273 4.38394 7.69171 4.38394H7.58269C6.07478 4.38394 5.32083 4.38394 4.85239 4.85239C4.38394 5.32083 4.38394 6.07478 4.38394 7.58269V7.69171C4.38394 8.28273 4.38394 8.57825 4.28405 8.84747C4.27017 8.88486 4.25491 8.92172 4.23828 8.95797C4.11855 9.21897 3.90959 9.42793 3.49166 9.84585C2.52977 10.8077 2.04882 11.2887 2.00447 11.8805C1.99851 11.96 1.99851 12.04 2.00447 12.1195C2.04882 12.7113 2.52977 13.1922 3.49166 14.1541C3.90959 14.5721 4.11855 14.781 4.23828 15.042C4.25491 15.0783 4.27017 15.1151 4.28405 15.1525C4.38394 15.4217 4.38394 15.7173 4.38394 16.3083V16.4173C4.38394 17.9252 4.38394 18.6792 4.85239 19.1476C5.32083 19.6161 6.07478 19.6161 7.58269 19.6161H7.69171C8.28273 19.6161 8.57825 19.6161 8.84747 19.7159C8.88486 19.7298 8.92172 19.7451 8.95797 19.7617C9.21897 19.8815 9.42793 20.0904 9.84585 20.5083C10.8077 21.4702 11.2887 21.9512 11.8805 21.9955C11.96 22.0015 12.04 22.0015 12.1195 21.9955C12.7113 21.9512 13.1922 21.4702 14.1541 20.5083C14.5721 20.0904 14.781 19.8815 15.042 19.7617C15.0783 19.7451 15.1151 19.7298 15.1525 19.7159C15.4217 19.6161 15.7173 19.6161 16.3083 19.6161H16.4173C17.9252 19.6161 18.6792 19.6161 19.1476 19.1476C19.6161 18.6792 19.6161 17.9252 19.6161 16.4173V16.3083C19.6161 15.7173 19.6161 15.4217 19.7159 15.1525C19.7298 15.1151 19.7451 15.0783 19.7617 15.042C19.8815 14.781 20.0904 14.5721 20.5083 14.1541C21.4702 13.1922 21.9512 12.7113 21.9955 12.1195C22.0015 12.04 22.0015 11.96 21.9955 11.8805C21.9512 11.2887 21.4702 10.8077 20.5083 9.84585C20.0904 9.42793 19.8815 9.21897 19.7617 8.95797C19.7451 8.92172 19.7298 8.88486 19.7159 8.84747C19.6161 8.57825 19.6161 8.28273 19.6161 7.69171V7.58269C19.6161 6.07478 19.6161 5.32083 19.1476 4.85239C18.6792 4.38394 17.9252 4.38394 16.4173 4.38394H16.3083Z" stroke="#000000" stroke-width="1.5"/>
                <path d="M8.5 16.5C9.19863 15.2923 10.5044 14.4797 12 14.4797C13.4956 14.4797 14.8014 15.2923 15.5 16.5M14 10C14 11.1046 13.1046 12 12 12C10.8955 12 10 11.1046 10 10C10 8.89544 10.8955 8.00001 12 8.00001C13.1046 8.00001 14 8.89544 14 10Z "  stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
                </svg>,
                text:" Ingresando...",
            
                // link:"/",
                duration:1500,
            })
        
            
        
        }catch(e){
            console.log("Error",e);
            setAlert({
                variant:"danger",
                icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 16H12.009" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 13V8" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.1528 4.28405C13.9789 3.84839 13.4577 2.10473 12.1198 2.00447C12.0403 1.99851 11.9603 1.99851 11.8808 2.00447C10.5429 2.10474 10.0217 3.84829 8.8478 4.28405C7.60482 4.74524 5.90521 3.79988 4.85272 4.85239C3.83967 5.86542 4.73613 7.62993 4.28438 8.84747C3.82256 10.0915 1.89134 10.6061 2.0048 12.1195C2.10506 13.4574 3.84872 13.9786 4.28438 15.1525C4.73615 16.37 3.83962 18.1346 4.85272 19.1476C5.90506 20.2001 7.60478 19.2551 8.8478 19.7159C10.0214 20.1522 10.5431 21.8954 11.8808 21.9955C11.9603 22.0015 12.0403 22.0015 12.1198 21.9955C13.4575 21.8954 13.9793 20.1521 15.1528 19.7159C16.3704 19.2645 18.1351 20.1607 19.1479 19.1476C20.2352 18.0605 19.1876 16.2981 19.762 15.042C20.2929 13.8855 22.1063 13.3439 21.9958 11.8805C21.8957 10.5428 20.1525 10.021 19.7162 8.84747C19.2554 7.60445 20.2004 5.90473 19.1479 4.85239C18.0955 3.79983 16.3958 4.74527 15.1528 4.28405Z" stroke="#000000" stroke-width="1.5"/>
                </svg> ,
                text:  regisMessage[e.code] || "Ah ocurrido un error",
                duration:0
                
            })
        }
    }





    return(
    




    <Container fluid className={estilos.containLogin}>

        <Container fluid className="bg-dark">

            <NavBar/>

        </Container  >
            
            

        <Container fluid className={estilos.containFormLogin}>

                        <Row>  
                <h5 className={estilos.signIn}> Sign In</h5>
            </Row>
            


            <Form className={estilos.Form} onSubmit={handleSubmit(onSubmit)}>
        
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
                    <ButtonWithLoading > Ingresar</ButtonWithLoading>
                    
                    <Button as={Link} to="/registro" className={estilos.buttonFormDos} >Registrarse</Button>
                
                    
                </Row>
                
                
                <AlertNavigation {...alert}  />

            </Form>

            

        </Container>

        <Footer/>
        
    </Container>
    )
}

export default Login;