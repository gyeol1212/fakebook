import React from "react";

const Comment = props => {
  console.log(props);
  return (
    <div className="px-2">
      <p className="mb-0"> {props.data.content}</p>
    </div>
  );
};

export default Comment;
