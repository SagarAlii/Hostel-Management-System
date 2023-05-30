import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
              
const firebaseConfig = {
  apiKey: "AIzaSyCCpf7Giu1HITkoQ3pSotCxQLwWEmzOEE4",
  authDomain: "test-project-fa23b.firebaseapp.com",
  projectId: "test-project-fa23b",
  storageBucket: "test-project-fa23b.appspot.com",
  messagingSenderId: "542960775319",
  appId: "1:542960775319:web:12485102710a143bec39d2",
  measurementId: "G-4QKGNH6GZQ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getDatabase();
export default app;
