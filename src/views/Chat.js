import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RoomsList from "./../components/RoomsList";
import RoomMessages from "./../components/RoomMessages";
import AddMessage from "./../components/AddMessage";
import AddRoom from "./../components/AddRoom";
import Spinner from "./../components/Spinner";
import arrow from "./../assets/arrow.svg";

export default function ChatMain({ isAuthed }) {
  const [chatRooms, setChatRooms] = useState([]);
  const [activeRoom, setActiveRoom] = useState({});
  const [roomChanged, setRoomChanged] = useState(false);

  useEffect(() => {
    if (isAuthed) {
      let source = axios.CancelToken.source();
      axios
        .get("https://api.jsonbin.io/b/5ff7300a1d107958ae4c853f", {
          headers: {
            "secret-key":
              "$2b$10$/KvDJqnJt55Gze7rrT01fucNxX99lfQaMtLm6ltlm0Vz4N5IvE.za",
          },
          cancelToken: source.token,
        })
        .then((res) => {
          setChatRooms(res.data);
        })
        .catch((e) => {
          if (axios.isCancel(e)) {
            console.log("caught cancel");
          } else {
            console.log(e);
          }
        });

      return () => {
        source.cancel();
      };
    }
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

  const handleNewRoom = (item) => {
    setChatRooms((prev) => {
      return prev.concat(item);
    });
    setActiveRoom(item);
  };

  const handleRoomClicked = (item) => {
    setActiveRoom(item);
    setRoomChanged(true);
    setTimeout(() => {
      setRoomChanged(false);
    }, 50);
  };

  return (
    <>
      <h1 className="text-center">Chat</h1>
      {!isAuthed ? (
        <p>
          Please <Link to="/">login</Link>
        </p>
      ) : (
        <div>
          {!chatRooms.length > 0 ? (
            <Spinner />
          ) : (
            <div className="row">
              <div className="col-md-3 mb-4">
                <RoomsList
                  list={chatRooms}
                  roomClicked={(item) => handleRoomClicked(item)}
                />
                <AddRoom newRoom={(item) => handleNewRoom(item)} />
              </div>
              <div className="col-md-7">
                {!Object.keys(activeRoom).length ? (
                  <div>
                    <img className="arrow" src={arrow} alt="arrow" />
                    Please select chat room
                  </div>
                ) : (
                  <div className="card">
                    <div className="card-body">
                      <RoomMessages activeRoom={activeRoom} />
                      <AddMessage
                        addMessage={(item) => submit(item)}
                        roomChanged={roomChanged}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
