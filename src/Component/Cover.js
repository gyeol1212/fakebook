import React from "react";

const Cover = () => (
  <div
    style={{
      backgroundImage: `url(https://picsum.photos/1141/301)`,
      width: "1140px",
      height: "300px"
    }}
  >
    <div className="row mx-5" style={{ paddingTop: "150px" }}>
      <img src="https://picsum.photos/150/150" style={{ height: "150px" }} />
      <div
        style={{
          padding: "100px",
          fontSize: "2rem",
          fontWeight: "bold",
          paddingLeft: "50px",
          paddingBottom: "0px"
        }}
      >
        안운장
      </div>
      <div
        style={{
          padding: "100px",
          paddingRight: "50px",
          fontSize: "1.4rem",
          paddingBottom: "0px"
        }}
        className="ml-auto"
      >
        프로필 수정/ 활동 로그
      </div>
    </div>
    <div className="m-1 bg-white" style={{ color: "blue" }}>
      타임라인 / 정보 / 친구 / 사진 / 보관함 / 더보기
    </div>
  </div>
);

export default Cover;
