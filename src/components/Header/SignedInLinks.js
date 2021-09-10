import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { signOut } from "../../redux/actions/auth";

const SignedInLinks = ({ signOut, avatar }) => {
  return (
    <Navbar id="basic-navbar-nav" className="right">
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>
            <i className="fas fa-home"></i>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/messenger">
          <Nav.Link>
            <i className="fas fa-comments"></i>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/likes">
          <Nav.Link>
            <i className="fas fa-heart"></i>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/explore">
          <Nav.Link>
            <i className="fas fa-compass"></i>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/explore">
          <Nav.Link onClick={signOut}>
            <i className="fas fa-sign-out-alt"></i>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/you">
          <Nav.Link>
            <img
              src={avatar}
              style={{
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                marginTop: "-7px",
              }}
            />
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    avatar: state.firebase.profile.avatar
      ? state.firebase.profile.avatar
      : "https://firebasestorage.googleapis.com/v0/b/confessions-ef73b.appspot.com/o/avatars%2Favatar_default.png?alt=media&token=2ea9f8bf-ab92-4e71-b59e-af4875842be3",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
