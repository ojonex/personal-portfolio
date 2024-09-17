import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { createRoot } from "react-dom/client";

const PortfolioIndex = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">John Doe</h1>
      <p className="text-xl mb-8 text-gray-600">Full-Stack Developer</p>

      <div className="space-y-4">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
          View Projects
        </button>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            Social Links
          </button>
          {dropdownOpen && (
            <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <a
                href="https://github.com/johndoe"
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
