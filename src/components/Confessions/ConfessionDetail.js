import React from 'react'
import { connect } from 'react-redux'

const ConfessionDetail = ({ confession, auth }) => {
    console.log(confession)
    return (
        <div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    const confession = state.firestore.data.confessions[id]
    return {
        confession: confession,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(ConfessionDetail)
