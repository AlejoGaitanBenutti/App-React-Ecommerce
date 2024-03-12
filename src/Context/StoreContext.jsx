import { useState } from "react";
import React from "react";


export const StoreContext = React.createContext()



const StoreProvider=({children})=>{

        // ESTADOS TIENDA
    const [loading, setLoading]= useState(true);
    const [prodTienda, setProdTienda] = useState([]);
    const [buscar, setBuscar] = useState("");

        // FUNCIONES TIENDA

    


    return(

        <StoreContext.Provider 
        value={{loading , setLoading, prodTienda, setProdTienda, buscar, setBuscar }}>

            {children}

        </StoreContext.Provider>
    )
};

export default StoreProvider;