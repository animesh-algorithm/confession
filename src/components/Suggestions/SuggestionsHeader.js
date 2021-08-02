import React from 'react'
import { Row, Col } from 'react-bootstrap'

const SuggestionsHeader = () => {
    return (
        <Row>
            <Col className='float-left m-2'>
                <p className='lead'>Suggestions</p>
            </Col>
            <Col>
                <p className='float-right m-2 lead'>See all</p>
            </Col>
        </Row>
    )
}

export default SuggestionsHeader
