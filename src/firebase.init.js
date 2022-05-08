// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STOREGE_BUCKET,
//   messagingSenderId: process.env.MESSEGENDER_ID,
//   appId: process.env.APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyD79u6Dz48mZksnQElO1L7o5qF8O7JXEJ8",
  authDomain: "store-management-dd4c6.firebaseapp.com",
  projectId: "store-management-dd4c6",
  storageBucket: "store-management-dd4c6.appspot.com",
  messagingSenderId: "283179220581",
  appId: "1:283179220581:web:d8bdef0caf9d5c1ee7108c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;