import React from "react";
import { keyframes } from "@emotion/react";

const moveAround = keyframes`
    0%, 100% {
        transform: translate(0, 0);
    }
    25% {
        transform: translate(5%, 10%);
    }
    50% {
        transform: translate(10%, -5%);
    }
    75% {
        transform: translate(-5%, 8%);
    }
`;
const BackgroundComponent = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 dark:bg-gray-800 bg-gradient-to-br from-teal-400 via-indigo-500 to-purple-600 opacity-80"></div>

      {/* Animated Blurred Shapes */}
      <div
        className="absolute w-[80vh] h-[80vh] dark:bg-gray-800 bg-blue-400 rounded-full opacity-30 filter blur-3xl"
        style={{
          animation: `${moveAround} 30s infinite ease-in-out`,
          top: "-20%",
          left: "-10%",
        }}
      ></div>
      <div
        className="absolute w-[70vh] h-[70vh] dark:bg-gray-800 bg-purple-400 rounded-full opacity-20 filter blur-3xl"
        style={{
          animation: `${moveAround} 35s infinite ease-in-out`,
          bottom: "-10%",
          right: "-5%",
        }}
      ></div>
      <div
        className="absolute w-[60vh] h-[60vh] dark:bg-gray-800  bg-teal-400 rounded-full opacity-25 filter blur-3xl"
        style={{
          animation: `${moveAround} 40s infinite ease-in-out`,
          top: "30%",
          right: "20%",
        }}
      ></div>
      <div
        className="absolute w-[50vh] h-[50vh] bg-indigo-400  dark:bg-gray-800 rounded-full  opacity-20 filter blur-3xl"
        style={{
          animation: `${moveAround} 45s infinite ease-in-out`,
          bottom: "20%",
          left: "10%",
        }}
      ></div>
    </div>
  );
};

export default BackgroundComponent;
