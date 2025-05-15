"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Code, Globe, Users, Lightbulb } from "lucide-react"
import { FaRobot, FaGamepad, FaLaptopCode, FaBrain } from "react-icons/fa"

const features = [
  {
    icon: <FaLaptopCode className="h-7 w-7" />,
    title: "Code & Chill",
    description: "Regular hangouts to learn new tech, solve problems together, and share what we've built - zero judgment, all support!",
    color: "from-blue-500 to-cyan-500",
    emoji: "💻"
  },
  {
    icon: <FaGamepad className="h-7 w-7" />,
    title: "Game Jams",
    description: "Build awesome games in 48hrs with new friends. No experience needed - just imagination and caffeine!",
    color: "from-purple-500 to-pink-500",
    emoji: "🎮"
  },
  {
    icon: <FaRobot className="h-7 w-7" />,
    title: "AI Playground",
    description: "Experiment with the latest AI tools and models. Make robots do your homework (kidding... sort of).",
    color: "from-amber-500 to-orange-500",
    emoji: "🤖"
  },
  {
    icon: <FaBrain className="h-7 w-7" />,
    title: "Brain Boost",
    description: "Level up your skills with peer-to-peer workshops. Learn from each other in a chill, supportive environment.",
    color: "from-green-500 to-emerald-500",
    emoji: "🧠"
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

export function FeatureSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="features">
      {/* Background doodles */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg className="absolute top-20 left-10 w-20 h-20 text-primary" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30,20 Q40,5 50,20 T70,20" stroke="currentColor" strokeWidth="2" />
          <path d="M20,40 Q35,20 50,40 T80,40" stroke="currentColor" strokeWidth="2" />
          <path d="M20,60 Q40,45 60,60 T80,60" stroke="currentColor" strokeWidth="2" />
          <path d="M30,80 Q50,65 70,80" stroke="currentColor" strokeWidth="2" />
        </svg>
        
        <svg className="absolute bottom-10 right-10 w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="1 1" />
        </svg>
      </div>
      
      <div className="container px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="relative highlight-marker">
              What We Do
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our community and unleash your inner tech genius through these awesome activities!
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-full"
              whileHover={{ 
                scale: 1.03, 
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <Card className="h-full overflow-hidden group border-2 hover:border-primary/50 transition-all">
                <div className={`h-1 w-full bg-gradient-to-r ${feature.color}`}></div>
                <CardHeader className="relative">
                  <div className="absolute top-2 right-2 text-xl md:text-2xl float">
                    {feature.emoji}
                  </div>
                  <div className="absolute top-0 right-0 font-mono text-xs text-muted-foreground p-2 opacity-70">
                    {`0${index + 1}.`}
                  </div>
                  <div className={`p-3 w-16 h-16 rounded-lg bg-gradient-to-br ${feature.color} group-hover:shadow-lg transition-all mb-4 text-white flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-bold">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call-to-action message */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <span className="inline-block sticker text-lg font-bold transform rotate-3">
            No Boring Stuff, We Promise!
          </span>
        </motion.div>
        
        {/* Decorative Elements */}
        <div className="hidden md:block">
          <motion.div 
            className="absolute bottom-20 left-20 w-12 h-12 opacity-30"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          >
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M30,50 L70,50" strokeWidth="4" strokeLinecap="round" />
              <path d="M50,30 L50,70" strokeWidth="4" strokeLinecap="round" />
              <circle cx="50" cy="50" r="40" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </motion.div>
          
          <motion.div 
            className="absolute top-40 right-20 w-12 h-12 opacity-30"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -10, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          >
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="60" height="60" strokeWidth="4" strokeLinecap="round" />
              <path d="M20,20 L80,80" strokeWidth="4" strokeLinecap="round" />
              <path d="M80,20 L20,80" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 