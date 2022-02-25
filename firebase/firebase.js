import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,

} from "firebase/auth";
//ref = reference to a "collection"
import { 
    getDatabase, 
    ref as firebaseDatabaseRef, 
    set as firebaseSet,
    child, 
    get,
    onValue,
} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDnXwxgMUzzSPLprGKo9kvnytV1lARU20w",
    authDomain: "trainingapp-39f71.firebaseapp.com",
    databaseURL: "https://trainingapp-39f71-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "trainingapp-39f71",
    storageBucket: "trainingapp-39f71.appspot.com",
    appId: "1:807612708323:android:440beca9263c330b455cd6",
    messagingSenderId: "807612708323",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const firebaseDatabase = getDatabase()

export {
    auth,
    firebaseDatabase,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    sendEmailVerification,
    child, 
    get,
    onValue, //reload when online DB changed
    signInWithEmailAndPassword,
}