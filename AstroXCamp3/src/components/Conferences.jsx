
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
    <section className="conferences-section" id="conferences">
      <div className="conferences-container">

        {/* LEFT COLUMN */}
        <div className="conferences-intro">
          <div className="section-label">
            <span>03 / ASTRONOMY</span>
            <span className="highlight-label">CONFERENCES</span>
          </div>

          <h1>
            Beyond
            <br />
            the
            <br />
            known.
          </h1>

          <h3>
            Meet the people exploring the science
            <br className="desktop-break" />
            of life beyond Earth.
          </h3>

          <p className="intro-description">
            From distant planets to human survival in space,
            discover the science that could shape humanity’s future.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="conferences-list">
          {conferences.map((conference) => (
            <ConferenceCard
              key={conference.number}
              conference={conference}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Conferences;
