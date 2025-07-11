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
      "Optimized product search and indexing using Elasticsearch and OpenSearch",
      "Built scalable catalog features for multi-brand luxury e-commerce platform",
      "Integrated systems via Redis, RabbitMQ, and Magento APIs",
      "Deployed services using AWS, Docker, and Kubernetes with CI/CD"
    ],
    technologies: ["Node.js", "React", "PostgreSQL", "Elasticsearch", "AWS", "Docker"]
  },
  {
    company: "Kargo Global",
    position: "Full-Stack Engineer", 
    period: "2021 - 2022",
    location: "New York, US (Remote)",
    achievements: [
      "Built shared ReactJS component library for mobile ad creation platform",
      "Developed with TypeScript, Material UI for consistent user experience", 
      "Implemented end-to-end testing with Cypress for UI reliability",
      "Deployed services via Docker on Google Cloud Platform"
    ],
    technologies: ["React", "TypeScript", "Node.js", "MySQL", "GCP", "Cypress"]
  },
  {
    company: "Onbiron R&D",
    position: "Software Engineer",
    period: "2018 - 2021", 
    location: "Ankara, Turkey",
    achievements: [
      "Developed microservice-based real-time monitoring systems",
      "Built network analyzer with Python, PyQt for traffic visualization",
      "Created military-grade event-driven systems for secure environments",
      "Delivered full-stack apps using AWS services and .NET integrations"
    ],
    technologies: ["Node.js", "React", "Python", "AWS", "PostgreSQL", "Elasticsearch"]
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