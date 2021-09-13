import React from "react";
import moment from "moment";
import { Row, Col, Card, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { deleteComment } from "../../redux/actions/comments";
import CommentActions from "./CommentActions";
import { useHistory } from "react-router";

const Comment = ({
  comment,
  profile,
  auth,
  deleteComment,
  setEditable,
  editable,
  edit,
}) => {
  const history = useHistory();
  let userProfilePic = profile?.avatar
    ? profile?.avatar
    : "https://firebasestorage.googleapis.com/v0/b/confessions-ef73b.appspot.com/o/avatars%2Favatar_default.png?alt=media&token=2ea9f8bf-ab92-4e71-b59e-af4875842be3";
  let profilePicStyles = { borderRadius: "50%", width: "50px", height: "50px" };
  let username = profile?.username;
  let userFullName = `${profile?.fname} ${profile?.lname}`;
  let timestamp = moment(comment.createdAt.toDate()).endOf("day").fromNow();
  if (timestamp.startsWith("in")) {
    timestamp = moment(comment.createdAt.toDate()).startOf("minutes").fromNow();
  }
  const editAndDeleteButton = () => (
    <span className="m-3">
      {auth.uid === comment.userId ? (
        <>
          <LinkContainer
            to="#create-comment"
            // onClick={() => edit(confession)}
          >
            <Card.Link
              className="text-white"
              onClick={() => {
                setEditable(true);
                edit(comment);
              }}
            >
              <i className="fas fa-edit"></i>
            </Card.Link>
          </LinkContainer>
          <LinkContainer to="#" onClick={() => deleteComment(comment.id)}>
            <Card.Link className="text-white">
              <i className="fas fa-trash-alt"> </i>
            </Card.Link>
          </LinkContainer>
        </>
      ) : null}
    </span>
  );
  return (
    <div>
      <Row>
        <Col
          style={{ maxWidth: "60px", cursor: "pointer" }}
          onClick={() => history.push(`/${username}`)}
        >
          <Card.Img
            src={userProfilePic}
            className="mr-2"
            style={profilePicStyles}
          />
        </Col>
        <Col>
          <Card.Text>
            {username} · <span className="mb-2 text-muted">{timestamp}</span>
            <br />
            <span className="mb-2 text-muted">{userFullName}</span>
          </Card.Text>
        </Col>
        <Col>{editAndDeleteButton()}</Col>
      </Row>
      <Row>
        <Container>{comment.content}</Container>
      </Row>
      <Row>
        <CommentActions comment={comment} />
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (id) => dispatch(deleteComment(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
