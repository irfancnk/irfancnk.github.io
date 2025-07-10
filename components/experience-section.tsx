"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    company: "Ounass",
    position: "Full-Stack Engineer",
    period: "2022 - Present",
    location: "Dubai, UAE",
    achievements: [
      "Reduced e-commerce search latency by 60% through Elasticsearch optimization",
      "Built real-time inventory management system handling 1M+ products",
      "Implemented micro-frontend architecture adopted across 3 teams",
      "Led migration from monolith to microservices, improving deployment speed by 75%"
    ],
    technologies: ["React", "Node.js", "AWS", "Elasticsearch", "Docker", "Kubernetes"]
  },
  {
    company: "Kargo Global",
    position: "Full-Stack Engineer",
    period: "2021 - 2022",
    location: "Istanbul, Turkey",
    achievements: [
      "Developed React component library adopted by 5 development teams",
      "Optimized database queries reducing response time by 40%",
      "Implemented automated testing pipeline with 90% code coverage",
      "Built responsive admin dashboard serving 1000+ daily active users"
    ],
    technologies: ["React", "TypeScript", "PostgreSQL", "Express", "Jest", "CI/CD"]
  },
  {
    company: "Onbiron R&D",
    position: "Software Engineer",
    period: "2018 - 2021",
    location: "Ankara, Turkey",
    achievements: [
      "Built real-time monitoring microservices on AWS handling 10K+ events/sec",
      "Developed IoT data collection platform processing 1TB+ daily data",
      "Created automated deployment pipeline reducing release time by 80%",
      "Mentored 3 junior developers on modern JavaScript and cloud technologies"
    ],
    technologies: ["Node.js", "AWS", "MongoDB", "Redis", "Docker", "Microservices"]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 text-white">
            Experience
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-8" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Building scalable solutions across different industries and technologies
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover border border-gray-700 bg-gray-800 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="w-5 h-5 text-purple-400" />
                        <h3 className="font-display font-bold text-xl text-white">
                          {exp.company}
                        </h3>
                      </div>
                      
                      <h4 className="font-semibold text-lg mb-2 text-purple-400">{exp.position}</h4>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div>{exp.location}</div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <TrendingUp className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Badge variant="secondary" className="bg-gray-700 text-gray-300 hover:bg-purple-600 hover:text-white transition-all duration-300">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
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