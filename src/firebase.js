// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbNNrwGRITS1X9Vl_nKl7G9Tn9pakInVM",
  authDomain: "learnfb-54cc9.firebaseapp.com",
  projectId: "learnfb-54cc9",
  storageBucket: "learnfb-54cc9.appspot.com",
  messagingSenderId: "753212228631",
  appId: "1:753212228631:web:5c6c37c1038c19c8264852",
  measurementId: "G-8S7N5ZHNWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const storage = getStorage(app)