import React, { Component } from 'react';

class InputComponent extends Component { 
    constructor(props) { 
    super(props); 
    this.state = { 
    inputValue: '', 
    }; 
} 

handleInputChange = (event) => { 
        this.setState({ 
        inputValue: event.target.value, 
    }); 
}; 
    render() { 
    return (
    <div> 
    <h2>Prelim Exam Number 2</h2> 
    <input 
    type="text" 
    placeholder="Enter a string" 
    value={this.state.inputValue} 
    onChange={this.handleInputChange} 
/> 
<p>Result: {this.state.inputValue}</p> 
</div> 
); 
} 
} 
export default InputComponent; 
