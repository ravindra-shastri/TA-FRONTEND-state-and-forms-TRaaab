import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      address: '',
      message: '',
      choice: 1,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, firstName, lastName, dateOfBirth, message } = this.state;
    alert(`Your registration detail: \n 
      First Name: ${firstName}\n
      Last Name: ${lastName}\n
      Email: ${email} \n 
      Date of Birth: ${dateOfBirth} \n
      Message: ${message}`);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  get backButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          type="button"
          onClick={this._prev}
        >
          Back
        </button>
      );
    }

    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>

            {
              this.state.currentStep === 1 &&
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.email}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                dateOfBirth={this.state.dateOfBirth}
              />
            }
            {this.state.currentStep === 2 &&
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                message={this.state.message}
              />
            }
            {this.state.currentStep === 3 &&
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                choice={this.state.choice}
              />
            }
            {this.nextButton}
            {this.backButton}
          </form>
        </div>
      </>
    );
  }
}

export default MainForm;