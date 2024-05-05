import { useState } from "react";

import Movies from "../Movie";

const Filter = ({ onGenreClick }) => {
  const genres = [...new Set(Movies.map((movie) => movie.genre))];

  return (
    <div className="m-8 pt-4 bg-slate-400 rounded" style={{ width: "70vw" }}>
      <h2>Filter by Genre</h2>
      <div className="flex justify-center flex-wrap gap-2 mt-5">
        {genres.map((genre, index) => (
          <button
            key={index}
            className="mb-5 bg-gray-500 text-white px-1 py-1 rounded text-xl font-normal"
            onClick={() => onGenreClick(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
