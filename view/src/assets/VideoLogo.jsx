import React from "react";

function VideoLogo({ width, height }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-supported-dps="24x24"
        fill="currentColor"
        className="mercado-match"
        style={{ fill: "red" }}
        width={width}
        height={height}
        focusable="false"
      >
        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
      </svg>
    </>
  );
}

export default VideoLogo;
