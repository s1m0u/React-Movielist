import React, { useState } from 'react';
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  function addMovie (inTitle, inRating){
    const newId = movies.length > 0 ? movies[movies.length - 1].id +1 : 1;

    setMovies([...movies, {
      id: newId,
      title: inTitle,
      rating: inRating
    } ])
  }

  function deleteMovie (inId) {
    setMovies(movies.filter((movie) => movie.id != inId));
  }

  function alphabeticalSort(){
    setMovies([...movies].sort((a,b) => a.title.localeCompare(b.title)));
  }

  function ratingSort(){
    setMovies([...movies].sort((a, b) => b.rating - a.rating));
  }

  return (
    <div className="App">
      <h1>Min Filmlista</h1>
      <h3>Lägg till en film</h3>
      <hr />
      <MovieForm addMovie={addMovie} />
      <hr />
      <MovieList movies={movies} deleteMovie={deleteMovie} alphabeticalSort={alphabeticalSort} ratingSort={ratingSort}/>
    </div>
  );
}

export default App;
