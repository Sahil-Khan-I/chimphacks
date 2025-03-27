"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsSun, BsMoon } from "react-icons/bs";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    localStorage.setItem('darkMode', !isDarkMode);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative flex flex-col items-center justify-center min-h-screen p-8 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <header className="flex flex-col items-center gap-4 w-full max-w-4xl">
        <div className="w-full flex justify-end">
          <motion.button
            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'} shadow-lg`}
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </motion.button>
        </div>
        <motion.h1
          className={`text-4xl md:text-5xl lg:text-7xl font-extrabold text-center relative z-10`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className={`relative ${isDarkMode ? 'text-yellow-400' : 'text-gray-800'}`}>Chimphacks</span>
        </motion.h1>
      </header>

      <main className="flex flex-col gap-8 items-center w-full px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            className="rounded-full shadow-lg border-4 border-gray-200"
            src="/chimp-logo.png"
            alt="Chimp Hacks logo"
            width={180}
            height={180}
            priority
          />
        </motion.div>
        
        <p className="text-xl text-center max-w-lg">
          Join us for exciting coding sessions, hackathons, and more! Let's innovate together as part of the Hack Club community.
        </p>

        {/* Vision Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-200 bg-opacity-80 backdrop-blur-lg text-gray-900 rounded-lg p-6 shadow-md w-full max-w-md"
        >
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p>
            At Chimp Hacks, we strive to ignite creativity and collaboration among young coders. Our mission is to create a vibrant platform for learning, sharing, and building innovative projects together.
          </p>
        </motion.section>

        {/* Members Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-gray-200 bg-opacity-80 backdrop-blur-lg text-gray-900 rounded-lg p-6 shadow-md w-full max-w-md mt-6"
        >
          <h2 className="text-3xl font-semibold mb-4">Our Members</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Om Bhande</li>
            <li>Shubham Khatane</li>
            <li>Sahil Khan (Club Leader)</li>
          </ul>
        </motion.section>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 font-semibold transition-transform transform hover:scale-110 shadow-lg"
            href="https://github.com/chimphacks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Us
          </a>
          <a
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 font-semibold transition-transform transform hover:scale-110 shadow-lg"
            href="https://hackclub.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <motion.a
          whileHover={{ scale: 1.05 }}
          className={`flex items-center gap-2 hover:underline hover:underline-offset-4 ${
            isDarkMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-800 hover:text-blue-600'
          }`}
          href="https://www.linkedin.com/in/sahil-khan-indie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin aria-hidden />
          LinkedIn
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          className={`flex items-center gap-2 hover:underline hover:underline-offset-4 ${
            isDarkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-800 hover:text-green-600'
          }`}
          href="https://solobusinessbrief.beehiiv.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope aria-hidden />
          Newsletter
        </motion.a>
      </footer>
    </motion.div>
  );
}
