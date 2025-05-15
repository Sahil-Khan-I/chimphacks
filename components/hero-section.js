"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FaGithub, FaDiscord, FaCode, FaLaptopCode, FaReact, FaNodeJs, FaPython, FaCoffee, FaGamepad } from "react-icons/fa"
import { SiOpenai, SiNextdotjs, SiJavascript, SiTailwindcss } from "react-icons/si"
import { useState, useEffect } from "react"

const CODE_SYMBOLS = ["{}", "[]", "()", "</>", "&&", "||", "=>", "import", "const", "function", "return", "if", "for", "while", "#", "//"]

// Tech stack icons that float around
const TECH_ICONS = [
  <FaReact key="react" className="text-blue-400" />,
  <SiNextdotjs key="next" className="text-black dark:text-white" />,
  <FaNodeJs key="node" className="text-green-500" />,
  <FaPython key="python" className="text-yellow-500" />,
  <SiJavascript key="js" className="text-yellow-400" />,
  <SiTailwindcss key="tailwind" className="text-blue-500" />,
  <FaGamepad key="game" className="text-purple-500" />,
  <FaCoffee key="coffee" className="text-amber-700" />
]

export function HeroSection() {
  const [randomElements, setRandomElements] = useState([])
  const [techIcons, setTechIcons] = useState([])

  // Generate random positions only on the client side after component mounts
  useEffect(() => {
    const elements = CODE_SYMBOLS.map((item) => ({
      symbol: item,
      fontSize: `${Math.random() * 20 + 10}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      rotation: Math.random() * 360,
      duration: Math.random() * 8 + 4,
    }))
    setRandomElements(elements)

    const icons = TECH_ICONS.map((icon, index) => ({
      icon,
      size: Math.random() * 20 + 20,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: index * 0.2,
      duration: Math.random() * 10 + 15
    }))
    setTechIcons(icons)
  }, [])

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      {/* Animated code symbols - Only rendered client-side after useEffect runs */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.07]">
        {randomElements.map((item, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-primary font-bold select-none"
            style={{
              fontSize: item.fontSize,
              top: item.top,
              left: item.left,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0.5],
              scale: [0, 1, 0.8],
              rotate: item.rotation
            }}
            transition={{ 
              duration: item.duration,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>

      {/* Tech stack icons floating around */}
      <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
        {techIcons.map((item, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              fontSize: item.size,
              top: item.top,
              left: item.left,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1,
              scale: 1,
              x: [0, 30, -20, 10, 0],
              y: [0, -20, 10, -30, 0],
            }}
            transition={{ 
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
      
      <div className="container relative px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="mb-8 relative inline-block"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -3, 3, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 5 }}
            >
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-2">
                  <span className="text-glitch inline-block" data-text="ChimpHacks">
                    ChimpHacks
                  </span>
                </h1>
                <motion.div 
                  className="absolute -top-6 -right-10 text-2xl transform rotate-12 float"
                >
                  ✨
                </motion.div>
                <motion.div 
                  className="absolute -bottom-2 -left-10 text-2xl transform -rotate-12 float"
                  animate={{ rotate: [-12, -5, -12] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  🚀
                </motion.div>
              </div>
              <p className="text-sm md:text-base font-mono text-muted-foreground">
                <span className="text-primary">$ </span>
                <span className="typing-text">by teens, for everyone</span>
              </p>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              We&apos;re just high schoolers with big ideas! Join our coding sessions and hackathons where we build cool stuff, learn from each other, and have a blast.
            </motion.p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="rounded-full text-base group relative overflow-hidden" asChild>
                  <a href="https://github.com/chimphacks" target="_blank" rel="noopener noreferrer">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative flex items-center gap-2">
                      <FaGithub className="h-5 w-5" />
                      Join Us
                    </span>
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="rounded-full text-base group" asChild>
                  <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer">
                    <span className="relative flex items-center gap-2">
                      <FaDiscord className="h-5 w-5" />
                      Learn More
                    </span>
                  </a>
                </Button>
              </motion.div>
            </div>
            
            {/* Activity badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {[
                { icon: <FaCode className="h-4 w-4" />, text: "Coding", color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" },
                { icon: <FaGamepad className="h-4 w-4" />, text: "Game Dev", color: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300" },
                { icon: <SiOpenai className="h-4 w-4" />, text: "AI", color: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" },
                { icon: <FaLaptopCode className="h-4 w-4" />, text: "Web Dev", color: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300" }
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${badge.color} text-xs font-medium`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                >
                  {badge.icon}
                  {badge.text}
                </motion.div>
              ))}
            </div>
            
            {/* Motivational quote */}
            <motion.div
              className="mt-10 font-mono text-sm rounded-lg border border-dashed border-primary/40 p-3 inline-block mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-bold mr-2">💭</span>
              <span className="italic">Coding is like solving puzzles, but we get to create the puzzles too!</span>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scribble decoration */}
        <motion.div 
          className="absolute -bottom-10 right-0 md:right-10 w-28 h-28 text-primary/40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 10 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
            <path d="M20,50 C20,40 40,30 50,40 C60,50 70,30 80,40" strokeWidth="2" strokeLinecap="round" />
            <path d="M30,60 C40,50 50,70 60,60 C70,50 80,70 70,80" strokeWidth="2" strokeLinecap="round" />
            <path d="M10,30 C20,20 30,40 40,30" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
        
        {/* Pixel art character */}
        <motion.div
          className="absolute bottom-10 left-10 hidden md:block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="w-16 h-16 relative pixel-effect">
            <div className="bg-primary w-4 h-4 absolute top-0 left-6"></div>
            <div className="bg-primary w-4 h-4 absolute top-4 left-2"></div>
            <div className="bg-primary w-4 h-4 absolute top-4 left-6"></div>
            <div className="bg-primary w-4 h-4 absolute top-4 left-10"></div>
            <div className="bg-primary w-4 h-4 absolute top-8 left-2"></div>
            <div className="bg-primary w-4 h-4 absolute top-8 left-6"></div>
            <div className="bg-primary w-4 h-4 absolute top-8 left-10"></div>
            <div className="bg-primary w-4 h-4 absolute top-12 left-6"></div>
          </div>
        </motion.div>
        
        {/* Coding tools decoration */}
        <motion.div
          className="absolute bottom-14 right-14 hidden lg:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <div className="bg-muted/50 backdrop-blur-sm p-3 rounded-lg rotate-12 shadow-lg">
            <div className="flex items-center space-x-1.5 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-1">
              <div className="h-2 w-24 bg-primary/20 rounded"></div>
              <div className="h-2 w-16 bg-primary/30 rounded"></div>
              <div className="h-2 w-20 bg-primary/20 rounded"></div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-muted-foreground font-mono mb-2">Scroll to explore</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  )
} 