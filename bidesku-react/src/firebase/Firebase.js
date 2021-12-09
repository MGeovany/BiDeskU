
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBbmMjVC6Oy47fG2uButMNhyCQjsZMrc1w",
  authDomain: "bidesku-53040.firebaseapp.com",
  projectId: "bidesku-53040",
  storageBucket: "bidesku-53040.appspot.com",
  messagingSenderId: "233737969797",
  appId: "1:233737969797:web:9af331dbb4ad085a5a49ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);