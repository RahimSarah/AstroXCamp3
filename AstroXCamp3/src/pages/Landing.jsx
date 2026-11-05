import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Technologies from '../components/Technologies';
import About from '../components/About';
import Conferences from '../components/Conferences';
import Challenge from '../components/Challenge';
import Agenda from '../components/Agenda';
import FAQ from '../components/F&Q';
import RegistrationForm from '../components/RegistrationForm';
import { useState } from 'react';
import { useEffect } from 'react';

function Landing() {
  const [showForm, setShowForm] = useState(false);
  const [applications, setApplications] = useState(() => {
  try {
    return JSON.parse(localStorage.getItem("applications")) || [];
  } catch {
    return [];
  }
});

useEffect(() => {
  localStorage.setItem("applications", JSON.stringify(applications));
}, [applications]);

 const handleApplicationSubmit = (data) => {
  const newApplication = {
    ...data,
    projects: data.projects.map((f) => f.name),
    id: Date.now(),
    submittedAt: new Date().toLocaleString(),
  };

  logApplication(newApplication);
  setApplications((prev) => [...prev, newApplication]);
  setShowForm(false);
};

const logApplication = (app) => {
  console.group(`📋 Application #${app.id} — ${app.firstName} ${app.lastName}`);

  console.log("%c01 / PERSONAL INFORMATION", "color:#f9ca45;font-weight:bold");
  console.table({
    "First name": app.firstName,
    "Last name": app.lastName,
    "University": app.university,
    "Study year": app.studyYear,
  });

  console.log("%c02 / CHOOSE YOUR FIELD", "color:#f9ca45;font-weight:bold");
  console.table({
    "1st choice": app.preferredFields[0] || "—",
    "2nd choice": app.preferredFields[1] || "—",
    "3rd choice": app.preferredFields[2] || "—",
  });

  console.log("%c03 / YOUR SKILLS", "color:#f9ca45;font-weight:bold");
  console.table({
    "Skills": app.skills || "—",
    "GitHub": app.github || "—",
    "LinkedIn": app.linkedin || "—",
    "Projects": app.projects.length ? app.projects.join(", ") : "—",
  });

  console.log("%c04 / BEYOND TECHNOLOGY", "color:#f9ca45;font-weight:bold");
  console.table({
    "Astronomy knowledge": app.astroKnowledge || "—",
    "Astronomy details": app.astroDetails || "—",
  });

  console.log("%c05 / YOUR MOTIVATION", "color:#f9ca45;font-weight:bold");
  console.table({
    "Motivation": app.motivation,
    "Additional info": app.additionalInfo || "—",
  });

  console.log("Submitted at:", app.submittedAt);
  console.groupEnd();
};

  return (
    <>
      <div className="min-h-screen">
        <Navbar onRegister={()=> setShowForm(true)}/>
        <Hero onRegister={()=> setShowForm(true)}/>
        <About />
        <Technologies />
        <Conferences />
        <Challenge />
        <Agenda />
        <FAQ />
        <Footer />


        {/* Floating registration form */}
        {showForm  && (
          <RegistrationForm
            onClose={() => setShowForm(false)}
            onSubmit={handleApplicationSubmit}
          />
        )}

        
      </div>
    </>
  );
}

export default Landing;