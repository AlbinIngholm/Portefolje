import React from "react";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div className="spinner"></div>
    </div>
  );
}

export default Pre;
