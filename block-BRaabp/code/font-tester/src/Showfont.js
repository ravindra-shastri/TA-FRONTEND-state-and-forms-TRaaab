import React from 'react';
import Showfonts from './Showfonts';



class Showfont extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    }
  }

  handleChange = (event) => { this.setState({ inputText: event.target.value }) };

  render() {
    return (
      <>
        <h1>FONT-TESTER APP</h1>

        <div className="input-container">
          <input onChange={this.handleChange} type="text" placeholder="Enter Your Text" />
        </div>
        <Showfonts text={this.state.inputText} />
      </>
    )
  }
}

export default Showfont;