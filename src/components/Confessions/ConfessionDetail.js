import React, { useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Row, Col, Container } from 'react-bootstrap'

import Confession from './Confession'
import CreateConfession from './CreateConfession'

const ConfessionDetail = ({ confession, auth }) => {
    const [editableConfession, setEditableConfession] = useState(null)
    const edit = (confession) => {
        setEditableConfession(confession)
    }
    return (
        <Container fluid>
            <Row>
                <Col lg={8} md={8} sm={12}><Confession confession={confession} edit={edit} /></Col>
                {confession.userId === auth.uid ? <Col lg={4} md={4} sm={12}><CreateConfession editableConfession={editableConfession} edit={edit} /></Col> : null}
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