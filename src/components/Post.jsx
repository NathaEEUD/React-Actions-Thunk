import React, { Component } from "react";
import { comment } from "postcss-selector-parser";

class Post extends Component {
  render() {
    const { content, imageUrl, comments } = this.props;

    return (
      <div>
        <div className="card mb-5">
          <div className="card-body card-body-border">
            <div className="card-text">{content}</div>
          </div>

          {imageUrl && (
            <div className="card-body card-body-border">
              <img src={imageUrl} alt="Post" className="card-img-top" height="250" />
            </div>
          )}

          {Boolean(comments.length) && (
            <div className="card-body p-2">
              {comments.map(comment => (
                <div
                  key={comment.id}
                  className="bg-light alert alert-secondary p-2 mb-1"
                  role="alert"
                >
                  <b>{comment.author}</b>
                  <span>{comment.content}</span>
                </div>
              ))}
            </div>
          )}

          <div className="card-footer p-1">
            <input
              ref={ref => {
                this.commentTextRef = ref;
              }}
              type="text"
              placeholder="Escribe un comentario..."
              className="form-control nooutline"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
