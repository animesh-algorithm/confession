import React from "react";
import moment from "moment";

import { useLocation } from "react-router";
import { Card, Row, Col, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";

import { followUser } from "../../redux/actions/follow";
import {
  deleteConfession,
  getConfession,
} from "../../redux/actions/confessions";

import ConfessionsActions from "./ConfessionsActions";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";

const Confession = ({
  confession,
  followUser,
  followers,
  following,
  getConfession,
  auth,
  deleteConfession,
  edit,
  profile,
}) => {
  const location = useLocation();

  let userFullName = `${confession.userFname} ${confession.userLname}`;
  let content =
    location.pathname !== `/confession/${confession.id}`
      ? confession.content?.substring(0, 100)
      : confession.content;
  let viewsCount = confession.views | 0;
  let timestamp = moment(confession.createdAt?.toDate()).endOf("day").fromNow();
  if (timestamp.startsWith("in")) {
    timestamp = moment(confession.createdAt?.toDate())
      .startOf("minutes")
      .fromNow();
  }

  let profilePic = confession.userAvatar
    ? confession.userAvatar
    : "https://firebasestorage.googleapis.com/v0/b/confessions-ef73b.appspot.com/o/avatars%2Favatar_default.png?alt=media&token=15370239-b13b-4d6a-baf2-a421cfeac3a2";
  let profilePicStyles = { borderRadius: "50%", width: "50px", height: "50px" };
  let readMore =
    location.pathname === `/confession/${confession.id}` ? "" : " Read More...";

  let cardStyle = { background: "black" };

  const editAndDeleteButton = () => (
    <span className="m-3">
      {auth.uid === confession.userId ? (
        <>
          <LinkContainer
            to="#create-confession"
            onClick={() => edit(confession)}
          >
            <Card.Link className="text-white">
              <i className="fas fa-edit"></i>
            </Card.Link>
          </LinkContainer>
          <LinkContainer
            to={location.pathname}
            onClick={() => deleteConfession(confession.id)}
          >
            <Card.Link className="text-white">
              <i className="fas fa-trash-alt"> </i>
            </Card.Link>
          </LinkContainer>
        </>
      ) : null}
    </span>
  );

  return (
    <Card className="overflow-hidden border-white" style={cardStyle}>
      <LinkContainer to={`/${confession.username}`}>
        <Row className="ml-2 cursor-pointer">
          <Card.Img
            src={profilePic}
            className="mr-2"
            style={profilePicStyles}
          />
          <Card.Text>
            {confession.username}
            {editAndDeleteButton()}
            <br />
            <span className="mb-2 text-muted">{userFullName}</span>
          </Card.Text>
        </Row>
      </LinkContainer>
      <Row className="ml-2">
        <span className="text-muted">
          {viewsCount} views · {timestamp}
        </span>
      </Row>
      <Container fluid>
        {content}
        <LinkContainer
          to={`/confession/${confession.id}`}
          onClick={() => getConfession(confession.id)}
        >
          <Card.Link className="text-secondary">{readMore}</Card.Link>
        </LinkContainer>
      </Container>
      {location.pathname === `/confession/${confession.id}` ? (
        <Row className="ml-2">
          <FacebookShareButton
            url={`https://conphession.netlify.app/confession/${confession.id}`}
            quote={content}
            hashtag="#confession"
          >
            <i className="m-1 fab fa-facebook" style={{ fontSize: "30px" }}></i>
          </FacebookShareButton>
          <TwitterShareButton
            url={`https://conphession.netlify.app/confession/${confession.id}`}
            quote={content}
            hashtag="#confession"
          >
            <i className="m-1 fab fa-twitter" style={{ fontSize: "30px" }}></i>
          </TwitterShareButton>
          <LinkedinShareButton
            url={`https://conphession.netlify.app/confession/${confession.id}`}
            quote={content}
            hashtag="#confession"
          >
            <i className="m-1 fab fa-linkedin" style={{ fontSize: "30px" }}></i>
          </LinkedinShareButton>
          <RedditShareButton
            url={`https://conphession.netlify.app/confession/${confession.id}`}
            quote={content}
            hashtag="#confession"
          >
            <i className="m-1 fab fa-reddit" style={{ fontSize: "30px" }}></i>
          </RedditShareButton>
          <WhatsappShareButton
            url={`https://conphession.netlify.app/confession/${confession.id}`}
            quote={content}
            hashtag="#confession"
          >
            <i className="m-1 fab fa-whatsapp" style={{ fontSize: "30px" }}></i>
          </WhatsappShareButton>
          <EmailShareButton
            url={`https://conphession.netlify.app/confession/${confession.id}`}
            quote={content}
            hashtag="#confession"
          >
            <i className="m-1 fas fa-envelope" style={{ fontSize: "30px" }}></i>
          </EmailShareButton>
        </Row>
      ) : null}
      <Card className="pt-2 pb-2 pl-3 pr-3" style={cardStyle}>
        <ConfessionsActions
          following={following}
          confession={confession}
          followUser={followUser}
        />
      </Card>
    </Card>
  );
};

const mapStateToProps = (state) => {
  const profiles = state.firestore.data.profile;
  const profile = profiles ? profiles[state.firebase.auth.uid] : null;
  return {
    followers: state.firebase.profile.followers,
    following: state.firebase.profile.following,
    auth: state.firebase.auth,
    profile: profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (beneficiaryId) => dispatch(followUser(beneficiaryId)),
    getConfession: (id) => dispatch(getConfession(id)),
    deleteConfession: (id) => dispatch(deleteConfession(id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [{ collection: "profile", doc: props.auth.uid }])
)(Confession);
