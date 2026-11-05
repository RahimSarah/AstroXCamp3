
import React from "react";
import "./Conferences.css";

const conferences = [
  {
    number: "01",
    title: "SPACE MEDICINE & HUMAN SURVIVAL",
    description:
      "What happens to the human body in microgravity? Explore radiation, isolation, and long-duration missions.",
    speaker: "[SPEAKER NAME]",
    position: "[PROFESSIONAL TITLE - INSTITUTION]",
    color: "#F875B5",
  },
  {
    number: "02",
    title: "GROWING FOOD BEYOND EARTH",
    description:
      "How can we produce food without fertile soil, natural sunlight, or Earth’s atmosphere?",
    speaker: "[SPEAKER NAME]",
    position: "[PROFESSIONAL TITLE - INSTITUTION]",
    color: "#72DFC0",
  },
  {
    number: "03",
    title: "THE SCIENCE OF PLANETARY ENVIRONMENTS",
    description:
      "Could another planet support life? Discover the role of atmosphere, temperature, and water.",
    speaker: "[SPEAKER NAME]",
    position: "[PROFESSIONAL TITLE - INSTITUTION]",
    color: "#F9CC4D",
  },
];

function SpeakerPlaceholder() {
  return (
    <div className="speaker-placeholder">
      <div className="speaker-arch"></div>

      <div className="speaker-silhouette">
        <div className="speaker-head"></div>
        <div className="speaker-body"></div>
      </div>

      <span className="speaker-coming-soon">
        PHOTO
        <br />
        COMING SOON
      </span>
    </div>
  );
}

function ConferenceCard({ conference }) {
  return (
    <article className="conference-card">
      <div
        className="conference-image"
        style={{ "--speaker-color": conference.color }}
      >
        <SpeakerPlaceholder />
      </div>

      <div className="conference-info">
        <span className="conference-number">
          {conference.number} / EXPERT TALK
        </span>

        <h2>{conference.title}</h2>

        <p className="conference-description">
          {conference.description}
        </p>

        <div className="conference-speaker">
          <span className="speaker-name">
            {conference.speaker}
          </span>

          <span className="speaker-position">
            {conference.position}
          </span>
        </div>
      </div>
    </article>
  );
}
function Conferences() {
  return (
    <section
      id="conferences"
      className="w-full bg-[#F0EAF8] grid grid-cols-1 lg:grid-cols-[40%_60%] px-5 py-12 md:px-12 lg:px-22 lg:py-20 gap-10 lg:gap-16"
    >
      {/* LEFT COLUMN */}
      <div>
        <p className="font-title text-[10px] font-[450] text-dark-purple mb-[3%]">
          03&ensp;/&ensp;ASTRONOMY&ensp;
          <span className="bg-[#FF69B4] px-1 text-dark">CONFERENCES</span>
        </p>

        <h1 className="font-title text-[clamp(75px,6vw,112px)] font-bold leading-[0.95] tracking-[-7px] text-dark">
          Beyond
          <br />
          the
        </h1>
        <h1 className="font-title text-[clamp(75px,6vw,112px)] font-bold leading-[0.95] tracking-[-7px] text-dark-purple mb-[3%]">
          known.
        </h1>

        <p className="font-text text-[15px] font-[500] text-black/55 mb-[3%]">
          Meet the people exploring the science
          <br className="hidden md:block" />
          of life beyond Earth.
        </p>
        <p className="font-text text-[15px] font-[500] text-black/55 mb-[6%]">
          From distant planets to human survival in space, discover the science
          that could shape humanity’s future.
        </p>
      </div>

      {/* RIGHT COLUMN */}
      <div className="conferences-list">
        {conferences.map((conference) => (
          <ConferenceCard key={conference.number} conference={conference} />
        ))}
      </div>
    </section>
  );
}

export default Conferences;
