import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    render() {
        return (
            <div>
                <h1>Users component</h1>
                <User/>
            </div>
        );
    }
}

export default Users;