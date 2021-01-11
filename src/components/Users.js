// class based component

import React from 'react';

class Users extends React.Component{
    state ={
        name: 'gege',
        age: 25
    }

    data={
        city: 'Falls Church'
    }

    changeMyCity=()=>{
        console.log('change my city from here');
        console.log('before change', this.data.city);
        this.data.city='FairFax';
        console.log('after change',this.data.city);
    }

    changeMyAge=()=>{
        this.setState({age:21 });

    }


    render(){
        console.log('Im a render()');
        return(
            <div>
            <h1> {this.state.name}</h1>
            <h2>{this.state.age}</h2>
            <button onClick={this.changeMyAge}>Change My Age</button>
            <hr/>
            <h3>{this.data.city}</h3>
            <button onClick={this.changeMyCity}>Change My City</button>
            </div>
        );
    }
}

export default Users;