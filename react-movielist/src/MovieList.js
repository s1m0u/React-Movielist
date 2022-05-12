import React, { useState, useRef } from 'react';
import MovieListItem from './MovieListItem';

export default function MovieList() {
    return(
        <div>
            <h1>Inlagda filmer</h1>
            <ul className='list-group'>
                <MovieListItem />
            </ul>
        </div>
    )
};