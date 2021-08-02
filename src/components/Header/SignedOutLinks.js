import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const SignedOutLinks = () => {
    return (
        <Navbar id="basic-navbar-nav" className='right'>
            <Nav className="mr-auto">
                <LinkContainer to='/'>
                    <Nav.Link><i className="fas fa-home"></i></Nav.Link>
                </LinkContainer>
                <LinkContainer to='/explore'>
                    <Nav.Link><i className="fas fa-compass"></i></Nav.Link>
                </LinkContainer>
                <LinkContainer to='/signin'>
                    <Nav.Link><i className="fas fa-sign-in-alt"></i></Nav.Link>
                </LinkContainer>
                <LinkContainer to='/signup'>
                    <Nav.Link><i className="fas fa-user-plus"></i></Nav.Link>
                </LinkContainer>
                <LinkContainer to='/account'>
                    <Nav.Link>
                        <img src="https://static.thenounproject.com/png/302770-200.png" style={{borderRadius: '50%', width: '40px', height: '40px', marginTop: '-7px'}}/>
                    </Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    )
}

export default SignedOutLinks
