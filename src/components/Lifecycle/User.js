import React, { Component } from 'react';

class User extends Component {
componentDidMount(){
    console.log('component did mount');
}

componentDidUpdate(){
    console.log('component did update');
}

shouldComponentUpdate(){
    console.log('should component update');
    if(this.props.name===''){
        return true;
    }
    else{
        return false;
    }
   
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