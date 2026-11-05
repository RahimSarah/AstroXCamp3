
import { useState } from "react";
import { X, ArrowRight, Upload, Paperclip } from "lucide-react";

function RegistrationForm({ onClose, onSubmit }) {

  // Personal information
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [university, setUniversity] = useState("");
  const [otherUniversity, setOtherUniversity] = useState("");
  const [studyYear, setStudyYear] = useState("");
  const [otherYear, setOtherYear] = useState("");

  // Fields and skills
  const [preferredFields, setPreferredFields] = useState(["", "", ""]);
  const [skills, setSkills] = useState("");

  // Links and projects
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [projects, setProjects] = useState([]);

  // Astronomy and motivation
  const [astroKnowledge, setAstroKnowledge] = useState("");
  const [astroDetails, setAstroDetails] = useState("");
  const [motivation, setMotivation] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const fields = [
    "Web Development",
    "AI & Data Science",
    "Arduino & Embedded Systems",
    "UI/UX Design",
  ];

  const inputClass = `
    w-full bg-dark/40 border border-yellow/50 rounded-lg
    px-4 py-3 text-white text-sm outline-none
    placeholder:text-white/30
    focus:border-pink focus:ring-1 focus:ring-pink
    transition duration-200
  `;

  const labelClass = "block font-title text-xs text-white/80 mb-2";

  const handlePreference = (index, value) => {
    setPreferredFields((prev) =>
      prev.map((item, i) => (i === index ? value : item))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      university: university === "Other" ? otherUniversity : university,
      studyYear: studyYear === "Other" ? otherYear : studyYear,
      preferredFields,
      skills,
      github,
      linkedin,
      projects,
      astroKnowledge,
      astroDetails,
      motivation,
      additionalInfo,
    };

    onSubmit(data);
  };

  return (
    <div className="fixed z-40 top-23 bottom-2 left-[3.5%] right-[3.5%]
                    rounded-2xl border border-yellow/30
                    bg-dark/85 backdrop-blur-3xl shadow-2xl
                    overflow-hidden text-white
                    ">

      <form
        onSubmit={handleSubmit}
        className="h-full overflow-y-auto px-6 md:px-12 py-8 md:py-10"
        
      >

        {/* HEADER */}
        <div className="flex justify-between items-start mb-10">

          <div>
       
            <h2 className="font-title text-4xl md:text-5xl font-bold">
              Join the <span className="text-pink">mission.</span>
            </h2>

            <p className="font-text text-sm text-white/50 mt-3">
              Tell us a little about yourself and what you're interested in.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close registration form"
            className="w-10 h-10 rounded-full border border-yellow/40
                       flex items-center justify-center
                       text-white/70 hover:text-pink
                       hover:border-pink transition hover:cursor-pointer
                       mr-[-0.5%]"
          >
            <X size={18} />
          </button>

        </div>


        {/* 01 PERSONAL INFORMATION */}
        <div className="mb-10">

          <h3 className="font-title text-sm text-yellow mb-5 tracking-wider">
            01 / PERSONAL INFORMATION
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className={labelClass}>First name *</label>
              <input
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First name"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Last name *</label>
              <input
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last name"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>University *</label>

              <select
                required
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className={inputClass}
              >
                <option value="" className="bg-dark">Select university</option>
                <option value="ESI" className="bg-dark">ESI</option>
                <option value="USTHB" className="bg-dark">USTHB</option>
                <option value="Other" className="bg-dark">Other</option>
              </select>

              {university === "Other" && (
                <input
                  required
                  value={otherUniversity}
                  onChange={(e) => setOtherUniversity(e.target.value)}
                  placeholder="Specify your university"
                  className={`${inputClass} mt-3`}
                />
              )}
            </div>

            <div>
              <label className={labelClass}>Study year *</label>

              <select
                required
                value={studyYear}
                onChange={(e) => setStudyYear(e.target.value)}
                className={inputClass}
              >
                <option value="" className="bg-dark">Select your year</option>
                <option value="1st" className="bg-dark">1st year</option>
                <option value="2nd" className="bg-dark">2nd year</option>
                <option value="3rd" className="bg-dark">3rd year</option>
                <option value="4th" className="bg-dark">4th year</option>
                <option value="Other" className="bg-dark">Other</option>
              </select>

              {studyYear === "Other" && (
                <input
                  required
                  value={otherYear}
                  onChange={(e) => setOtherYear(e.target.value)}
                  placeholder="Specify your study year"
                  className={`${inputClass} mt-3`}
                />
              )}
            </div>

          </div>
        </div>


        {/* 02 PREFERRED FIELDS */}
        <div className="mb-10">

          <h3 className="font-title text-sm text-yellow mb-2 tracking-wider">
            02 / CHOOSE YOUR FIELD
          </h3>

          <p className="text-xs text-white/45 mb-5">
            Rank your preferred fields, from your first to your third choice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {preferredFields.map((choice, index) => (
              <div key={index}>

                <label className={labelClass}>
                  <span className="text-[#FF69B4]">
                    0{index + 1}
                  </span>
                  &ensp;
                  {["FIRST CHOICE", "SECOND CHOICE", "THIRD CHOICE"][index]}
                </label>

                <select
                  value={choice}
                  onChange={(e) => handlePreference(index, e.target.value)}
                  className={inputClass}
                >
                  <option value="" className="bg-dark">Select a field</option>

                  {fields.map((field) => (
                    <option
                      key={field}
                      value={field}
                      disabled={preferredFields.includes(field) && choice !== field}
                      className="bg-dark"
                    >
                      {field}
                    </option>
                  ))}

                </select>
              </div>
            ))}

          </div>
        </div>


        {/* 03 SKILLS AND PROJECTS */}
        <div className="mb-10">

          <h3 className="font-title text-sm text-yellow mb-5 tracking-wider">
            03 / YOUR SKILLS
          </h3>

          <div className="mb-5">
            <label className={labelClass}>
              What skills or technologies are you familiar with?
            </label>

            <textarea
              rows="3"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Programming languages, tools, software, technical skills..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className={labelClass}>
                GitHub <span className="text-white/40">(optional)</span>
              </label>

              <input
                type="url"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                placeholder="https://github.com/username"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                LinkedIn <span className="text-white/40">(optional)</span>
              </label>

              <input
                type="url"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="https://linkedin.com/in/username"
                className={inputClass}
              />
            </div>

          </div>

          <div className="mt-5">

            <label className={labelClass}>
              Previous projects <span className="text-white/40">(optional)</span>
            </label>

            <div className="border border-dashed border-yellow/50 rounded-xl
                            p-6 bg-dark/30 hover:border-[#FF69B4] transition">

              <div className="flex items-center gap-3 mb-4">
                <Upload size={20} className="text-yellow" />
                <p className="text-xs text-white/60">
                  Attach your previous projects or portfolio.
                </p>
              </div>

              <input
                type="file"
                multiple
                accept=".pdf,.zip,.png,.jpg,.jpeg"
                onChange={(e) => setProjects(Array.from(e.target.files))}
                className="w-full text-xs text-white/60
                           file:bg-yellow file:text-dark file:border-0
                           file:rounded-full file:px-4 file:py-2
                           file:mr-3 file:font-semibold file:cursor-pointer"
              />

              {projects.length > 0 && (
                <div className="mt-4 space-y-2">
                  {projects.map((file, index) => (
                    <p key={index} className="text-xs text-[#FF69B4] flex gap-2">
                      <Paperclip size={13} />
                      {file.name}
                    </p>
                  ))}
                </div>
              )}

            </div>
          </div>

        </div>


        {/* 04 ASTRONOMY */}
        <div className="mb-10">

          <h3 className="font-title text-sm text-yellow mb-5 tracking-wider">
            04 / BEYOND TECHNOLOGY
          </h3>

          <label className={labelClass}>
            Do you have any previous knowledge or experience in astronomy?
          </label>

          <p className="text-xs text-white/40 mb-4">
            It's absolutely not a requirement!
          </p>

          <div className="flex flex-wrap gap-3">

            {["Yes", "A little", "Not yet"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setAstroKnowledge(option)}
                className={`px-6 py-2.5 rounded-full border text-sm transition
                  ${
                    astroKnowledge === option
                      ? "bg-yellow text-dark border-yellow"
                      : "border-yellow/40 text-white hover:border-[#FF69B4] hover:text-[#FF69B4]"
                  }`}
              >
                {option}
              </button>
            ))}

          </div>

          {astroKnowledge === "Yes" && (
            <textarea
              rows="2"
              value={astroDetails}
              onChange={(e) => setAstroDetails(e.target.value)}
              placeholder="Tell us a little about your experience..."
              className={`${inputClass} mt-4 resize-none`}
            />
          )}

        </div>


        {/* 05 MOTIVATION */}
        <div className="mb-10">

          <h3 className="font-title text-sm text-yellow mb-5 tracking-wider">
            05 / YOUR MOTIVATION
          </h3>

          <label className={labelClass}>
            Why do you want to join AstroXCamp? *
          </label>

          <textarea
            required
            rows="4"
            value={motivation}
            onChange={(e) => setMotivation(e.target.value)}
            placeholder="What interests you about this experience? What do you hope to learn or contribute?"
            className={`${inputClass} resize-none`}
          />

          <label className={`${labelClass} mt-5`}>
            Anything else you'd like us to know?
            <span className="text-white/40"> (optional)</span>
          </label>

          <textarea
            rows="3"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            placeholder="Tell us anything else you think is relevant..."
            className={`${inputClass} resize-none`}
          />

        </div>


        {/* SUBMIT */}
        <div className="flex flex-col md:flex-row items-center
                        justify-between gap-5 border-t border-yellow/20 pt-7">

          <p className="text-xs text-white/40">
            Fields marked with * are required.
          </p>

          <button
            type="submit"
            className="bg-yellow text-dark font-title font-bold
                       text-xs tracking-wider px-10 py-4 rounded-full
                       hover:bg-[#FF69B4] transition duration-300
                       hover:scale-[1.03] flex items-center gap-3 hover:cursor-pointer"
          >
            SUBMIT APPLICATION
            <ArrowRight size={16} />
          </button>

        </div>

      </form>
    </div>
  );
}

export default RegistrationForm;
