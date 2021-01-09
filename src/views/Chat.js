import React, { useState, useEffect } from "react";
import axios from "axios";
import RoomsList from "./../components/RoomsList";
import RoomMessages from "./../components/RoomMessages";
import AddMessage from "./../components/AddMessage";

export default function ChatMain() {
  const [chatRooms, setChatRooms] = useState([]);
  const [activeRoom, setActiveRoom] = useState({});

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

  const submit = (newMessage) => {
    const roomId = activeRoom.chatRoomId;
    const updatedRooms = chatRooms.map((item) => {
      if (item.chatRoomId === roomId) {
        return item.addedMessages
          ? { ...item, addedMessages: [...item.addedMessages, newMessage] }
          : { ...item, addedMessages: [newMessage] };
      } else {
        return item;
      }
    });

    setChatRooms(updatedRooms);
    setActiveRoom(
      updatedRooms.find((item) => {
        return item.chatRoomId === roomId;
      })
    );
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
        <RoomsList
          list={chatRooms}
          roomClicked={(item) => setActiveRoom(item)}
        />
      </div>
      <main className="col-7">
        <div className="card">
          <div className="card-body">
            <RoomMessages activeRoom={activeRoom} />
            <AddMessage addMessage={(item) => submit(item)} />
          </div>
        </div>
      </main>
    </div>
  );
}
