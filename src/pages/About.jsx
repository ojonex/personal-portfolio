import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import BackgroundComponent from "../components/BackgroundComponent.jsx";
import BackButton from "../components/BackButton";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col pt-2 items-center justify-center relative bg-gray-800">
      <BackgroundComponent className="absolute inset-0 z-0" />
      <BackButton />
      <h1 className="text-4xl md:text-5xl text-white font-bold mb-4 z-10">
        About Me
      </h1>
      <p className="text-white z-10 p-2 ">
        I am a student software developer @ The Open University.
      </p>
      <p className="text-white z-10 p-2 ">
        I possess a Level 3 and Level 2 BTEC qualification in{" "}
        <a
          className="text-purple-400 hover:text-teal-400"
          href="https://i.ibb.co/YD2BnPF/Screenshot-2024-09-22-134024.png"
        >
          IT & Software.
        </a>
      </p>
      <p className="text-white z-10 p-2 ">
        I have been programming on and off since the age of around 13.
      </p>
      <p className="text-white z-10 p-2 ">
        I plan to focus the majority of my studies on web development (Python
        and JavaScript).
      </p>
      <p className="text-white z-10 p-2 ">
        If I find the time Id love to be able to further my studies into some
        lower level languages for a deeper understanding. (C++ & Rust)
      </p>
    </div>
  );
};

export default About;
