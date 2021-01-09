import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Chat() {
  const [chatRooms, setChatRooms] = useState([]);
  const [openedRoom, setOpenedRoom] = useState({});
  const [input, setValue] = useState("");

  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/b/5ff7300a1d107958ae4c853f", {
        headers: {
          "secret-key":
            "$2b$10$/KvDJqnJt55Gze7rrT01fucNxX99lfQaMtLm6ltlm0Vz4N5IvE.za",
        },
      })
      .then((res) => {
        setChatRooms(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const submit = () => {
    const roomId = openedRoom.chatRoomId;
    const updatedRooms = chatRooms.map((item) => {
      if (item.chatRoomId === roomId) {
        return item.addedMessages
          ? { ...item, addedMessages: [...item.addedMessages, input] }
          : { ...item, addedMessages: [input] };
      } else {
        return item;
      }
    });

    setChatRooms(updatedRooms);
    setOpenedRoom(
      updatedRooms.find((item) => {
        return item.chatRoomId === roomId;
      })
    );
    setValue("");
    updateAPI(updatedRooms);
  };

  const updateAPI = (data) => {
    axios
      .put("https://api.jsonbin.io/b/5ff7300a1d107958ae4c853f", data, {
        headers: {
          "secret-key":
            "$2b$10$/KvDJqnJt55Gze7rrT01fucNxX99lfQaMtLm6ltlm0Vz4N5IvE.za",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="row">
      <div className="col-3">
        {chatRooms.map((item) => {
          return (
            <div
              onClick={() => setOpenedRoom(item)}
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
      <main className="col-7">
        <div className="card">
          <div className="card-body">
            <ul className="list-group">
              {Object.keys(openedRoom).length > 0 &&
                openedRoom.messages.map((item) => {
                  return (
                    <li className="list-group-item text-end" key={item.id}>
                      {item.text}
                    </li>
                  );
                })}

              {openedRoom.addedMessages &&
                openedRoom.addedMessages.map((item) => {
                  return (
                    <li className="list-group-item" key={item}>
                      {item}
                    </li>
                  );
                })}
            </ul>
            <div className="input-group mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Type..."
                aria-label="Type..."
                name="message"
                aria-describedby="basic-addon2"
                onChange={(e) => setValue(e.target.value)}
                value={input}
              ></input>
              <div className="input-group-append">
                <button
                  onClick={submit}
                  className="btn btn-outline-secondary"
                  type="button"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
