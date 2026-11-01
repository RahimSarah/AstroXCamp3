import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function Navbar() {

  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-sm">
      <div className="relative mx-auto my-4 w-[93%]  rounded-full bg-dark/70
                    px-5 py-1.5 shadow-md backdrop-blur-md
                    font-text text-[12px] text-white font-semibold
                ">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" aria-label="Go to homepage">
            <img
              src="/logo.png"
              alt="AstroXCamp"
              className="h-12 ml-2 cursor-pointer"
            />
          </Link>
          {/* Desktop navigation */}
          <div className="hidden items-center gap-5 md:flex text-white/75 text-[11.5px] font-semibold">
            <a className="hover:text-pink/100" href="#about">About</a>
            <a className="hover:text-pink/100" href="#workshops">Workshops</a>
            <a className="hover:text-pink/100" href="#conferences">Conferences</a>
            <a className="hover:text-pink/100" href="#challenge">Challenge</a>
            <a className="hover:text-pink/100" href="#agenda">Agenda</a>
            <a className="hover:text-pink/100" href="#F&Q">F&Q</a>
            {/* Register button - desktop */}
            <Link
              to="/form"
              className="hidden rounded-full h-10 ml-2 bg-yellow pl-5 pr-4 md:flex items-center text-[11px] 
                     text-black/80 font-normal gap-1.5 md:block hover:text-pink font-title"
            >
              REGISTER

              <ArrowRight size={15} strokeWidth={1.4} />
            </Link>
          </div>
        </div>

      </div>

    </nav>
  )
}

export default Navbar