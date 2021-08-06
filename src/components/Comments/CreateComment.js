import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { createConfession, updateConfession } from '../../redux/actions/confessions'
import { withRouter } from 'react-router'
import { flushSync } from 'react-dom'
import { createComment } from '../../redux/actions/comments'

class CreateConfession extends Component {
    state = {
        content: '',
        confession: this.props.confession,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createComment(this.state)
        this.reset()
    }
    reset = (e) => {
        this.setState({
            content: ""
        })
    }
    componentWillReceiveProps(props) {
       
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <textarea required type="text" id='content' rows={5} cols={50} value={this.state.content} className="form-control bg-dark text-white border-white" placeholder={`Comment here${this.props.location.pathname === '/explore' ? ' Anonymously' : ''}...`} onChange={this.handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-secondary btn-block btn-sm border-white">Comment</button>
                </form>
                <hr />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: (comment) => dispatch(createComment(comment))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(CreateConfession))
