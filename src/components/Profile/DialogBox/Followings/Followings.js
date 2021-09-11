import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Following from "./Following";

const Followings = ({
  showFollowings,
  setShowFollowings,
  profile,
  followings,
  userFollowings,
}) => {
  return (
    <Modal
      show={showFollowings}
      onHide={() => {
        setShowFollowings((prev) => !prev);
      }}
    >
      <Modal.Header className="justify-content-center lead">
        Followings
      </Modal.Header>
      <Modal.Body>
        {followings?.map((following) => (
          <Following
            key={following.id}
            following={following}
            setShowFollowings={setShowFollowings}
            userFollowings={userFollowings}
          />
        ))}
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state, props) => {
  const user = props.profile;
  const profiles = state.firestore.data.profile;
  const followings = user?.following?.map((userId) => {
    return {
      id: userId,
      profile: profiles ? profiles[userId] : null,
    };
  });
  return {
    followings: followings,
    userFollowings: state.firebase.profile.following,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [
    {
      collection: "profile",
    },
  ])
)(Followings);
