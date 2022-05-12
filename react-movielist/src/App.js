import React, { useState, useRef } from 'react';
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";

function App() {

  const [movies, setMovies] = useState([{
    id: 1,
    title: "Star Wars",
    rating: 5
  }]);

  const addMovie = (title, rating) => {
    console.log(title);
    console.log(rating);
  }

  return (
    <div className="App">
      <h1>Min Filmlista</h1>
      <h3>Lägg till en film</h3>
      <hr></hr>

      {/* Form */}
      <MovieForm addMovie={addMovie} />
      {/* List */}
      <MovieList />
    </div>
  );
}

export default App;
