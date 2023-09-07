// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut } from "firebase/auth";
import { getFirestore , addDoc , collection , query, where, getDocs  } from "firebase/firestore";
import { getStorage , ref , uploadBytes , getDownloadURL} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVsv1MYLThEimC-6EXd4oY7N-960GP-Bw",
  authDomain: "react-85e4f.firebaseapp.com",
  projectId: "react-85e4f",
  storageBucket: "react-85e4f.appspot.com",
  messagingSenderId: "815980757879",
  appId: "1:815980757879:web:3b044e46d938a2bafb1772",
  measurementId: "G-XLDLP79KFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)
export {app , auth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut , db , addDoc , collection , query, where, getDocs , ref , uploadBytes , getDownloadURL , storage }

