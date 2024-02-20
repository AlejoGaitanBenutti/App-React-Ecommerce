import { useForm } from "react-hook-form";
import { useState } from "react";
import {Button, Container, Form, Row, Col} from 'react-bootstrap';
import { ProductosAlta } from "../services/productosServices";
import ButtonWithLoading from "./ButtonWithLoading";
import AlertNavigation from "../Components/AlertNavigation"

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
                variant:"success",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16.3083 4.38394C15.7173 4.38394 15.4217 4.38394 15.1525 4.28405C15.1151 4.27017 15.0783 4.25491 15.042 4.23828C14.781 4.11855 14.5721 3.90959 14.1541 3.49167C13.1922 2.52977 12.7113 2.04882 12.1195 2.00447C12.04 1.99851 11.96 1.99851 11.8805 2.00447C11.2887 2.04882 10.8077 2.52977 9.84585 3.49166C9.42793 3.90959 9.21897 4.11855 8.95797 4.23828C8.92172 4.25491 8.88486 4.27017 8.84747 4.28405C8.57825 4.38394 8.28273 4.38394 7.69171 4.38394H7.58269C6.07478 4.38394 5.32083 4.38394 4.85239 4.85239C4.38394 5.32083 4.38394 6.07478 4.38394 7.58269V7.69171C4.38394 8.28273 4.38394 8.57825 4.28405 8.84747C4.27017 8.88486 4.25491 8.92172 4.23828 8.95797C4.11855 9.21897 3.90959 9.42793 3.49166 9.84585C2.52977 10.8077 2.04882 11.2887 2.00447 11.8805C1.99851 11.96 1.99851 12.04 2.00447 12.1195C2.04882 12.7113 2.52977 13.1922 3.49166 14.1541C3.90959 14.5721 4.11855 14.781 4.23828 15.042C4.25491 15.0783 4.27017 15.1151 4.28405 15.1525C4.38394 15.4217 4.38394 15.7173 4.38394 16.3083V16.4173C4.38394 17.9252 4.38394 18.6792 4.85239 19.1476C5.32083 19.6161 6.07478 19.6161 7.58269 19.6161H7.69171C8.28273 19.6161 8.57825 19.6161 8.84747 19.7159C8.88486 19.7298 8.92172 19.7451 8.95797 19.7617C9.21897 19.8815 9.42793 20.0904 9.84585 20.5083C10.8077 21.4702 11.2887 21.9512 11.8805 21.9955C11.96 22.0015 12.04 22.0015 12.1195 21.9955C12.7113 21.9512 13.1922 21.4702 14.1541 20.5083C14.5721 20.0904 14.781 19.8815 15.042 19.7617C15.0783 19.7451 15.1151 19.7298 15.1525 19.7159C15.4217 19.6161 15.7173 19.6161 16.3083 19.6161H16.4173C17.9252 19.6161 18.6792 19.6161 19.1476 19.1476C19.6161 18.6792 19.6161 17.9252 19.6161 16.4173V16.3083C19.6161 15.7173 19.6161 15.4217 19.7159 15.1525C19.7298 15.1151 19.7451 15.0783 19.7617 15.042C19.8815 14.781 20.0904 14.5721 20.5083 14.1541C21.4702 13.1922 21.9512 12.7113 21.9955 12.1195C22.0015 12.04 22.0015 11.96 21.9955 11.8805C21.9512 11.2887 21.4702 10.8077 20.5083 9.84585C20.0904 9.42793 19.8815 9.21897 19.7617 8.95797C19.7451 8.92172 19.7298 8.88486 19.7159 8.84747C19.6161 8.57825 19.6161 8.28273 19.6161 7.69171V7.58269C19.6161 6.07478 19.6161 5.32083 19.1476 4.85239C18.6792 4.38394 17.9252 4.38394 16.4173 4.38394H16.3083Z" stroke="#000000" stroke-width="1.5"/>
                <path d="M8.5 16.5C9.19863 15.2923 10.5044 14.4797 12 14.4797C13.4956 14.4797 14.8014 15.2923 15.5 16.5M14 10C14 11.1046 13.1046 12 12 12C10.8955 12 10 11.1046 10 10C10 8.89544 10.8955 8.00001 12 8.00001C13.1046 8.00001 14 8.89544 14 10Z "  stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
                </svg>,
                text:"Agregado Correctamente.",
            
                link:"/tiendaOnline",
                duration:1500,
            })
            
        }catch(e){
            console.log("error",e)
        }
    }


    return (

        <Container fluid className="d-flex justify-content-center align-content-start " >
            <Row >
                <Row className="mt-1 text-center pb-3">
                    
                    <p className="lead fs-2">Añadir Producto a la tienda online</p>
    
                </Row>
    
                <Form  onSubmit={handleSubmit(onSubmit)}>
                    
    
                
                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
                        
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese su nombre"
                        {...register("nombre",{required:true})}/>
    
                        {errors?.title && <div>El campo es obligatorio</div>} {/* Los errors.types van fuera del form control. */}
                        
                        
    
                    </Form.Group>
    
                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput2">
    
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ingrese su Precio"
                            {...register("precio", {required:true})}/>
    
                            {errors?.price && <div>El campo es obligatorio</div>} 
                            
    
                    </Form.Group>
    
                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput3">
    
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="URL de imagen"
                            {...register("thumbnail", {required:true})}  />
    
                            {errors?.thumbnail && <div>El campo es obligatorio</div>} 
                        
    
                    </Form.Group>
    
                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
    
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("descripcion",{required:true})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
    
                        
                        
    
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
    
                        <Form.Label>Cadena</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("cadena",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
    
                        
                        
    
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
    
                        <Form.Label>Color</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("color",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
    
                        
                        
    
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
                        <Form.Label>Cuadro</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("cuadro",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
                        <Form.Label>Descarrilador Delantero</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("descarrilador delantero",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
                        <Form.Label>Descarrilador trasero</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="ingrese descripcion"
                        {...register("descarrilador trasero",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
                        <Form.Label>Frenos</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("frenos",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
                        <Form.Label>Horquilla</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("horquilla",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
                        <Form.Label>Key</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("key",{required:true})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
                        <Form.Label>Manija de freno</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("manija de freno",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("marca",{required:true})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>
    
                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
                        <Form.Label>Peso</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("peso",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
                        <Form.Label>Piñon</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("piñon",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
                        <Form.Label>Plato y Palancas</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("plato y palanca",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>


                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
                        <Form.Label>Rodado</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("rodados",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
                        <Form.Label>Ruedas</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("ruedas",{required:false})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
                        <Form.Label>SKU</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese descripcion"
                        {...register("sku",{required:true})}/>
    
                        {errors?.description && <div>El campo es obligatorio</div>} 
                    </Form.Group>

                    <Form.Group className="mb-3 w-75 text-start" controlId="exampleForm.ControlInput1">
                        <Form.Label>Talle</Form.Label>
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
    
        
        );
}

export default AgregarProdTienda;