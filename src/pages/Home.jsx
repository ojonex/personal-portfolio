import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import BackgroundComponent from "../components/BackgroundComponent";
import AppRoutes from "../App";

const DropdownComponent = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative">
      <button
        className="border-2 border-white text-white px-5 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition-colors"
        onClick={toggleDropdown}
      >
        Socials
      </button>
      {dropdownOpen && (
        <div className="absolute mt-2 w-48 bg-transparent rounded-lg shadow-lg z-10 justify-center">
          <a
            href="https://github.com/orpheusj"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-white hover:bg-purple-500 rounded-t-lg"
          >
            <FaGithub className="inline mr-2" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-white hover:bg-purple-500"
          >
            <FaLinkedin className="inline mr-2" /> LinkedIn
          </a>
          <a
            href="mailto:johndoe@example.com"
            className="block px-4 py-2 text-white border-white hover:text-white hover:bg-purple-500 rounded-b-lg"
          >
            <FaEnvelope className="inline mr-2" /> Email
          </a>
        </div>
      )}
    </div>
  );
};

// below are both of the buttons that send the user to /about and /projects
export default function Component() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 relative">
      <BackgroundComponent className="absolute inset-0 z-0" />
      <div className="relative z-10 flex flex-col justify-center items-center pt-16 md:pt-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Owain J.
        </h1>
        <p className="text-md md:text-xl mb-4 text-white">Student Developer</p>
        <p className="text-md md:text-l text-white">
          I'm currently a student developer at
          <a
            href="https://www.open.ac.uk/"
            className="text-purple-400 hover:text-teal-400"
          >
            {" "}
            The Open University.
          </a>
        </p>
        <p className="text-md md:text-l mb-3 text-white">
          This is where the bulk of my work as a student will be posted.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={() => handleNavigation("/projects")}
            className="border-2 border-white text-white px-5 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition-colors w-full md:w-auto"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavigation("/about")}
            className="border-2 border-white text-white px-5 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition-colors w-full md:w-auto"
          >
            About
          </button>
          <DropdownComponent />
        </div>
      </div>
    </div>
  );
}
