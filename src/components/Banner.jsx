import React, { useEffect, useState } from "react";
import bannerList from "../utility/banners";

function Banner() {
  const [path, setPath] = useState({});

  useEffect(() => {
    let idx = Math.floor(Math.random() * 10);
    setPath(bannerList[idx]);
  }, [path]);

  return (
    // md stands for mid of the screen
    <div
      className="h-[70vh] w-full md:h-[76vh] bg-cover bg-center flex items-end "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${path.backdrop_path})`,
      }}
    >
      <div className="text-white w-full text-center text-2xl font-bold text-yellow-500 pb-2">
        {path.title}
      </div>
    </div>
  );
}

export default Banner;
