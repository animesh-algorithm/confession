import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
 
const Profile = ({ profile }) => {
    return (
        <Row className='m-3'>
            <Card.Img src="https://avatars.githubusercontent.com/u/48760865?v=4" className='mr-2' style={{borderRadius: '50%', width: '50px', height: '50px'}} />
            <Card.Text>
                {profile.username}
                <br />
                <span className="mb-2 text-muted">{`${profile.fname} ${profile.lname}`}</span>
            </Card.Text>
            <Col>
                <LinkContainer to='/profile/edit'>
                    <Card.Link className='float-right text-white'><i className='fas fa-edit'></i></Card.Link>
                </LinkContainer>
            </Col>
        </Row>
    )
}

export default Profile
