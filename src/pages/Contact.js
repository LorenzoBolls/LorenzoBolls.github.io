import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
      <p className="text-lg text-center mb-4">
        Feel free to reach out to me on any of the platforms below!
      </p>
      <div className="flex flex-col items-center gap-4">
        {/* GitHub Link */}
        <a
          href="https://github.com/LorenzoBolls"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-lg"
        >
          GitHub
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://linkedin.com/in/LorenzoBolls"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-lg"
        >
          LinkedIn
        </a>

        {/* Email */}
        <a
          href="mailto:lorenzobolls@g.ucla.edu"
          className="text-blue-500 hover:underline text-lg"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
