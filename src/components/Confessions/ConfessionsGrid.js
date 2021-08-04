import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Col, Card, Row } from 'react-bootstrap'
import Confession from './Confession'
import CreateConfession from './CreateConfession'

import { useLocation } from 'react-router'

const ConfessionsGrid = ({ confessions, auth }) => {
    const location = useLocation()
    if (location.pathname === '/likes') {
        confessions = confessions.filter(confession => {
            if (confession.likes?.includes(auth.uid)) {
                return confession
            }
        })
    }

    const showConfessions = () => (
        confessions && confessions.map((confession, i) => (
            <Col key={confession.id} sm={12} md={8} lg={8} xl={4} className='mb-2' >
                <Confession confession={confession} />
            </Col>
        ))
    )
    return (
        <Row className='masonry'>
            {location.pathname !== '/likes' ? (<Col sm={12} md={12} lg={8} xl={8}>
                <CreateConfession />
            </Col>) : null}
            {showConfessions()}
        </Row>
    )
}

const mapStateToProps = (state, props) => {
    const auth = state.firebase.auth
    return {
        confessions: state.firestore.ordered.confessions,
        auth: auth
    }
}

export default compose(
    connect(mapStateToProps), firestoreConnect([
        { collection: 'confessions', limit: 20, orderBy: ['createdAt', 'desc'] }
    ])
)(ConfessionsGrid)
