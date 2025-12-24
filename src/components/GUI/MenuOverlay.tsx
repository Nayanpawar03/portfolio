import React from 'react'
import Navlink from './Navlink'

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col items-center mb-4">
      {links.map((link, index) => (
        <li key={index}>
          <Navlink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay
