function analyzeResume() {
  const resumeText = document.getElementById("resumeText").value.toLowerCase();
  const jobText = document.getElementById("jobText").value.toLowerCase();

  if (!resumeText || !jobText) {
    alert("Please paste both resume text and job description.");
    return;
  }

  const keywords = [
    "python", "sql", "javascript", "html", "css",
    "react", "node", "power bi", "excel", "tableau",
    "pandas", "numpy", "machine learning", "data analysis",
    "data visualization", "dashboard", "etl", "git",
    "communication", "problem solving", "api"
  ];

  let found = [];
  let missing = [];

  keywords.forEach(keyword => {
    if (jobText.includes(keyword)) {
      if (resumeText.includes(keyword)) {
        found.push(keyword);
      } else {
        missing.push(keyword);
      }
    }
  });

  const total = found.length + missing.length;
  const score = total === 0 ? 0 : Math.round((found.length / total) * 100);

  document.getElementById("matchScore").innerText = score + "%";
  document.getElementById("foundKeywords").innerText = found.length ? found.join(", ") : "No matching keywords found.";
  document.getElementById("missingKeywords").innerText = missing.length ? missing.join(", ") : "No missing keywords found.";

  const tipsList = document.getElementById("tipsList");
  tipsList.innerHTML = "";

  if (missing.length > 0) {
    missing.forEach(keyword => {
      const li = document.createElement("li");
      li.innerText = "Consider adding experience or examples related to " + keyword + ".";
      tipsList.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.innerText = "Great match! Your resume includes the main keywords from the job description.";
    tipsList.appendChild(li);
  }

  document.getElementById("result").classList.remove("hidden");
}