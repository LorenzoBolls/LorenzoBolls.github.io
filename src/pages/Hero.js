import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/styles.css"

const Hero = () => {
  const words = ["Lorenzo", "a Student", "a Developer", "a Creator"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-4 items-center"
        style={{
          width: "100%", // Ensures all lines are the same width
          maxWidth: "1000px", // Adjust to fit your layout
        }}
      >
        {/* Top Animated Line */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            overflow: "hidden",
            height: "116px", // Match the line height of your text
            width: "100%", // Matches the width of the container
          }}
        >
          <h1
            className="text-4xl md:text-6xl lg:text-8xl font-arialblack text-stroke"
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
                width: "12ch", // Reserve space for the longest word
                textAlign: "left",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[currentWordIndex]} // React uses key to re-render and animate
                  initial={{ y: "100%", opacity: 0 }} // Starts from below
                  animate={{ y: "0%", opacity: 1 }} // Moves into view
                  exit={{ y: "-100%", opacity: 0 }} // Exits upward
                  transition={{ duration: 0.5 }}
                  style={{
                    display: "inline-block",
                  }}
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </div>

        {/* Static Center Line */}
        <div
          style={{
            width: "100%", // Matches container width for alignment
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <h1
            className="text-4xl md:text-6xl lg:text-8xl font-arialblack"
            style={{ whiteSpace: "nowrap", lineHeight: "1.2",}}
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
            height: "116px", // Match the line height of your text
            width: "100%", // Matches container width
            lineHeight: "1.2",
          }}
        >
          <h1
            className="text-4xl md:text-6xl lg:text-8xl font-arialblack text-stroke"
            style={{
              whiteSpace: "nowrap",
              alignItems: "center",
            }}
          >
            Hi, I&apos;m{" "}
            <span
              style={{
                display: "inline-block",
                width: "12ch", // Reserve space for the longest word
                textAlign: "left",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[currentWordIndex]}
                  initial={{ y: "100%", opacity: 0 }} // Starts from below
                  animate={{ y: "0%", opacity: 1 }} // Moves into view
                  exit={{ y: "-100%", opacity: 0 }} // Exits upward
                  transition={{ duration: 0.5 }}
                  style={{
                    display: "inline-block",
                  }}
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
