import React from 'react'
import { Card, Row, Col, Container} from 'react-bootstrap'
import { connect } from 'react-redux'
import { followUser } from '../../redux/actions/follow'

const Confession = ({ confession, followUser }) => {
    return (
        <Card className='bg-dark'>
            <Row className='ml-2'>
                <Card.Img src="https://avatars.githubusercontent.com/u/48760865?v=4" className='mr-2' style={{borderRadius: '50%', width: '50px', height: '50px'}} />
                <Card.Text onClick={() => followUser(confession.userId)}>
                    {confession.username}
                    <br />
                    <span className="mb-2 text-muted">{`${confession.userFname} ${confession.userLname}`}</span>
                </Card.Text>
                <Col>
                    <Card.Text className='float-right'><i className='fas fa-follow'></i></Card.Text>
                </Col>
            </Row>
            <Container>
                {confession.content.substring(0, 100)}
            </Container>
        </Card>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (beneficiaryId) => dispatch(followUser(beneficiaryId))
    }
}

export default connect(null, mapDispatchToProps)(Confession)
