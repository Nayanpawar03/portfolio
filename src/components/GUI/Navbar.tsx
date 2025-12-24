import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '@/styles/navbar.css'

export default function Navbar() {

  const [nav, setNav] = useState(false)

  const handleToggle = () => {
    setNav(prevSet => !prevSet)
    console.log(nav)
  }

  function handleHover(div: HTMLSpanElement | null, passedvalue: string) {
    // if (mobile) return
    // if (top) return 
    if (!div) return;
    const value = passedvalue
    const Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let iteration = 0
    const myinterval = setInterval(() => {
      div.innerText = div.innerText.split('').map((letter: string, index: number) => {
        if (index < iteration) return value[index]
        return Chars[Math.floor(Math.random() * 26)]
      }).join('')
      if (value.length < 8) {
        iteration += 1 / 4;
      } else {
        iteration += 1 / 5;
      }

      if (iteration > value.length) clearInterval(myinterval)
    }, 30)
  }

  const logo = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!logo.current) return
    handleHover(logo.current, "DEVFOLIO")

  }, [])


  return (
    <div>
      <nav>
        <div className="nav-header">
          <div className="logo">
            <span style={{ fontFamily: "var(--font-arctic-guardian)", letterSpacing: "0.25rem" }}
              ref={logo}
              onMouseOver={() => handleHover(logo.current, "DEVFOLIO")}
            >DevFolio</span>
          </div>
          <button className='nav-toggle' onClick={() => handleToggle()}>
            {nav ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className={`page-container ${nav ? 'show-container' : ''}`}>
          <ul className="page">
            <li>
              <a href="#home" onClick={() => setNav(!nav)}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={() => setNav(!nav)}>About</a>
            </li>
            <li>
              <a href="#skills" onClick={() => setNav(!nav)}>Skills</a>
            </li>
            <li>
              <a href="#projects" onClick={() => setNav(!nav)}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setNav(!nav)}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>



    </div>
  )
}