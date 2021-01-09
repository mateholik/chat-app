import React from "react";

export default function RoomMessages({ activeRoom }) {
  return (
    <ul className="list-group">
      {Object.keys(activeRoom).length > 0 &&
        activeRoom.messages.map((item) => {
          return (
            <li className="list-group-item text-end" key={item.id}>
              {item.text}
            </li>
          );
        })}

      {activeRoom.addedMessages &&
        activeRoom.addedMessages.map((item) => {
          return (
            <li className="list-group-item" key={item}>
              {item}
            </li>
          );
        })}
    </ul>
  );
}
