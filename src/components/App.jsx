import React, { Component } from "react";
import { connect } from "react-redux";
import "../assets/styles/App.scss";
import Layout from "./Layout";
import PostBox from "./PostBox";
import Post from "./Post";
import api from "../../server/api";
import {
  commentCreate as commentCreateAction,
  commentGetList as commentGetListAction,
} from "../redux/comments/actions";
import {
  postCreate as postCreateAction,
  postGetList as postGetListAction,
} from "../redux/posts/actions";

class App extends Component {
  componentDidMount() {
    // api.comments.create({ author: "Natha", content: "Third Post" });
    const { postGetList, commentGetList } = this.props;
    postGetList([
      {
        content: "First Post",
        id: 123,
      },
    ]);
    commentGetList([
      {
        author: "Natha",
        content: "Second Comment",
        postId: 123,
        id: 1,
      },
    ]);
  }

  render() {
    console.log("App:::", this.props);
    const { comments, posts, commentCreate, postCreate } = this.props;

    return (
      <Layout>
        <PostBox postCreate={postCreate} />

        {posts.map(post => (
          <Post
            key={post.id}
            postId={post.id}
            author="Guest"
            content={post.content}
            imageUrl={post.image}
            comments={comments.filter(c => c.postId === post.id)}
            commentCreate={commentCreate}
          />
        ))}
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments,
    posts: state.posts,
  };
};

const mapDispatchToProps = {
  commentCreate: commentCreateAction,
  commentGetList: commentGetListAction,
  postCreate: postCreateAction,
  postGetList: postGetListAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
