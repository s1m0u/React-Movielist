import React, { useState, useRef } from 'react';
import MovieListItem from './MovieListItem';

export default function MovieList(props) {
    const movies = props.movies;

    return(
        <div>
            <h1>Inlagda filmer</h1>
            <ul className='list-group'>
                {movies.map(movie => <MovieListItem key={movie.id} item={movie} deleteMovie={props.deleteMovie}/>)}
            </ul>
        </div>
    )
};