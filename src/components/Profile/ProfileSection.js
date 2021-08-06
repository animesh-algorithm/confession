import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

import { Row, Col, Container, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import Profile from './Profile'
import Suggestion from '../Suggestions/Suggestion'
import SuggestionsHeader from '../Suggestions/SuggestionsHeader'

const ProfileSection = ({ profile, users }) => {
    const showSuggestions = () => {
        return (users?.map((suggestion, i) => (
            <Suggestion suggestion={suggestion} key={suggestion.id} />
        ))
    )}

    return (
            <Card className='position-fixed border-white' style={{width: '450px', background: 'black'}}>
                <Profile profile={profile} />
                <SuggestionsHeader />
                <Col>
                    <div style={{overflowY: 'scroll', height: `350px` }}>
                        {showSuggestions()}
                    </div>
                </Col>
            </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
        users: state.firestore.ordered.profile
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getUsers: () => dispatch(getUsers())
//     }
// }

export default compose(
    connect(mapStateToProps), firestoreConnect([
        {collection: 'profile'}
    ])
)(ProfileSection)