import React from "react";

export default function RoomMessages({ activeRoom }) {
  return (
    <div className="card">
      <ul className="list-group pt-2 pb-2">
        {Object.keys(activeRoom).length > 0 &&
          activeRoom.messages.map((item) => {
            return (
              <li
                className="list-group-item text-end"
                key={item.id}
                style={{ border: "none" }}
              >
                <span style={message}>{item.text}</span>
              </li>
            );
          })}

        {activeRoom.addedMessages &&
          activeRoom.addedMessages.map((item, i) => {
            return (
              <li
                className="list-group-item"
                style={{ border: "none" }}
                key={i}
              >
                <span style={messageResponse}>{item}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

const message = {
  background: "#0d6efd",
  color: "#fff",
  padding: "0.25rem 0.5rem",
  borderRadius: "0.3rem",
};

const messageResponse = {
  background: "#fd9c0d",
  color: "#fff",
  padding: "0.25rem 0.5rem",
  borderRadius: "0.3rem",
};
