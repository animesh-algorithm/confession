import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { createConfession } from '../../redux/actions/confessions'


class CreateConfession extends Component {
    state = {
        content: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createConfession(this.state)
        this.reset()
    }
    reset = (e) => {
        this.setState({
            content: ""
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <textarea type="text" id='content' rows={5} cols={20} className="form-control bg-dark text-white" placeholder="Confess here..." onChange={this.handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-secondary btn-block btn-sm">Submit</button>
                    {/* <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p> */}
                </form>
                <br />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createConfession: (confession) => dispatch(createConfession(confession))
    }
}

export default connect(null, mapDispatchToProps)(CreateConfession)
