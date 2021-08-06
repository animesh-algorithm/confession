import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Card, Row, Container } from 'react-bootstrap'
import CreateComment from '../Comments/CreateComment'
import Comment from './Comment'


const CommentSection = ({ comments, confession }) => {
    const showComments = () => (
        comments?.map((comment) => (
            <div key={comment.comment.id}>
                <Comment comment={comment.comment} profile={comment.profile} />
                <hr />
            </div>
        ))
    )
    return (
        <Card bg='dark' style={{border: '1px solid white'}} className='p-3'>
            <div className='position-sticky'>
                <Card.Title>{`${confession.comments?.length | 0}`} Comment{confession.comments?.length === 1 ? '' : 's'}</Card.Title>
                <div>
                    <CreateComment confession={confession} />
                </div>
            </div>
            {showComments()}
        </Card>
    )
}

const mapStateToProps = (state, props) => {
    let comments = state.firestore.ordered.comments
    comments = comments?.filter(comment => comment.confessionId === props.confession.id)
    comments = comments?.map(comment => {
        return {
            comment: comment,
            profile: state.firestore.data.profile ? state.firestore.data.profile[comment.userId] : null
        }
    })
    return {
        comments: comments
    }
}

export default compose(
    connect(mapStateToProps), firestoreConnect(props => [
        { collection: 'comments', orderBy: ['createdAt', 'desc'], limit: 20 },
        { collection: 'profile' }
    ])
)(CommentSection)
