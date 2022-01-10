import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

  
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.FIREBASE_DSATABASEURL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_M_S_ID,
    appId: process.env.FIREBASE_APPID,
};
    
const app = initializeApp(firebaseConfig);
var database = getDatabase(app);
  
export default database;