import React from "react";
import Orderfilter from "./Header";
import Aside from "./Aside";


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectOrder: ""
    }
  }

  handleProductOrder = (event) => {
    const order = event.target.value;
    this.setState({ selectOrder: order });
    let productShort = [...this.props.data];
    if (order === "highest") {
      productShort = productShort.sort((a, b) => b.price - a.price);
    }
    if (order === "lowest") {
      productShort = productShort.sort((a, b) => a.price - b.price);
    }
    this.setState({ data: productShort });
  }
  render() {
    const data = this.state.data.length ? this.state.data : this.props.data;
    return (
      <>
        <div className='drop-box'>
          <p>
            {`${this.props.data.length} Products found. `}
          </p>
          <div className='drop'>
            <label htmlFor='order'>Order by </label>
            <select name='order' id='order' value={this.state.selectOrder} onChange={this.handleProductOrder} className='select-drop'>
              <option value=''>Select</option>
              <option value="lowest">Lowest to highest</option>
              <option value="highest">Highest to lowest</option>
            </select>
          </div>
        </div>

        <div className='prod-container'>
          <div>
            <Aside data={this.props.data} />
          </div>
          <div className='all-products'>
            {data.map((product) => (
              <div key={product.id}>
                <button className="free-ship" > Free Shipping</button>
                <div className="img-container">
                  <img className="img-total" src={`/static/products/${product.sku}_1.jpg`} alt={product.title} />
                </div>
                <div className="price-container">
                  <p>{product.title}</p>
                  <h3>
                    {product.currencyFormat + product.price}
                  </h3>
                  <button className='add-cart'>Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>


      </>
    )
  }
}

export default Product;