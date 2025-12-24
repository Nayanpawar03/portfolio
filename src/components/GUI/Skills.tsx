"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Skills = () => {
  const proficiencyToWidth = {
    'Less': '20%',
    'Good': '50%',
    'Proficient': '90%',
  };

  type ProficiencyKey = keyof typeof proficiencyToWidth;

  const data: { language: string; proficiency: ProficiencyKey }[] = [
    { language: 'Java', proficiency: 'Proficient' },
    { language: 'C', proficiency: 'Proficient' },
    { language: 'C++', proficiency: 'Less' },
    { language: 'Python', proficiency: 'Good' },
    { language: 'HTML', proficiency: 'Proficient' },
    { language: 'CSS', proficiency: 'Good' },
    { language: 'JavaScript', proficiency: 'Good' },
    { language: 'React JS', proficiency: 'Proficient' },
    { language: 'Node JS', proficiency: 'Good' },
    { language: 'TypeScript', proficiency: 'Less' },
  ];

  return (
    <section
      className="mt-[var(--navbar-height)] min-h-[calc(100vh-var(--navbar-height))] scroll-m-[var(--navbar-height)] px-4 sm:px-6 md:px-8"
      id="skills"
    >
      <div>
        <h1 className="text-[var(--foreground)] text-center text-4xl font-bold mb-8 lg:mb-12">Skills</h1>
      </div>

      <div className="flex flex-col gap-12 px-8 lg:grid lg:grid-cols-2 lg:gap-9">
        {data.map((skill, index) => {
          const proficiency = skill.proficiency;
          const translateX = proficiencyToWidth[proficiency];
          const gradientPercentage = proficiencyToWidth[proficiency];

          return (
            <div key={index}>
              <p className="text-[var(--foreground)] text-2xl mb-2 mt-3">{skill.language}</p>

              <motion.div
                className="w-full"
                initial={{ x: 0 }}
                whileInView={{ x: translateX }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <Image
                  src={`/logos/${skill.language.toLowerCase()}-logo.png`}
                  alt={skill.language}
                  width={30}
                  height={30}
                  className='-mt-3'
                />
              </motion.div>

              <div className="h-4 w-full rounded-full border-[1px] relative bg-gray-200">
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-red-800 via-orange-600 to-yellow-500 "
                  initial={{ width: '0%' }}
                  whileInView={{ width: gradientPercentage }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <span className="absolute top-5 left-0">Less</span>
                <span className="absolute top-5 left-1/2 transform -translate-x-1/2">Good</span>
                <span className="absolute top-5 right-0">Proficient</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

