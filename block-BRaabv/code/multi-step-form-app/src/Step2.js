import React from 'react';
import './style.css';
import FormHeader from './FormHeader';

class Step2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    return (
      <>
        <div className="flex">
          <div>
            <aside>
              <img className="aside-img" src="./images/p2.jpg" alt=""
              />
            </aside>
          </div>
          <div>
            <FormHeader currentStep={this.props.currentStep} />
            <div>
              <h1>Message</h1>
              <form>
                <fieldset>
                  <div>
                    <label htmlFor='message'>
                      Message
                    </label>
                  </div>
                  <textarea
                    name="message"
                    rows="15"
                    cols="60"
                    id="message"
                    value={this.props.message}
                    onChange={this.props.handleChange}
                  />
                  <div>
                    <label htmlFor="choiceOne">
                      <input
                        type="radio"
                        checked name="choice"
                        id="choiceOne"
                      />
                      The Number one choice
                    </label>
                    <label htmlFor="choiceTwo">
                      <input
                        type="radio"
                        name="choice"
                        id="choiceTwo"
                      />
                      The Number two choice
                    </label>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </>
    )
  }
}

export default Step2;

