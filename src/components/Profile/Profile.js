import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Profile = ({ profile }) => {
  return (
    <Row className="m-3">
      <Card.Img
        src={
          profile?.avatar
            ? profile?.avatar
            : "https://firebasestorage.googleapis.com/v0/b/confessions-ef73b.appspot.com/o/avatars%2Favatar_default.png?alt=media&token=2ea9f8bf-ab92-4e71-b59e-af4875842be3"
        }
        className="mr-2"
        style={{ borderRadius: "50%", width: "50px", height: "50px" }}
      />
      <LinkContainer to="/you">
        <Card.Link className="text-white">
          <span className="cursor-pointer">{profile?.username}</span>
          <br />
          <span className="mb-2 text-muted">{`${profile?.fname} ${profile?.lname}`}</span>
        </Card.Link>
      </LinkContainer>

      <Col>
        <LinkContainer to="/profile/edit">
          <Card.Link className="float-right text-white">
            <i className="fas fa-edit"></i>
          </Card.Link>
        </LinkContainer>
      </Col>
    </Row>
  );
};

export default Profile;
