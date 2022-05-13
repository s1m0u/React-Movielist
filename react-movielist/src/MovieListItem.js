import React, { useState, useRef } from 'react';
import Star from './star.png';
import Delete from './delete.png';
import './style.css';

export default function MovieListItem(props) {

    const stars = [];

    for (let i = 0; i < props.item.rating; i++) {
        stars.push(<img src={Star} />)
    }

    return(
        <div>
            <li className='list-group-item list-group-item-secondary'>
                {props.item.title}
                <img src={Delete} className='delete-movie-icon' onClick={() => {props.deleteMovie(props.item.id)}} />
                {stars}
            </li>
        </div>
    )
};