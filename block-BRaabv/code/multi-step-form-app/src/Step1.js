import React from 'react';
import FormHeader from './FormHeader';

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <>
        <div className="flex">
          <div>
            <aside>
              <img className="aside-img" src="./images/p1.jpg" alt="" />
            </aside>
          </div>
          <div>
            <FormHeader currentStep={this.props.currentStep} />
            <div>
              <h1>Sign UP</h1>
            </div>
            <div>
              <form>
                <fieldset>
                  <div className="flex">
                    <div>
                      <div>
                        <label htmlFor="first name">

                          First Name
                        </label>
                      </div>
                      <input
                        type="text" name="firstName" className="form-control" id="firstName"
                        value={this.props.firstName} onChange={this.props.handleChange}
                      />
                    </div>

                    <div>
                      <div>
                        <label for="last name">
                          Last Name
                        </label>
                      </div>
                      <input
                        type="text" name="lastName" className="form-control" id="lastName"
                        value={this.props.lastName} onChange={this.props.handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <div>
                        <label htmlFor="dateOfBirth">
                          Date of Birth
                        </label>
                      </div>
                      <input
                        type="date" name="dateOfBirth" className="form-control" id="dateOfBirth"
                        value={this.props.dateOfBirth} onChange={this.props.handleChange}
                      />
                    </div>
                    <div>
                      <div>
                        <label htmlFor="email">
                          Email Address
                        </label>
                      </div>
                      <input
                        type="email" name="email" className="form-control" id="email"
                        value={this.props.email} onChange={this.props.handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label for="address">
                        Address
                      </label>
                    </div>
                    <input type="text" className="form-control" id="address" name="address" value={this.props.address} onChange={this.props.handleChange} />
                  </div>
                </fieldset>
              </form>
              <hr />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Step1;
