import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import RatingsPopularity from "./RatingsPopularity";
import CastAndCrewDetails from "./CastAndCrewDetails";

function Details() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&append_to_response=credits,videos`
      )
      .then((res) => {
        setMovieDetails(res.data);
      });
  }, [id]);
  const {
    title,
    genres,
    backdrop_path,
    videos,
    credits,
    popularity,
    vote_average,
    revenue,
  } = movieDetails;
  return (
    <>
      <div className="flex justify-center mb-4">
        {revenue && (
          <RatingsPopularity
            vote={vote_average.toFixed(1)}
            popularity={popularity.toFixed(2)}
            revenue={(revenue / 1000000).toFixed(2)}
          />
        )}
      </div>
      <div
        className="flex flex-row items-end justify-between mt-4 bg-black/10 bg-blend-multiply rounded-3xl h-[40rem] overflow-hidden bg-cover bg-center px-7 pt-4 pb-6 text-white"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
        }}
      >
        <div className="bg-gradient-to-r from-black/30 to-transparent -mx-7 -mb-6 px-7 pb-6 pt-2">
          <span className="uppercase text-3xl font-semibold drop-shadow-lg ">
            {title}
          </span>
          <div className="text-s text-gray-200 mt-2 ">
            {genres &&
              genres.map((genre) => <span className="mr-3">{genre.name}</span>)}
          </div>
          <div className="mt-4 flex space-x-3 items-center">
            {videos && (
              <Link
                to={`https://www.youtube.com/watch?v=${videos.results[0].key}`}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-xs inline-block"
              >
                Watch Trailer
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold text-center m-5">
        <h2>Movie Cast</h2>
        <div className="flex flex-row flex-wrap justify-center gap-5">
          {credits &&
            credits.cast
              .slice(0, 6)
              .map((cast) => (
                <CastAndCrewDetails
                  imageURL={cast.profile_path}
                  name={cast.name}
                  characterNameOrDepartmentName={cast.character}
                />
              ))}
        </div>
      </div>

      <div className="text-2xl font-bold text-center m-5">
        <h2>Movie Crew</h2>
        <div className="flex flex-row flex-wrap justify-center gap-5">
          {credits &&
            credits.crew
              .slice(0, 6)
              .map((crew) => (
                <CastAndCrewDetails
                  imageURL={crew.profile_path}
                  name={crew.name}
                  characterNameOrDepartmentName={crew.known_for_department}
                />
              ))}
        </div>
      </div>
    </>
  );
}

export default Details;
