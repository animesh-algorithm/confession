import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

import { Row, Col, Container, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import Profile from './Profile'
import Suggestion from '../Suggestions/Suggestion'
import SuggestionsHeader from '../Suggestions/SuggestionsHeader'

const ProfileSection = ({ profile }) => {
    const [suggestions, setSuggestions] = useState([
        {
            username: 'animesharm4',
            fname: 'Animesh',
            lname: 'Sharma'
        },
        {
            username: 'animesharm4',
            fname: 'Animesh',
            lname: 'Sharma'
        },
        {
            username: 'animesharm4',
            fname: 'Animesh',
            lname: 'Sharma'
        }
    ])

    const showSuggestions = () => (
        suggestions.map((suggestion, i) => (
            <Suggestion suggestion={suggestion} key={i} />
        ))
    )

    return (
        <div>
            <Card className='bg-dark'>
                <Profile profile={profile} />
                <SuggestionsHeader />
                <Col>
                    {showSuggestions()}
                </Col>
            </Card>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(ProfileSection)
