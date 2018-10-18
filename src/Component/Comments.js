import React, { Component } from "react";
import Comment from "./Comment";
import axios from "axios";
class Comments extends Component {
  state = {
    comment: "",
    data: null,
    finish: false
  };

  componentDidMount = async () => {
    const { data } = await axios.get(
      `http://localhost:3030/posts/${this.props.id}/dddds`
    );

    const da = data.filter(d => d.post_id === this.props.id);
    this.setState({ data: da, finish: true });
    console.log(data);
  };

  commentSubmit = () => {
    axios.post(`http://localhost:3030/posts/${this.props.id}/dddds`, {
      content: this.state.comment
    });
    alert("성공");
  };
  inputHandler = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };
  render() {
    console.log(this.props.id);
    if (this.state.finish) {
      const comments = this.state.data.map((d, key) => (
        <Comment data={d} key={key} />
      ));
      return (
        <div className="border-top">
          {comments}

          <input
            type="text rounded"
            placeholder="댓글을 쓰세요"
            name="comment"
            onChange={this.inputHandler}
            style={{ width: "90%" }}
          />
          <div
            onClick={() => this.commentSubmit(this.state.comment)}
            className="btn btn-primary"
          >
            작성
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Comments;
