import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import React from "react";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className="fixed top-4 left-4 z-50 border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition-colors"
      aria-label="Go back"
    >
      <ArrowLeft className="w-6 h-6" />
    </button>
  );
};

export default BackButton;
