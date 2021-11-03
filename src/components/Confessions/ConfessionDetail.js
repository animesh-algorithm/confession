import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Row, Col, Container } from "react-bootstrap";

import Confession from "./Confession";
import CreateConfession from "./CreateConfession";

import CommentSection from "../Comments/CommentSection";
import ConfessionGrid from "../Confessions/ConfessionsGrid";

const ConfessionDetail = ({ confession, auth, confessions }) => {
  const [editableConfession, setEditableConfession] = useState(null);
  const edit = (confession) => {
    setEditableConfession(confession);
  };
  return (
    <Container fluid>
      <Row className="overflow-hidden">
        <Col lg={8} md={8} sm={12}>
          <Confession confession={confession} edit={edit} />
          <br />
          <CommentSection confession={confession} />
        </Col>
        <Col lg={4} md={4} sm={12}>
          {confession.userId === auth.uid ? (
            <CreateConfession
              editableConfession={editableConfession}
              edit={edit}
            />
          ) : (
            <ConfessionGrid confessions={confessions} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  let confessions = state.firestore.data.confessions;
  let confession = confessions ? confessions[id] : null;
  confession = { ...confession, id: id };
  return {
    confession: confession,
    auth: state.firebase.auth,
    confessions: state.firestore.ordered.confessions,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    { collection: "confessions", doc: props.match.params.id },
    { collection: "confessions" },
  ])
)(ConfessionDetail);
