// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgh0UINqjNYHC0sr_ngVGrtq9mBbPdxRw",
  authDomain: "project-ten-client.firebaseapp.com",
  projectId: "project-ten-client",
  storageBucket: "project-ten-client.appspot.com",
  messagingSenderId: "380195869175",
  appId: "1:380195869175:web:560e54d682c40d007edef2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;