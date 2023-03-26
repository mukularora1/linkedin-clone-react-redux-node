import * as React from "react";
const SVGComponent = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    id="repost-2"
    data-name="Flat Line"
    className="icon flat-line"
  >
    <path
      id="primary"
      d="M18,6V4a1,1,0,0,0-1-1H7A1,1,0,0,0,6,4V14"
      style={{
        fill: "none",
        stroke: "rgb(0, 0, 0)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <path
      id="primary-2"
      data-name="primary"
      d="M6,18v2a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V10"
      style={{
        fill: "none",
        stroke: "rgb(0, 0, 0)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <polyline
      id="primary-3"
      data-name="primary"
      points="8 12 6 14 4 12"
      style={{
        fill: "none",
        stroke: "rgb(0, 0, 0)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <polyline
      id="primary-4"
      data-name="primary"
      points="16 12 18 10 20 12"
      style={{
        fill: "none",
        stroke: "rgb(0, 0, 0)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);
export default SVGComponent;
