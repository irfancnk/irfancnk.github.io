import React from 'react'

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Irfan Can Kaleli",
    "url": "https://www.irfanck.com",
    "image": "https://www.irfanck.com/og-image.jpg",
    "sameAs": [
      "https://linkedin.com/in/irfan-can-kaleli",
      "https://github.com/irfancnk"
    ],
    "jobTitle": "Backend Developer",
    "description": "Backend developer who can handle frontend when needed, with 7+ years experience building reliable, scalable applications using JavaScript technologies.",
    "knowsAbout": [
      "Node.js",
      "React",
      "JavaScript",
      "TypeScript", 
      "AWS",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "MongoDB",
      "Elasticsearch",
      "Microservices Architecture",
      "Backend Development",
      "Full-Stack Development"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Ounass",
      "url": "https://www.ounass.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ankara",
      "addressCountry": "Turkey"
    },
    "email": "irfancnkaleli@gmail.com",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Middle East Technical University",
      "url": "https://www.metu.edu.tr"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Backend Developer",
      "description": "Develops server-side applications and APIs using modern JavaScript technologies",
      "skills": [
        "Node.js",
        "React", 
        "PostgreSQL",
        "AWS",
        "Docker",
        "Microservices"
      ]
    }
  }

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Irfan Can Kaleli Portfolio",
    "url": "https://www.irfanck.com",
    "description": "Personal portfolio of Irfan Can Kaleli, a backend developer with 7+ years experience",
    "author": {
      "@type": "Person",
      "name": "Irfan Can Kaleli"
    },
    "inLanguage": "en-US"
  }

  const professionalServiceStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Irfan Can Kaleli - Software Development Services",
    "description": "Backend and full-stack development services specializing in Node.js, React, and scalable web applications",
    "provider": {
      "@type": "Person",
      "name": "Irfan Can Kaleli"
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "Backend Development",
      "Full-Stack Development", 
      "API Development",
      "Microservices Architecture",
      "Database Design",
      "Cloud Infrastructure"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceStructuredData),
        }}
      />
    </>
  )
} 