import React from 'react'
import moment from 'moment'
import { Row, Col, Card, Container } from 'react-bootstrap'

const Comment = ({ comment, profile }) => {
    return (
        <div>
            <Row>
                <Col style={{maxWidth: '60px'}}>
                    <Card.Img src="https://avatars.githubusercontent.com/u/48760865?v=4" className='mr-2' style={{borderRadius: '50%', width: '50px', height: '50px'}} />
                </Col>
                <Col>
                    <Card.Text>
                        {profile?.username} · <span className="mb-2 text-muted">{`${moment(comment.createdAt.toDate()).endOf('day').fromNow()}`}</span>
                        {/* {editAndDeleteButton()} */}
                        <br />
                        <span className="mb-2 text-muted">{`${profile?.fname} ${profile?.lname}`}</span>
                    </Card.Text>
                </Col>
            </Row>
            <Container>
                {comment.content}
            </Container>
        </div>
    )
}

export default Comment
