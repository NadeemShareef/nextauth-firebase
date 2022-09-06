import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzjCWsRddI_3ag6-Janb7vLF3DnFRD7Zo",
  authDomain: "nextauth-firebase-learning.firebaseapp.com",
  projectId: "nextauth-firebase-learning",
  storageBucket: "nextauth-firebase-learning.appspot.com",
  messagingSenderId: "638140825603",
  appId: "1:638140825603:web:a9ceab69ce5c339db80e36",
};

const app = getApps.length > 0 ? getApps() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
