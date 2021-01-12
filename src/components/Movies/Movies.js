import React from 'react';
import Movie from './Movie';

export default class Movies extends React.Component{
    render(){
        return(
            <div>
                Movies component
                <Movie name='Lost City' rating='4'/>
            </div>
        )
    }
}