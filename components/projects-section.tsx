"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { Award, Network, Monitor } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Algorithm Competition Platform",
    description: "A comprehensive competitive programming platform with real-time judging, leaderboards, and analytics. Achieved 3rd place in national algorithm competition.",
    icon: <Award className="w-8 h-8 text-purple-400" />,
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Socket.io"],
    achievements: ["1000+ active users", "Real-time judging", "3rd place nationally"]
  },
  {
    title: "Network Traffic Analyzer",
    description: "Advanced network monitoring tool with machine learning-based anomaly detection. Features real-time traffic analysis and predictive maintenance alerts.",
    icon: <Network className="w-8 h-8 text-purple-400" />,
    technologies: ["Python", "TensorFlow", "React", "D3.js", "WebSockets"],
    achievements: ["ML-based detection", "Real-time monitoring", "99.9% accuracy"]
  },
  {
    title: "Desktop Productivity Suite",
    description: "Cross-platform desktop application built with Electron. Includes task management, time tracking, and team collaboration features.",
    icon: <Monitor className="w-8 h-8 text-purple-400" />,
    technologies: ["Electron", "React", "TypeScript", "SQLite", "Node.js"],
    achievements: ["Cross-platform", "Offline-first", "10K+ downloads"]
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-8" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of innovative solutions and technical achievements
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover border border-gray-700 bg-gray-800 overflow-hidden h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    {project.icon}
                    <h3 className="font-display font-bold text-xl text-white">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <div key={i} className="text-sm text-gray-400">
                          • {achievement}
                        </div>
                      ))}
                    </div>
                    

                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}