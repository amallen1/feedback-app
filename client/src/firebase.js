// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZOC4CV8YAgxXlhZAj-yC2C8r_sPnVUTA",
  authDomain: "product-feedback-cbfde.firebaseapp.com",
  projectId: "product-feedback-cbfde",
  storageBucket: "product-feedback-cbfde.appspot.com",
  messagingSenderId: "613172124313",
  appId: "1:613172124313:web:2cd25bb588ca798df3f608",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
