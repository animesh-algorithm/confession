import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useLocation } from "react-router";
import { firestoreConnect } from "react-redux-firebase";
import { Col, Card, Row } from "react-bootstrap";

import Masonry from "react-masonry-css";

import Confession from "./Confession";
import CreateConfession from "./CreateConfession";

const ConfessionsGrid = ({ confessions, auth, profile }) => {
  const [editableConfession, setEditableConfession] = useState(null);
  const location = useLocation();
  if (location.pathname === "/likes") {
    confessions = confessions.filter((confession) => {
      if (confession.likes?.includes(auth.uid)) {
        return confession;
      }
    });
  }

  const edit = (confession) => {
    setEditableConfession(confession);
  };

  const showConfessions = () =>
    confessions &&
    confessions.map((confession, i) => (
      <div key={confession.id}>
        <Confession confession={confession} edit={edit} />
      </div>
    ));

  const breakpoints = {
    default:
      location.pathname === "/explore"
        ? 4
        : location.pathname === "/likes"
        ? 5
        : confessions.length === 1
        ? 1
        : 3,
    1100: 2,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {location.pathname === `/${profile?.username}` ||
      location.pathname === "/" ||
      location.pathname === "/you" ? (
        <CreateConfession editableConfession={editableConfession} edit={edit} />
      ) : null}
      {showConfessions()}
    </Masonry>
  );
};

const mapStateToProps = (state, props) => {
  const auth = state.firebase.auth;
  const profiles = state.firestore.data.profile;
  const profile = profiles ? profiles[auth.uid] : null;
  return {
    confessions: props.confessions
      ? props.confessions
      : state.firestore.ordered.confessions,
    auth: auth,
    profile: profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "confessions",
      limit: 100,
      orderBy: ["createdAt", "desc"],
      startAfter: 0,
    },
    {
      collection: "profile",
    },
  ])
)(ConfessionsGrid);
