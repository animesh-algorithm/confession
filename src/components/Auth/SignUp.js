import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

import { signUp } from '../../redux/actions/auth'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        fname: '',
        lname: '',
        username: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" id='fname' className="form-control" placeholder="Enter First Name" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" id='lname' className="form-control" placeholder="Enter Last Name" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" id='email' className="form-control" placeholder="Enter email" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" id='password' className="form-control" placeholder="Enter password" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    {/* <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p> */}
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (credentials) => dispatch(signUp(credentials))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)
