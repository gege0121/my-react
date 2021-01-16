import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    state={
        name : 'gg',

    }

    changeName=()=>{

        this.setState({name: 'Gege'})
    }

    render() {
        return (
            <div>
                <h1>Users component</h1>
                <User name={this.state.name}/>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default Users;