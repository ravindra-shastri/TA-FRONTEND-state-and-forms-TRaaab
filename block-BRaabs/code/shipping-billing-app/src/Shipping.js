import React from 'react';

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      postal: "",
      city: "",
      country: "",

      addressText: "",
      postalText: "",
      cityText: "",
      countryText: "",
      checked: false,

      error: {
        address: ""
      }
    }
  }

  handleInput = ({ target }) => {
    let { name, value } = target;
    let error = this.state.error;
    error.address = (name === "address") &&
      (value.length < 8) ? `You need to enter at-least 8` : '';
    this.setState({ error, [name]: value });
  }


  handleCheck = ({ target }) => {
    let { name, checked } = target;
    this.setState({ [name]: checked });
  }

  render() {

    let { address } = this.state.error;
    return (
      <>
        <div className="form-container">
          <form>
            <div>
              <fieldset className="shipping">
                <h2>
                  Shipping Address
                </h2>
                <label htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  value={this.state.address}
                  id="address" name="address"
                  onChange={this.handleInput}
                  placeholder="e.g New Delhi Vasant Vihar"
                />
                <span
                  className="error-span">{address}
                </span>
                <label htmlFor="postal">
                  ZIP/Postal Code
                </label>
                <input
                  type="number"
                  value={this.state.postal}
                  id="postal" name="postal"
                  onChange={this.handleInput}
                  placeholder="e.g 176057"
                />
                <label htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  value={this.state.city}
                  id="city" name="city"
                  onChange={this.handleInput}
                  placeholder="e.g New Delhi"
                />
                <label htmlFor="country">
                  Country
                </label>
                <input
                  type="text"
                  value={this.state.country}
                  id="country"
                  name="country"
                  onChange={this.handleInput}
                  placeholder="e.g India"
                />
              </fieldset>
            </div>
          </form>

          <form>
            <div>
              <fieldset>
                <h2>
                  Billing Address
                </h2>
                <div>
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="checked"
                    onChange={this.handleCheck}
                    checked={this.state.checked}
                  />
                  <span>
                    Same as the Shipping Address ?
                  </span>
                </div>

                <label htmlFor="addressText">
                  Address
                </label>
                <input
                  type="text"
                  value={this.state.checked ? this.state.address : this.state.addressText}
                  id="addressText"
                  name="addressText"
                  onChange={this.handleInput}
                  placeholder="e.g New Delhi Vasant Vihar"
                />
                <label htmlFor="postalText">
                  ZIP/Postal Code
                </label>
                <input
                  type="number"
                  value={this.state.checked ? this.state.postal : this.state.postalText}
                  id="postalText"
                  name="postalText"
                  onChange={this.handleInput}
                  placeholder="e.g 176057"
                />
                <label htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  value={this.state.checked ? this.state.city : this.state.cityText}
                  id="cityText"
                  name="cityText"
                  onChange={this.handleInput}
                  placeholder="e.g New Delhi"
                />
                <label htmlFor="country">
                  Country
                </label>
                <input
                  type="text"
                  value={this.state.checked ? this.state.country : this.state.countryText}
                  id="countryText"
                  name="countryText"
                  onChange={this.handleInput}
                  placeholder="e.g India"
                />
              </fieldset>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default Shipping;
