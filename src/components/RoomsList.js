import React from "react";

export default function RoomsList({ list, roomClicked }) {
  return (
    <div>
      {list.map((item) => {
        return (
          <div
            onClick={() => roomClicked(item)}
            className="card mb-2"
            key={item.chatRoomId}
          >
            <div
              className="card-body d-flex align-items-center"
              style={{ cursor: "pointer" }}
            >
              <img
                src={item.img}
                className="img-thumbnail rounded-circle"
                alt="avatar"
                style={{ width: "50px" }}
              ></img>
              <h5 className="card-title m-2">{item.user}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}
