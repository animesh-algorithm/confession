import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const SignedInLinks = () => {
    return (
        <Navbar id="basic-navbar-nav" className='right'>
            <Nav className="mr-auto">
                <LinkContainer to='/'>
                    <Nav.Link><i className="fas fa-home"></i></Nav.Link>
                </LinkContainer>
                <LinkContainer to='/messenger'>
                    <Nav.Link><i className="fas fa-comments"></i></Nav.Link>
                </LinkContainer>
                <LinkContainer to='/likes'>
                    <Nav.Link><i className="fas fa-heart"></i></Nav.Link>
                </LinkContainer>
                <LinkContainer to='/explore'>
                    <Nav.Link><i className="fas fa-compass"></i></Nav.Link>
                </LinkContainer>
                <LinkContainer to='/explore'>
                    <Nav.Link><i className="fas fa-sign-out-alt"></i></Nav.Link>
                </LinkContainer>  
                <LinkContainer to='/account'>
                    <Nav.Link>
                        <img src="https://avatars.githubusercontent.com/u/48760865?v=4" style={{borderRadius: '50%', width: '40px', height: '40px', marginTop: '-7px'}}/>
                    </Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    )
}

export default SignedInLinks
