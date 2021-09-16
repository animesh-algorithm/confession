import { useEffect, useState } from "react";
import { ChatEngine } from "react-chat-engine";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import axios from "axios";
import { useHistory } from "react-router";

const Chat = ({ auth, profile }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!auth && !profile) return;
    axios
      .get("https://api.chatengine.io/users/me/", {
        headers: {
          "project-id": process.env.REACT_APP_CHAT_ENGINE_PROJECTID,
          "user-name": profile?.username,
          "user-secret": auth?.uid,
        },
      })
      .then(() => setLoading(false));
  }, [auth, profile, history]);
  if (!auth.uid) history.push("/explore");
  if (!auth && !profile && loading) return <div />;
  return (
    <div id="chat-app" style={{ fontFamily: "Avenir" }}>
      {profile ? (
        <ChatEngine
          className="bg-dark"
          height="85vh"
          projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECTID}
          userName={profile?.username}
          userSecret={auth?.uid}
        />
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Chat);
