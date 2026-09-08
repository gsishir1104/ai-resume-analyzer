# AI Resume Analyzer

A browser-based resume and job-description comparison tool built with HTML, CSS, and JavaScript. Paste both texts to see keyword overlap, missing terms, and suggestions for improving how relevant experience is described.

## What it demonstrates

- Client-side text processing and input checks.
- A transparent keyword-match calculation.
- Dynamic results rendered through the DOM.
- A focused interface for a practical job-search workflow.

## How the analysis works

The application lowercases both inputs and checks a fixed list of 21 keywords, including Python, SQL, JavaScript, Power BI, and communication. Only keywords found in the job description contribute to the score.

```text
Match score = round(matched keywords / keywords detected in the job description × 100)
```

For example, a job description containing only "Python SQL" and a resume containing only "Python" produces a 50% score, with SQL listed as missing. If no supported keywords occur in the job description, the score is 0%.

Matching uses substring checks, so it does not understand word boundaries, context, proficiency, or synonyms. Despite the project name, the current implementation is rule-based JavaScript: it does not call an AI model or an external API. The score measures keyword overlap, not hiring suitability or an employer's ATS result.

## Run locally

Clone the repository and open `index.html` in a modern browser:

```bash
git clone https://github.com/gsishir1104/ai-resume-analyzer.git
cd ai-resume-analyzer
```

No dependencies or build step are required. Alternatively, with Python 3 installed, serve the directory:

```bash
python -m http.server 8000
```

Open [localhost:8000](http://localhost:8000). Python is only an optional static-file server; the application runs in JavaScript.

## Try it

1. Paste resume text and a job description.
2. Select **Analyze Resume**.
3. Review the score, found keywords, missing keywords, and generated tips.
4. Add a suggested skill to your resume only when it reflects your actual experience.

The supplied code processes text in the browser and has no upload, persistence, or network-request implementation. PDF/DOCX parsing, semantic matching, and model-based recommendations are outside the current scope.

## Source guide

| File | Responsibility |
| --- | --- |
| [index.html](index.html) | Text inputs and results layout |
| [script.js](script.js) | Keyword list, matching, scoring, and tips |
| [style.css](style.css) | Page and component styling |

[Author's GitHub](https://github.com/gsishir1104)
