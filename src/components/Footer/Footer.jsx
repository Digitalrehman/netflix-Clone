import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="socail-icons">
        <FaFacebook />
        <FaYoutube />
        <FaTwitter />
        <FaInstagramSquare />
      </div>
      <h3>Questions? Contact us.</h3>
      <ul>
        <li>Audio Description</li>
        <li>Gift Cards</li>
        <li>Help Cenetr</li>
        <li>Media Center</li>
        <li>Inverstors Relations</li>
        <li>Jobs</li>
        <li>terms of use</li>
        <li>privacy</li>
        <li>Cookie Preferences</li>
        <li>Legal Notices</li>
        <li>Ways to Watch</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright"> &copy; 1997 - 2024 netflix pakistan</p>
    </div>
  );
};

export default Footer;
