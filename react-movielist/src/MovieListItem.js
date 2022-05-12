import React, { useState, useRef } from 'react';

export default function MovieListItem(props) {
    return(
        <div>
            <li className='list-group-item'>
                {props.item.title}
            </li>
        </div>
    )
};