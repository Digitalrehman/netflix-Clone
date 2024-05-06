import React, { useEffect, useRef, useState } from "react";
import "./Player.css";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
const Player = () => {
    let {id} = useParams()
   let [apidata,setApidata] = useState({
        name: "",
        type : "",
        published_at : "",
        key : ""
    })
    let Navigate =  useNavigate()
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODAyZThiNDBhY2RkOTVhYmJlMjI0YWE5ZDMwZGZlMCIsInN1YiI6IjY2MzcyYzk1YzkwNTRmMDEyYTkwNzViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i77POq6OO5iZK5tVD8M080IkVsmrvL0mYHzw1XqptEk'
        }
      };
      
      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
          .then(response => response.json())
          .then(response => setApidata(response.results[0]))
          .catch(err => console.error(err));

    },[])
  return (
    <div className="player" onClick={()=>Navigate(-1)}>
      <div className="back-arrow">
        <IoArrowBackCircle />
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${apidata.key}`}
        frameborder="0"
        allowFullScreen
        height="90%"
        width="90%"
        title="trailer"
      ></iframe>
      <div className="info">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  );
};

export default Player;
