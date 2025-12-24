import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import Navlink from './Navlink'
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
]


const Temp = () => {
  const [nav, setNav] = useState(false)

  // const handleToggle = () => {
  //   setNav(prevSet => !prevSet)
  //   console.log(nav)
  // }

  const logo = useRef<HTMLSpanElement>(null);

  function handleHover(div: HTMLSpanElement | any, passedvalue: string) {
    // if (mobile) return
    // if (top) return 
    const value = passedvalue
    const Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let iteration = 0
    const myinterval = setInterval(() => {
      div.innerText = div.innerText.split('').map((letter: string, index: number) => {
        if (index < iteration) return value[index]
        return Chars[Math.floor(Math.random() * 26)]
      }).join('')
      value.length < 8 ? iteration += 1 / 4 : iteration += 1 / 5
      if (iteration > value.length) clearInterval(myinterval)
    }, 30)
  }


  useEffect(() => {
    if (!logo) return
    handleHover(logo.current, "DEVFOLIO")

  }, [])



  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[var(--background)] bg-opacity-100 border-b border-[var(--navbar-border)] ">
      <div className="flex flex-wrap items-center justify-between mx-auto h-16 sm:h-[var(--navbar-height)] px-12 ">
        <Link href={"/"} className='text-2xl text-[var(--foreground)]'>
          <span style={{ fontFamily: "var(--font-arctic-guardian)", letterSpacing: "0.25rem" }}
            ref={logo}
            onMouseOver={(e) => handleHover(e.target, "DEVFOLIO")}
          >
            DEVFOLIO
          </span>
        </Link>
        <div className="mobile-menu block md:hidden">
          <button className="bg-transparent cursor-pointer border-none text-[var(--foreground)] text-[1.7rem] transition-all duration-300" onClick={() => setNav(!nav)}>
            {nav ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className='flex p-4 custom-900:p-0 custom-900:flex-row custom-900:space-x-8 mt-0'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Navlink href={link.path} title={link.title} />
              </li>
            ))}

          </ul>
        </div>
      </div>
      {nav ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Temp
