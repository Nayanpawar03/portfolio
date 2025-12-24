import Link from 'next/link'
import React from 'react'
import "@/styles/footer.css"
import { FaTimes } from 'react-icons/fa'

const Footer = ({ sceneChanger }: { sceneChanger: (data: number) => void }) => {
  return (
    <footer className='footer border border-t-[var(--navbar-border)] text-[var(--foreground)] z-10 relative'>
      <div className='flex bg-[var(--background)] flex-row items-center justify-between w-full p-6'>
        <Link href={"/"} className='text-2xl text-[var(--foreground)]'>
          <span style={{ fontFamily: "var(--font-arctic-guardian)", letterSpacing: "0.25rem" }}
          >
            DEVFOLIO
          </span>
        </Link>
        <p className='text-base'>All rights reserved.</p>
      </div>
      <div
        className="relative -z-10 bottom-0 w-full close-btn"
      >
        <button className='bg-red-600 p-6 w-full flex items-center justify-center gap-3' onClick={() => sceneChanger(1)}><span><FaTimes /></span>Close GUI</button>
      </div>
    </footer>
  )
}

export default Footer
