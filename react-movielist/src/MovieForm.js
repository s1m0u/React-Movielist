import React, { useState, useRef } from 'react';
export default function MovieForm(props) {

    const inputRef = useRef();
    const dropDownRef = useRef();

    return(
        <div>
            <label><strong>Titel:</strong></label>
            <input className='form-control' placeholder='Titel här...' ref={inputRef}/>
        
            <label><strong>Betyg:</strong></label>
            <select class="form-control" ref={dropDownRef}>
                <option selected='selected'>Välj betyg här...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>

            <button className='btn btn-success mt-3' onClick={() => props.addMovie(inputRef.current.value, dropDownRef.current.value)}>Spara film</button>
        </div>
    )
};