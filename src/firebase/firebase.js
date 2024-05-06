import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAm9lF9xlI6RemcHF_NgAOdn6YASiNHYZ4",
  authDomain: "netflix-clone-aa724.firebaseapp.com",
  projectId: "netflix-clone-aa724",
  storageBucket: "netflix-clone-aa724.appspot.com",
  messagingSenderId: "627600406195",
  appId: "1:627600406195:web:6ca052042566e9bb6de2c6",
  measurementId: "G-FFTPQ0MGJL",
};

const app = initializeApp(firebaseConfig);
let auth = getAuth(app);
let db = getFirestore(app);

let signUp = async (name, email, password) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  try {
    let user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    alert(err);
    toast.error(err.code.split("/")[1].split("_").join(" "));
  }
};
let login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    toast.error(err.code.split("/")[1].split("_").join(" "));
  }
};

let logOut = () => {
  signOut(auth);
};

export { db, auth, login, logOut, signUp };
