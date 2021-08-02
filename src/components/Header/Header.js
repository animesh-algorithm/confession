import { useState } from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Header = ({ auth }) => {
    const [currUser, SetCurrUser] = useState([{
        profilePic: 'https://avatars.githubusercontent.com/u/48760865?v=4'
    }])

    const showNavLinks = () => auth.uid ? <SignedInLinks /> : <SignedOutLinks />

    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Confession</Navbar.Brand>
                    </LinkContainer>
                    {showNavLinks()}
                </Container>
            </Navbar>
        </header>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Header)
