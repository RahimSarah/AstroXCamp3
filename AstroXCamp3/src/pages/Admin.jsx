import { useState } from "react";

 const columns = [
  ["firstName", "First name"],
  ["lastName", "Last name"],
  ["university", "University"],
  ["studyYear", "Year"],
  ["choice1", "1st choice"],
  ["choice2", "2nd choice"],
  ["choice3", "3rd choice"],
  ["skills", "Skills"],
  ["github", "GitHub"],
  ["linkedin", "LinkedIn"],
  ["projects", "Projects"],
  ["astroKnowledge", "Astronomy"],
  ["astroDetails", "Astronomy details"],
  ["motivation", "Motivation"],
  ["additionalInfo", "Additional info"],
  ["submittedAt", "Submitted at"],
];

const flatten = (app) => ({
  ...app,
  choice1: app.preferredFields?.[0] || "",
  choice2: app.preferredFields?.[1] || "",
  choice3: app.preferredFields?.[2] || "",
  projects: (app.projects || []).join(", "),
});

const download = (content, filename, type) => {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

export default function Admin() {
  const [apps, setApps] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("applications")) || [];
    } catch {
      return [];
    }
  });

  const rows = apps.map(flatten);

  const exportCSV = () => {
    const escape = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const header = columns.map(([, label]) => escape(label)).join(",");
    const body = rows.map((r) => columns.map(([key]) => escape(r[key])).join(","));
    // \uFEFF makes Excel read accents and Arabic correctly
    download("\uFEFF" + [header, ...body].join("\n"), "applications.csv", "text/csv;charset=utf-8");
  };

  const exportJSON = () =>
    download(JSON.stringify(apps, null, 2), "applications.json", "application/json");

  const clearAll = () => {
    if (window.confirm("Delete all applications?")) {
      localStorage.removeItem("applications");
      setApps([]);
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white p-8 font-text">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="font-title text-3xl font-bold">
          Applications <span className="text-[#FF69B4]">({apps.length})</span>
        </h1>

        <div className="flex gap-3 text-xs font-title">
          <button onClick={exportCSV} className="bg-yellow text-dark px-4 py-2 rounded-full font-bold cursor-pointer">
            DOWNLOAD CSV
          </button>
          <button onClick={exportJSON} className="border border-yellow/50 px-4 py-2 rounded-full cursor-pointer">
            DOWNLOAD JSON
          </button>
          <button onClick={clearAll} className="border border-white/20 text-white/50 px-4 py-2 rounded-full cursor-pointer">
            CLEAR ALL
          </button>
        </div>
      </div>

      {apps.length === 0 ? (
        <p className="text-white/50">No applications yet.</p>
      ) : (
        <div className="overflow-x-auto border border-white/10 rounded-xl">
          <table className="w-full text-xs text-left">
            <thead className="bg-white/5 text-yellow font-title">
              <tr>
                {columns.map(([key, label]) => (
                  <th key={key} className="px-4 py-3 whitespace-nowrap">{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-t border-white/10 align-top">
                  {columns.map(([key]) => (
                    <td key={key} className="px-4 py-3 min-w-[110px] max-w-[260px]">
                      {r[key] || <span className="text-white/25">—</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}