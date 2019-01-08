import React, { Component } from 'react';

class Comment extends Component {
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  }

  render() {
    const { comments } = this.props

    return (
      <div className="comments">
        {comments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form">
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}


export default Comment;
