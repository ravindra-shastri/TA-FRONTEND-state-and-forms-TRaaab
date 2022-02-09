import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
          <article>
            <div className="img-container">
              <img className="img" src={this.props.moviedata.Images} alt="" />
            </div>
            <h2 className="title">
              {this.props.moviedata.Title}
            </h2>
            <div className="release">
              <time>{this.props.moviedata.Released}</time>
            </div>
          </article>
      </>
    )
  }
}

export default Movie;

