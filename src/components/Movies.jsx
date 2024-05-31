import React, { useEffect, useState, useContext } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { MovieContext } from "./MovieContext";

function Movies() {
  const [movies, setMovies] = useState([]);
  const { pageNo } = useContext(MovieContext); //using context api

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
    //axios: npm package for http operations i.e: get, put, post etc http requests
  }, [pageNo]);
  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly  flex-wrap gap-8">
        {movies.map((movieObject, idx) => {
          return <MovieCard key={idx} movieObj={movieObject}  />;
        })}
      </div>
    </div>
  );
}

export default Movies;
