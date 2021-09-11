import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Follower from "./Follower";

const Followers = ({ showPopUp, setshowPopUp, followers, following }) => {
  return (
    <Modal
      show={showPopUp}
      onHide={() => {
        setshowPopUp((prev) => !prev);
      }}
    >
      <Modal.Header className="justify-content-center lead">
        Followers
      </Modal.Header>
      <Modal.Body>
        {followers?.map((follower) => (
          <Follower
            key={follower.id}
            follower={follower}
            following={following}
            setshowPopUp={setshowPopUp}
          />
        ))}
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state, props) => {
  const user = props.profile;
  const profiles = state.firestore.data.profile;
  const followers = user?.followers?.map((userId) => {
    return {
      id: userId,
      profile: profiles ? profiles[userId] : null,
    };
  });
  return {
    followers: followers,
    following: state.firebase.profile.following,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [
    {
      collection: "profile",
    },
  ])
)(Followers);
