import {useContext, useState} from "react"
import {  useForm } from "react-hook-form";
import React from "react"

export const AuthContext = React.createContext()  // CONTEXT


const AuthProvider = ({children})=>{ // COMPONENTE    PROVIDER , Provee estados y funciones 

    // LOGIN y REGISTRO

    const { register,
        handleSubmit, 
        formState: { errors },
        } = useForm({mode: "onChange"});   // para formularios
    

        const [alert, setAlert] = useState({
            variant:"",
            text:"",
            icon:"",
            link:"/",
            duration:0,
    
        });

    const [logueo, setLogueo]= useState(false);
    

    //LOADING

    const [loading, setLoading]= useState(false);

    



    return(

        <AuthContext.Provider
            value={{logueo,setLogueo,register, handleSubmit, errors, alert, setAlert, loading, setLoading}}
        
        
        >   
                                    {/* Aca van los consumidores de los estados */}
        {children}

        </AuthContext.Provider>


    )



};       

export default AuthProvider;

export const useAuthContext =()=> useContext(AuthContext);