import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { createConfession } from '../../redux/actions/confessions'
import { withRouter } from 'react-router'


class CreateConfession extends Component {
    state = {
        content: '',
        location: this.props.location.pathname
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
                        <textarea type="text" id='content' rows={5} cols={20} value={this.state.content} className="form-control bg-dark text-white border-white" placeholder={`Confess here${this.props.location.pathname === '/explore' ? ' Anonymously' : ''}...`} onChange={this.handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-secondary btn-block btn-sm border-white">Submit</button>
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
        createConfession: (confession) => dispatch(createConfession(confession)),
    }
}

export default connect(null, mapDispatchToProps)(withRouter(CreateConfession))
