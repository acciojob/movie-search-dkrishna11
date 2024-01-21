import React, { useState } from "react";
import "./../styles/App.css";
import { movies } from "./movies";

const App = () => {
  const [search, setSearch] = useState();

  function handleSearch() {
    const serchedMovie = [...movies].filter((movie) =>
      movie.name.toLowerCase().includes(search)
    );
    setSearch(serchedMovie);
  }
  return (
    <div>
      <input type="text" onChange={handleSearch} value={search} />
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
