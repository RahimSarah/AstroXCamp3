import Timeline from "./Timeline"

function Agenda() {
  return (
     <section id="agenda" className="w-full bg-yellow/10 grid grid-cols-[46%_50%]  px-22 py-20 gap-16">
     <div >
      <p className="font-title text-[10px] font-[450] text-dark-purple">06&ensp; /&ensp; MISSION TIMELINE</p>
      <h1 className="font-title text-[clamp(2rem,5.2vw,6rem)] font-semibold text-black mt-[3%]">
        Your day at  
      </h1>
       <h1 className="font-title text-[clamp(2rem,5.2vw,6rem)] font-semibold text-dark-purple mt-[-6.5%] mb-[3%]">
         AstroXcamp.
      </h1>
      <p  className="font-text text-[15px] font-[500] text-black/55 mb-[6%]">From your first workshop to your final challenge.</p>
      </div>
      <Timeline />
    </section>
  )
}

export default Agenda