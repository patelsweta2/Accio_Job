import React from "react";

const Table = ({ movies }) => {
  return (
    <div className="overflow-x-auto m-8">
      <table className="table-auto w-full border-collapse border border-gray-200 font-normal text-3xl">
        <thead>
          <tr>
            <th className="border-b-2 text-center w-1/2">Title</th>
            <th className="border-b-2 p-3 text-center w=1/4">Genre</th>
            <th className="border-b-2 text-center w-1/4">Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td className="border p-3">{movie.title}</td>
              <td className="border p-3">{movie.genre}</td>
              <td className="border p-3">{movie.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
