"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

const phrases = [
  "Building scalable web applications",
  "Optimizing performance & reliability", 
  "7+ years of full-stack expertise",
  "Node.js & React specialist",
  "AWS & Docker enthusiast",
  "Microservices architect",
  "Problem solver & innovator",
  "Clean code advocate"
]

export function TypingAnimation() {
  const [currentPhrase, setCurrentPhrase] = React.useState(0)
  const [displayText, setDisplayText] = React.useState("")
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [showCursor, setShowCursor] = React.useState(true)

  React.useEffect(() => {
    const currentString = phrases[currentPhrase]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentString.length) {
          setDisplayText(currentString.slice(0, displayText.length + 1))
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentPhrase((prev) => (prev + 1) % phrases.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentPhrase])

  React.useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="font-mono text-lg sm:text-xl text-purple-400 min-h-[2rem] flex items-center">
      <span>{displayText}</span>
      <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
        |
      </span>
    </div>
  )
}