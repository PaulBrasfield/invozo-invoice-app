import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCasByLdCSFoW71E_Q7mQdqmnghMfC-lS8",

  authDomain: "invozo.firebaseapp.com",

  projectId: "invozo",

  storageBucket: "invozo.appspot.com",

  messagingSenderId: "678706560401",

  appId: "1:678706560401:web:b6871d16c399f7af9f6e30",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
