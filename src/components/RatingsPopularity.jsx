import React from "react";

function RatingsPopularity({ vote, popularity, revenue}) { // passing properties as an object
  return (
    <>
      <div className=" gap-10 grid-cols-2 flex group justify-between">
        <div className="font-black flex flex-col">
          <span className="text-yellow-500 text-xl">IMDB SCORE</span>
          <span className="text-3xl ml-4 flex gap-x-1 items-center">
            {vote} &#11088;
          </span>
        </div>

        <div className="font-black flex flex-col">
          <span className="text-red-500 ml-1 text-xl">POPULARITY</span>
          <span className="text-3xl flex gap-x-1 items-center">
            {popularity} &#128293;
          </span>
        </div>

        <div className="font-black flex flex-col">
          <span className="text-blue-500 ml-2 text-xl">BOX OFFICE</span>
          <span className="text-3xl flex gap-x-1 items-center">
            {revenue} M &#128176;
          </span>
        </div>
      </div>
    </>
  );
}

export default RatingsPopularity;
