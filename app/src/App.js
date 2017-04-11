import React, { Component } from 'react';
import './App.css';
import calculatorImage from "./calculator.png"
class App extends Component {
  constructor(props){
    super();
    this.state = {
      display: '0'
     ,operator:''
     ,temp:0
     ,restDisplay:false
     ,result:0
    }
  }
  render() {
    return (
      <div id='App'>
        <div id="container-main">
          <img className="remove-highlight" alt="calculator" src={calculatorImage} />
          <div id="calculator-mask" className="remove-highlight">

            <div className="output">
              <span className="total">{this.state.display}</span>
            </div>

            <div className="btn clear"onClick={ () => { this.clearDisplay(); } }></div>

    <div className="btn zero"   onClick={ () => { this.setDisplay('0'); } }></div>
    <div className="btn one"    onClick={ () => { this.setDisplay('1'); } }></div>
    <div className="btn two"    onClick={ () => { this.setDisplay('2'); } }></div>
    <div className="btn three"  onClick={ () => { this.setDisplay('3'); } }></div>
    <div className="btn four"   onClick={ () => { this.setDisplay('4'); } }></div>
    <div className="btn five"   onClick={ () => { this.setDisplay('5'); } }></div>
    <div className="btn six"    onClick={ () => { this.setDisplay('6'); } }></div>
    <div className="btn seven"  onClick={ () => { this.setDisplay('7'); } }></div>
    <div className="btn eight"  onClick={ () => { this.setDisplay('8'); } }></div>
    <div className="btn nine"   onClick={ () => { this.setDisplay('9'); } }></div>

      <div className="btn multiply" onClick={ () => { this.setOperator('*'); } }></div>
      <div className="btn divide"   onClick={ () => { this.setOperator('/'); } }></div>
      <div className="btn subtract" onClick={ () => { this.setOperator('-'); } }></div>
      <div className="btn add"      onClick={ () => { this.setOperator('+'); } }></div>
      <div className="btn equal" onClick={ () => { this.calculate() }} ></div>
          </div>
        </div>
      </div>
    );
  }
  setDisplay(num) {
    var display = ( this.state.display === '0' ) ? num : this.state.display + num;
    this.setState({ display: (this.state.display.length < 13) ? display : this.state.display })
  }
  setOperator(operator) {
  if (!this.state.operator) {
    this.setState({ operator: operator, temp: parseInt(this.state.display, 10), display: '0' })
    }
  }
  calculate() {
    if ( this.state.temp === 0 ) { return; }
  var result;

  switch ( this.state.operator ) {
    case '+':
      result = this.state.temp + parseInt(this.state.display, 10);
      break;
    case '-':
      result = this.state.temp - parseInt(this.state.display, 10);
      break;
    case '*':
      result = this.state.temp * parseInt(this.state.display, 10);
      break;
    case '/':
      result = this.state.temp / parseInt(this.state.display, 10);
      break;
    default:
      break;
  }

  this.setState({ display: result });
}

clearOperator(){
  this.setState({ display:this.state.result , temp: 0, operator: '', resetDisplay: false })
}
clearDisplay() {
  this.setState({ display: '0', temp: 0, operator: '', resetDisplay: false });
}
}

export default App;
