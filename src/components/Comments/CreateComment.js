import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  createConfession,
  updateConfession,
} from "../../redux/actions/confessions";
import { withRouter } from "react-router";
import { flushSync } from "react-dom";
import { createComment, editComment } from "../../redux/actions/comments";

class CreateComment extends Component {
  state = {
    content: "",
    confession: this.props.confession,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[1].innerHTML === "Comment")
      this.props.createComment(this.state);
    else this.props.editComment(this.props.editableComment?.id, this.state);
    this.props.setEditable(false);
    this.props.setEditableComment(null);
    this.reset();
  };
  reset = (e) => {
    this.setState({
      content: "",
    });
  };
  componentWillReceiveProps(props) {
    this.setState({
      content: props.editableComment ? props.editableComment?.content : "",
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <textarea
              required
              type="text"
              id="content"
              rows={5}
              cols={50}
              value={this.state.content}
              className="text-white border-white form-control"
              style={{ background: "black" }}
              placeholder={`Comment here${
                this.props.location.pathname === "/explore"
                  ? " Anonymously"
                  : ""
              }...`}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="border-white btn btn-secondary btn-block btn-sm"
            style={{ background: "black" }}
          >
            {this.props.editable ? "Edit Comment" : "Comment"}
          </button>
        </form>
        <hr />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    editComment: (id, comment) => dispatch(editComment(id, comment)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(CreateComment));
