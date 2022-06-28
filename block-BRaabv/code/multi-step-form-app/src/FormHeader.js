import React from 'react';

export default class FormHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <>
      <div className="flex">
        <nav>
          <p >
            <span
              className={this.props.currentStep === 1 && "active"}> 1
            </span>
            Sign Up
          </p>
        </nav>
        <nav>
          <p>
            <span
              className={this.props.currentStep === 2 && "active"}> 2
            </span>
            Message
          </p>
        </nav>
        <nav>
          <p>
            <span
              className={this.props.currentStep === 3 && "active"}> 3
            </span>
            Checkbox
          </p>
        </nav>
      </div>
      <hr />
      <p>{this.props.currentStep}/3
      </p>
    </>
  }
}