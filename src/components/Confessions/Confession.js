import React from 'react'
import moment from 'moment'
import { useLocation } from 'react-router'
import { Card, Row, Col, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import { followUser } from '../../redux/actions/follow'

import ConfessionsActions from './ConfessionsActions'
import { deleteConfession, getConfession } from '../../redux/actions/confessions'

const Confession = ({ confession, followUser, followers, following, getConfession, auth, deleteConfession, edit }) => {
    const location = useLocation()

    const editAndDeleteButton = () => (
        <span className='m-3'>
            {
                auth.uid === confession.userId
                ? <>
                    <LinkContainer to='#create-confession' onClick={() => edit(confession)}>
                        <Card.Link className='text-white'><i className='fas fa-edit'></i></Card.Link>
                    </LinkContainer>
                    <LinkContainer to='/' onClick={() => deleteConfession(confession.id)}>
                        <Card.Link className='text-white'><i className='fas fa-trash-alt'> </i></Card.Link>
                    </LinkContainer>
                </>
                : null
            }
        </span>
    )

    return (
        <Card className='bg-dark overflow-hidden border-white'>
            <Row className='ml-2'>
                <Card.Img src="https://avatars.githubusercontent.com/u/48760865?v=4" className='mr-2' style={{borderRadius: '50%', width: '50px', height: '50px'}} />
                <Card.Text>
                    {confession.username} {editAndDeleteButton()}
                    <br />
                    <span className="mb-2 text-muted">{`${confession.userFname} ${confession.userLname}`}</span>
                </Card.Text>
            </Row>
            <Row className='ml-2'>
                <span className='text-muted'>{confession.views | 0} views · {moment(confession.createdAt?.toDate()).endOf('day').fromNow()}</span>
            </Row>
            <Container fluid>
                {location.pathname !== `/confession/${confession.id}` ? confession.content?.substring(0, 100) : confession.content}
                <LinkContainer to={`/confession/${confession.id}`} onClick={() => getConfession(confession.id)}>
                    <Card.Link className='text-secondary'>{location.pathname === `/confession/${confession.id}` ? '' : ' Read More...'}</Card.Link>
                </LinkContainer>
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
        following: state.firebase.profile.following,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (beneficiaryId) => dispatch(followUser(beneficiaryId)),
        getConfession: (id) => dispatch(getConfession(id)),
        deleteConfession: (id) => dispatch(deleteConfession(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confession)

