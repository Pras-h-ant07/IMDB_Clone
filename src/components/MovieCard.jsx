import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { Link } from "react-router-dom";

function MovieCard({ movieObj }) {

  const { handleAddWatchlist, watchList, handleDelete } = useContext(MovieContext); //using context api

  function handleLike() {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div>
      <div
        className=" h-[20rem] w-[14rem] bg-cover  bg-center flex flex-col items-end justify-between border border-black rounded-lg hover:scale-110 duration-300"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.poster_path})`,
        }}
      >
        <div className=" w-full flex flex-row justify-between">
          <Link to={`/details/${movieObj.id}`}>
            <i className="fa-solid fa-circle-info text-white bg-gray-700/60 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-2.5 ml-1 mt-1 dark:bg-gray-800/60 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"></i>
          </Link>
          {handleLike() ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                handleDelete(movieObj);
              }}
              className="mx-2 text-2xl text-red-600 bg-gray-300/60 p-1 rounded-bl-lg rounded-br-lg"
            >
              <i className="fa-solid fa-heart"></i>
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                handleAddWatchlist(movieObj);
                handleLike();
              }}
              className=" mx-2 text-2xl text-white bg-gray-900/60 p-1 rounded-bl-lg rounded-br-lg"
            >
              <i className="fa-solid fa-heart"></i>
            </button>
          )}
        </div>

        {/* lg stands for large radius and bl or br stands for bottom left & right*/}
        <h1 className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-bl-lg rounded-br-lg">
          {/* 900 stands for color density and 70 stands for opacity*/}
          {movieObj.title}
        </h1>
      </div>
    </div>
  );
}

export default MovieCard;
