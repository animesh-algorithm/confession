import React from 'react'
import { Card, Row, Col, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { connect } from 'react-redux'
import { unfollowUser } from '../../redux/actions/follow'
import { likeConfession, unlikeConfession } from '../../redux/actions/confessions'

const ConfessionsActions = ({ following, confession, followUser, auth, unfollowUser, likeConfession, unlikeConfession }) => {

    const handleAuthAction = (e) => {
        if (auth.uid) {
            if (e.target.innerHTML === 'Follow') followUser(confession.userId)
            if (e.target.className === 'fas fa-heart') {
                if (!confession.likes?.includes(auth.uid)) {
                    likeConfession(confession.id)
                } else {
                    unlikeConfession(confession.id)
                }
            }
        } else {
            alert('Login first!')
        }
    }

    return (
        <Row>
            <Col>
                <LinkContainer to='#' onClick={handleAuthAction}>
                    <Card.Link className='text-white'><i className='fas fa-heart'> {confession.likes?.length | 0}</i></Card.Link>
                </LinkContainer>
                <LinkContainer to='#'>
                    <Card.Link className='text-white'><i className='fas fa-comment'> 0</i></Card.Link>
                </LinkContainer>
            </Col>
            <Col md={2}>
                <LinkContainer to='#'>
                    {
                        confession.userId === 'XBODMyuxsjQCw7LDM6ivYt0Atqq1' 
                        ? <Card.Link className='float-right text-white'></Card.Link>  
                        : following?.includes(confession.userId) 
                        ? <Card.Link className='float-right text-white' onClick={() => unfollowUser(confession.userId)}>Unfollow</Card.Link> 
                        : <Card.Link className='float-right text-white' onClick={handleAuthAction}>Follow</Card.Link>
                    }
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

const mapDispatchToProps = (dispatch) => {
    return {
        unfollowUser: (beneficiaryId) => dispatch(unfollowUser(beneficiaryId)),
        likeConfession: (id) => dispatch(likeConfession(id)),
        unlikeConfession: (id) => dispatch(unlikeConfession(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfessionsActions)
