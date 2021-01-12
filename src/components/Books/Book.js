import React from 'react';

export default function Book(props){
    return(
        <div className='book'>
            <h1>{props.name}</h1>
            <button onClick={()=>props.showRating(5)}> ShowRating</button>
           
        </div>
    );
}