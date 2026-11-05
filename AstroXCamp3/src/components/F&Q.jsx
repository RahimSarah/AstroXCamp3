import Accordeon from "./Accordeon"
function FnQ() {
   return (
       <section id="f&q" className="w-full bg-light-purple/10 grid grid-cols-[40%_60%]  px-22 py-20 gap-10">
       <div >
        <p className="font-title text-[10px] font-[450] text-dark-purple">07&ensp; /&ensp; FAQ</p>
        <h1 className="font-title text-[clamp(2rem,5.2vw,6rem)] font-semibold text-black mt-[3%] leading-[96%]">
          Everything you   
        </h1>
         <h1 className="font-title text-[clamp(2rem,5.2vw,6rem)] font-semibold text-dark-purple leading-[96%] mb-[3%]">
            need to know.
        </h1>
<p className="font-text text-[15px] font-[500] text-black/55">
  Still have a question? Reach out at{" "}
  <a
    href="mailto:astrotech@esi.dz"
    className="font-text text-[15px] font-[500] text-dark-purple/80 hover:underline"
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