"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord, FaCode, FaServer, FaLaptopCode } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { HiSparkles } from "react-icons/hi"

const teamMembers = [
  {
    name: "Sahil Khan",
    title: "Club Leader & Code Wizard",
    bio: "Building cool stuff since middle school. Loves hackathons, AI, and staying up way too late debugging.",
    emoji: "🚀",
    icon: <FaCode className="h-10 w-10" />,
    iconBg: "bg-gradient-to-br from-blue-500 to-purple-500",
    social: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/sahil-khan-indie/",
      twitter: "https://twitter.com",
      discord: "https://discord.com"
    }
  },
  {
    name: "Om Bhande",
    title: "Core Member & UI Guru",
    bio: "Turns coffee into beautiful interfaces. Will debate about React vs Svelte for hours if you let him.",
    emoji: "✨",
    icon: <FaLaptopCode className="h-10 w-10" />,
    iconBg: "bg-gradient-to-br from-pink-500 to-orange-400",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      discord: "https://discord.com"
    }
  },
  {
    name: "Shubham Khatane",
    title: "Core Member & Backend Ninja",
    bio: "Database whisperer who makes our servers run smoothly. Loves to mentor new coders and play video games.",
    emoji: "💻",
    icon: <FaServer className="h-10 w-10" />,
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-400",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      discord: "https://discord.com"
    }
  }
]

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

export function TeamSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="team">
      {/* Fun background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0ycTAgMC0uNSAwdC0uNSAwLS41IDAtLjUgMGgtMnYtMWgycTAgMCAuNSAwdC41IDAgLjUgMCAuNSAwdjF6bTgtMnYxaC0xMHYtMWgxMHptLTE0IDJoMnYxaC0ydi0xem0wLTJoMnYxaC0ydi0xem0tNCAxMnYxaC0ydi0xaC0ydi0xaDJ2LTJoMnYtaC0ydi0xaDItMXYtMWgtMnY2aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      </div>
      
      <div className="container px-4 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">The Squad</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            The awesome humans behind ChimpHacks. We&apos;re just regular teens who love to code!
          </p>
          
          <div className="mt-4 flex justify-center">
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 10
              }}
            >
              <div className="px-3 py-1 rounded-full border border-primary bg-primary/5 font-mono text-sm">
                <span className="mr-2">$</span> looking for teammates...
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { 
                  type: "spring", 
                  stiffness: 300,
                  damping: 10 
                }
              }}
            >
              <Card className="overflow-hidden h-full relative border-2 border-muted hover:border-primary/30 transition-all">
                {/* Member emoji */}
                <div className="absolute top-4 right-4 text-2xl z-10">
                  {member.emoji}
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-primary/80 text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                    {index === 0 ? "LEADER" : "CORE"}
                  </span>
                </div>
                
                <div className="aspect-square relative overflow-hidden group flex items-center justify-center">
                  <div className={`w-32 h-32 rounded-full ${member.iconBg} shadow-lg p-6 text-white`}>
                    {member.icon}
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute inset-0 w-full h-full">
                    <svg className="absolute opacity-10" width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="85" cy="20" r="2" fill="currentColor" />
                      <circle cx="10" cy="40" r="2" fill="currentColor" />
                      <circle cx="50" cy="70" r="2" fill="currentColor" />
                      <circle cx="70" cy="80" r="2" fill="currentColor" />
                      <circle cx="20" cy="20" r="2" fill="currentColor" />
                      <path d="M10,10 L20,20 M30,30 L40,40 M60,60 L70,70 M80,80 L90,90" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl md:text-2xl font-bold">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pb-2">
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
                
                <CardFooter className="flex flex-wrap gap-2 pt-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-primary/10" asChild>
                    <a 
                      href={member.social.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FaGithub className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-primary/10" asChild>
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-primary/10" asChild>
                    <a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <FaTwitter className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-primary/10" asChild>
                    <a 
                      href={member.social.discord} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Discord"
                    >
                      <FaDiscord className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Join the team call-to-action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="inline-block p-6 rounded-lg border-2 border-dashed border-primary/40 bg-primary/5 max-w-lg mx-auto">
            <span className="inline-block mb-4 text-3xl">🤝</span>
            <h3 className="text-xl font-bold mb-2">Be Part of Something Cool</h3>
            <p className="mb-4 text-muted-foreground">
              Whether you&apos;ve been coding for years or just starting out, we&apos;d love to have you join us! 
              No interviews or applications - just come hang out.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button className="rounded-full" asChild>
                <a href="https://github.com/chimphacks" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="mr-2 h-4 w-4" />
                  Join on GitHub
                </a>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a href="https://discord.gg/hackclub" target="_blank" rel="noopener noreferrer">
                  <FaDiscord className="mr-2 h-4 w-4" />
                  Chat on Discord
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
        
        {/* Fun decorative element */}
        <motion.div 
          className="absolute -bottom-10 right-10 w-24 h-24 text-primary/20 hidden md:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, rotate: [0, 15, 0], scale: [0.9, 1.1, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,50 C30,30 70,30 80,50 C70,70 30,70 20,50 Z" stroke="currentColor" strokeWidth="2" />
            <path d="M50,20 C70,30 70,70 50,80 C30,70 30,30 50,20 Z" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
} 