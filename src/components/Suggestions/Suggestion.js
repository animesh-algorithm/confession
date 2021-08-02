import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Suggestion = ({ suggestion }) => {
    return (
        <Row className='m-auto'>
            <Card.Img src="https://avatars.githubusercontent.com/u/48760865?v=4" className='mr-2' style={{borderRadius: '50%', width: '50px', height: '50px'}} />
            <Card.Text>
                {suggestion.username}
                <br />
                <span className="mb-2 text-muted">{`${suggestion.fname} ${suggestion.lname}`}</span>
            </Card.Text>
            <Col>
                <Card.Text className='float-right'>Follow</Card.Text>
            </Col>
        </Row>
    )
}

export default Suggestion
