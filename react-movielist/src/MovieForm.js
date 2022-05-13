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
                <option value={0} selected='selected'>Välj betyg här...</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>

            <button className='btn btn-success mt-3' onClick={() => {

                if(inputRef.current.value && dropDownRef.current.value != 0)
                {
                    props.addMovie(inputRef.current.value, dropDownRef.current.value);
                                    
                    {/* Clear input */}
                    inputRef.current.value = "";
                    dropDownRef.current.value = 0;
                }else{
                    alert("Både titel och betyg måste fyllas i!")
                }

            } }>Spara film</button>
        </div>
    )
};