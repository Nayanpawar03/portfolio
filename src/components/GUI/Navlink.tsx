import Link from 'next/link'
import React from 'react'

const Navlink = ({ href, title }) => {
  return (
    <div>
      <Link href={href} className="block py-2 pl-3 pr-4 text-[var(--foreground)] text-base uppercase font-bold tracking-wider transition-all duration-300 rounded">
        {title}
      </Link>
    </div>
  )
}

export default Navlink
