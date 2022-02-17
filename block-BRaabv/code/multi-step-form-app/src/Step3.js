import React from 'react';
// import './style.css';
import FormHeader from './FormHeader';

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    return (
      <>

        <div className="flex">
          <div>
            <aside>
              <img className="aside-img" src="./images/p3.jpg" alt="" />
            </aside>
          </div>

          <div>
            <FormHeader currentStep={this.props.currentStep} />
            <div>
              <h1>Checkbox</h1>
              <div>
                <div>
                  <label>
                    <input type="radio" className="image-radio" name="test" value="small" checked />
                    <img className="check-img" src="./images/p4.jpg" alt="Select" />
                  </label>
                  <label>
                    <input type="radio" className="image-radio" name="test" value="small" />
                    <img className="check-img" src="./images/p5.jpg" alt="Select" />
                  </label>
                </div>
                <div>
                  <label>
                    <input type="radio" name="optionbtn" className="" />I want to add this
                    option
                  </label>
                  <label>
                    <input type="radio" name="optionbtn" />
                    Let me click on this checkbox and choose some cool stuff
                  </label>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </>

    )
  }
}

export default Step3;

