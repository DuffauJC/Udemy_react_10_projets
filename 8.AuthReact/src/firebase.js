import firebase from "firebase/app";
import 'firebase/auth'

const app=firebase.initializeApp({
   
        apiKey: "AIzaSyAGMeIOI_lgWR-DmeZAFXvgFZQpGi3nFUI",
        authDomain: "auth-react-cours-7cbd3.firebaseapp.com",
        projectId: "auth-react-cours-7cbd3",
        storageBucket: "auth-react-cours-7cbd3.appspot.com",
        messagingSenderId: "475421816264",
        appId: "1:475421816264:web:46744e59c16704c0017cfd"
   
})

export const auth = app.auth()
export default app