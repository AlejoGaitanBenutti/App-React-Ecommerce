import { Container, Form, FormText, Row } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import Input from "../Components/Input";
import { useForm } from "react-hook-form";
import {Button} from "react-bootstrap";
import estilos from "../Components/estilos.module.css"
import Footer from "../Components/Foter";
import { create } from "../services/authServices";
import { useState } from "react";
import ButtonWithLoading from "../Components/ButtonWithLoading";
import AlertNavigation from "../Components/AlertNavigation";
import { regisMessage } from "../Utils/errorMassage";




function Registro(){

    const { register,
            handleSubmit,
        formState:{errors},
    } = useForm({mode:"onChange"});

    // spinner
    const [loading, setLoading]= useState(false);

    // estado alerta
    const [alert, setAlert]= useState({variant:'',text:'', duration:0, link:""})

    
    const onSubmit = async(dataForm)=> {
        setLoading(true)
        try{
            console.log(dataForm);
            const response = await create(dataForm);
            
            setAlert({
                variant:"success",
                text:"Usuario creado Correctamente",
                duration:3000,
                link:"/"
            })

            console.log(response);
            setLoading(false);
           

        }catch(e){
            console.log("error de tipo", e);

            setAlert({
                variant:"danger",
                text: regisMessage[e.code] || "Ocurrio un Error",
                duration:0
            });
            
            setLoading(false);

            }
    };


    return(

        <Container fluid className={estilos.containLogin}>

            <Container fluid className="bg-dark">
                <NavBar/>
            </Container>

            <Container fluid className={estilos.containFormRegistro}>
                <Row>
                    <h5 className={estilos.signIn}>Registrarse</h5>
                </Row>

                <Form className={estilos.Form} onSubmit={handleSubmit(onSubmit)} >

                    <Input  type="text"
                            label="Nombre"
                            placeholder="Ingrese su nombre"
                            register={{
                                ...register("nombre",
                                {required:true}),
                            }}
                            errors={errors}
                            name="nombre"                    
                    
                    />

                    <Input  type="text"
                            label="Apellido"
                            placeholder="Ingrese su Apellido"
                            register={{
                                ...register("apellido",
                                {required:true}),
                            }}
                            errors={errors}
                            name="apellido"                    
                    
                    />


                    <Input
                    
                    type="email"
                    label="Email"
                    placeholder="ejemplo@gmail.com"
                    register={{
                        ...register("email",
                        {required:true}),
                    }}
                    errors={errors}
                    name="email"
                    
                    
                    />

                    <Input  type="password"
                            label="Contraseña"
                            placeholder="ingrese su contraseña"
                            register={{
                                ...register("password",
                                {required:true,
                                minLength:8,
                                maxLength:18
                            }),
                            }}
                            errors={errors}
                            name="password"
                    
                    
                    
                    
                    
                    >

                    <FormText>
                            {errors?.password?.type==="minLength" && 
                                <div className="text-white">Escribir mas de 8 caracteres</div>}

                            {errors?.password?.type==="maxLength" && 
                                <div className="text-white">Escribir menos de 18 caracteres</div>}
                    </FormText>
                    
                    </Input>
                
                    <Row className="d-flex justify-content-center flex-column align-items-center mt-3 ">
                        <ButtonWithLoading  type="submit" >

                        <p className="pt-1"> Registrare</p>

                        </ButtonWithLoading>
                    </Row>
                    <AlertNavigation {...alert}  />
                </Form>






            </Container>


                <Footer/>

        </Container>


)
}

export default Registro;