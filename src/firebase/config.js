// Import the functions you need from the SDKs you need
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqD8rvDiflsL6Kv41zV3_mNyBJsmAEeSk",
  authDomain: "udemy-live-chat-9b4df.firebaseapp.com",
  projectId: "udemy-live-chat-9b4df",
  storageBucket: "udemy-live-chat-9b4df.appspot.com",
  messagingSenderId: "384962692669",
  appId: "1:384962692669:web:8fec18e85631a536df4c54",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
