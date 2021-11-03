import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { signIn, signInWithGoogle } from "../../redux/actions/auth";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
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
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              onChange={this.handleChange}
              style={{ background: "black" }}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              onChange={this.handleChange}
              style={{ background: "black" }}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                style={{ background: "black" }}
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="border-white btn btn-primary btn-block"
            style={{ background: "black" }}
          >
            SIGNIN
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
    signInWithGoogle: () => dispatch(signInWithGoogle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
