import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import banner from "../../assets/banner.jpg";
import heading from "../../assets/caption.png";
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import Title from "../../components/Title/Title";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <img src={banner} className="banner" />
        <div className="caption">
          <img src={heading} />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="buttons">
            <button className="btn">
              <FaPlay /> Play
            </button>
            <button className="btn dark">
              <FaInfoCircle /> More Info
            </button>
          </div>
          <Title />
        </div>
      </div>
      <div className="moreCards">
        <Title title={"Blockbuster Movies"} catagory={"popular"} />
        <Title title={"Only On Netflix"} catagory={"top_rated"}  />
        <Title  title={"Upcoming"} catagory={"upcoming"} />
        <Title title={"Top Pics For You"} catagory={"now_playing"} />
      </div>
      <Footer/>
    </>
  );
};

export default Home;
