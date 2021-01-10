import React from "react";

export default function Spinner() {
  return (
    <div className="row d-flex justify-content-center">
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
