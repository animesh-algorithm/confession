import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import { Image, Col, Row, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import ConfessionsGrid from "../Confessions/ConfessionsGrid";
import { useLocation } from "react-router";

import Followers from "./DialogBox/Followers/Followers";
import Followings from "./DialogBox/Followings/Followings";
import { useState } from "react";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";

const ProfileDetail = ({ profile, confessions, match, auth }) => {
  const [showPopUp, setshowPopUp] = useState(false);
  const [showFollowings, setShowFollowings] = useState(false);
  const location = useLocation();
  return (
    <div className="container">
      <Followers
        showPopUp={showPopUp}
        setshowPopUp={setshowPopUp}
        profile={profile}
      />
      <Followings
        showFollowings={showFollowings}
        setShowFollowings={setShowFollowings}
        profile={profile}
      />
      <Row>
        <Col xs={12} md={4} lg={4} xl={4}>
          <Image
            src={
              location.pathname !== "/anonymous"
                ? profile?.avatar
                  ? profile?.avatar
                  : "https://firebasestorage.googleapis.com/v0/b/confessions-ef73b.appspot.com/o/avatars%2Favatar_default.png?alt=media&token=2ea9f8bf-ab92-4e71-b59e-af4875842be3"
                : "https://firebasestorage.googleapis.com/v0/b/confessions-ef73b.appspot.com/o/avatars%2Favatar_anonymous.png?alt=media&token=2ea9f8bf-ab92-4e71-b59e-af4875842be3"
            }
            roundedCircle
            width="200px"
            height="200px"
          />
        </Col>
        <Col xs={12} md={6} lg={6} xl={6}>
          <Row className="mt-3">
            <Col>
              <span className="cursor-pointer lead">{profile?.username}</span>
              <br />
              <span className="mb-2 text-muted">{`${profile?.fname} ${profile?.lname}`}</span>
            </Col>
            <Col>
              <LinkContainer to="/profile/edit">
                <Card.Link className="float-right mt-3 mr-5 text-white">
                  {profile?.id === auth.uid ? (
                    <>
                      Edit Profile <i className="fas fa-edit"></i>
                    </>
                  ) : null}
                </Card.Link>
              </LinkContainer>
            </Col>
          </Row>
          <Row className="mt-2 mb-2" style={{ marginLeft: "-5px" }}>
            <FacebookShareButton
              url={`https://conphession.netlify.app/${profile?.username}`}
            >
              <i
                className="m-1 fab fa-facebook"
                style={{ fontSize: "30px" }}
              ></i>
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://conphession.netlify.app/${profile?.username}`}
            >
              <i
                className="m-1 fab fa-twitter"
                style={{ fontSize: "30px" }}
              ></i>
            </TwitterShareButton>
            <LinkedinShareButton
              url={`https://conphession.netlify.app/${profile?.username}`}
            >
              <i
                className="m-1 fab fa-linkedin"
                style={{ fontSize: "30px" }}
              ></i>
            </LinkedinShareButton>
            <RedditShareButton
              url={`https://conphession.netlify.app/${profile?.username}`}
            >
              <i className="m-1 fab fa-reddit" style={{ fontSize: "30px" }}></i>
            </RedditShareButton>
            <WhatsappShareButton
              url={`https://conphession.netlify.app/${profile?.username}`}
            >
              <i
                className="m-1 fab fa-whatsapp"
                style={{ fontSize: "30px" }}
              ></i>
            </WhatsappShareButton>
            <EmailShareButton
              url={`https://conphession.netlify.app/${profile?.username}`}
            >
              <i
                className="m-1 fas fa-envelope"
                style={{ fontSize: "30px" }}
              ></i>
            </EmailShareButton>
          </Row>
          {location.pathname !== "/anonymous" ? (
            <p className="lead">
              {`${confessions?.length | 0} Confessions`} &nbsp;&nbsp;·
              &nbsp;&nbsp;
              <span
                className="cursor-pointer"
                onClick={() => {
                  setshowPopUp(true);
                }}
              >{`${profile?.followers?.length | 0} Followers`}</span>
              &nbsp;&nbsp;· &nbsp;&nbsp;
              <span
                className="cursor-pointer"
                onClick={() => {
                  setShowFollowings(true);
                }}
              >
                {`${profile?.following?.length | 0} Following`}
              </span>
            </p>
          ) : (
            <>
              <p>This account follows no one. No one follows this account.</p>
            </>
          )}
        </Col>
        <Col xs={12} md={2} lg={2} xl={2}></Col>
      </Row>
      <br />
      <Row>
        <ConfessionsGrid confessions={confessions} />
      </Row>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  let profiles = state.firestore.data.profile;
  let confessions = state.firestore.data.confessions;
  let confessionIds = confessions && Object.keys(confessions);
  let profile = profiles ? profiles[state.firebase.auth.uid] : null;
  let profileIds = profiles && Object.keys(profiles);
  let username = props.match.params.username;
  confessions = confessions && Object.values(confessions);

  confessions = confessions?.map((confession, i) => {
    return { ...confession, id: confessionIds[i] };
  });

  if (username === profile?.username || props.location.pathname === "/you") {
    profile = { ...profile, id: state.firebase.auth.uid };
    confessions = confessions?.filter(
      (confession) => confession?.userId === state.firebase.auth.uid
    );
  } else if (username === "anonymous") {
    confessions = confessions?.filter(
      (confession) => confession.userId === "XBODMyuxsjQCw7LDM6ivYt0Atqq1"
    );
    profile = {
      username: "anonymous",
      fname: "no name",
      lname: "",
    };
  } else {
    profiles = profiles && Object.values(profiles);
    profiles = profiles?.map((profile, i) => {
      return { ...profile, id: profileIds[i] };
    });
    profile = profiles?.find((profile) => profile.username === username);
    confessions = confessions?.filter(
      (confession) => confession?.userId === profile?.id
    );
  }
  return {
    auth: state.firebase.auth,
    profile: profile,
    confessions: confessions,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    { collection: "profile", doc: props.auth.uid },
    {
      collection: "confessions",
      orderBy: ["createdAt", "desc"],
      startAfter: 0,
    },
  ])
)(ProfileDetail);
