import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Card, Row, Container } from "react-bootstrap";
import CreateComment from "../Comments/CreateComment";
import Comment from "./Comment";

const CommentSection = ({ comments, confession }) => {
  const [editable, setEditable] = useState(false);
  const [editableComment, setEditableComment] = useState(null);
  const edit = (comment) => {
    setEditableComment(comment);
  };
  const showComments = () =>
    comments?.map((comment) => (
      <div key={comment.comment.id}>
        <Comment
          comment={comment.comment}
          profile={comment.profile}
          setEditable={setEditable}
          editable={editable}
          edit={edit}
        />
        <hr />
      </div>
    ));
  return (
    <Card
      style={{ border: "1px solid white", background: "black" }}
      className="p-3"
    >
      <div>
        <Card.Title>
          {`${confession.comments?.length | 0}`} Comment
          {confession.comments?.length === 1 ? "" : "s"}
        </Card.Title>
        <div>
          <CreateComment
            confession={confession}
            editable={editable}
            editableComment={editableComment}
            setEditable={setEditable}
            setEditableComment={setEditableComment}
          />
        </div>
      </div>
      {showComments()}
    </Card>
  );
};

const mapStateToProps = (state, props) => {
  let comments = state.firestore.ordered.comments;
  comments = comments?.filter(
    (comment) => comment.confessionId === props.confession.id
  );
  comments = comments?.map((comment) => {
    return {
      comment: comment,
      profile: state.firestore.data.profile
        ? state.firestore.data.profile[comment.userId]
        : null,
    };
  });
  return {
    comments: comments,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    { collection: "comments", orderBy: ["createdAt", "desc"], limit: 20 },
    { collection: "profile" },
  ])
)(CommentSection);
