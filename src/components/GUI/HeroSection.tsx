"use client";
import React from "react";
import Image from "next/image";
import data from "@/data/data"
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";


function HeroSection() {
  return (
    <section className="mt-[var(--navbar-height)] min-h-[calc(100vh-var(--navbar-height))] scroll-m-[var(--navbar-height)]" id="home">
      <div className="flex flex-col-reverse mt-8 mx-8 sm:flex-row items-center justify-between mb-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 mt-12 lg:col-span-7 place-self-center text-center sm:text-left sm:px-12"
        >
          <h1 className="text-white mt-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold ">
            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-orange-600 to-yellow-400">Hello, I&apos;m{" "}
              <br />
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                `${data.info.name}`,
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                `${data.info.position}`,
                1000,
                'Web Developer',
                1000,
                // 'We produce food for Chinchillas',
                // 1000
              ]}
              wrapper="span"
              speed={50}
              style={{ color: "var(--foreground)" }}
              repeat={Infinity}
            />

          </h1>
          <p className="text-[#ADB7BE] text-base mt-8 sm:text-lg lg:text-xl ">
            Average Neovim and Arch user
          </p>
          <div>
            <Link href={"#contact"}><button className="px-7 py-4 mr-4 sm:w-fit mt-8 bg-gradient-to-br from-red-800 via-orange-600 to-yellow-500 text-white hover:bg-slate-200 rounded-full">Hire Me</button></Link>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume/Nayan_Pawar_Resume.pdf";
                link.download = "Nayan_Pawar_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-1 py-1 sm:w-fit rounded-full bg-gradient-to-br from-red-800 via-orange-600 to-yellow-500 hover:bg-slate-800 text-white mt-4"
            >
              <span className="block bg-[#181818] hover:bg-slate-800 rounded-full px-6 py-3">
                Download CV
              </span>
            </button>

          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 lg:col-span-5 place-self-center sm:mt-8">
          <div className="mt-12 mb-12 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
            <Image
              src="/images/devfolio-hero-image.png"
              alt="hero image"
              className="rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section >
  );
}

export default HeroSection;
