import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAD3nxV--y4oSsgfynhLnaXNDajCw8hSCw",
  authDomain: "disney-plus-clone-6c70e.firebaseapp.com",
  projectId: "disney-plus-clone-6c70e",
  storageBucket: "disney-plus-clone-6c70e.appspot.com",
  messagingSenderId: "331750290341",
  appId: "1:331750290341:web:3fcd7ec6f0bd4a19cbee4c",
  measurementId: "G-36TBHQH621"
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);

// const provider = new auth.GoogleAuthProvider();
// const storage = firebase.storage();

export const auth = getAuth(app);;
export default app;