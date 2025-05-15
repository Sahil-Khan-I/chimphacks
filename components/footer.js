"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord, FaInstagram, FaTiktok } from "react-icons/fa"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  return (
    <footer className="relative pt-16 pb-8 border-t overflow-hidden" id="contact">
      {/* Blob decoration */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[600px] h-[200px] pointer-events-none opacity-20 dark:opacity-10">
        <svg viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.7231 44.3601C95.8524 -16.0697 165.868 3.38738 255.741 7.10561C345.615 10.8238 414.617 -8.93254 480.54 51.2603C546.462 111.453 601.69 216.799 525.382 176.915C449.073 137.031 443.108 200.537 361.088 197.056C279.068 193.576 189.895 199.073 117.391 164.222C44.8879 129.371 -34.4063 104.79 30.7231 44.3601Z" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="container px-4 relative">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-7 gap-y-8 md:gap-x-8 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* About */}
          <motion.div className="col-span-1 md:col-span-3" variants={itemVariants}>
            <div className="font-bold text-2xl mb-4 flex items-center gap-2">
              ChimpHacks <span className="text-primary text-3xl">🐵</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              A collective of teen developers making cool things together. We believe in learning by doing, 
              helping each other out, and having fun along the way!
            </p>
            <div className="flex space-x-3">
              {[
                { icon: <FaGithub />, href: "https://github.com/chimphacks", label: "GitHub" },
                { icon: <FaDiscord />, href: "https://discord.com", label: "Discord" },
                { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
                { icon: <FaTiktok />, href: "https://tiktok.com", label: "TikTok" }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Links */}
          <motion.div className="col-span-1 md:col-span-2" variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 inline-flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Projects", href: "#projects" },
                { name: "Team", href: "#team" },
                { name: "Join Us", href: "https://github.com/chimphacks" },
                { name: "Hack Club", href: "https://hackclub.com" }
              ].map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <span className="inline-block w-0 group-hover:w-2 transition-all duration-300 h-[1px] bg-primary"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div className="col-span-1 md:col-span-2" variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 inline-flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
              <span>Get in Touch</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-primary">
                  <FaEnvelope size={14} />
                </div>
                <a 
                  href="mailto:hello@chimphacks.com" 
                  className="hover:text-primary transition-colors"
                >
                  hello@chimphacks.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-primary">
                  <FaDiscord size={14} />
                </div>
                <a 
                  href="https://discord.com" 
                  className="hover:text-primary transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Join our Discord server
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        <div className="mt-10 pt-6 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm text-muted-foreground"
            >
              <p className="flex flex-wrap items-center justify-center md:justify-start gap-1">
                © {currentYear} ChimpHacks. Made with
                <span className="inline-block animate-pulse text-red-500">❤️</span>
                by teens.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full font-mono"
            >
              {/* TODO: Conquer the world with code */}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
} 