
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPI-cOSyUUojzYg4kUCDsunGpO3FNImVE",
  authDomain: "blog-crud-68630.firebaseapp.com",
  projectId: "blog-crud-68630",
  storageBucket: "blog-crud-68630.appspot.com",
  messagingSenderId: "141648646497",
  appId: "1:141648646497:web:6bd401dc0f18637b59b520"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
