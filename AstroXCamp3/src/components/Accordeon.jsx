import { useState } from "react";

const faqs = [
  {
    question: "Who can participate in AstroXcamp?",
    answer: "AstroXcamp welcomes students and anyone interested in astronomy, technology, or both. Check the registration conditions for any specific eligibility requirements.",
  },
  {
    question: "Do I need prior knowledge in technology or astronomy?",
    answer: "Not at all. The workshops introduce participants to their chosen field, and the conferences are an opportunity to discover space-related topics, even if you're a complete beginner. You don't need to be an expert in either to take part.",
  },
  {
    question: "Can I choose my field?",
    answer: "Yes. During registration, you'll select the technical track that interests you most, subject to availability.",
  },
  {
    question: "Will there be any prizes?",
    answer: "Yes! The challenge concludes with presentations, jury evaluation, and prizes for the winning teams.",
  },
  {
    question: "Where and when will the event take place?",
    answer: "AstroXcamp 26/27 will take place at ESI Algiers on [CONFIRMED DATE].",
  },
];

export default function Accordeon() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mx-auto w-full max-w-2xl px-4">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={item.question} className="border-b border-white/15">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full hover:cursor-pointer items-center justify-between py-5 text-left font-title text-[14px] font-semibold text-dark/80 border-t border-dark-purple/30"
            >
                <div className="flex items-center gap-10">
                <div className="font-mono text-[11px] text-dark-purple">0{i+1}</div>
              {item.question}
              </div>
              <svg
                viewBox="0 0 24 24"
                className={`h-4 w-4 shrink-0 transition-transform duration-300 motion-reduce:transition-none ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 font-text text-[13px] mx-10  text-dark/70">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

