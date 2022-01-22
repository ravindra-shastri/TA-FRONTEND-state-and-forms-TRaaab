import React from "react";

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 1,
      active1: 1,
      lim: Infinity,
      active2 : Infinity,
    };
  }

  handleStep = (num) => {
    this.setState({
      step: num,
      active1: num,
    });
  };

  handleIncrement = () => {
      if(this.state.counter + this.state.step <= this.state.lim){
        this.setState({
            counter: this.state.counter + this.state.step ,
          });
      } else{
          alert('Can not exceed the limit.');
      }
};

  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - this.state.step,
    });
  };

  handleReset = () => {
    this.setState({
      counter: 0,
      step: 1,
      active1: 1,
      lim: Infinity,
      active2: Infinity,
    });
  };

  handleLim= (lim) => {
    this.setState({
      lim: lim,
      active2: lim,
    });
  };

  render() {
    return (
      <section>
        <h1>{this.state.counter}</h1>
        <div className="flex">
          <div>
            '<h3>Steps</h3>
            <div>
              <button
                onClick={() => {
                  this.handleStep(2);
                }}
                className={this.state.active1 === 2 ? "steps active" : "steps"}
              >
                2
              </button>
              <button
                onClick={() => {
                  this.handleStep(5);
                }}
                className={this.state.active1 === 5 ? "steps active" : "steps"}
              >
                5
              </button>
              <button
                onClick={() => {
                  this.handleStep(10);
                }}
                className={this.state.active1 === 10 ? "steps active" : "steps"}
              >
                10
              </button>
            </div>
          </div>

          <div>
            <h3>Max Value</h3>
            <div>
              <button
                onClick={() => {
                  this.handleLim(50);
                }}
                className={this.state.active2 === 50 ? "steps active" : "steps"}
              >
                50
              </button>
              <button
                onClick={() => {
                  this.handleLim(100);
                }}
                className={this.state.active2 === 100 ? "steps active" : "steps"}
              >
                100
              </button>
              <button
                onClick={() => {
                  this.handleLim(200);
                }}
                className={this.state.active2 === 200 ? "steps active" : "steps"}
              >
                200
              </button>
            </div>
          </div>
        </div>
        <div>
          <button onClick={this.handleIncrement} className="func">
            Increment
          </button>
          <button onClick={this.handleDecrement} className="func">
            Decrement
          </button>
          <button onClick={this.handleReset} className="func">
            Reset
          </button>
        </div>
      </section>
    );
  }
}

export default Second;