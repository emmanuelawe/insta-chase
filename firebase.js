// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgdhrT7Jr5I86QzExiMhyNzsN7PUp6zTA",
  authDomain: "insta-chase.firebaseapp.com",
  projectId: "insta-chase",
  storageBucket: "insta-chase.appspot.com",
  messagingSenderId: "526991684903",
  appId: "1:526991684903:web:c6d89d693dbb08adafa502"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export {app, db, storage}