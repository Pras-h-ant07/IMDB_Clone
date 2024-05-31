import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Pagination from "./components/Pagination";
import WatchList from "./components/WatchList";
import Details from "./components/Details";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieContext } from "./components/MovieContext";

function App() {
  const [watchList, setWatchlist] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  function handleAddWatchlist(movieObj) {
    let updateWatchlist = [...watchList, movieObj];
    setWatchlist(updateWatchlist);
    // movies added in the watchlist
    localStorage.setItem("moviesList", JSON.stringify(updateWatchlist));
    // movies added in the local storage
  }
  
   const handleDelete = (movie) => {
    let newList = watchList.filter((val) => {
      return movie.id != val.id;
    });
    setWatchlist([...newList]);
    localStorage.setItem("moviesList", JSON.stringify(newList));
  };

  function handleNext() {
    setPageNo(pageNo + 1);
  }

  function handlePrevious() {
    if (pageNo === 1) setPageNo(pageNo);
    else setPageNo(pageNo - 1);
  }

  useEffect(() => {
    let moviesFromLocalStorage = JSON.parse(localStorage.getItem("moviesList"));
    //movies get from the local storage
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchlist(moviesFromLocalStorage);
    // movies added to the watchlist from the local storage
  }, []);

  return (
    <>
      <BrowserRouter>
        <MovieContext.Provider value={{ handleAddWatchlist, watchList, setWatchlist, pageNo, handlePrevious, handleNext, handleDelete}} >
          <Navbar />
          <Routes>
            <Route path="/" element={ <> <Banner /> <Movies /> <Pagination /> </> } />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </MovieContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
