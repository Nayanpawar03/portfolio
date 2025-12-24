"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import TabButton from './TabButton'
import data from '@/data/data'
import "@/styles/about.css"

interface EducationItem {
  degree: string;
  specialization: string;
  institution: string;
  graduation_date: string;
  cgpa: string;
}

const tabData = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        {data.education.map((edu: EducationItem, index: number) => (
          <li key={index} className="mb-2">
            <p className='text-lg'><strong>Degree:</strong> {edu.degree}</p>
            <p className='text-lg'><strong>Specialization:</strong> {edu.specialization}</p>
            <p className='text-lg'><strong>Institution:</strong> {edu.institution}</p>
            <p className='text-lg'><strong>Graduation Date:</strong> {edu.graduation_date}</p>
            <p className='text-lg'><strong>CGPA:</strong> {edu.cgpa}</p>
          </li>
        ))}
      </ul>
    )
  },
  {
    title: "Social Accounts",
    id: "socials",
    content: (
      <div className="flex gap-4">
        {data.socials.map((social, index) => {
          let Icon;
          switch (social.type) {
            case "email":
              Icon = HiOutlineMail;
              break;
            case "linkedIn":
              Icon = FaLinkedin;
              break;
            case "instagram":
              Icon = FaInstagram;
              break;
            default:
              Icon = null;
          }

          return (
            <a
              key={index}
              href={
                social.type === "email"
                  ? `mailto:${social.url}`
                  : social.url
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 text-2xl transition-colors duration-200"
            >
              {Icon && <Icon />}
            </a>
          );
        })}
      </div>
    )
  }
]

const About = () => {
  const [tab, setTab] = useState<string>("education")
  const [, startTransition] = useTransition()

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id)
    })
  }
  return (
    <section className='min-h-[calc(100vh-var(--navbar-height))] scroll-m-[var(--navbar-height)]' id="about">
      {/* <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-6 xl:gap-16 sm:py-8 xl:px-16"> */}
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-8 items-center py-8 px-4 lg:gap-40 lg:px-16">
        <Image src="/images/nayan_img.jpg" alt="about-image" width={500} height={500} className='about-img rounded-md' />
        <div className="mt-4 px-12 md:mt-0 text-left flex flex-col h-full">
          <h2 className='text-4xl font-bold text-[var(--foreground)] mb-4'>About Me</h2>
          <p className="text-base text-justify tracking-wide text-wrap  lg:text-lg lg:w-fit">
            {data.info.about}
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("socials")}
              active={tab === "socials"}
            >
              Socials
            </TabButton>
          </div>
          <div className="mt-8">{tabData.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  )
}

export default About
