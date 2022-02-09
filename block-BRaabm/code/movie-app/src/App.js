import React from 'react';
import Header from './Header';
import Movies from './Movies';
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <Movies />
      </>
    )
  }
}

export default App;
