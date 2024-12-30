import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/styles.css";

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
      className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6 pl-40"
    >
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
        {/* Top Animated Line */}
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
      </motion.div>
    </section>
  );
};

export default Hero;
