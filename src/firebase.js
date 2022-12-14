import {initializeApp} from "firebase/app"
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail} from "firebase/auth"

const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = getAuth()
export const signInWithEmail = signInWithEmailAndPassword 
export const createUserWithEmail = createUserWithEmailAndPassword 
export const onAuthStateChange = onAuthStateChanged
export const onResetPassword = sendPasswordResetEmail
export default app
