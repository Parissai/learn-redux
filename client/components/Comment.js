import React, { Component } from 'react';
import { addComment } from '../actions/actionCreators';

class Comment extends Component {
  renderComment(comment, i) {
    // console.log('this', this.props)
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}
          >
            &times;
          </button>
        </p>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();

    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    const { postId } = this.props.params;

    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  render() {
    const { postComments } = this.props;

    return (
      <div className="comments">
        {postComments.map(this.renderComment.bind(this))}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}


export default Comment;
