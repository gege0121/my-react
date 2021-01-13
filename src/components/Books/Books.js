import React from 'react';
import Book from './Book';

export default class Books extends React.Component{
state={
    name:'',
    rating: '',
    books:[]
}

handleRatingChange =(event)=>{
    this.setState({rating:event.target.value});

}

handleNameChange =(event)=>{
    this.setState({name: event.target.value});

}
handleAddChange =()=>{
    const updatedBooks=this.state.books;
    updatedBooks.push({name:this.state.name,rating:this.state.rating});
    console.log('updatedBooks',updatedBooks);
}

    render(){
        return(
            <div className='books'> 
            <div className='add-books'>
                <input type="text" placeholder='Enter book name' onChange={this.handleNameChange}/>
                <input type="text" placeholder='Enter book rate' onChange={this.handleRatingChange}/>
                <button onClick={this.handleAddChange}>Add</button>

                </div>
            </div>
        )
    }
}