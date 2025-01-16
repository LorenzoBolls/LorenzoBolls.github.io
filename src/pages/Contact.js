import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(email));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isEmailValid) {
      console.error("Invalid email address");
      return;
    }
  
    setIsSending(true);
  
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Message Sent:", result.text);
          setMessageSent(true);
          setIsSending(false); // Reset isSending after success
        },
        (error) => {
          console.error("Error Sending Message:", error.text);
          setIsSending(false); // Reset isSending after failure
        }
      );
  
    e.target.reset(); // Reset the form
  };
  

  return (
    <motion.div
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center p-6 text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl font-extrabold text-black mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        className="text-lg text-center mb-6 text-black"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Feel free to reach out via the form below or through my social platforms!
      </motion.p>

      {/* Social Links */}
      <motion.div
        className="flex gap-6 mb-10 text-3xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a
          href="https://github.com/LorenzoBolls"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaGithub className="text-black" />
        </a>
        <a
          href="https://linkedin.com/in/LorenzoBolls"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaLinkedin className="text-blue-400" />
        </a>
        <a
          href="mailto:lorenzobolls@g.ucla.edu"
          className="hover:scale-110 transition-transform"
        >
          <FaEnvelope className="text-red-500" />
        </a>
      </motion.div>

      {/* Email Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-6 bg-white border-black border-2 p-4 sm:p-6 lg:p-8 rounded-lg w-[90%] max-w-md sm:max-w-lg lg:max-w-4xl shadow-lg mx-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {/* Name Input */}
        <label className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="from_name" 
          className="p-2 rounded bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base lg:text-lg"
          placeholder="Your name"
          required
        />
        {/* Email Input */}
        <label className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700">Email</label>
        <input
          type="email"
          name="user_email"
          className="p-2 rounded bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base lg:text-lg"
          placeholder="Your email"
          onChange={(e) => validateEmail(e.target.value)}
          required
        />

        {/* Message Input */}
        <label className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700">Your Message</label>
        <textarea
          name="message"
          className="p-2 rounded bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base lg:text-lg"
          placeholder="Your message"
          rows="5"
          required
        />

        {/* Submit Button */}
        <button
        type="submit"
        className="btn bg-white text-black text-base sm:text-lg lg:text-xl py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 border-black border-2 rounded shadow-md hover:bg-black hover:text-white transition-all duration-200"
        disabled={isSending}
      >
        {isSending ? "Sending..." : "Submit"}
      </button>
      </motion.form>


      {/* Success Message */}
      {messageSent && (
        <motion.p
          className="mt-4 text-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Thank you! Your message has been sent.
        </motion.p>
      )}
    </motion.div>
  );
};

export default Contact;
