"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { FaGithub, FaDiscord } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b"
    >
      <div className="container flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center gap-2 z-50">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            { name: "Home", href: "/" },
            { name: "Projects", href: "#projects" },
            { name: "Team", href: "#team" },
            { name: "Contact", href: "#contact" }
          ].map((item, i) => (
            <Link 
              key={i}
              href={item.href} 
              className="font-medium transition-colors hover:text-primary relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2 z-50">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
            <a 
              href="https://github.com/chimphacks" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
            <a 
              href="https://discord.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <FaDiscord className="h-4 w-4" />
            </a>
          </Button>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden h-8 w-8 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex flex-col justify-center ${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0, 
          y: mobileMenuOpen ? 0 : -20 
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col items-center justify-center space-y-6 p-6">
          {[
            { name: "Home", href: "/" },
            { name: "Projects", href: "#projects" },
            { name: "Team", href: "#team" },
            { name: "Contact", href: "#contact" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.1 }}
            >
              <Link 
                href={item.href}
                className="text-2xl font-bold hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4"
          >
            <ThemeToggle />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="mt-8 font-mono text-sm text-muted-foreground"
          >
            <span className="text-primary">&gt;</span> Join the coding adventure!
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  )
} 