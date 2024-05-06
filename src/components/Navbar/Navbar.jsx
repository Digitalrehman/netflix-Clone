import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import profile from "../../assets/profile.png"
import dropDown from "../../assets/drop-down-arrow.png"
import { logOut } from "../../firebase/firebase";
const Navbar = () => {
  let NavRef = useRef()
  useEffect((()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY >= 80){

        NavRef.current.classList.add("nav-dark")
      }else{
        NavRef.current.classList.remove("nav-dark")

      }
    })
  }))
  return (
    <>
      <nav className="navbar" ref={NavRef}>
        <div className="navbar-left">
          <img src={logo} />
          <ul>
            <li>Home</li>
            <li>Tv Show</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="navbar-right">
        <FaSearch />
          <FaBell />
         <img src={profile}  />
          <div className="profile">
            <img src={dropDown} />
            <div className="dropdown">
              <p onClick={()=>{logOut()}}>Logout of netflix  </p>
                
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
