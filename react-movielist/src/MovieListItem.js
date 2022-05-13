import React, { useState, useRef } from 'react';
import Star from './star.png';
import Delete from './delete.png';
import './style.css';

export default function MovieListItem(props) {
    return(
        <div>
            <li className='list-group-item list-group-item-secondary'>
                {props.item.title}
                <img src={Delete} />
                <img src={Star} />
            </li>
        </div>
    )
};