import React, { useState } from "react";
import "./../styles/App.css";
import { movies } from "./movies";

const App = () => {
  const [search, setSearch] = useState();
  const [searched, setSearched] = useState();

  function handleSearch() {
    const serchedMovie = [...movies].filter((movie) =>
      movie.name.toLowerCase().includes(searched)
    );
    setSearch(serchedMovie);
  }
  return (
    <div>
      <p>Search Movie</p>
      <input type="text"  onChange={(e)=>setSearched(e.target.value)}value={search} />
      <button onClick={handleSearch}> Search</button>
      {search ? (
        <div>
          {search.map((movie, index) => (
            <div key={index}>
              <li>{movie.name}</li>
              <img src={movie.img} />
            </div>
          ))}
        </div>
      ) : (
        <p>Invalid movie name. Please try again</p>
      )}
    </div>
  );
};

export default App;
