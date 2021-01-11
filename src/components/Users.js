// class based component

import React from 'react';

class Users extends React.Component{
    state ={
        name: 'gege',
        age: 25
    }

    changeMyAge=()=>{
        this.setState({age:21 });

    }


    render(){
        return(
            <div>
            <h1> {this.state.name}</h1>
            <h2>{this.state.age}</h2>
            <button onClick={this.changeMyAge}>Change My Age</button>
            <hr/>
            </div>
        );
    }
}

export default Users;