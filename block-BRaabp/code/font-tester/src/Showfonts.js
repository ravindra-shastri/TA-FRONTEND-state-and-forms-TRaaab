import React from 'react';

let fonts = ["Roboto", "Poppins", "Open Sans", "Georama", "Noto Sans JP", "Oswald", "Style Script", "Palette Mosaic", "Merriweather", "Crimson Pro"];

class Showfonts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="font-container">
        {
          fonts.map((font) => (
            <div className="font-display-box" >
              <h2>{font}</h2>
              <div>
                <h2 style={{ fontFamily: font }}>{this.props.text}</h2>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Showfonts;