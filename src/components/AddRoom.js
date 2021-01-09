import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddRoom({ newRoom }) {
  const handleCLick = () => {
    const room = {
      chatRoomId: uuidv4(),
      img: "https://randomuser.me/api/portraits/men/61.jpg",
      messages: [
        { id: 1, text: "New" },
        { id: 2, text: "Room" },
        { id: 3, text: "Created" },
      ],
      user: "Random",
    };
    newRoom(room);
  };
  return (
    <button onClick={handleCLick} type="button" className="btn btn-primary">
      Add chat room
    </button>
  );
}
