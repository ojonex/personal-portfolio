import React from "react";
import { useNavigate, Routes, Route, BrowserRouter } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BackgroundComponent from "../components/BackgroundComponent";
import passgen from "../static/passgen.png";
import BackButton from "../components/BackButton";

const ProjectCard = ({ title, description, img, imgAlt, projectURL }) => {
  return (
    <div className="bg-transparent p-6 rounded-lg stroke-2 stroke-white shadow-lg items-center">
      <h2 className="text-2xl z-1 text-white font-semibold mb-2">{title}</h2>

      <img src={img} alt={imgAlt} className="m-3 rounded-lg"></img>

      <p className="text-gray-300">{description}</p>
      <a href={projectURL}>
        <button className="border-2 border-white text-white px-4 py-2 m-3 rounded-lg hover:bg-purple-500 hover:text-white transition-colors">
          View Source
        </button>
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col pt-3 items-center justify-center bg-gray-800 relative">
      <BackgroundComponent className="absolute inset-0 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center pt-16 md:pt-0">
        <BackButton />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white align-center">
          Projects
        </h1>
        <p className="text-md md:text-xl mb-8 text-white">
          Here are some of my projects.
        </p>
        <div className="grid-cols-3  gap-6 width-3">
          <ProjectCard
            title="Password Generator"
            img={passgen}
            imgAlt="password generator"
            description="This password generator was created with EJS and Boostrap.  I tired of going to random.org and generating a new password everytime.
             For this I can simply run the program and press generate. I plan to make this a fully functional app with backend integration and a database by Q2 2025"
            projectURL="https://github.com/OjoDevs/password-generator"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Projects;
