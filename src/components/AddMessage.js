import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
const initialState = {
  text: "",
  error: "",
};

export default function AddMessage({ addMessage, roomChanged, updating }) {
  const [input, setInput] = useState(initialState);

  useEffect(() => {
    if (roomChanged === true) {
      setInput(initialState);
    }
  }, [roomChanged]);

  const submit = () => {
    const forbidden = ["fuck", "shit", "php"];
    const forbiddenFound = forbidden.filter((word) =>
      input.text.includes(word)
    );

    if (!input.text) {
      setInput((prev) => ({ ...prev, error: "Can not be empty" }));
      return;
    } else if (forbiddenFound.length) {
      setInput((prev) => ({
        ...prev,
        error: "You are using forbidden words!",
      }));
      return;
    }
    addMessage(input.text);
    setInput(initialState);
  };
  return (
    <>
      <div className="input-group mt-2">
        <input
          type="text"
          className="form-control"
          placeholder="Type..."
          aria-label="Type..."
          name="message"
          aria-describedby="basic-addon2"
          onChange={(e) =>
            setInput((prev) => ({ error: "", text: e.target.value }))
          }
          value={input.text}
          onKeyPress={(event) => (event.key === "Enter" ? submit() : "")}
        ></input>
        <div className="input-group-append">
          <button
            onClick={submit}
            className="btn btn-outline-secondary"
            type="button"
            style={{ width: "65px", height: "46px" }}
          >
            {updating ? <Spinner /> : "Send"}
          </button>
        </div>
      </div>
      <p style={{ color: "red", marginBottom: 0 }}>{input.error}</p>
    </>
  );
}
