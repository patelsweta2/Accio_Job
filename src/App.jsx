import React, { useState } from "react";
import Filter from "./Components/Filter";
import Table from "./Components/Table";
import Movies from "./Movie";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const filteredMovies = selectedGenre
    ? Movies.filter((movie) => movie.genre === selectedGenre)
    : Movies;

  return (
    <div className="flex flex-col justify-center items-center mt-10 text-3xl font-bold text-center">
      <h1>Top 15 Movies of All Time</h1>

      <Filter onGenreClick={setSelectedGenre} />
      <div style={{ width: "70vw" }} className="pt-4 bg-stone-400 rounded mb-4">
        <Table movies={filteredMovies} />
      </div>
    </div>
  );
};

export default App;
