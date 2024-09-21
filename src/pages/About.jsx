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

const About = () => {
  return (
    <div>
      <BackgroundComponent className="absolute inset-0 z-0" />
      <h1>Welcome</h1>
    </div>
  );
};

export default About;
