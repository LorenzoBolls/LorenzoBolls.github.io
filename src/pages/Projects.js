import { motion } from "framer-motion";
import BruinMatesPhoto from "../assets/Bruin-Mates-Photo.png";
import BlinkTranslatorPhoto from "../assets/Blink-Translator-Photo.png";
import PrecisionRevisionPhoto from "../assets/Precision-Revision-Photo.png";

const projectsData = [
  {
    title: "Bruin Mates",
    description:
      "A MERN stack web app designed to help UCLA students find compatible roommates based on preferences and living habits.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: BruinMatesPhoto,
    links: {
      github: "https://github.com/thenagh2005/Bruin-Mates",
    },
  },
  {
    title: "Precision Revision",
    description:
      "A C++ file revision system that optimizes file storage using hashing algorithms, reducing file size by 92%.",
    technologies: ["C++"],
    image: PrecisionRevisionPhoto,
    links: {
      github: "https://github.com/LorenzoBolls/Revision",
    },
  },
  {
    title: "Blink Translator",
    description:
      "A Python application that translates blinks into Morse Code and converts them into spoken text using OpenCV and pyttsx3. The project empowers individuals with paralysis to communicate by leveraging real-time facial recognition and text-to-speech technology.",
    technologies: ["Python", "OpenCV", "Pyttsx3"],
    image: BlinkTranslatorPhoto,
    links: {
      github: "https://github.com/LorenzoBolls/Blink-Translator",
      demo: "https://youtu.be/vT8nqBtlH10", // Replace YOUR_VIDEO_ID with the actual video ID
    },
  },
];

const Projects = () => {
  return (
    <div id="projects" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-12 text-center">
          My Projects
        </h1>
        <motion.div
          className="flex flex-col gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white border-black border-2 shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-6 hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full md:w-1/3 h-50 object-cover rounded-md"
              />
              {/* Project Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-800 text-sm font-medium py-1 px-2 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:underline"
                    >
                      Demo Video
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
