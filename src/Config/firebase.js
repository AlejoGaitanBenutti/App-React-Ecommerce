import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'



const firebaseConfig = {
    apiKey: "AIzaSyDg0pwT8Qew0qOF97MqpOHT5iKRBCywALQ",
    authDomain: "bikestore-2a565.firebaseapp.com",
    projectId: "bikestore-2a565",
    storageBucket: "bikestore-2a565.appspot.com",
    messagingSenderId: "1020827132860",
    appId: "1:1020827132860:web:27c530b0ec0f6c6ace01b9"
};


firebase.initializeApp(firebaseConfig)


export default firebase;
