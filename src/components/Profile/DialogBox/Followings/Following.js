import { LinkContainer } from "react-router-bootstrap";
import { Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { followUser, unfollowUser } from "../../../../redux/actions/follow";

const Following = ({
  following,
  setShowFollowings,
  userFollowings,
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
      unfollowUser(following.id);
    } else {
      followUser(following.id);
    }
  };
  return (
    <Row>
      <Col md={9}>
        <LinkContainer
          to={`/${following.profile.username}`}
          onClick={() => setShowFollowings((prev) => !prev)}
        >
          <Row className="ml-2 cursor-pointer">
            <Card.Img
              src={
                following.profile.avatar
                  ? following.profile.avatar
                  : "https://firebasestorage.googleapis.com/v0/b/confessions-ef73b.appspot.com/o/avatars%2Favatar_default.png?alt=media&token=15370239-b13b-4d6a-baf2-a421cfeac3a2"
              }
              className="mr-2"
              style={profilePicStyles}
            />
            <Card.Text>
              {following.profile.username}
              <br />
              <span className="mb-2 text-muted">
                {following.profile.fname + " " + following.profile.lname}
              </span>
            </Card.Text>
          </Row>
        </LinkContainer>
      </Col>
      <Col md={3}>
        <Card.Link onClick={handleFollowAction}>
          {userFollowings?.includes(following.id) ? "Unfollow" : "Follow"}
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

export default connect(null, mapDispatchToProps)(Following);
