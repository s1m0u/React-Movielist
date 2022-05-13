import React, { useState, useRef } from 'react';
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([{
    id: 1,
    title: "Star Wars",
    rating: 5
  }]);

  const addMovie = (inTitle, inRating) => {
    const newId = movies.length > 0 ? movies[movies.length - 1].id +1 : 1;

    setMovies([...movies, {
      id: newId,
      title: inTitle,
      rating: inRating
    } ])
  }

  return (
    <div className="App">
      <h1>Min Filmlista</h1>
      <h3>Lägg till en film</h3>
      <hr />

      {/* Form */}
      <MovieForm addMovie={addMovie} />

      <hr />

      {/* List */}
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
