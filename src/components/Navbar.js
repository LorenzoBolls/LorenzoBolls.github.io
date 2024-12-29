import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

// Smooth scroll function
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <motion.ul
      initial={{ y: -50, opacity: 0, x: "-50%" }} // Added initial animation
      animate={{ y: 0, opacity: 1, x: "-50%" }} // Slide in and fade in
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth easing
      onMouseLeave={() => {
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }));
      }}
      className="fixed left-1/2 transform -translate-x-1/2 top-4 mx-auto flex w-fit rounded-full border-2 
      border-black bg-white p-1"
    >
      {/* Update each Tab to pass the target section ID */}
      <Tab setPosition={setPosition} onClick={() => scrollToSection("about")}>
        About
      </Tab>
      <Tab setPosition={setPosition} onClick={() => scrollToSection("experiences")}>
        Experiences
      </Tab>
      <Tab setPosition={setPosition} onClick={() => scrollToSection("projects")}>
        Projects
      </Tab>
      <Tab setPosition={setPosition} onClick={() => scrollToSection("contact")}>
        Contact Me
      </Tab>

      <Cursor position={position} />
    </motion.ul>
  );
};

const Tab = ({ children, setPosition, onClick }) => {
  const ref = useRef(null);

  return (
    <motion.li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      onClick={onClick}
      whileHover={{
        scale: 1.2, // Scale the tab slightly on hover
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }} // Smooth spring effect
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs 
      uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base whitespace-nowrap"
    >
      {children}
    </motion.li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default Navbar;
