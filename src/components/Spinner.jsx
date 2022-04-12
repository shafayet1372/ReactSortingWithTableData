import React from "react";

export default function Spinner({
  type = "spinner-border",
  color = "text-primary",
}) {
  return (
    <div className="d-flex my-5 justify-content-center flex-wrap align-content-center">
      <div className={`${type} ${color}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
