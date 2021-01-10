import React from "react";
import { Link } from "react-router-dom";
import ProfileData from "./../components/ProfileData";

export default function Profile({ isAuthed }) {
  return (
    <div>
      <h1 className="text-center">Profile details</h1>
      {!isAuthed ? (
        <p>
          Please <Link to="/">login</Link>
        </p>
      ) : (
        <ProfileData />
      )}
    </div>
  );
}
