import React from 'react';

export default function Movie(props){
    return(
        <div className='movie'>
            <h1>{props.name}</h1>
            <h3 >Show rating</h3>
        </div>
    );
}