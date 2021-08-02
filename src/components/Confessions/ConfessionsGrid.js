import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Col, Card, Row } from 'react-bootstrap'

import Confession from './Confession'
import CreateConfession from './CreateConfession'


const ConfessionsGrid = ({ confessions }) => {
    const showConfessions = () => (
        confessions && confessions.map((confession, i) => (
            <Col key={i} sm={12} md={8} lg={8} xl={4} className='mb-2' >
                <Confession confession={confession} />
            </Col>
        ))
    )

    return (
        <Row>
            <Col sm={12} md={12} lg={8} xl={8}>
                <CreateConfession />
            </Col>
            {showConfessions()}
        </Row>
    )
}

const mapStateToProps = (state) => {
    return {
        confessions: state.firestore.ordered.confessions
    }
}

export default compose(
    connect(mapStateToProps), firestoreConnect([
        { collection: 'confessions' }
    ])
)(ConfessionsGrid)
