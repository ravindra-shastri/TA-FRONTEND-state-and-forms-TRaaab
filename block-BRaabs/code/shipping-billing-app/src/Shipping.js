import React from 'react';

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressText: "",
      postal: "",
      city: "",
      country: "",
      checked: "",

      error: {
        addressText: ""
      }
    }
  }

  handleInput = ({ target }) => {
    let { name, value } = target;
    let error = this.state.error;
    error.addressText = (name === "addressText") &&
      (value.length < 8) ? `You need to enter at-least 8` : '';
  }


  handleCheck = ({target }) => {
    let { name, checked } = target;
    let error = this.state.error;
    error.checked = ([name] === "checked");
  }

  render() {

    let { addressText } = this.state.error;
    return (
      <>
        <div className="form-container">
          <form>
            <div>
              <fieldset className="shipping">
                <h2>Shipping Address</h2>
                <label htmlFor="addressText">Address</label>
                <input type="text" value={this.state.addressText} id="addressText" name="addressText"
                  onChange={this.handleInput} placeholder="e.g New Delhi Vasant Vihar" />
                <span>{addressText}</span>
                <label htmlFor="postal">ZIP/Postal Code</label>
                <input type="number" value={this.state.postal} id="postal" name="postal" onChange={this.handleInput}
                  placeholder="e.g 176057" />
                <label htmlFor="city">City</label>
                <input type="text" value={this.state.city} id="city" name="city" onChange={this.handleInput} placeholder="e.g New Delhi" />
                <label htmlFor="country">Country</label>
                <input type="text" value={this.state.country} id="country" name="country" onChange={this.handleInput} placeholder="e.g India" />
              </fieldset>
            </div>
          </form>

          <form>
            <div>
              <fieldset>
                <h2>Billing Address</h2>
                <div>
                  <input type="checkbox" id="checkbox" name="checkbox" />
                  <span>Same as the Shipping Address ?</span>
                </div>

                <label htmlFor="addressText">Address</label>
                <input type="text" value={this.state.addressText} id="addressText" name="addressText"
                  onChange={this.handleCheck} placeholder="e.g New Delhi Vasant Vihar" />
                <span>{addressText}</span>
                <label htmlFor="postal">ZIP/Postal Code</label>
                <input type="number" value={this.state.postal} id="postal" name="postal" onChange={this.handleCheck}
                  placeholder="e.g 176057" />
                <label htmlFor="city">City</label>
                <input type="text" value={this.state.city} id="city" name="city" onChange={this.handleCheck} placeholder="e.g New Delhi" />
                <label htmlFor="country">Country</label>
                <input type="text" value={this.state.country} id="country" name="country" onChange={this.handleCheck} placeholder="e.g India" />
              </fieldset>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default Shipping;
