import React, { useState, useEffect } from "react";
const initialState = {
  text: "",
  error: "",
};

export default function AddMessage({ addMessage, roomChanged }) {
  const [input, setInput] = useState(initialState);

  useEffect(() => {
    if (roomChanged === true) {
      setInput(initialState);
    }
  }, [roomChanged]);

  const submit = () => {
    if (!input.text) {
      setInput((prev) => ({ ...prev, error: "Can not be empty" }));
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
          >
            Send
          </button>
        </div>
      </div>
      <p style={{ color: "red" }}>{input.error}</p>
    </>
  );
}
