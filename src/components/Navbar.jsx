import React from "react";
import Logo from "../assets/MovieLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex space-x-5 items-center pl-3 py-1 mb-12 bg-gray-900">
      <Link to="/">
        <img className="w-[50px]" src={Logo} />
      </Link>
      <Link to="/" className="text-white border-white text-3xl font-bold">
        Movies
      </Link>
      <Link to="/watchlist" className="text-white text-3xl font-bold">
        WatchList
      </Link>
    </div>
  );
}

export default Navbar;
