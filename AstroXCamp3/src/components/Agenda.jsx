import Timeline from "./Timeline"

function Agenda() {
  return (
     <section id="agenda" className="w-full bg-yellow/10 grid grid-cols-[46%_50%]  px-22 py-20 gap-16">
     <div >
<p className="font-title text-[10px] font-[450] text-dark-purple mb-[3%]">
          06&ensp;/&ensp;MISSION&ensp;
          <span className="bg-[#FF69B4] px-1 text-dark">TIMELINE</span>
        </p>      <h1 className="font-title text-[clamp(75px,6vw,112px)] font-bold leading-[0.95] tracking-[-7px] text-dark  ">
        Your day at  
      </h1>
       <h1 className="font-title text-[clamp(75px,6vw,112px)] font-bold leading-[0.95] tracking-[-7px]  text-dark-purple mb-[3%]">
         AstroXcamp.
      </h1>
      <p  className="font-text text-[15px] font-[500] text-black/55 mb-[6%]">From your first workshop to your final challenge.</p>
      </div>
      <Timeline />
    </section>
  )
}

export default Agenda