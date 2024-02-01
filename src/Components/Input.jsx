import { Form } from "react-bootstrap";         
import estilos from "../Components/estilos.module.css"


    // Componente de formulario para inyectar. 

function Input({label, type="text", name, register,placeholder,errors,children}){



    return(
        <Form.Group className={estilos.nameInput} controlId={name}>

            <Form.Label>{label}</Form.Label>
            <Form.Control className={estilos.inputLine}
                type={type} 
                placeholder={placeholder}
                {...register}
            />
        
            {errors && errors[name]?.type ==='required' && <Form.Text>
                <p className="text-white mt-2 mx-2">El campo es obligatorio</p>
                </Form.Text>} 
        
        {children && children}
    
    </Form.Group>


    )
}

export default Input;