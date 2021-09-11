import { LinkContainer } from "react-router-bootstrap";
import { Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { followUser, unfollowUser } from "../../../../redux/actions/follow";

const Follower = ({
  follower,
  following,
  setshowPopUp,
  followUser,
  unfollowUser,
}) => {
  let profilePicStyles = {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
  };

  const handleFollowAction = (e) => {
    if (e.target.innerHTML === "Unfollow") {
      unfollowUser(follower.id);
    } else {
      followUser(follower.id);
    }
  };

  return (
    <Row>
      <Col md={9}>
        <LinkContainer
          to={`/${follower.profile.username}`}
          onClick={() => setshowPopUp((prev) => !prev)}
        >
          <Row className="ml-2 cursor-pointer">
            <Card.Img
              src={
                follower.profile.avatar
                  ? follower.profile.avatar
                  : "https://firebasestorage.googleapis.com/v0/b/confessions-ef73b.appspot.com/o/avatars%2Favatar_default.png?alt=media&token=15370239-b13b-4d6a-baf2-a421cfeac3a2"
              }
              className="mr-2"
              style={profilePicStyles}
            />
            <Card.Text>
              {follower.profile.username}
              <br />
              <span className="mb-2 text-muted">
                {follower.profile.fname + " " + follower.profile.lname}
              </span>
            </Card.Text>
          </Row>
        </LinkContainer>
      </Col>
      <Col md={3}>
        <Card.Link onClick={handleFollowAction}>
          {following.includes(follower.id) ? "Unfollow" : "Follow"}
        </Card.Link>
      </Col>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (id) => dispatch(followUser(id)),
    unfollowUser: (id) => dispatch(unfollowUser(id)),
  };
};

export default connect(null, mapDispatchToProps)(Follower);
