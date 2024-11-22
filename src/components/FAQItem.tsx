import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
};

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}) => {
  return (
    <div className={`rounded-lg ${isOpen && "border border-primary-50"}`}>
      <button
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={onToggle}
      >
        <div className="flex items-center">
          <span className="flex items-center justify-center text-sm p-3 font-bold text-white bg-dark-12 rounded-lg mr-4">
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </span>
          <span>{question}</span>
        </div>
        <span className="text-xl">{isOpen ? <FiMinus /> : <FiPlus />}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="p-4 text-grey-60"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
