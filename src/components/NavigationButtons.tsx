import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

interface NavigationButtonsProps {
  prevId: string; // Unique ID for the previous button
  nextId: string; // Unique ID for the next button
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  prevId,
  nextId,
}) => {
  return (
    <div className="flex items-center justify-center gap-5 bg-dark-06 border-2 border-dark-12 p-4 rounded-2xl">
      <button
        className="p-4 border-2 border-dark-15 bg-dark-10 text-white rounded-lg"
        id={prevId}
      >
        <FaLongArrowAltLeft size={20} />
      </button>
      <button
        className="p-4 border-2 border-dark-15 bg-dark-10 text-white rounded-lg"
        id={nextId}
      >
        <FaLongArrowAltRight size={20} />
      </button>
    </div>
  );
};

export default NavigationButtons;
