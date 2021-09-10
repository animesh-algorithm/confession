import React from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Card, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { followUser, unfollowUser } from "../../redux/actions/follow";

const Suggestion = ({
  suggestion,
  following,
  followers,
  followUser,
  auth,
  unfollowUser,
  defaultAvatar,
}) => {
  const handleFollow = () => {
    if (auth.uid) {
      followUser(suggestion.id);
    } else {
      alert("Login first!");
    }
  };
  return (
    <Row className="m-auto">
      <Card.Img
        src={suggestion?.avatar ? suggestion?.avatar : defaultAvatar}
        className="mr-2"
        style={{ borderRadius: "50%", width: "50px", height: "50px" }}
      />
      <LinkContainer to={`${suggestion.username}`}>
        <Card.Link className="text-white">
          {suggestion.username}
          <br />
          <span className="mb-2 text-muted">{`${suggestion.fname} ${suggestion.lname}`}</span>
        </Card.Link>
      </LinkContainer>
      <Col>
        <LinkContainer to="#">
          {suggestion.id === "XBODMyuxsjQCw7LDM6ivYt0Atqq1" ? (
            <Card.Link className="float-right text-white"></Card.Link>
          ) : following?.includes(suggestion.id) ? (
            <Card.Link
              className="float-right text-white"
              onClick={() => unfollowUser(suggestion.id)}
            >
              Unfollow
            </Card.Link>
          ) : (
            <Card.Link
              className="float-right text-white"
              onClick={handleFollow}
            >
              Follow
            </Card.Link>
          )}
        </LinkContainer>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    followers: state.firebase.profile.followers,
    following: state.firebase.profile.following,
    defaultAvatar:
      "https://firebasestorage.googleapis.com/v0/b/confessions-ef73b.appspot.com/o/avatars%2Favatar_default.png?alt=media&token=2ea9f8bf-ab92-4e71-b59e-af4875842be3",
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (beneficiaryId) => dispatch(followUser(beneficiaryId)),
    unfollowUser: (beneficiaryId) => dispatch(unfollowUser(beneficiaryId)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "profile" }])
)(Suggestion);
