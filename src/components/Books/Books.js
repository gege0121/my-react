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
    this.setState({books:updatedBooks, name:'', rating:''});
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
                        this.state.books.map(book =><Book book={book}/>)
                    }
                </div>
            </div>
        )
    }
}