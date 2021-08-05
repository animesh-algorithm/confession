import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import Confession from './Confession'

import { Row, Col, Container } from 'react-bootstrap'

const ConfessionDetail = ({ confession, auth }) => {
    return (
        <Container fluid>
            <Row>
                <Col lg={8} md={8} sm={12}><Confession confession={confession} /></Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    let confessions = state.firestore.data.confessions
    let confession = confessions ? confessions[id]: null
    confession = {...confession, id:id}
    return {
        confession: confession,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        { collection: 'confessions', doc: props.match.params.id }
    ])
)(ConfessionDetail)