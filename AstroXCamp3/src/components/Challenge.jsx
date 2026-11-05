import { Rocket, Shield, Droplet, Leaf, Warehouse, Sun } from "lucide-react";

const topics = [
  { icon: Rocket, title: "Getting there", subtitle: "Space travel & transport" },
  { icon: Shield, title: "Surviving", subtitle: "Atmosphere & radiation" },
  { icon: Droplet, title: "Managing water", subtitle: "Conservation & recycling" },
  { icon: Leaf, title: "Growing food", subtitle: "Sustainable agriculture" },
  { icon: Warehouse, title: "Building habitat", subtitle: "Shelter & infrastructure" },
  { icon: Sun, title: "Producing energy", subtitle: "Solar & resource systems" },
];

function Challenge() {
  return (
    <section id="challenge" className="w-full bg-[#100c2d] grid grid-cols-[46%_50%]  px-22 py-20 gap-16 min-h-screen">
      <div >
        <p className="font-title text-[10px] font-[450] text-pink mb-[3%]">
          06&ensp;/&ensp;LIVING&ensp;
          <span className="bg-yellow px-1 text-dark">BEYOND EARTH</span>
        </p>      <h1 className="font-title text-[clamp(75px,6vw,112px)] font-bold leading-[0.95] tracking-[-7px] text-white  ">
          A new home.
        </h1>
        <h1 className="font-title text-[clamp(75px,6vw,112px)] font-bold leading-[0.95] tracking-[-7px]  text-pink mb-[3%]">
          A new set of
          <br></br>
          challenges.
        </h1>
        <p className="font-title text-[20px] font-[600] text-white mt-[7%]">
          What does it really take to live beyond
          <br></br>Earth ?
        </p>
        <p className="font-text text-[15px] font-[400] text-white/55 mt-[3%] w-[95%] leading-6.5">
          Earth gives us air, water, food, a suitable temperature, and protection. But what if we had to build all of that somewhere else?
          <br></br>
          At AstroXcamp, we’ll explore these questions through science, technology, and hands-on experimentation.
        </p>
      </div>
         
      <div className=" flex flex-col items-center justify-center">
  <div className="grid w-[95%] grid-cols-2 grid-rows-3 text-white/60">
    {topics.map(({ icon: Icon, title, subtitle }, i) => (
      <div
        key={title}
        className={`flex min-h-[150px] flex-col border-t border-white/20
          ${i % 2 === 0 ? "border-r" : ""}
          ${i >= 4 ? "border-b" : ""}`}
      >
        <span className="pt-6 pl-2 font-mono text-[9px] text-pink">
          0{i + 1}
        </span>

        <div className="flex flex-1 items-center gap-5 pl-[10%] pb-6">
          <Icon size={30} strokeWidth={1.4} className="shrink-0 text-[#48dfc1]" />
          <div>
            <p className="font-title text-[15px] font-semibold text-white">
              {title}
            </p>
            <p className="font-text text-[11px] text-white/50">{subtitle}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </section>
  )
}

export default Challenge