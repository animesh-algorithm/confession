import React from 'react'
import { Row, Col } from 'react-bootstrap'

import ProfileSection from '../components/Profile/ProfileSection'
import ConfessionsGrid from '../components/Confessions/ConfessionsGrid'

const HomeScreen = () => {
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

export default HomeScreen
