import headshot from "../assets/headshot.jpeg";
import { FaPython, FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiCplusplus, SiBootstrap, SiTailwindcss } from "react-icons/si";
import "../styles/about.css";

const About = () => {
  const technologies = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-300" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-500" /> }, 
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> }, 
    { 
      name: "Express.js", 
      icon: <img 
              src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000" 
              alt="Express.js Logo" 
              className="w-8 h-8" 
            />
    },
  ];

  return (
    <div id="about" className="bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-8 text-center">About Me</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Headshot */}
          <img
            src={headshot}
            alt="Lorenzo Headshot"
            className="w-48 h-48 rounded-full shadow-lg"
          />
          {/* About Text */}
          <div className="text-center md:text-left">
            <p className="text-lg text-gray-700 mb-4">
              Hi, I&apos;m Lorenzo, an aspiring software engineer and product manager
              studying Computer Science & Linguistics at UCLA (Go Bruins! 🐻). I&apos;m
              passionate about building creative, user-focused solutions, with
              experience in full-stack web development, data analysis, Git version
              control, and DevOps. My projects reflect my skills in programming,
              UI/UX research, and natural language processing, fueled by a love for
              AI and language technology.
            </p>
            <p className="text-lg text-gray-700">
              As a first-generation Filipino in tech and native San Franciscan, I&apos;m
              dedicated to innovation and inclusivity, bringing a unique perspective
              to every project. 
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
  <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center underline">Skills</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {technologies.map((tech, index) => (
      <div
        key={index}
        className="flex items-center gap-4 p-4 bg-gray-50 shadow-md rounded-lg hover:scale-110 hover:bg-gray-200 transition transform duration-200"
      >
        <div className="text-3xl">{tech.icon}</div>
        <p className="text-lg font-medium">{tech.name}</p>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
};

export default About;
