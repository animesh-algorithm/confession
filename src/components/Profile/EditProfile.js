import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Row, Col, Card, Image } from "react-bootstrap";
import { useState } from "react";
import firebase from "../../config/fbConfig";
import { updateProfile } from "../../redux/actions/users";

const EditProfile = ({ auth, profile, updateProfile }) => {
  const [userProfile, setUserProfile] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    let file = userProfile.avatar;
    updateProfile(auth.uid, file);
  };

  return (
    <div className="container text-center">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Image
          id="profile-avatar"
          src={
            profile?.avatar
              ? profile?.avatar
              : "https://firebasestorage.googleapis.com/v0/b/confessions-ef73b.appspot.com/o/avatars%2Favatar_default.png?alt=media&token=2ea9f8bf-ab92-4e71-b59e-af4875842be3"
          }
          width="100"
          height="100"
          roundedCircle
        />
        <div className="text-center">
          <input
            id="avatar"
            type="file"
            placeholder="Edit Avatar"
            className="d-none"
            onChange={(e) =>
              setUserProfile({ ...userProfile, avatar: e.target.files[0] })
            }
          />
          <label htmlFor="avatar" className="cursor-pointer">
            <Card.Link className="text-white">
              Edit Avatar <i className="fas fa-edit"></i>
            </Card.Link>
          </label>
        </div>
        <button className="w-25 btn btn-block btn-secondary btn-sm">
          Make Changes
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const profiles = state.firestore.data.profile;
  const profile = profiles ? profiles[state.firebase.auth.uid] : null;
  return {
    auth: state.firebase.auth,
    profile: profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (id, file) => dispatch(updateProfile(id, file)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [{ collection: "profile", doc: props.auth.uid }])
)(EditProfile);
