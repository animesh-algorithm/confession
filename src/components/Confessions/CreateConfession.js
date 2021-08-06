import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { createConfession, updateConfession } from '../../redux/actions/confessions'
import { withRouter } from 'react-router'
import { flushSync } from 'react-dom'

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
        if (e.target.innerText === 'Confess') this.props.createConfession(this.state)
        if (e.target.innerText === 'Edit') this.props.editConfession({...this.state, id: this.props.editableConfession.id})
        this.reset()
        this.props.edit(null)
    }
    reset = (e) => {
        this.setState({
            content: ""
        })
    }
    componentWillReceiveProps(props) {
        this.setState({
            content: props.editableConfession ? props.editableConfession?.content : ""
        })
    }
    render() {
        return (
            <div id='create-confession' className={`${this.props.location.pathname.startsWith('/confession') ? 'position-fixed' : ''}`}>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <textarea required type="text" id='content' rows={10} cols={50} value={this.state.content} className="form-control text-white border-white" style={{background: 'black'}} placeholder={`Confess here${this.props.location.pathname === '/explore' ? ' Anonymously' : ''}...`} onChange={this.handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-secondary btn-block btn-sm border-white" style={{background: 'black'}}>{this.props.editableConfession || this.props.location.pathname.startsWith('/confession') ? 'Edit' : 'Confess'}</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createConfession: (confession) => dispatch(createConfession(confession)),
        editConfession: (confession) => dispatch(updateConfession(confession))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(CreateConfession))
