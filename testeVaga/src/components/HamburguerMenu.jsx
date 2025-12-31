import { useState } from "react";
import ModalMenu from "../components/modalMenu.jsx";

const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative mr-[1rem]">
      <button
        className="lg:hidden flex flex-col space-y-1.5 
               absolute top-1/2 left-1/2 
               -translate-x-1/2 -translate-y-1/2 
               z-[999] p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span
          className={`block w-6 h-0.5 transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
          style={{ backgroundColor: isOpen ? "#000" : "#fff" }}
        />
        <span
          className={`block w-6 h-0.5 transition-all duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundColor: isOpen ? "#000" : "#fff" }}
        />
        <span
          className={`block w-6 h-0.5 transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
          style={{ backgroundColor: isOpen ? "#000" : "#fff" }}
        />
      </button>

      <ModalMenu itsOpened={isOpen} />
    </div>
  );
};

export default HamburguerMenu;
