import React from "react";

const Star = ({ size, top, left, duration }) => {
  return (
    <div
      className="absolute bg-red-500 rounded-full"
      style={{
        width: size,
        height: size,
        top: top,
        left: left,
        animation: `move ${duration}s linear infinite`,
      }}
    ></div>
  );
};

export default Star;
