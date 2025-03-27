"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaRocket, FaLink, FaCheck, FaHeart, FaSmile, FaStar, FaMagic, FaRegLightbulb } from "react-icons/fa";
import { auth, db } from "../firebaseConfig"; // Updated import to use the initialized services from firebaseConfig.js
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [agreeToEmails, setAgreeToEmails] = useState(false);
  const [agreeToSoloBusiness, setAgreeToSoloBusiness] = useState(false);

  useEffect(() => {
    // Fetch subscriber count on component mount
    const fetchSubscriberCount = async () => {
      const querySnapshot = await getDocs(collection(db, "subscribers"));
      setSubscriberCount(querySnapshot.size);
    };
    fetchSubscriberCount();
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !agreeToEmails || !agreeToSoloBusiness) return;

    try {
      // Check if the email already exists
      const q = query(collection(db, "subscribers"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        alert("This email is already subscribed.");
        return;
      }

      await addDoc(collection(db, "subscribers"), {
        email,
        subscribedAt: new Date().toISOString(), // Use ISO string to avoid locale issues
        darkModePreference: darkMode
      });
      setSubscribed(true);
      setSubscriberCount(prev => prev + 1);
      setEmail("");
    } catch (error) {
      console.error("Error adding subscriber: ", error);
    }
  };

  const handleBuyMailList = () => {
    if (subscriberCount < 100) {
      alert("The mail list will be available once we reach 100 supporters! Currently we have " + subscriberCount + " supporters.");
      return;
    }
  };

  // Optimized animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonHover = {
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-300 font-sans ${
        darkMode ? "bg-slate-900 text-gray-100" : "bg-amber-50 text-gray-900"
      }`}
    >
      {/* Theme Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 px-4 py-2 rounded-full shadow-lg transition-colors text-sm border-2 ${
          darkMode ? "bg-amber-400 text-gray-900 hover:bg-amber-300 border-amber-500" : "bg-indigo-600 text-white hover:bg-indigo-700 border-indigo-700"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </motion.button>

      {/* Hero Section */}
      <section className="text-center max-w-5xl space-y-8 font-semibold relative">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className={`inline-block px-6 py-2 text-xs uppercase tracking-widest font-bold rounded-full shadow-lg border-2 ${
            darkMode ? "bg-amber-400 text-gray-900 border-amber-500" : "bg-indigo-200 text-indigo-900 border-indigo-300"
          }`}
        >
          <FaSmile className="inline mr-2" /> Join {subscriberCount}+ Happy Supporters
        </motion.div>

        <motion.div
          className="absolute -z-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className={`text-6xl md:text-7xl font-extrabold leading-tight ${darkMode ? "text-indigo-400" : "text-indigo-600"} pixel-font`}
        >
          Level Up Your Product Launch
        </motion.h1>
        
        <motion.p 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}
        >
          Join our <span className="font-bold text-indigo-600">awesome arcade</span> of Product Hunt champions and watch your launch hit the high score! <FaStar className="inline text-amber-400" />
        </motion.p>

        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
        >
          <motion.button
            variants={buttonHover}
            whileHover="hover"
            whileTap="tap"
            onClick={handleBuyMailList}
            className={`group px-12 py-5 text-lg font-bold rounded-full shadow-xl transition-colors border-2 ${
              darkMode ? "bg-indigo-600 text-white hover:bg-indigo-700 border-indigo-500" : "bg-indigo-600 text-white hover:bg-indigo-700 border-indigo-500"
            }`}
          >
            <span className="flex items-center gap-2">
              Buy Mail List of People Who Will Support <FaMagic className="group-hover:rotate-12 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </section>

      {/* Social Proof */}
      <motion.section 
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="mt-20 text-center"
      >
        <p className={`text-sm uppercase tracking-wider mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          <FaRegLightbulb className="inline mr-2" /> Trusted by awesome makers from
        </p>
        <div className="flex flex-wrap justify-center gap-8 opacity-70">
          {["/company1.svg", "/company2.svg", "/company3.svg"].map((src, i) => (
            <motion.img 
              key={i}
              src={src}
              alt={`Company ${i + 1}`}
              className="h-8 pixelated"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </motion.section>

      {/* Join as Supporter Section */}
      <section id="join" className="text-center mt-24 max-w-6xl w-full">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className={`p-12 rounded-3xl transition-colors border-2 ${
            darkMode ? "bg-slate-800/50 backdrop-blur-lg border-slate-700" : "bg-white/90 backdrop-blur-lg border-indigo-200"
          }`}
        >
          <h3 className={`text-4xl font-bold mb-8 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}>
            Join Our Supportive Community <FaSmile className="inline" />
          </h3>
          <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
            <motion.form onSubmit={handleSubscribe} className="w-full">
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`w-full p-4 rounded-full text-lg border-2 shadow-sm focus:ring-4 transition-colors ${
                  darkMode 
                    ? "bg-slate-800 border-slate-700 focus:border-indigo-500 focus:ring-indigo-500/20" 
                    : "bg-white border-indigo-200 focus:border-indigo-500 focus:ring-indigo-500/20"
                }`}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                required
              />
              <label className={`flex items-center gap-3 text-sm mt-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                <input 
                  type="checkbox" 
                  className="w-5 h-5 rounded border-gray-300" 
                  checked={agreeToEmails}
                  onChange={() => setAgreeToEmails(!agreeToEmails)}
                  required
                />
                <span>You agree to get mails from people seeking support</span>
              </label>
              <label className={`flex items-center gap-3 text-sm mt-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                <input 
                  type="checkbox" 
                  className="w-5 h-5 rounded border-gray-300" 
                  checked={agreeToSoloBusiness}
                  onChange={() => setAgreeToSoloBusiness(!agreeToSoloBusiness)}
                  required
                />
                <span>Subscribe me to SoloBusiness Brief</span>
              </label>
              <motion.button
                type="submit"
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                className={`w-full mt-6 px-8 py-4 font-bold rounded-full shadow-xl transition-colors text-lg border-2 ${
                  darkMode 
                    ? "bg-amber-400 text-gray-900 hover:bg-amber-300 border-amber-500" 
                    : "bg-indigo-200 text-indigo-900 hover:bg-indigo-300 border-indigo-300"
                }`}
              >
                {subscribed ? (
                  <>
                    Joined! <FaCheck className="inline ml-2" />
                  </>
                ) : (
                  <>
                    Join Community <FaStar className="inline ml-2" />
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="text-center mt-24 max-w-6xl">
        <h3 className={`text-4xl font-bold mb-12 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}>
          The Supvote Power-Ups
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Launch Champions", 
              desc: "Team up with active supporters for epic Product Hunt victories", 
              icon: <FaRocket className={darkMode ? "text-indigo-400" : "text-indigo-600"} /> 
            },
            { 
              title: "Easy Networking", 
              desc: "Connect directly with our supportive community members", 
              icon: <FaMagic className={darkMode ? "text-amber-400" : "text-amber-500"} /> 
            },
            { 
              title: "Maker Network", 
              desc: "Join our thriving community of Product Hunt creators", 
              icon: <FaHeart className={darkMode ? "text-rose-400" : "text-rose-600"} /> 
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className={`p-8 rounded-2xl shadow-lg transition-colors border-2 ${
                darkMode ? "bg-slate-800/50 border-slate-700" : "bg-white border-indigo-200"
              }`}
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h4 className="font-bold mb-3 text-2xl">{feature.title}</h4>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={`mt-24 text-center text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        <p>© 2025 Supvote. Game Over? Never! <FaSmile className="inline" /></p>
        <div className="flex justify-center gap-6 mt-4">
          {["Terms", "Privacy", "Contact"].map((item, i) => (
            <motion.a
              key={i}
              href="#"
              className="hover:text-indigo-500 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </footer>
    </div>
  );
}
