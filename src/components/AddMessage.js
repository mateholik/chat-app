import React, { useState } from "react";

export default function AddMessage({ addMessage }) {
  const [input, setInput] = useState("");

  const submit = () => {
    addMessage(input);
    setInput("");
  };
  return (
    <div className="input-group mt-2">
      <input
        type="text"
        className="form-control"
        placeholder="Type..."
        aria-label="Type..."
        name="message"
        aria-describedby="basic-addon2"
        onChange={(e) => setInput(e.target.value)}
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
  );
}
