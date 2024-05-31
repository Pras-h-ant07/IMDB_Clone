import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

function Pagination() {
  const { pageNo, handlePrevious, handleNext } = useContext(MovieContext); //using context api
  return (
    <div className="bg-gray-900 text-white h-[50px] w-full mt-8 flex justify-center items-center">
      <div onClick={handlePrevious} className="mr-20 text-white text-2xl">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="text-white text-xl"> {pageNo} </div>
      <div onClick={handleNext} className="ml-20 text-white text-2xl">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
