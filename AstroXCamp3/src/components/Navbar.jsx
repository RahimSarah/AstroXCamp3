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
          <Link to="/#hero" aria-label="Go to homepage" onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              document.getElementById("hero")?.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}>
            <img
              src="/logo.png"
              alt="AstroXCamp"
              className="h-12 ml-2 cursor-pointer"
            />
          </Link>
          {/* Desktop navigation */}
          <div className="hidden items-center gap-5 md:flex text-white/75 text-[11.5px] font-semibold">
            <a className="hover:text-pink/100" href="#about" onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}>About</a>
            <a className="hover:text-pink/100" href="#workshops" onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document.getElementById("workshops")?.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}>Workshops</a>
            <a className="hover:text-pink/100" href="#conferences" onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document.getElementById("conferences")?.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}>Conferences</a>
            <a className="hover:text-pink/100" href="#challenge" onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document.getElementById("challenge")?.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}>Challenge</a>
            <a className="hover:text-pink/100" href="#agenda" onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document.getElementById("agenda")?.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}>Agenda</a>
            <a className="hover:text-pink/100" href="#f&q" onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document.getElementById("f&q")?.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}>F&Q</a>

            {/* Register button  */}
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