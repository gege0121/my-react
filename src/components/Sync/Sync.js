import React, { Component } from 'react';
const Users =[{name: 'gg', age:18},{name:'kiki',age:24}]

function printUsers(params) {
    setTimeout(()=>{
        Users.map(user=>console.log(user.name))
    },1000)
}
function createUser(user,callback) {
    setTimeout(()=>{
        Users.push(user)
        callback();
    },2000)
}

createUser({name:'gege',age:18})
printUsers();

// use call back
createUser({name:'gege',age:18},printUsers);

class Sync extends Component {
    render() {
        return (
            <div>
                <h1>this is sync component</h1>
            </div>
        );
    }
}

export default Sync;