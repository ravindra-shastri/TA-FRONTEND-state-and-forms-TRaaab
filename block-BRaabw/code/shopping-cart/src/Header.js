import React from "react";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      
        <div className="header">
        <button className="cart-btn">X</button>
          <img className="cart-img" src={`/static/bag-icon.png`} alt="" />
          
        </div>
        
      </>
      
    )

  }
}

export default Header;