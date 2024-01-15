import firebase from "../Config/firebase";


// busqueda de productos en Base datos Firestore/firebase

// Servicio Productos en el home de la colleccion MTB
export async function getAllMtb(){

return await firebase.firestore().collection('productosMtb').get();
}



// Servicio productos bmx home


export async function getAllBmx(){
    
    return await firebase.firestore().collection('productosBmx').get();
    }


// Servicio Recambios MTB

export async function getAllRecambiosMtb(){

    return await firebase.firestore().collection('recambiosMtb').get();



}