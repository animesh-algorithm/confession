import React from 'react'

import { Card, Row, Col, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import { followUser } from '../../redux/actions/follow'

import ConfessionsActions from './ConfessionsActions'

const Confession = ({ confession, followUser, followers, following }) => {
    return (
        <Card className='bg-dark'>
            <Row className='ml-2'>
                <Card.Img src="https://avatars.githubusercontent.com/u/48760865?v=4" className='mr-2' style={{borderRadius: '50%', width: '50px', height: '50px'}} />
                <Card.Text>
                    {confession.username}
                    <br />
                    <span className="mb-2 text-muted">{`${confession.userFname} ${confession.userLname}`}</span>
                </Card.Text>
            </Row>
            <Container fluid>
                {confession.content.substring(0, 100)}
            </Container>
            <Card className='bg-dark pl-3 pt-2 pb-2 pr-3'>
                <ConfessionsActions following={following} confession={confession} followUser={followUser} />      
            </Card>
        </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(Confession)

