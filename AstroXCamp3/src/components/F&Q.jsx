import Accordeon from "./Accordeon"
function FnQ() {
   return (
       <section id="f&q" className="w-full bg-light-purple/10 grid grid-cols-[40%_60%]  px-22 py-20 gap-10">
       <div >
        <p className="font-title text-[10px] font-[450] text-dark-purple mb-[3%]">07&ensp; /&ensp; FAQ</p>
      <h1 className="font-title text-[clamp(75px,6vw,112px)] font-bold leading-[0.95] tracking-[-7px] text-dark  ">
          Everything <br></br>you   
        </h1>
      <h1 className="font-title text-[clamp(75px,6vw,112px)] font-bold leading-[0.95] tracking-[-7px] text-dark-purple mb-[3%]">
            need to <br></br>know.
        </h1>
<p className="font-text text-[15px] font-[500] text-black/55 mt-[6%] ">
  Still have a question? Reach out at{" "}
  <a
    href="mailto:astrotech@esi.dz"
    className="font-text text-[15px] font-[500] bg-[#FF69B4] underline px-1  hover:underline"
  >
    astrotech@esi.dz
  </a>
</p>
        </div>
        <Accordeon />
      </section>
    )
  }

export default FnQ