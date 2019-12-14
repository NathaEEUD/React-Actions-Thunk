import React, { Component } from "react";
import { connect } from "react-redux";
import { action1 } from "../redux/comments/actions";
import "../assets/styles/App.scss";
import Layout from "./Layout";
import PostBox from "./PostBox";
import Post from "./Post";

class App extends Component {
  componentDidMount() {
    this.props.action1(777);
  }

  render() {
    console.log(this.props);
    return (
      <Layout>
        <PostBox />
        <Post />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  action1,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
