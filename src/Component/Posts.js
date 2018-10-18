import React, { Component } from "react";
import Post from "./Post";
import axios from "axios";

class Posts extends Component {
  state = {
    data: null,
    finish: false
  };
  componentDidMount = async () => {
    const { data } = await axios.get("http://localhost:3030/posts");
    this.setState({
      data,
      finish: true
    });
    console.log(data);
  };

  render() {
    if (this.state.finish) {
      const posts = this.state.data
        .reverse()
        .map((d, key) => <Post data={d} key={key} />);
      return (
        <div className="bg-white p-2 m-2">
          <p className="h4 text-left"> 게시물</p>
          {posts}
        </div>
      );
    } else {
      return <div />;
    }
  }
}
export default Posts;
