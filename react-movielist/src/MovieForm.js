import React, { useState, useRef } from 'react';
export default function MovieForm() {
    return(
        <div>
            <label><strong>Titel:</strong></label>
            <input className='form-control' placeholder='Titel här...' />
        
            <label><strong>Betyg:</strong></label>
            <select class="form-control">
                <option selected='selected'>Välj betyg här...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
    )
};