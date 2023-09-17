// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgsukRP3veWsYc2pVcXHsfxSpSESQjAfU",
  authDomain: "toy-fullstack-client.firebaseapp.com",
  projectId: "toy-fullstack-client",
  storageBucket: "toy-fullstack-client.appspot.com",
  messagingSenderId: "287614273892",
  appId: "1:287614273892:web:cce8b4826665c2bf291271"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app)
export const db = getFirestore(app)