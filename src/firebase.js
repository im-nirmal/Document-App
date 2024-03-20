





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDceA8ys8pTF8PWs7lPCvaPzmm9GKK9PrM",
  authDomain: "docapp-4bd4a.firebaseapp.com",
  projectId: "docapp-4bd4a",
  storageBucket: "docapp-4bd4a.appspot.com",
  messagingSenderId: "756905000618",
  appId: "1:756905000618:web:0797fe536291fc9a8f5ad3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const datas = getFirestore(app)