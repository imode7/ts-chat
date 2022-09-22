import React from "react";

const chatJson = [
  { roomName: "SCADA web", chatMember: ["명훈", "화희"], date: "20220922" },
  { roomName: "SCADA ", chatMember: ["명훈", "화희"], date: "20220922" },
  { roomName: "메론", chatMember: ["명훈", "화희"], date: "20220922" },
  { roomName: "놀자", chatMember: ["명훈", "화희"], date: "20220922" },
  { roomName: "집에가고싶다", chatMember: ["명훈", "화희"], date: "20220922" },
  { roomName: "모하니", chatMember: ["명훈", "화희"], date: "20220922" },
];

const FrontPage = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
        }}
      >
        <div style={{ width: "25%", display: "flex" }}>
          <div style={{ width: "20%" }}>picture</div>
          <div style={{ width: "80%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>roomName</span>
              <span>date</span>
            </div>
            <div>chat</div>
          </div>
          {/*{chatJson.map((param) => {
            return param.roomName;
          })}*/}
        </div>
        <div
          style={{ width: "75%", backgroundImage: "url(/image/pattern.svg)" }}
        ></div>
      </div>
    </>
  );
};

export default FrontPage;
