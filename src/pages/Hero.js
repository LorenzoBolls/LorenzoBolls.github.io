import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/styles.css";
import { FaFileAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
// Define different word orders for the top and bottom lines
const wordsTop = ["Lorenzo", "a Student", "a Creator", "a Leader"];
const wordsBottom = ["Lorenzo", "a Developer", "a Teammate", "a Thinker"];
const cycleDuration = 8000; // Total cycle time for all words (8 seconds)
const wordDuration = cycleDuration / wordsTop.length; // Time per word (2 seconds)
const [currentWordIndexTop, setCurrentWordIndexTop] = useState(0);
const [currentWordIndexBottom, setCurrentWordIndexBottom] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentWordIndexTop((prev) => (prev + 1) % wordsTop.length);
    setCurrentWordIndexBottom((prev) => (prev + 1) % wordsBottom.length);
  }, wordDuration); // Update every 2 seconds
  return () => clearInterval(interval);
}, []);



return (
  <section
  id="hero"
  className="bg-[#fff0db]"
>
  <div className="h-screen flex flex-col items-center justify-center text-center p-6 pl-20 md:pl-30 lg:pl-40">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 items-center"
      style={{
        width: "100%",
        maxWidth: "1060px",
        paddingLeft: "30px",
      }}
    >
      {/* Hero Animation */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          overflow: "hidden",
          height: "clamp(3em, 37%, 145px)",
          width: "100%",
        }}
  
      >
        <h1
          className="text-4xl md:text-6xl lg:text-8xl font-arialblack text-stroke pb-4"
          style={{
            whiteSpace: "nowrap",
            alignItems: "center",
            lineHeight: "1.2",
          }}
        >
          Hi, I&apos;m{" "}
          <span
            style={{
              display: "inline-block",
              width: "12ch",
              textAlign: "left",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={wordsTop[currentWordIndexTop]}
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  display: "inline-block",
                }}
              >
                {wordsTop[currentWordIndexTop]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
      </div>
       {/* Static Center Line */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <h1
          className="text-4xl md:text-6xl lg:text-8xl font-arialblack"
          style={{ whiteSpace: "nowrap", lineHeight: "1.2" }}
        >
          Hi, I&apos;m Lorenzo
        </h1>
      </div>
       {/* Bottom Animated Line */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          overflow: "hidden",
          height: "clamp(3em, 38%, 145px)",
          width: "100%",
          lineHeight: "1.2",
        }}
      >
        <h1
          className="text-4xl md:text-6xl lg:text-8xl font-arialblack text-stroke pt-4"
          style={{
            whiteSpace: "nowrap",
            alignItems: "center",
          }}
        >
          Hi, I&apos;m{" "}
          <span
            style={{
              display: "inline-block",
              width: "12ch",
              textAlign: "left",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={wordsBottom[currentWordIndexBottom]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  display: "inline-block",
                }}
              >
                {wordsBottom[currentWordIndexBottom]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
      </div>


      {/* Buttons Section */}
      <div className="flex items-center justify-center gap-4 mt-20 -ml-20 md:-ml-30 lg:-ml-40">
      
        <a
          href="https://docs.google.com/document/d/1mtJEQLNZrffyX1jkppS4iBmtSxeZjumXaZWTIUOBkvw/export?format=pdf"
          download
          className="btn text-primary bg-white border-black border-2 flex items-center gap-2
                text-sm sm:text-base md:text-lg lg:text-xl 
                py-2 px-4 sm:py-3 sm:px-5 md:py-4 md:px-6 
                transition-all duration-300 shadow-lg hover:bg-black hover:text-white"
        >
          <FaFileAlt />
          Download Resume
        </a>
        <a
          href="https://linkedin.com/in/LorenzoBolls"
          target="_blank"
          rel="noopener noreferrer"
          className="btn text-primary bg-white border-black border-2 flex items-center gap-2
                text-sm sm:text-base md:text-lg lg:text-xl 
                py-2 px-4 sm:py-3 sm:px-5 md:py-4 md:px-6 
                transition-all duration-300 shadow-lg hover:bg-black hover:text-white"
        >
          <FaLinkedin />
          LinkedIn
        </a>
        <motion.a
            href="https://github.com/LorenzoBolls"
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-primary bg-white border-black border-2 flex items-center gap-2
                text-sm sm:text-base md:text-lg lg:text-xl 
                py-2 px-4 sm:py-3 sm:px-5 md:py-4 md:px-6 
                transition-all duration-300 shadow-lg hover:bg-black hover:text-white"
        >
            <FaGithub />
            GitHub
        </motion.a>



      </div>


   </motion.div>
 </div>
</section>


);
};


export default Hero;
