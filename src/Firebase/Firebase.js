
import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzUpUnE7C_dppW4sfOL27SGexWdpEDPUY",
  authDomain: "react-ecommerce-6f81c.firebaseapp.com",
  projectId: "react-ecommerce-6f81c",
  storageBucket: "react-ecommerce-6f81c.appspot.com",
  messagingSenderId: "475085348422",
  appId: "1:475085348422:web:a3e3fedc33a31707773447"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);