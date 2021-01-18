import React from 'react';
import Book from './Book';
import axios from 'axios';

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
    this.setState({books:updatedBooks, name:'', rating:''});
}

handleDelete=(deletebook)=>{
    console.log('start to delete',deletebook);
    const books=this.state.books;
    this.setState({books:books.filter(book=>book.name!==deletebook.name)})
}

    render(){
        return(
            <div className='books'> 
            <div className='add-books'>
                
                <input type="text" placeholder='Enter book name' onChange={this.handleNameChange} value={this.state.name}/>
                <input type="text" placeholder='Enter book rate' onChange={this.handleRatingChange} value={this.state.rating}/>
                <button onClick={this.handleAddChange}>Add</button>

                </div>
                <div>
                    {
                        this.state.books.map((book, index) =>(<Book book={book} deleteBook={this.handleDelete} key={index}/>)
                        )}
                </div>
            </div>
        )
    }
}