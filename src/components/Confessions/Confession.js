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

const Confession = ({
  confession,
  followUser,
  followers,
  following,
  getConfession,
  auth,
  deleteConfession,
  edit,
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

  let profilePic = "https://avatars.githubusercontent.com/u/48760865?v=4";
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
  return {
    followers: state.firebase.profile.followers,
    following: state.firebase.profile.following,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (beneficiaryId) => dispatch(followUser(beneficiaryId)),
    getConfession: (id) => dispatch(getConfession(id)),
    deleteConfession: (id) => dispatch(deleteConfession(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confession);
