import React from "react";
import Aside from "./Aside";
import Header from "./Header";


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectOrder: "",
      selectedSize: [],
      cart: {},
      isCartVisible: false
    }
  }


  showCart = () => this.setState({ isCartVisible: true });

  hideCart = () => this.setState({ isCartVisible: false });

  increaseCartItem = ({ id }) => {
    const { value, count } = this.state.cart[id];
    this.setState({ cart: { ...this.state.cart, [id]: { value, count: count + 1 } } })
  };

  decreaseCartItem = ({ id }) => {
    const { value, count } = this.state.cart[id];
    if (count <= 1) return;
    this.setState({ cart: { ...this.state.cart, [id]: { value, count: count - 1 } } })
  };

  handleProductOrder = (event) => {
    const order = event.target.value;
    this.setState({ selectOrder: order });
    let productShort = [...this.props.data];
    if (order === "highest") {
      productShort = productShort.sort((a, b) =>
        b.price - a.price);
    }
    if (order === "lowest") {
      productShort = productShort.sort((a, b) =>
        a.price - b.price);
    }
    this.setState({ data: productShort });
  };

  setSelectedSize = (selectedSize) => {
    this.setState({ selectedSize })
  };

  filteredData = () => {
    const data =
      this.state.data.length ?
        [...this.state.data] :
        [...this.props.data];
    const filters = this.state.selectedSize;
    if (filters.length) {
      return data.filter(item =>
        filters.some(f =>
          item.availableSizes.includes(f))) || [];
    }
    return data;
  };

  handleProductCart = (value) => {
    this.setState({
      cart: {
        ...this.state.cart,
        [value.id]: { value, count: 1 }
      }
    })
  };

  render() {
    return (
      <>
        <div className='drop-box'>
          <p>
            {`${this.props.data.length}
             Products found. `}
          </p>
          <div className='drop'>
            <label htmlFor='order'>Order by
            </label>
            <select
              name='order'
              id='order'
              value={this.state.selectOrder}
              onChange={this.handleProductOrder}
              className='select-drop'>
              <option value=''>Select
              </option>
              <option value="lowest">Lowest to highest
              </option>
              <option value="highest">Highest to lowest
              </option>
            </select>
          </div>
        </div>
        <div className="cart-icon">
          <img className="cart-img" src={"/static/bag-icon.png"} alt=""
            onClick={this.showCart} />
          {Object.keys(this.state.cart).length}
        </div>
        <Header
          cart={this.state.cart}
          isVisible={this.state.isCartVisible}
          increaseCartItem={this.increaseCartItem}
          decreaseCartItem={this.decreaseCartItem}
          showCart={this.showCart}
          hideCart={this.hideCart}
        />

        <div className='prod-container'>
          <div>
            <Aside
              data={this.props.data}
              setSelectedSize={this.setSelectedSize}
            />
          </div>
          <div className='all-products'>
            {this.filteredData().map((product) => (
              <div key={product.id}>
                <button className="free-ship" > Free Shipping
                </button>
                <div className="img-container">
                  <img className="img-total"
                    src={`/static/products/${product.sku}_1.jpg`}
                    alt={product.title} />
                </div>
                <div className="price-container">
                  <p>{product.title}</p>
                  <h3>
                    {product.currencyFormat + product.price}
                  </h3>
                  <button
                    className='add-cart'
                    onClick={() => this.handleProductCart(product)}>
                    Add To Cart
                  </button>
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