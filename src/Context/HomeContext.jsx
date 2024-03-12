import { useContext,useState } from "react";
import React from "react";


export const HomeContext = React.createContext()

const HomeProvider = ({children})=>{

    const [prodMtb, setProdMtb] = useState([]);
    const [loading, setLoading]= useState(true);
    const [prodBmx, setProdBmx] = useState([]);
    const [recambios, setRecambios]= useState([]);

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
        };


    return(

        <HomeContext.Provider
        value={{prodMtb, setProdMtb, loading, setLoading, responsive,setProdBmx, prodBmx,recambios, setRecambios}}>

            {children}
        </HomeContext.Provider>

    )
};

export default HomeProvider;