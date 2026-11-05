import { ArrowRight } from 'lucide-react'


function About() {
  return (
    <section id="about" className="w-full bg-yellow/10 px-22 py-20 h-screen flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="lg:self-start">
          <p className="font-title text-[10px] font-[450] text-dark-purple mb-[3%]">
            01&ensp;/&ensp;THE&ensp;
            <span className="bg-[#FF69B4] px-1 text-dark">EXPERIENCE</span>
          </p>
          <h2 className="font-title text-[clamp(75px,6vw,112px)] font-bold leading-[0.95] tracking-[-7px] text-dark">
            One event.
          </h2>
          <h2 className="font-title text-[clamp(75px,6vw,112px)] font-bold leading-[0.95] tracking-[-7px] text-dark-purple mb-[3%]">
            Two worlds.
          </h2>
          <p className="font-text text-[15px] font-[500] text-black/55 mt-[6%]">
            Not simply a conference. Not just a workshop.
          </p>
        </div>

        <div className="max-w-[55%] flex flex-col justify-center items-center lg:self-center">
          <p className="font-title text-[20px] font-[400] text-dark">
            AstroXcamp brings
            <span className="text-dark-purple"> technology </span>
            and
            <span className="text-dark-purple"> astronomy </span>
            into one hands-on journey, ending with a mission where everything you learn matters.
          </p>
          <div className="border-t border-dark-purple/30 w-[100%] font-text text-[12px] font-[650] text-dark/80 mt-10 pt-10 flex justify-center items-center gap-10">
            <div>
              LEARN
            </div>
            <ArrowRight className="text-pink" size={18} strokeWidth={2} />

            <div>
              EXPLORE
            </div>
            <ArrowRight className="text-pink" size={18} strokeWidth={2} />

            <div>
              BUILD
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;