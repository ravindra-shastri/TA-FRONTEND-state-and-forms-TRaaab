import React from "react";

class First extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 1,
      active: 1,
    };
  }

  hanndleStep = (num) => {
    this.setState({
      step: num,
      active: num,
    });
  };

  handleIncrement = ()=>{
    this.setState({
        counter: this.state.counter + this.state.step,
      });
  }

  handleDecrement = ()=>{
    this.setState({
        counter: this.state.counter - this.state.step,
      });
  }

  handleReset = ()=>{
    this.setState({
        counter:0,
        step: 1,
        active : 1,
      });
  }

  render() {
    return (
      <section>
        <h1>{this.state.counter}</h1>
        <h3>Steps</h3>
        <div>
          <button onClick={()=>{this.hanndleStep(2)}} className={(this.state.active === 2) ? 'steps active': 'steps'}>
            2
          </button>
          <button onClick={()=>{this.hanndleStep(5)}} className={(this.state.active === 5) ? 'steps active': 'steps'}>
            5
          </button>
          <button onClick={()=>{this.hanndleStep(10)}} className={(this.state.active === 10) ? 'steps active': 'steps'}>
            10
          </button>
        </div>
        <div>
          <button onClick={this.handleIncrement} className="func">Increment</button>
          <button onClick={this.handleDecrement} className="func">Decrement</button>
          <button onClick={this.handleReset} className="func">Reset</button>
        </div>
      </section>
    );
  }
}

export default First;