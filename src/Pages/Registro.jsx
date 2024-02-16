import { Container, Form, FormText, Row } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import Input from "../Components/Input";
import { useForm } from "react-hook-form";

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
    const [alert, setAlert]= useState({
        variant:'',
        text:'',
        duration:0,
        link:"",
        icon:""
    })

    
    const onSubmit = async(dataForm)=> {
        setLoading(true)
        try{
            console.log(dataForm);
            const response = await create(dataForm);
            
            setAlert({
                variant:"success",
                icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.2618 3.59937C13.1956 2.53312 12.6625 2 12 2C11.3375 2 10.8044 2.53312 9.73815 3.59937C9.09832 4.2392 8.46427 4.53626 7.55208 4.53626C6.7556 4.53626 5.62243 4.38178 5 5.00944C4.38249 5.63214 4.53628 6.76065 4.53628 7.55206C4.53628 8.46428 4.2392 9.09832 3.59935 9.73817C2.53312 10.8044 2.00001 11.3375 2 12C2.00002 12.6624 2.53314 13.1956 3.59938 14.2618C4.31616 14.9786 4.53628 15.4414 4.53628 16.4479C4.53628 17.2444 4.38181 18.3776 5.00949 19C5.63218 19.6175 6.76068 19.4637 7.55206 19.4637C8.52349 19.4637 8.99128 19.6537 9.68457 20.347C10.2749 20.9374 11.0663 22 12 22C12.9337 22 13.7251 20.9374 14.3154 20.347C15.0087 19.6537 15.4765 19.4637 16.4479 19.4637C17.2393 19.4637 18.3678 19.6175 18.9905 19M20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19M18.9905 19H19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 10.3077C8 10.3077 10.25 10 12 14C12 14 17.0588 4 22 2" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>,
                text:"Usuario creado Correctamente",
                duration:2000,
                link:"/login"
            })

            console.log(response);
            setLoading(false);
        

        }catch(e){
            console.log("error de tipo", e);

            setAlert({
                variant:"danger",
                icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C7.97679 14.053 10.8425 13.6575 13.5 14.2952" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="#000000" stroke-width="1.5"/>
                <path d="M16 22L19 19M19 19L22 16M19 19L16 16M19 19L22 22" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
                </svg>,
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