import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtSh97pfQfFXVLZQ0n-DNcI_XclG95tQI",
  authDomain: "chatme-2b4ee.firebaseapp.com",
  projectId: "chatme-2b4ee",
  storageBucket: "chatme-2b4ee.appspot.com",
  messagingSenderId: "794603531680",
  appId: "1:794603531680:web:3e4022539e500eea0e08c5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
