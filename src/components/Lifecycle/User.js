import React, { Component } from 'react';

class User extends Component {
componentDidMount(){
    console.log(1);
}

    render() {
        console.log('Render');
        return (
            <div>
                <h1>I am a user! My name is {this.props.name}</h1>
            </div>
        );
    }
}

export default User;