import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  let Navigate = useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if (user) {
        Navigate("/")
      }else{
        
        Navigate("/Login")
      }
    })
  },[])
  return (
    <>
    <ToastContainer theme="dark"/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Player/:id" element={<Player />} />
    </Routes>
      
    </> 
  );
};

export default App;
