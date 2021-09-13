import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Row, Col, Card, Image } from "react-bootstrap";
import { useState } from "react";
import { updateProfile } from "../../redux/actions/users";
import { useHistory } from "react-router";
const EditProfile = ({ auth, profile, updateProfile }) => {
  const history = useHistory();
  const [userProfile, setUserProfile] = useState({
    username: profile.username,
    fname: profile.fname,
    lname: profile.lname,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let avatar = userProfile.avatar ? userProfile.avatar : null;
    updateProfile(auth.uid, avatar, userProfile);
    history.push(`/${profile.username}`);
  };

  return (
    <div className="text-center row justify-content-center align-items-center">
      <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6">
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
            <br />
          </div>
          <div className="form-group">
            <div className="">
              <input
                type="text"
                placeholder="Edit username"
                className="form-control"
                value={userProfile.username}
                onChange={(e) =>
                  setUserProfile({ ...userProfile, username: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  value={userProfile.fname}
                  onChange={(e) =>
                    setUserProfile({ ...userProfile, fname: e.target.value })
                  }
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                  value={userProfile.lname}
                  onChange={(e) =>
                    setUserProfile({ ...userProfile, lname: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="">
              <button className="btn btn-block btn-secondary btn-sm">
                Make Changes
              </button>
            </div>
          </div>
        </form>
      </div>
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
    updateProfile: (id, file, updatedProfile) =>
      dispatch(updateProfile(id, file, updatedProfile)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [{ collection: "profile", doc: props.auth.uid }])
)(EditProfile);
