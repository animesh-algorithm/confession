import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { signInWithGoogle, signUp } from "../../redux/actions/auth";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    fname: "",
    lname: "",
    username: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email !== "") this.props.signIn(this.state);
  };

  render() {
    if (this.props.auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h3>Register</h3>

          <div className="form-group">
            <label>First Name</label>
            <input
              style={{ background: "black" }}
              type="text"
              id="fname"
              className="form-control"
              placeholder="Enter First Name"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              style={{ background: "black" }}
              type="text"
              id="lname"
              className="form-control"
              placeholder="Enter Last Name"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              style={{ background: "black" }}
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              style={{ background: "black" }}
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                style={{ background: "black" }}
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button
            style={{ background: "black" }}
            type="submit"
            className="border-white btn btn-primary btn-block"
          >
            SIGNUP
          </button>
          <button
            className="border-white btn btn-primary btn-block"
            onClick={this.props.signInWithGoogle}
            style={{ background: "black" }}
          >
            SIGNIN WITH GOOGLE
          </button>
          {/* <p className="text-right forgot-password">
                        Forgot <a href="#">password?</a>
                    </p> */}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (credentials) => dispatch(signUp(credentials)),
    signInWithGoogle: () => dispatch(signInWithGoogle()),
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
