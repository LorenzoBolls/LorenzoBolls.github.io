import "../styles/styles.css";
import { motion, useMotionValue, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import californiaMap from "../assets/California-Map.png"; // Dynamically import the image


const FoldMap = () => {
   const xDrag = useMotionValue(0);
   const [isFolded, setIsFolded] = useState(true);
   const [selectedDot, setSelectedDot] = useState(null);


   const xLeftSection = useTransform(xDrag, [0, 300], ["100%", "0%"]);
   const xRightSection = useTransform(xDrag, [0, 300], ["-100%", "0%"]);
   const centerScale = useTransform(xDrag, [150, 300], [0, 1]);
   const centerBrightness = useTransform(xDrag, [150, 300], [0.2, 1]);

   const [nextDot, setNextDot] = useState(null);

   useMotionValueEvent(xDrag, "change", (currentX) => {
       if (currentX > 260) {
           setIsFolded(false);
       } else {
           setIsFolded(true);
       }
   });


    const handleDotClick = (job, defaultPositions, responsivePositions) => {
        const screenWidth = window.innerWidth;

        // Determine the correct position based on screen size
        let positions;
        if (screenWidth >= 1024) {
            positions = defaultPositions.lg;
        } else if (screenWidth >= 768) {
            positions = responsivePositions.md;
        } else if (screenWidth >= 640) {
            positions = responsivePositions.sm;
        } else {
            positions = defaultPositions.default;
        }

        // If a popup is already open, set the nextDot and close the current one
        if (selectedDot) {
            setNextDot({ job, ...positions });
            setSelectedDot(null);
        } else {
            // If no popup is open, open the clicked popup immediately
            setSelectedDot({ job, ...positions });
        }
    };

    const handleExitComplete = () => {
        if (nextDot) {
            setSelectedDot(nextDot); // Open the next popup
            setNextDot(null); // Clear nextDot
        }
    };


   const locationDetails = {
       "Grosvenor (Summer 2024)": [
           "Conducted a market study for 9 Bay Area counties.",
           "Audited webpages for 40 properties, ensuring accurate and standardized formatting.",
           "Identified and analyzed financial variances across properties."
       ],
       "PLF (Sep 2023 - Present)": [
           "Led collaborative learning sessions for 60+ students in PhySci 5.",
           "Spearhead student success, leading to an average grade of 95% among students.",
           "Organize biweekly lesson plans, worksheets, and Google slides based on Prof. Esdin’s curriculum."
       ],
       "CRUX (Sep 2022 - June 2023)": [
           "Designed UX/UI for a brain-controlled dating app using EEG data.",
           "Employed EEG brain scans to derive a personalized attractiveness algorithm for finding matches",
           "Presented project findings at the 2023 CA Neurotechnology Conference to an audience of 350",

       ],
   };


   return (
       <div className="overflow-x-clip relative">


           {/* Main container for the folding map */}
           <motion.div
               animate={isFolded ? "folded" : "open"}
               variants={{
                   open: { scale: 1 },
                   folded: { scale: 0.9 },
               }}
               initial="folded"
           >
               <motion.div
                   variants={{ open: { rotate: 0 }, hovering: { rotate: 0 } }}
                   whileHover="hovering"
                   initial={{ rotate: 3 }}
                   className="mx-auto grid aspect-video max-h-[70vh] max-w-[70vw] p-8 relative"
               >
                   <div className="grid h-full w-full grid-cols-3 [grid-area:1/1]">
                       {/* Left Column */}
                       <motion.div
                           className="bg-no-repeat bg-[size:300%] -skew-y-1 origin-bottom-right border-r border-[rgba(255,255,255,.1)] shadow-2xl"
                           style={{
                               x: xLeftSection,
                               skewY: "-1deg",
                               backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 30%), url(${californiaMap})`,
                               backgroundPosition: "left 76%",
                           }}
                       />
                       {/* Center Column */}
                       <motion.div
                           className="bg-no-repeat bg-[size:300%] brightness-[--brightness]"
                           style={{
                               scaleX: centerScale,
                               "--brightness": centerBrightness,
                               backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 30%), url(${californiaMap})`,
                               backgroundPosition: "0% 33.3%, 50% 76%",
                           }}
                       />
                       {/* Right Column */}
                       <motion.div
                           className="bg-no-repeat bg-[size:300%] skew-y-1 origin-bottom-left border-l border-[rgba(255,255,255,.1)] shadow-2xl"
                           style={{
                               x: xRightSection,
                               skewY: "1deg",
                               backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 30%), url(${californiaMap})`,
                               backgroundPosition: "0% 66.6%, 100% 76%",
                           }}
                       />
                   </div>


                   <motion.div
                       drag="x"
                       _dragX={xDrag}
                       dragConstraints={{ left: 0, right: 300 }}
                       dragTransition={{
                           modifyTarget: (target) => {
                               return target > 150 ? 300 : 0;
                           },
                           timeConstant: 45,
                       }}
                       className="relative z-10 [grid-area:1/1] cursor-grab active:cursor-grabbing"
                   />
               </motion.div>


           {/* Paragraph */}
              <motion.div
                  variants={{
                      folded: {
                          opacity: 0,
                          scale: 0.9,
                          y: 30,
                      },
                      open: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                      },
                  }}
                  className="flex w-full justify-center text-xl font-semibold md:text-4xl"
              >
                  <p className="rounded-2xl bg-white px-12 py-5 shadow-lg">
                      Click on the Red Dots 🔴
                  </p>
              </motion.div>
              <motion.div
                  variants={{
                      folded: {
                       opacity: 1,
                       scale: 1,
                       y: 0,
                      },
                      open: {
                       opacity: 0,
                       scale: 0.9,
                       y: 30,
                      },
                  }}
                  className="flex w-full justify-center text-xl font-semibold md:text-4xl"
              >
                  <p className="rounded-2xl bg-white px-12 py-5 shadow-lg">
                      Drag to the right to see my experiences!
                  </p>
              </motion.div>




               {/* TEST RED DOTS */ }
               {/* SF - Grosvenor*/}
               <motion.div
                   variants={{
                       folded: {
                           opacity: 0,
                           scale: 0,
                       },
                       open: {
                           opacity: 1,
                           scale: 1,
                       },
                   }}
                    onClick={() =>
                        handleDotClick(
                            "Grosvenor (Summer 2024)",
                            {
                                default: { top: "10%", left: "31%" }, // Default position for xs
                                lg: { top: "10%", left: "32%" },
                            },
                            {
                                md: { top: "10%", left: "30.5%" },
                                sm: { top: "10%", left: "31.5%" },
                            }
                        )
                    }
                   initial="folded"
                   animate={isFolded ? "folded" : "open"}
                   transition={isFolded ? { duration: 0.1 } : {
                       delay: 0.3,
                       duration: 0.2,
                       ease: "easeInOut",
                   }}
                   className="absolute rounded-full bg-red-500 w-3 h-3 lg:w-5 lg:h-5 z-50 cursor-pointer shadow-lg 
                   top-[10%] left-[31%] 
                   sm:top-[10%] sm:left-[31.5%] 
                   md:top-[10%] md:left-[30.5%] 
                   lg:top-[10%] lg:left-[30.5%]"
               ></motion.div>


               {/* LA - UCLA CRUX */}
               <motion.div
                   variants={{
                       folded: {
                           opacity: 0,
                           scale: 0,
                       },
                       open: {
                           opacity: 1,
                           scale: 1,
                       },
                   }}
                   onClick={() =>
                    handleDotClick(
                        "CRUX (Sep 2022 - June 2023)",
                        { lg: { top: "20%", left: "38%" } },
                        { md: { top: "0%", left: "20%" }, sm: { top: "53%", left: "53%" } },
                        {default: { top: "0%", left: "25%" } },
                    )
                }
                   initial="folded"
                   animate={isFolded ? "folded" : "open"}
                   transition={isFolded ? { duration: 0.1 } : {
                       delay: 0.3,
                       duration: 0.2,
                       ease: "easeInOut",
                   }}
                   className="absolute rounded-full bg-red-500 w-3 h-3 lg:w-5 lg:h-5 z-50 cursor-pointer shadow-lg
                   top-[47%] left-[53%]
                   sm:top-[48%] sm:left-[53%]
                   md:top-[55%] md:left-[54%]
                   lg:top-[65%] lg:left-[54%]"
               ></motion.div>


               {/* LA - PLF */}
               <motion.div
                   variants={{
                       folded: {
                           opacity: 0,
                           scale: 0,
                       },
                       open: {
                           opacity: 1,
                           scale: 1,
                       },
                   }}
                   onClick={() =>
                    handleDotClick(
                        "PLF (Sep 2023 - Present)",
                        { lg: { top: "20%", left: "68%" } },
                        { md: { top: "0%", left: "80%" }, sm: { top: "53%", left: "56%" } },
                        {default: { top: "0%", left: "25%" } },
                    )
                }
                   initial="folded"
                   animate={isFolded ? "folded" : "open"}
                   transition={isFolded ? { duration: 0.1 } : {
                       delay: 0.3,
                       duration: 0.2,
                       ease: "easeInOut",
                   }}
                   className="absolute rounded-full bg-red-500 w-3 h-3 lg:w-5 lg:h-5 z-50 cursor-pointer shadow-lg
                   top-[47%] left-[56%]
                   sm:top-[48%] sm:left-[56%]
                   md:top-[55%] md:left-[56%]
                   lg:top-[65%] lg:left-[56%]"
               ></motion.div>




                {/* Panel for Job Details */}
                <AnimatePresence onExitComplete={handleExitComplete}>
                {!isFolded && selectedDot && (
                    <motion.div
                        key={selectedDot.job} // Unique key for AnimatePresence
                        className="absolute bg-white p-4 rounded-lg shadow-2xl z-50"
                        style={{
                            top: `calc(${selectedDot.top})`, // Position vertically aligned with the dot
                            left: `calc(${parseFloat(selectedDot.left) > 50 ? `${selectedDot.left} - 200px` : `${selectedDot.left} + 20px`})`, // Dynamically adjust left/right placement
                            transform: "translateY(-50%)", // Keep vertical alignment centered
                            maxWidth: "300px", // Set a max width to prevent overly wide popups
                            width: "clamp(200px, 30vw, 300px)", // Make the width dynamic based on screen size
                        }}
                        initial={{ opacity: 0, scale: 0.9 }} // Starting animation
                        animate={{ opacity: 1, scale: 1 }}  // Active animation
                        exit={{ opacity: 0, scale: 0.9 }}   // Exit animation
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <h3 className="text-lg font-bold">{selectedDot.job}</h3>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            {locationDetails[selectedDot.job].map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                        <button
                            className="mt-4 text-blue-500 underline"
                            onClick={() => setSelectedDot(null)} // Trigger exit
                        >
                            Close
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>


            </motion.div>
        </div>
    );
    };


export default FoldMap;



