import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCy6jDFnW9s2YzSLOzzJqNsQZkN2btQvQE",
  authDomain: "olxclone-2c15c.firebaseapp.com",
  projectId: "olxclone-2c15c",
  storageBucket: "olxclone-2c15c.appspot.com",
  messagingSenderId: "894130979257",
  appId: "1:894130979257:web:612e61f78e00d68ef33668",
  measurementId: "G-SJGC560SSD"
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, storage, auth };