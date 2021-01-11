import React from "react";
import Form from "./../components/LoginForm";

export default function Login({ validForm, isAuthed, logOut }) {
  return (
    <div>
      <h1 className="text-center">Login</h1>
      {isAuthed ? (
        <p className="m-0">
          You alreade logged in.{" "}
          <span
            style={{ cursor: "pointer", color: "#0d6efd" }}
            onClick={logOut}
          >
            Logout
          </span>
        </p>
      ) : (
        <Form validForm={validForm}></Form>
      )}
    </div>
  );
}
