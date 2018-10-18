import React, { Component } from "react";
import axios from "axios";
class WritePost extends Component {
  state = {
    body: ""
  };

  submitHandler = () => {
    axios.post("http://localhost:3030/posts", this.state);
    this.setState({
      body: ""
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
    return (
      <div className="bg-white p-2 m-2 mt-5">
        <p className="text-left h3">게시물 올리기</p>
        <textarea
          className="w-100"
          name="body"
          value={this.state.body}
          onChange={this.inputHandler}
          placeholder="무슨 생각을 하고 있니 운장아"
        />
        <div className="text-left">
          사진/동영상 친구태그하기 기분/활동
          <div onClick={() => this.submitHandler()} className="btn btn-primary">
            작성
          </div>
        </div>
      </div>
    );
  }
}

export default WritePost;
