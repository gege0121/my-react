import React from 'react';

export default function Book(props){
    return(
        <div className='book'>
            <h1>{props.book.name}</h1>
           <h3>{props.book.rating}</h3>
        </div>
    );
}