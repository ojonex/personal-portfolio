import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { createRoot } from "react-dom/client";
import Star from "./static/Star";

const PortfolioIndex = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const stars = Array.from({ length: 50 });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      {stars.map((_, index) => (
        <Star
          key={index}
          size={`${Math.random() * 3 + 2}px`}
          top={`${Math.random() * 100}vh`}
          left={`${Math.random() * 100}vw`}
          duration={Math.random() * 10 + 5}
        />
      ))}
      <h1 className="text-5xl font-bold mb-4 text-gray-800 ">John Doe</h1>
      <p className="text-xl mb-8 text-gray-600">Full-Stack Developer</p>

      <div className="flex justify-between items-center space-x-2">
        <button
          className="bg-slate-700 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition-colors
         shadow-lg shadow-black/20"
        >
          Projects
        </button>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-slate-700 text-white px-5 py-2 rounded-lg hover:bg-red-600
            transition-colors shadow-lg shadow-black/20"
          >
            Socials
          </button>
          {dropdownOpen && (
            <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg  z-10">
              <a
                href="https://github.com/orpheusj"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <FaGithub className="inline mr-2" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <FaLinkedin className="inline mr-2" /> LinkedIn
              </a>

              <a
                href="mailto:johndoe@example.com"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <FaEnvelope className="inline mr-2" /> Email
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<PortfolioIndex />);
export default PortfolioIndex;
