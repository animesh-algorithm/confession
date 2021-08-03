import React from 'react'
import { Card, Row, Col, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { connect } from 'react-redux'

const ConfessionsActions = ({ following, confession, followUser, auth }) => {

    const handleFollow = () => {
        if (auth.uid) {
            followUser(confession.userId)
        } else {
            alert('Login first!')
        }
    }

    return (
        <Row>
            <Col>
                <LinkContainer to='#'>
                    <Card.Link className='text-white'><i className='fas fa-heart'> 0</i></Card.Link>
                </LinkContainer>
                <LinkContainer to='#'>
                    <Card.Link className='text-white'><i className='fas fa-comment'> 0</i></Card.Link>
                </LinkContainer>
            </Col>
            <Col onClick={handleFollow} md={2}>
                <LinkContainer to='#'>
                    <Card.Link className='float-right text-white'>{confession.userId === 'XBODMyuxsjQCw7LDM6ivYt0Atqq1' ? '' : following?.includes(confession.userId) ? 'Unfollow' : 'Follow'}</Card.Link>
                </LinkContainer>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(ConfessionsActions)
