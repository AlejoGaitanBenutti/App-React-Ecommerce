import firebase from "../Config/firebase"
// REGISTRO

export async function create(dataForm){


    const responseUser = await firebase.auth().createUserWithEmailAndPassword(dataForm.email, dataForm.password);
    console.log(responseUser)

    if(responseUser.user.uid){
        const document = await firebase.firestore().collection("usuarios").add({
            name: dataForm.nombre,
            lastName: dataForm.apellido,
            userId:responseUser.user?.uid,
        })
        return document;
    }
}


// LOGIN

export async function login(dataForm){

    const responseUser = await firebase.auth().signInWithEmailAndPassword(dataForm.email, dataForm.password);
    if(responseUser.user.uid){
        const document = await firebase.firestore().collection("usuarios").where("userId","==", responseUser.user.uid).get();
        
        return document.docs[0].data();
    }

    console.log(responseUser)
    return {};


}