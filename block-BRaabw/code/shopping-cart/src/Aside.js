import React from "react";

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: [],
      // selected:[]
    }

  }

  handleSize = (size) => {
    // const selected = event.target.value;
    const index = this.state.selectedSize.indexOf(size);
    const allSizes = this.state.selectedSize;
    if (index >= 0) {
      // Remove size from selectedSize
      allSizes.splice(index, 1);
      this.setState({ selectedSize: allSizes });
    } else {
      // Add new size to selectedSize
      allSizes.push(size);
      this.setState({ selectedSize: allSizes});
      // allSizes = ;
    }
    
    
  };


  aside = (data) => {
    return data.reduce((acc, cv) => {
      acc.push(cv.availableSizes);
      return acc;
    }, []).flat(Infinity).filter((value, index, arr) => arr.indexOf(value) === index);
  }

  render() {
    let allSizes = this.aside(this.props.data);
    return (
      <>
      
        <aside className="side">
          <div className="size-btn">
            {allSizes.map((size, index) => <button className={this.state.selectedSize.includes(size) ? 'active' : ''} onClick={() => this.handleSize(size)}>{size}</button>)}
          </div>
        </aside>
      </>
    )
  }
}
export default Aside;