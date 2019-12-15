import React, { Component } from "react";
import { connect } from "react-redux";
import "../assets/styles/App.scss";
import Layout from "./Layout";
import PostBox from "./PostBox";
import Post from "./Post";
import {
  createComment as createCommentAction,
  getComments as getCommentsAction,
} from "../redux/comments/actions";
import { createPost as createPostAction, getPosts as getPostsAction } from "../redux/posts/actions";

class App extends Component {
  componentDidMount() {
    const { getPosts, getComments } = this.props;
    getPosts();
    getComments();
  }

  render() {
    console.log("App:::", this.props);
    const { comments, posts, createComment, createPost } = this.props;

    return (
      <Layout>
        <PostBox createPost={createPost} />

        {posts.map((post) => (
          <Post
            key={post.id}
            postId={post.id}
            author="Guest"
            content={post.content}
            imageUrl={post.image}
            comments={comments.filter((c) => c.postId === post.id)}
            createComment={createComment}
          />
        ))}
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    posts: state.posts,
  };
};

const mapDispatchToProps = {
  createComment: createCommentAction,
  getComments: getCommentsAction,
  createPost: createPostAction,
  getPosts: getPostsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
