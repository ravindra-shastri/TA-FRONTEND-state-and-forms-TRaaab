import React from 'react';
class Popup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<>
      <div className="popup">
        <div>
          <h3> Title : {this.props.totaldata.Title}</h3>
          <p> Released on :{this.props.totaldata.Released}</p>
          <p> Runtime : {this.props.totaldata.Runtime}</p>
          <p> Genre : {this.props.totaldata.Genre}</p>
          <p> Director : {this.props.totaldata.Director}</p>
          <p> Writer : {this.props.totaldata.Writer}</p>
          <p> Actors : {this.props.totaldata.Actors}</p>
          <p> Plot : {this.props.totaldata.Plot}</p>
          <p> Country : {this.props.totaldata.Country}</p>
          <p> Awards : {this.props.totaldata.Awards}</p>
          <p> Type : {this.props.totaldata.Type}</p>
          <p> Language : {this.props.totaldata.Language}</p>
        </div>
        <button className="hideInfo" onClick={this.props.close}>Close</button>
      </div>
    </>
    )
  }
}

export default Popup;