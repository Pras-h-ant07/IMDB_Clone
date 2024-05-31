import React, { useState, useEffect, useContext } from "react";
import genreids from "../utility/genre";
import { MovieContext } from "./MovieContext";

function WatchList() {
  const [search, setSearch] = useState("");
  const [genreList, setGenre] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genre");
  const { setWatchlist, watchList, handleDelete } = useContext(MovieContext); //using context api

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClear = () => {
    localStorage.setItem("moviesList", JSON.stringify([]));
    setWatchlist([]);
  };

  // const handleDelete = (movie) => {
  //   let newList = watchList.filter((val) => {
  //     return movie.id != val.id;
  //   });
  //   setWatchlist([...newList]);
  //   localStorage.setItem("moviesList", JSON.stringify(newList));
  // };

  const handleAscendingRating = () => {
    let newList = watchList.sort((movieObjA, movieObjB) => {
      return movieObjA.vote_average - movieObjB.vote_average;
    });
    setWatchlist([...newList]);
  };

  const handleDescendingRating = () => {
    let newList = watchList.sort((movieObjA, movieObjB) => {
      return movieObjB.vote_average - movieObjA.vote_average;
    });
    setWatchlist([...newList]);
  };

  const handleAscendingPopularity = () => {
    let newList = watchList.sort((movieObjA, movieObjB) => {
      return movieObjA.popularity - movieObjB.popularity;
    });
    setWatchlist([...newList]);
  };
  const handleDescendingPopularity = () => {
    let newList = watchList.sort((movieObjA, movieObjB) => {
      return movieObjB.popularity - movieObjA.popularity;
    });
    setWatchlist([...newList]);
  };

  useEffect(() => {
    let temp = watchList.map((movie) => {
      return genreids[movie.genre_ids[0]];
    });
    temp = ["All Genre", ...new Set(temp)];
    setGenre(temp);
  }, [watchList]);

  return (
    <>
      <div className="flex justify-center my-5">
        {genreList.map((genre, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                handleFilter(genre);
              }}
              className={
                currGenre === genre
                  ? "flex justify-center items-center h-[2rem] w-[8rem] mx-2 bg-blue-500 text-white font-bold border rounded-xl"
                  : "flex justify-center items-center h-[2rem] w-[8rem] mx-2 bg-gray-500 text-white font-bold border rounded-xl"
              }
            >
              <button>{genre}</button>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <input
          placeholder="Search Movies"
          className="bg-white h-[2rem] w-[25rem] text-black text-center border border-black rounded-lg hover:bg-white"
          onChange={handleSearch}
        ></input>

        <button
          onClick={handleClear}
          className="border border-b-2 rounded-lg mx-5 px-2 h-[2rem] w-[8rem] bg-red-600  text-white"
        >
          Clear All
        </button>
      </div>

      <div className="my-8 flex justify-center">
        <table className="w-[100rem] text-center bg-white mx-10">
          <thead className="border border-gray-900 rounded-lg bg-gray-900 text-white">
            <tr>
              <th></th>
              <th>Name</th>
              <th>
                <button onClick={handleAscendingRating}>
                  <i className="fa-solid fa-arrow-up mx-2"></i>
                </button>
                Ratings
                <button onClick={handleDescendingRating}>
                  <i className="fa-solid fa-arrow-down mx-2"></i>
                </button>
              </th>
              <th>
                <button onClick={handleAscendingPopularity}>
                  <i className="fa-solid fa-arrow-up mx-2"></i>
                </button>
                Popularity
                <button onClick={handleDescendingPopularity}>
                  <i className="fa-solid fa-arrow-down mx-2"></i>
                </button>
              </th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {watchList
              .filter((movie) => {
                if (currGenre == "All Genre") return true;
                else return currGenre == genreids[movie.genre_ids[0]];
              })
              .filter((movie) =>
                movie.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movie, idx) => (
                <tr key={idx} className="border-b-2">
                  <td>
                    <img
                      className="h-[6rem] w-[10rem] my-2 ml-10"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    />
                  </td>
                  <td>{movie.title}</td>
                  <td>{movie.vote_average}</td>
                  <td>{movie.popularity}</td>
                  <td>{genreids[movie.genre_ids[0]]}</td>
                  <td className="text-red-500 font-bold">
                    <button
                      onClick={() => {
                        handleDelete(movie);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
