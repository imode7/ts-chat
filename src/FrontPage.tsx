import React from "react";

const chatJson = [
  {
    roomName: "SCADA web",
    chatMember: ["명훈", "화희"],
    date: "17:11",
    chat: [
      { talker: "명훈", context: "오늘 밥 먹었니?" },
      { talker: "화희", context: "응 나는 밥 먹었어" },
    ],
  },
  { roomName: "SCADA ", chatMember: ["명훈", "화희"], date: "20:20" },
  { roomName: "메론", chatMember: ["명훈", "화희"], date: "03:12" },
  { roomName: "놀자", chatMember: ["명훈", "화희"], date: "조금전" },
  { roomName: "집에가고싶다", chatMember: ["명훈", "화희"], date: "10분전" },
  { roomName: "모하니", chatMember: ["명훈", "화희"], date: "1시간전" },
  { roomName: "SCADA web", chatMember: ["명훈", "화희"], date: "17:11" },
  { roomName: "SCADA ", chatMember: ["명훈", "화희"], date: "20:20" },
  { roomName: "메론", chatMember: ["명훈", "화희"], date: "03:12" },
  { roomName: "놀자", chatMember: ["명훈", "화희"], date: "조금전" },
  { roomName: "집에가고싶다", chatMember: ["명훈", "화희"], date: "10분전" },
  {
    roomName: "모하니",
    chatMember: ["명훈", "화희"],
    date: "1시간전",
  },
];

interface RoomInfo {
  roomName: string;
  chatMember: string[];
  chat?: object[];
  date: string;
}

const FrontPage = () => {
  function getRoomInfo(param: RoomInfo) {
    console.log(param);
  }

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
        }}
      >
        {/* 왼쪽 전체 목록창 */}
        <div
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
          }}
        >
          {/* 개별 채팅방들 */}
          {chatJson.map((param: RoomInfo, idx) => {
            return (
              <ul
                key={idx}
                onClick={() => getRoomInfo(param)}
                style={{
                  display: "flex",
                  height: "10vh",
                  margin: 0,
                  padding: "0px 10px 0px 10px",
                }}
              >
                <div
                  style={{
                    width: "20%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/image/profile.jpg"
                    alt=""
                    style={{ overflow: "hidden", borderRadius: "50%" }}
                  />
                </div>
                <div
                  style={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      height: "30px",
                    }}
                  >
                    <p style={{ fontSize: "1em" }}>{param.roomName}</p>
                    <p>{param.date}</p>
                  </div>
                  <div>
                    <p>오늘도 밥먹었습니다앙</p>
                  </div>
                </div>
              </ul>
            );
          })}
        </div>
        <div
          className="background"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "75%",
            backgroundSize: "500px",
          }}
        >
          <div
            id="chatArea"
            style={{
              display: "flex",
              height: "90vh",
              margin: "1% 20% 1% 20%",
              justifyContent: "center",
              backgroundColor: "mediumaquamarine",
            }}
          >
            chatData
          </div>
          <div
            style={{
              display: "flex",
              margin: "1% 20% 1% 20%",
              // height: "10vh",
              justifyContent: "center",
            }}
          >
            {/*채팅 흰박스*/}
            <div
              contentEditable="true"
              style={{
                display: "flex",
                width: "100%",
                height: "5vh",
                alignItems: "center",
                backgroundColor: "white",
                overflow: "auto",
                borderRadius: "10px",
                marginRight: "10px",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#3390ec",
                borderRadius: "50%",
              }}
            >
              <button
                style={{
                  width: "40px",
                  height: "40px",
                  border: 0,
                  borderRadius: "50%",
                  backgroundColor: "#3390ec",
                }}
                className={"backgroundImage"}
              >
                {/*<img
                  src={"/image/mic.jpg"}
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />*/}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
