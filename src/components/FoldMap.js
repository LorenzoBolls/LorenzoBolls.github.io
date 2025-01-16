import "../styles/styles.css";
import { motion, useMotionValue, useTransform, useMotionValueEvent } from "framer-motion";
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

    useMotionValueEvent(xDrag, "change", (currentX) => {
        if (currentX > 260) {
            setIsFolded(false);
        } else {
            setIsFolded(true);
        }
    });

    const locationDetails = {
        Grosvenor: [
            "Conducted a market study for 9 Bay Area counties.",
            "Audited webpages for 40 properties, ensuring accurate and standardized formatting.",
            "Identified and analyzed financial variances across properties."
        ],
        PLF: [
            "Led collaborative learning sessions for 12 students in PhySci 5.",
            "Achieved an average grade of 95% among students.",
            "Developed lesson plans and materials to enhance engagement and success."
        ],
        CRUX: [
            "Designed UX/UI for a brain-controlled dating app using EEG data.",
            "Presented project findings at the CA Neurotechnology Conference.",
            "Created infographics for 'Assessing Arousal with EEG."
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
                       Click on the Red Dots!
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
                        setSelectedDot({ job: "Grosvenor", top: "10%", left: "30.5%" })
                    }
                    initial="folded"
                    animate={isFolded ? "folded" : "open"}
                    transition={isFolded ? { duration: 0.1 } : {
                        delay: 0.3,
                        duration: 0.2,
                        ease: "easeInOut",
                    }}
                    className="absolute rounded-full bg-red-500 w-5 h-5 z-50 cursor-pointer shadow-lg"
                    style={{
                        top: "10%", 
                        left: "30.2%", 
                    }}
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
                        setSelectedDot({ job: "CRUX", top: "70%", left: "54%" })
                    }
                    initial="folded"
                    animate={isFolded ? "folded" : "open"}
                    transition={isFolded ? { duration: 0.1 } : {
                        delay: 0.3,
                        duration: 0.2,
                        ease: "easeInOut",
                    }}
                    className="absolute rounded-full bg-red-500 w-5 h-5 z-50 cursor-pointer shadow-lg"
                    style={{
                        top: "70%",
                        left: "54%", 
                    }}
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
                        setSelectedDot({ job: "PLF", top: "70%", left: "56%" })
                    }
                    initial="folded"
                    animate={isFolded ? "folded" : "open"}
                    transition={isFolded ? { duration: 0.1 } : {
                        delay: 0.3,
                        duration: 0.2,
                        ease: "easeInOut",
                    }}
                    className="absolute rounded-full bg-red-500 w-5 h-5 z-50 cursor-pointer shadow-lg"
                    style={{
                        top: "70%",
                        left: "56%", 
                    }}
                ></motion.div>


            {/* Panel for Job Details */}
            {selectedDot && !isFolded && (
                <motion.div
                    className="absolute bg-white p-4 rounded-lg shadow-2xl z-50"
                    style={{
                        top: `calc(${selectedDot.top})`, // Position vertically aligned with the dot
                        left: `calc(${parseFloat(selectedDot.left) > 50 ? `${selectedDot.left} - 200px` : `${selectedDot.left} + 20px`})`, // Dynamically adjust left/right placement
                        transform: "translateY(-50%)", // Keep vertical alignment centered
                        maxWidth: "300px", // Set a max width to prevent overly wide popups
                        width: "clamp(200px, 30vw, 300px)", // Make the width dynamic based on screen size
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                >
                    <h3 className="text-lg font-bold">{selectedDot.job}</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        {locationDetails[selectedDot.job].map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                    <button
                        className="mt-4 text-blue-500 underline"
                        onClick={() => setSelectedDot(null)}
                    >
                        Close
                    </button>
                </motion.div>
            )}

            </motion.div>
        </div>
    );
};

export default FoldMap;
