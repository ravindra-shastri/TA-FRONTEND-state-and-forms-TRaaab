import React from "react";
import Data from "./data.json";
import Header from "./Header";
import Product from "./Product";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = Data.products;
    return (
      <>
        <div>
        <Header data={data}/>
          <Product data={data || []} test='test' />
        </div>
      </>
    )
  }
}

export default Main;