import React, { useEffect, useRef, useState } from "react";
import "./Title.css";
import movie from "./../../assets/movie";
import { Link } from "react-router-dom";
const Title = ({ title, catagory }) => {
  let cardRef = useRef();
  let [apiset, setApiset] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODAyZThiNDBhY2RkOTVhYmJlMjI0YWE5ZDMwZGZlMCIsInN1YiI6IjY2MzcyYzk1YzkwNTRmMDEyYTkwNzViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i77POq6OO5iZK5tVD8M080IkVsmrvL0mYHzw1XqptEk",
    },
  };

  const cardsRef = (e) => {
    e.preventDefault();
    cardRef.current.scrollLeft += e.deltaY;
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        catagory ? catagory : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiset(response.results))
      .catch((err) => console.error(err));

    cardRef.current.addEventListener("wheel", cardsRef);
  }, []);
  return (
    <div className="titleCard">
      <h2> {title ? title : "Popular Movies"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiset.map((value, index) => (
          <Link to={`/Player/${value.id}`}>
            <div key={index} className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500` + value.backdrop_path}
              />
              <p>{value.original_title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Title;
