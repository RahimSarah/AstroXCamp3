import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-dark text-white/75">
      <div className="grid grid-cols-[40%_15%_15%_30%] items-center px-10 py-16 font-text text-[12px] ">
        <div className="ml-[10%] mt-[-6%]">
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
              className=" w-[50%] cursor-pointer"
            />
          </Link>
          <div className="font-text text-[12px] text-white/75 font-thin ml-[2%] mt-4">
            Exploring the universe through technology.
          </div>
        </div>
        <div className="flex flex-col gap-1 h-full">
          <div className="text-pink font-title"> EXPLORE</div>
          <a className=" block hover:text-white/100" href="#about" onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}>About</a>
          <a className=" block hover:text-white/100" href="#workshops" onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              document.getElementById("workshops")?.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}>Workshops</a>
          <a className="block hover:text-white /100" href="#conferences" onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              document.getElementById("conferences")?.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}>Conferences</a>
          <a className="block hover:text-white/100" href="#challenge" onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              document.getElementById("challenge")?.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}>Challenge</a>
          <a className="block hover:text-white/100" href="#agenda" onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              document.getElementById("agenda")?.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}>Agenda</a>
          <a className="block hover:text-white/100" href="#f&q" onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              document.getElementById("f&q")?.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}>F&Q</a>
        </div>
        <div className="flex flex-col gap-1 h-full">
          <div className="text-pink font-title"> CONTACT US</div>
          <a className="block hover:text-white/100" href="https://dz.linkedin.com/company/astrotech-esi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="block hover:text-white/100" href="https://www.instagram.com/astrotech_esi/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="flex h-full gap-4 ml-[20%]">
          <div>
            <img
              src="/astro.png"
              alt="Astrotech ESI"
              className=" w-24"
            />
          </div>
          <div className="mt-5 ">
          <div className="font-title text-[14px] text-white font-semibold">
            ASTROTECH
          </div>
          <div className="font-title text-[9px] text-white/75 font-thin ">
            ESI ALGIERS
          </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
      <div className="flex justify-between px-10 py-4 border-t border-white/10 w-[90%] mx-auto">
        <div className="font-title text-[10px] text-white/60 font-semibold">
          © 2026 AstroTech Club — ESI Algiers. All rights reserved.
        </div>
        <div className="font-title text-[10px] text-white/60 font-semibold">
          LEARN TECHNOLOGY. EXPLORE SPACE. BUILD WHAT COMES NEXT.
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer