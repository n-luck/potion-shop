import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyADIS5xh62-FxMSOYEVqCyj2MzM5i865sU",
    authDomain: "potion-shop-68980.firebaseapp.com",
    projectId: "potion-shop-68980",
    storageBucket: "potion-shop-68980.appspot.com",
    messagingSenderId: "312969376334",
    appId: "1:312969376334:web:f275da23592511138e091f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;