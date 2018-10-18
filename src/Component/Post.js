import React from "react";
import Comments from "./Comments";
const Post = props => (
  <div className="p-2 text-left">
    <p className="">안운장님이 게시물을 올렸습니다</p>
    <p className="text-center h5">{props.data.body}</p>
    <p> 좋아요 / 댓글달기 / 공유하기</p>
    <Comments id={props.data.id} />
  </div>
);

export default Post;
