import React from 'react'
import { Card, Row, Col, Container} from 'react-bootstrap'

const Confession = ({ confession }) => {
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
            <Container>
                {confession.content.substring(0, 100)}
            </Container>
        </Card>
    )
}

export default Confession
