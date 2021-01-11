import React, { useState } from "react";
import Spinner from "./Spinner";

export default function RoomsList({ list, roomClicked }) {
  const [loaded, setLoades] = useState(false);
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
              <div style={{ width: "50px" }}>
                {!loaded ? <Spinner /> : ""}
                <img
                  src={item.img}
                  className="img-thumbnail rounded-circle"
                  alt="avatar"
                  onLoad={() => setLoades(true)}
                  style={{ display: loaded ? "block" : "none" }}
                ></img>
              </div>
              <h5 className="card-title m-2">{item.user}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}
