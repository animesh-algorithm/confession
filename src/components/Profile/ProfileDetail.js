import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import { Image, Col, Row, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import ConfessionsGrid from "../Confessions/ConfessionsGrid";

const ProfileDetail = ({ profile, confessions }) => {
  return (
    <div className="container">
      <Row>
        <Col xs={12} md={4} lg={4} xl={4}>
          <Image
            src="https://avatars.githubusercontent.com/u/68760865?v=6"
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
                  Edit Profile <i className="fas fa-edit"></i>
                </Card.Link>
              </LinkContainer>
            </Col>
          </Row>
          <br />
          <br />
          <p className="lead">
            {`${confessions?.length | 0} Confessions`} &nbsp;&nbsp;·
            &nbsp;&nbsp;
            {`${profile?.followers?.length | 0} Followers`} &nbsp;&nbsp;·
            &nbsp;&nbsp;{`${profile?.following?.length | 0} Following`}
          </p>
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

  if (username === profile?.username || props.location.pathname === "/you") {
    profile = { ...profile, id: state.firebase.auth.uid };
    confessions = confessions && Object.values(confessions);
    confessions = confessions?.map((confession, i) => {
      return { ...confession, id: confessionIds[i] };
    });
    confessions = confessions?.filter(
      (confession) => confession?.userId === state.firebase.auth.uid
    );
  } else {
    profiles = profiles && Object.values(profiles);
    profiles = profiles?.map((profile, i) => {
      return { ...profile, id: profileIds[i] };
    });
    profile = profiles?.find((profile) => profile.username === username);
    confessions = confessions && Object.values(confessions);
    confessions = confessions?.map((confession, i) => {
      return { ...confession, id: confessionIds[i] };
    });
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
    {
      collection: "profiles",
    },
  ])
)(ProfileDetail);
