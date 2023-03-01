import { Component } from 'react';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            firstNumber : 0,
            secondNumber : 0,
            result : 0
        }
    }

    firstInput = (e) => {
        this.setState({
            firstNumber : e.target.value
        });
    }

    secondInput = (e) => {
        this.setState({
            secondNumber : e.target.value
        });
    }

    // handleAdd = () => {
    //     const sum =  parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber) ;
    //     this.setState({
    //         result : sum
    //     });
    // }

    // handleSubtract = () => {
    //     const subtract = parseInt(this.state.firstNumber) - parseInt(this.state.secondNumber);
    //     this.setState({
    //         result : subtract
    //     })
    // }

    // handleMultiply = () => {
    //     const multiple = parseInt(this.state.firstNumber) * parseInt(this.state.secondNumber);
    //     this.setState({
    //         result : multiple
    //     })
    // }

    // handleDivide = () => {
    //     const divide = parseInt(this.state.firstNumber) / parseInt(this.state.secondNumber);
    //     this.setState({
    //         result : divide
    //     })
    // }

    handleMath = (e) => {
        const operator = e.target.value;
        switch (operator) {
            case "+" : {
                this.setState({
                    result : parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber)
                });
                break;
            }

            case "-" : {
                this.setState({
                    result : parseInt(this.state.firstNumber) - parseInt(this.state.secondNumber)
                });
                break;
            }

            case "*" : {
                this.setState({
                    result : parseInt(this.state.firstNumber) * parseInt(this.state.secondNumber)
                });
                break;
            }

            case "/" : {
                this.setState({
                    result : parseInt(this.state.firstNumber) / parseInt(this.state.secondNumber)
                });
                break;
            }
                
        }
    }


    render() {
        return (
            <div>
                <input type='number' id="first" onChange={this.firstInput} placeholder="0"/>
                <input type='number' id="second" onChange={this.secondInput} placeholder="0"/>
                <span><p>Result:</p> <p>{this.state.result}</p></span>
                <button onClick={this.handleMath} value="+">+</button>
                <button onClick={this.handleMath} value="-">-</button>
                <button onClick={this.handleMath} value="*">*</button>
                <button onClick={this.handleMath} value="/">/</button>
                <br></br>
            </div>
        )
    }
    
}