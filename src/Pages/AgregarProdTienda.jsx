import { useForm } from "react-hook-form";
import { useState } from "react";
import {Button, Container, Form, Row, Col} from 'react-bootstrap';
import { ProductosAlta } from "../services/productosServices";
import ButtonWithLoading from "../Components/ButtonWithLoading";
import AlertNavigation from "../Components/AlertNavigation";
import estilos from "../Components/estilos.module.css"
import NavBar from "../Components/NavBar";
import Footer from "../Components/Foter";

// en este componente podria reciclar y usar menos formGroup




function AgregarProdTienda(){

    const {register,
    handleSubmit,
formState:{errors},
}=useForm({mode:"onchange"});

const [alert, setAlert] = useState({
    variant:"",
    text:"",
    icon:"",
    link:"/",
    duration:0,

});


    const onSubmit = async(dataProd)=> {
        try{
            const document= await ProductosAlta(dataProd)
            console.log(document);
            setAlert({
                variant:"succes",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9.42613 3.06269C10.6836 2.35423 11.3124 2 12 2C12.6876 2 13.3164 2.35423 14.5739 3.06269L16.3239 4.04861C17.6292 4.78401 18.2819 5.15171 18.6409 5.76664C19 6.38157 19 7.13157 19 8.63158V10.3684C19 11.8684 19 12.6184 18.6409 13.2334C18.2819 13.8483 17.6292 14.216 16.3239 14.9514L14.5739 15.9373C13.3164 16.6458 12.6876 17 12 17C11.3124 17 10.6836 16.6458 9.42613 15.9373L7.67613 14.9514C6.37081 14.216 5.71815 13.8483 5.35908 13.2334C5 12.6184 5 11.8684 5 10.3684V8.63158C5 7.13157 5 6.38157 5.35908 5.76664C5.71815 5.15171 6.37081 4.78401 7.67613 4.04861L9.42613 3.06269Z" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M9 10.1667C9 10.1667 9.75 10.1667 10.5 11.5C10.5 11.5 12.8824 8.16667 15 7.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.8825 15L17.5527 18.2099C17.9833 20.2723 18.1986 21.3035 17.7563 21.7923C17.3141 22.281 16.546 21.8606 15.0099 21.0198L12.7364 19.7753C12.3734 19.5766 12.1919 19.4773 12 19.4773C11.8081 19.4773 11.6266 19.5766 11.2636 19.7753L8.99008 21.0198C7.45397 21.8606 6.68592 22.281 6.24365 21.7923C5.80139 21.3035 6.01669 20.2723 6.44731 18.2099L7.11752 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>,
                text:"Agregado Correctamente.",
                link:"/tiendaOnline",
                duration:1500,
            });
            
            
        }catch(e){
            console.log("error",e)
            setAlert({
                variant:"danger",
                text:"Error al añadir producto",
                icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C7.97679 14.053 10.8425 13.6575 13.5 14.2952" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="#000000" stroke-width="1.5"/>
                <path d="M16 22L19 19M19 19L22 16M19 19L16 16M19 19L22 22" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
                </svg>,
                duration:"0"
            })
        }
    }


    return (

        < Container fluid className="">
        <Container fluid className="bg-dark"> 
            <NavBar/>

        </Container>

        <Container fluid className={estilos.containLogin} >
            <Row className="d-flex justify-content-center" >
                <Row className="mt-5 text-center pb-3">
                    
                    <p className={estilos.h1Element}>Añadir Producto a la tienda online</p>
    
                </Row>
    
                <Form className={estilos.containFormLogin}  onSubmit={handleSubmit(onSubmit)}>
                    
    
                
                    <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
                        
                        <Form.Label className="fs-4 text-uppercase text-white" >Nombre</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese el nombre del producto"
                        {...register("nombre",{required:true})}/>
    
                        {errors?.title && <div>El campo es obligatorio</div>} 
                        
                        
    
                    </Form.Group>
    
                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput2">
    
                        <Form.Label className="fs-4 text-uppercase text-white">Precio</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ingrese el Precio"
                            {...register("precio", {required:true})}/>
    
                            {errors?.price && <div>El campo es obligatorio</div>} 
                            
    
                    </Form.Group>
    
                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput3">
    
                        <Form.Label className="fs-4 text-uppercase text-white">Imagen</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="URL de imagen"
                            {...register("thumbnail", {required:true})}  />
    
                            {errors?.thumbnail && <div>El campo es obligatorio</div>} 
                        
    
                    </Form.Group>
    
                    <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
    
                        <Form.Label className="fs-4 text-uppercase text-white">Descripcion</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingresar descripcion"
                        {...register("descripcion",{required:true})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
    
                        
                        
    
                    </Form.Group>

                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
    
                        <Form.Label className="fs-4 text-uppercase text-white">Cadena</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion de la cadena"
                        {...register("cadena",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
    
                        
                        
    
                    </Form.Group>

                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
    
                        <Form.Label className="fs-4 text-uppercase text-white">Color</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion del color"
                        {...register("color",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
    
                        
                        
    
                    </Form.Group>

                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
                        <Form.Label className="fs-4 text-uppercase text-white">Cuadro</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion del cuadro"
                        {...register("cuadro",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
                        <Form.Label className="fs-4 text-uppercase text-white">Descarrilador Delantero</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion descarrilador delantero"
                        {...register("descarrilador delantero",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
                        <Form.Label className="fs-4 text-uppercase text-white">Descarrilador trasero</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="ingrese descripcion descarrilador trasero"
                        {...register("descarrilador trasero",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
                        <Form.Label className="fs-4 text-uppercase text-white"> Frenos</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("frenos",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
                        <Form.Label className="fs-4 text-uppercase text-white">Horquilla</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("horquilla",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
                        <Form.Label className="fs-4 text-uppercase text-white">Key</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("key",{required:true})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
                        <Form.Label className="fs-4 text-uppercase text-white">Manija de freno</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("manija de freno",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
                        <Form.Label className="fs-4 text-uppercase text-white">Marca</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("marca",{required:true})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>
    
                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
                        <Form.Label className="fs-4 text-uppercase text-white">Peso</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("peso",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
                        <Form.Label className="fs-4 text-uppercase text-white">Piñon</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("piñon",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
                        <Form.Label className="fs-4 text-uppercase text-white">Plato y Palancas</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("plato y palanca",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>


                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
                        <Form.Label className="fs-4 text-uppercase text-white">Rodado</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("rodados",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
                        <Form.Label className="fs-4 text-uppercase text-white">Ruedas</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("ruedas",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
                        <Form.Label className="fs-4 text-uppercase text-white">SKU</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("sku",{required:true})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
                        <Form.Label className="fs-4 text-uppercase text-white">Talle</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("talle",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>


                    <ButtonWithLoading >
                        <p>Guardar</p>
                    </ButtonWithLoading>
                
                    <AlertNavigation/>
                </Form>
    
            </Row>
        </Container>
    
        <Footer/>
        </Container>
        );
}

export default AgregarProdTienda;