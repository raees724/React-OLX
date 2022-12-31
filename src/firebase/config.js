
import firebase from "firebase";
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAiDW4W7SkOYqiGny-3h_ElTD56jwMGBXo",
  authDomain: "olx-clone-4df9d.firebaseapp.com",
  projectId: "olx-clone-4df9d",
  storageBucket: "olx-clone-4df9d.appspot.com",
  messagingSenderId: "842301324087",
  appId: "1:842301324087:web:eb3f618a8350752ef478b2",
  measurementId: "G-N69CQ121YF"
};

export default firebase.initializeApp(firebaseConfig)