import React from 'react'
import { Row, Col } from 'react-bootstrap'

import ProfileSection from '../components/Profile/ProfileSection'
import ConfessionsGrid from '../components/Confessions/ConfessionsGrid'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const HomeScreen = ({ auth }) => {
    if (!auth.uid) return <Redirect to='/explore' />
    return (
            <Row>
                <Col sm={12} md={12} lg={7} xl={8}>
                    <ConfessionsGrid />
                </Col>
                <Col sm={12} md={12} lg={5} xl={4}>
                    <ProfileSection />
                </Col>
            </Row>   
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(HomeScreen)
