import React from 'react';

class Formtwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
      errors: {
        username: '',
        email: '',
        password: '',
        password2: '',
      },
    };
  }
  validateEmail = (email) => {
    // eslint-disable-next-line
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;
    switch (name) {
      case 'username':
        errors.username =
          value.length < 5 ? 'Username can not be less than 5 characters' : '';
        break;
      case 'email':
        errors.email = this.validateEmail(value) ? '' : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 5 ? 'Password can not be less than 5 characters' : '';
        break;
      case 'password2':
        errors.password2 =
          this.state.password !== value ? "Password doesn't match" : '';
        break;
      default:
        break;
    }

    this.setState({
      errors,
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      this.state.username + ' ' + this.state.email + ' ' + this.state.password
    );
  };

  render() {
    let { username, email, password, password2 } = this.state.errors;
    return (
      <div className="form-container">
         <form
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="username">
            Username :{' '}
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Username"
            onChange={this.handleInput}
            value={this.state.username}
            className={username && 'error'}
          />
          <span>{username}</span>

          <label htmlFor="email">
            Email :{' '}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            className={email && 'error'}
            onChange={this.handleInput}
            value={this.state.email}
          />
          <span>{email}</span>

          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={this.state.password}
            className={password && 'error'}
            onChange={this.handleInput}
          />
          <span>{password}</span>

          <label htmlFor="password2">
            Confirm Password
          </label>
          <input
            type="password"
            id="password2"
            name="password2"
            placeholder="Enter password again"
            className={password2 && 'error'}
            value={this.state.password2}
            onChange={this.handleInput}
          />
          <span>{password2}</span>

          <button className="btn"
            type="submit"
            value="Submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Formtwo;