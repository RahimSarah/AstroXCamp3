const events = [
  {
    time: "08:30",
    title: "CHECKING IN",
    description: "Get your badge and prepare for the adventure ahead.",
  },
  {
    time: "09:00",
    title: "OPENING CEREMONY",
    description: "Discover the event, the theme, and the mission ahead.",
  },
  {
    time: "09:30",
    title: "TECHNOLOGY WORKSHOPS",
    description: "Choose your track and get hands-on with new technologies.",
  },
  {
    time: "11:00",
    title: "COFFEE BREAK & ICEBREAKERS",
    description: "Meet your fellow explorers.",
  },
  {
    time: "11:30",
    title: "ASTRONOMY CONFERENCES",
    description: "Discover the science behind living beyond Earth.",
  },
  {
    time: "12:30",
    title: "LUNCH BREAK",
    description: "Recharge, connect, and exchange ideas.",
  },
  {
    time: "13:30",
    title: "THE GRAND CHALLENGE",
    description: "Four hours to collaborate, create, experiment, and solve.",
  },
  {
    time: "17:30",
    title: "PRESENTATIONS & JURY",
    description: "Teams present their solutions to the expert jury.",
  },
  {
    time: "18:30",
    title: "AWARDS & CLOSING",
    description: "Celebrate the participants and winning teams.",
  },
  {
    time: "20:00",
    title: "STARGAZING NIGHT",
    description: "Optional observations and a shared dinner, weather permitting.",
  },
];

export default function Timeline() {
  return (
    <div className="relative w-full mt-[-6px] ">

      
      <div className="absolute left-[71px] top-[19px] bottom-[30px] w-[01px] bg-dark-purple" />

      {events.map((event, index) => (
        <div
          key={index}
          className="group relative grid grid-cols-[50px_44px_1fr] min-h-[70px]"
        >

          <span className="pt-[20px] font-title text-[10px] font-bold text-dark-purple">
            {event.time}
          </span>

         
          <div className="flex justify-center">
            <div
              className="z-10 mt-2 flex h-[36px] w-[36px] items-center justify-center
              rounded-full border border-dark-purple
              bg-[#fbf8ef] text-dark-purple font-mono text-[12px]
              transition-all duration-200
              group-hover:bg-dark-purple
              group-hover:text-white
              group-hover:border-dark-purple"
            >
              {index + 1}
            </div>
          </div>

           
          <div className="pl-4 pt-[5px]">
            <h3 className="font-title text-[21px] font-semibold text-dark">
              {event.title}
            </h3>

            <p className="mt-1 font-text text-[14px] text-dark/70">
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}