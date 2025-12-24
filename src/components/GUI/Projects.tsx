"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import data from '@/data/data'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const projectTypes = Array.from(
  new Set(data.projects.flatMap((project) => project.type))
);

const Projects = () => {

  const [category, setCategory] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  const handleCategory = (selectedCategory: string) => {
    setCategory(selectedCategory)
  }

  const filteredProjects = data.projects.filter((project) => {
    return project.type.includes(category)
  })

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  }

  return (
    <section
      className="mt-[var(--navbar-height)] min-h-[calc(100vh-var(--navbar-height))] scroll-m-[var(--navbar-height)] bg-[var(--background)] text-[var(--foreground)] px-10"
      id="projects"
    >
      <h2 className="text-4xl text-center text-[var(--foreground)] font-bold mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-4 py-6 -mt-8 mb-4">
        {projectTypes.map((type) => (
          <ProjectTag
            key={type}
            onClick={() => ((nameFromTag: string) => handleCategory(nameFromTag))}
            name={type}
            isSelected={category === type}
          />
        ))}

      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (

          <motion.li
            key={index}
            variants={cardVariants}
            // initial={{ y: 50, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={index}
              name={project.name}
              imgUrl={project.imgUrl}
              duration={project.duration}
              desc={project.description}
              src={project.src}
              url={project.url}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
