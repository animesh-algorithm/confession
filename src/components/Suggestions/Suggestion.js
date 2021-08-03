import React from 'react'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Card, Col, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import { followUser } from '../../redux/actions/follow'

const Suggestion = ({ suggestion, following, followers, followUser }) => {
    return (
        <Row className='m-auto'>
            <Card.Img src="https://avatars.githubusercontent.com/u/48760865?v=4" className='mr-2' style={{borderRadius: '50%', width: '50px', height: '50px'}} />
            <Card.Text>
                {suggestion.username}
                <br />
                <span className="mb-2 text-muted">{`${suggestion.fname} ${suggestion.lname}`}</span>
            </Card.Text>
            <Col onClick={() => followUser(suggestion.id)}>
                <LinkContainer to='#'>
                    <Card.Link className='float-right text-white'>{suggestion.id === 'XBODMyuxsjQCw7LDM6ivYt0Atqq1' ? '' : following?.includes(suggestion.id) ? 'Unfollow' : 'Follow'}</Card.Link>
                </LinkContainer>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => {
    return {
        followers: state.firebase.profile.followers,
        following: state.firebase.profile.following
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (beneficiaryId) => dispatch(followUser(beneficiaryId))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps), firestoreConnect([
        {collection: 'profile'}
    ])
)(Suggestion)
