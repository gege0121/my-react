import React from 'react';
import Book from './Book';

export default class Books extends React.Component{
state={
    rating: ''
}

handleRating =(rating)=>{
    this.setState({rating:rating});

}

    render(){
        return(
            <div>
                <Book name='The kite Runner' showRating={this.handleRating}/>
                <h3>Rating:{this.state.rating}</h3>
            </div>
        )
    }
}