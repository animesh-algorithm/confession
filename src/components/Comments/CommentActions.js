import { Container, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { dislikeComment, likeComment } from "../../redux/actions/comments";

const CommentActions = ({ likeComment, dislikeComment, comment, auth }) => {
  const handleAuthAction = (e) => {
    if (auth.uid) {
      //   if (e.target.innerHTML === "Follow") followUser(comment.userId);
      if (
        e.target.className === "fas fa-heart" ||
        e.target.className === "far fa-heart"
      ) {
        if (!comment.likes?.includes(auth.uid)) {
          likeComment(comment.id);
        } else {
          dislikeComment(comment.id);
        }
      }
    } else {
      alert("Login first!");
    }
  };
  return (
    <Container>
      <Card.Link className="text-white" onClick={handleAuthAction}>
        <i
          className={`${
            !comment.likes?.includes(auth.uid) ? "far" : "fas"
          } fa-heart`}
        >
          {" "}
          {comment.likes?.length | 0}
        </i>
      </Card.Link>
      {"  "}
      <Card.Link
        className="text-white"
        onClick={() => dislikeComment(comment.id)}
      >
        <i className={`far fa-comment`}> {0} </i>
      </Card.Link>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    likeComment: (commentId) => dispatch(likeComment(commentId)),
    dislikeComment: (commentId) => dispatch(dislikeComment(commentId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentActions);
