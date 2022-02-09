import React from 'react';
import Movie from './Movie';
import data from './data/data.json';
import Popup from './Popup';

class Movies extends React.Component {
  constructor(pro) {
    super(pro); 
    this.state = {
      details: null,
      hover: null
    }
  }

  closeDetails = () => {
    this.setState({ details: null })
  }

  showMoreAction = (index) => {
    this.setState({ hover: index });
  }

  render() {
    return (
      <>
        <div>
          {data.map((movie, index) =>
            <div className="movie-wrapper" onMouseOver={() => this.showMoreAction(index)}>
              <Movie moviedata={movie} id={index} />
              {
                this.state.hover === index &&
                <button className="more-info" onClick={() => this.setState({ details: movie })}>More Info</button>
              }
            </div>
          )}
        </div>
        {
          this.state.details &&
          <Popup close={this.closeDetails} totaldata={this.state.details} />
        }
      </>
    )
  }
}

export default Movies;

