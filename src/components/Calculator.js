import React from 'react';

class Calculator extends React.Component{

    state={
        number1:'',
        number2: '',
        result:''

    }
    
    
    
    handleNumber1Change =(event)=>{
        this.setState({number1:event.target.value});
    }

    handleNumber2Change =(event)=>{
        this.setState({number2:event.target.value});
    }

    handleAdd=(number1,nubmer2)=>{
      
       this.setState({result:this.state.number1 + this.state.number2})

    }
 
        render(){
            return(
                <div className='calculator'> 
                <div className='show-numbers'>
                <h1> {this.state.number1}</h1>
                <h1>{this.state.number2}</h1>
                    <input type="text" placeholder='Enter first number' onChange={this.handleNumber1Change} value={this.state.number1}/>
                    <input type="text" placeholder='Enter second number' onChange={this.handleNumber2Change} value={this.state.number2}/>
                    <button onClick={this.handleAdd}>Add</button>
    
                    </div>
                  
                </div>
            )
        }
}

export default Calculator;