const surveyQuestions = [
  {
    id: "secondTax",
    short: "Second-property tax",
    label: "Tax second and additional properties",
    prompt: "Support increasing taxes on second and additional residential properties."
  },
  {
    id: "govRevenue",
    short: "Public funding",
    label: "Use tax revenue for affordable housing",
    prompt: "Support using government tax revenue to build affordable and supportive housing."
  },
  {
    id: "ownershipLimit",
    short: "Ownership limits",
    label: "Limit how many homes one owner can hold",
    prompt: "Support stricter limits on how many residential properties a person or corporation can own."
  },
  {
    id: "affordablePriority",
    short: "Prioritize affordability",
    label: "Prioritize affordable developments",
    prompt: "Support prioritizing affordable housing developments over luxury housing."
  },
  {
    id: "rentControl",
    short: "Rent control",
    label: "Strengthen rent control",
    prompt: "Support stronger rent control policies to protect tenants from rising costs."
  },
  {
    id: "affordability",
    short: "Affordability rating",
    label: "Housing is affordable in the HCI community",
    prompt: "Agreement with the statement that housing is affordable for people in the HCI community."
  }
];

const surveyMeta = {
  total: 125,
  groups: { Parent: 98, Student: 27 },
  housing: {
    all: { "Own home": 38, Renting: 80, "Living with family": 7 },
    Parent: { "Own home": 38, Renting: 56, "Living with family": 4 },
    Student: { Renting: 24, "Living with family": 3 }
  }
};

const surveySummary = {
  secondTax: {
    all: { n: 125, mean: 6.36, median: 7, mode: 8, min: 1, max: 10, range: 9, iqr: 3, dist: { 1: 2, 2: 6, 3: 3, 4: 18, 5: 14, 6: 18, 7: 16, 8: 27, 9: 16, 10: 5 } },
    Parent: { n: 98, mean: 6.82, median: 7, mode: 8, min: 1, max: 10, range: 9, iqr: 2, dist: { 1: 1, 2: 3, 3: 1, 4: 9, 5: 9, 6: 15, 7: 15, 8: 27, 9: 14, 10: 4 } },
    Student: { n: 27, mean: 4.7, median: 4, mode: 4, min: 1, max: 10, range: 9, iqr: 1.5, dist: { 1: 1, 2: 3, 3: 2, 4: 9, 5: 5, 6: 3, 7: 1, 8: 0, 9: 2, 10: 1 } }
  },
  govRevenue: {
    all: { n: 125, mean: 7.32, median: 8, mode: 8, min: 1, max: 10, range: 9, iqr: 3, dist: { 1: 2, 2: 4, 3: 1, 4: 3, 5: 8, 6: 14, 7: 25, 8: 30, 9: 29, 10: 9 } },
    Parent: { n: 98, mean: 7.58, median: 8, mode: 8, min: 1, max: 10, range: 9, iqr: 2, dist: { 1: 1, 2: 3, 3: 1, 4: 2, 5: 5, 6: 5, 7: 19, 8: 28, 9: 27, 10: 7 } },
    Student: { n: 27, mean: 6.37, median: 6, mode: 6, min: 1, max: 10, range: 9, iqr: 1, dist: { 1: 1, 2: 1, 3: 0, 4: 1, 5: 3, 6: 9, 7: 6, 8: 2, 9: 2, 10: 2 } }
  },
  ownershipLimit: {
    all: { n: 125, mean: 5.89, median: 6, mode: 5, min: 1, max: 10, range: 9, iqr: 2, dist: { 1: 2, 2: 4, 3: 6, 4: 17, 5: 27, 6: 21, 7: 20, 8: 14, 9: 13, 10: 1 } },
    Parent: { n: 98, mean: 6.19, median: 6, mode: 5, min: 1, max: 9, range: 8, iqr: 2, dist: { 1: 1, 2: 3, 3: 3, 4: 6, 5: 22, 6: 19, 7: 20, 8: 13, 9: 11, 10: 0 } },
    Student: { n: 27, mean: 4.78, median: 4, mode: 4, min: 1, max: 10, range: 9, iqr: 1, dist: { 1: 1, 2: 1, 3: 3, 4: 11, 5: 5, 6: 2, 7: 0, 8: 1, 9: 2, 10: 1 } }
  },
  affordablePriority: {
    all: { n: 125, mean: 6.58, median: 7, mode: 7, min: 1, max: 10, range: 9, iqr: 3, dist: { 1: 2, 2: 2, 3: 7, 4: 8, 5: 16, 6: 20, 7: 28, 8: 15, 9: 22, 10: 5 } },
    Parent: { n: 98, mean: 6.92, median: 7, mode: 7, min: 1, max: 10, range: 9, iqr: 2, dist: { 1: 1, 2: 2, 3: 2, 4: 3, 5: 11, 6: 16, 7: 25, 8: 15, 9: 21, 10: 2 } },
    Student: { n: 27, mean: 5.37, median: 5, mode: 3, min: 1, max: 10, range: 9, iqr: 2.5, dist: { 1: 1, 2: 0, 3: 5, 4: 5, 5: 5, 6: 4, 7: 3, 8: 0, 9: 1, 10: 3 } }
  },
  rentControl: {
    all: { n: 125, mean: 6.56, median: 7, mode: 7, min: 1, max: 10, range: 9, iqr: 3, dist: { 1: 2, 2: 4, 3: 4, 4: 7, 5: 19, 6: 19, 7: 28, 8: 17, 9: 21, 10: 4 } },
    Parent: { n: 98, mean: 6.82, median: 7, mode: 7, min: 1, max: 10, range: 9, iqr: 2, dist: { 1: 1, 2: 3, 3: 3, 4: 4, 5: 10, 6: 14, 7: 26, 8: 15, 9: 20, 10: 2 } },
    Student: { n: 27, mean: 5.63, median: 5, mode: 5, min: 1, max: 10, range: 9, iqr: 1.5, dist: { 1: 1, 2: 1, 3: 1, 4: 3, 5: 9, 6: 5, 7: 2, 8: 2, 9: 1, 10: 2 } }
  },
  affordability: {
    all: { n: 125, mean: 3.76, median: 4, mode: 3, min: 1, max: 10, range: 9, iqr: 2, dist: { 1: 4, 2: 25, 3: 33, 4: 25, 5: 24, 6: 8, 7: 1, 8: 4, 9: 0, 10: 1 } },
    Parent: { n: 98, mean: 3.99, median: 4, mode: 3, min: 1, max: 10, range: 9, iqr: 2, dist: { 1: 2, 2: 16, 3: 24, 4: 22, 5: 20, 6: 8, 7: 1, 8: 4, 9: 0, 10: 1 } },
    Student: { n: 27, mean: 2.93, median: 3, mode: 2, min: 1, max: 5, range: 4, iqr: 1.5, dist: { 1: 2, 2: 9, 3: 9, 4: 3, 5: 4, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 } }
  }
};

const secondaryData = {
  homelessness: {
    title: "Toronto homelessness estimates",
    note: "Counts are not perfectly comparable across methods, but the direction is clear: more people are being counted in emergency housing need.",
    values: [
      { label: "2018", value: 8000 },
      { label: "2020", value: 9000 },
      { label: "2022", value: 9800 },
      { label: "2023", value: 10500 },
      { label: "2024 SNA", value: 15418 }
    ]
  },
  affordability: {
    title: "Ownership affordability pressure",
    note: "RBC measures ownership costs as a share of median household income. It does not fully capture renting, but it shows how severe Toronto's housing costs are.",
    values: [
      { label: "Detached long-run avg.", value: 50.4 },
      { label: "All homes Q3 2024", value: 43.3 },
      { label: "Detached Q3 2024", value: 75.1 }
    ]
  }
};

const evidenceTimeline = {
  2018: {
    title: "2018",
    text: "Project data begins with roughly 8,000 people in shelter or street-needs data, showing the issue was already serious before the latest affordability shock."
  },
  2021: {
    title: "2021",
    text: "Census and affordability data show why shelter cost as a share of income matters, especially for renters."
  },
  2023: {
    title: "2023",
    text: "The project evidence identifies shelter use rising above 10,500, while affordable housing remained limited."
  },
  2024: {
    title: "2024",
    text: "Toronto's 2024 Street Needs Assessment estimated 15,418 people experiencing homelessness indoors and outdoors."
  }
};

const responseThemes = [
  { id: "rent", label: "Rent burden", count: 109, detail: "87% of short answers mention rent or rental pressure." },
  { id: "savings", label: "Savings delayed", count: 90, detail: "72% mention savings, down payments, or delayed financial plans." },
  { id: "stress", label: "Budget stress", count: 90, detail: "72% mention stress, emergencies, groceries, income, or tight budgets." },
  { id: "ownership", label: "Ownership out of reach", count: 38, detail: "30% mention buying, owning, mortgages, or home ownership." },
  { id: "move", label: "Moving farther", count: 28, detail: "22% mention moving, commuting, or living farther from preferred areas." },
  { id: "independence", label: "Less independence", count: 15, detail: "12% mention family, parents, independence, or moving out." }
];

const correlations = {
  pair1: {
    title: "Second-property tax and ownership limits",
    x: "Tax second properties",
    y: "Limit ownership",
    all: { n: 125, r: 0.9371, slope: 0.8362, intercept: 0.5696 },
    Parent: { n: 98, r: 0.9412, slope: 0.8607, intercept: 0.3272 },
    Student: { n: 27, r: 0.9164, slope: 0.8898, intercept: 0.5926 }
  },
  pair2: {
    title: "Public funding and affordable-development priority",
    x: "Use tax revenue",
    y: "Prioritize affordability",
    all: { n: 125, r: 0.8653, slope: 0.902, intercept: -0.0188 },
    Parent: { n: 98, r: 0.8969, slope: 0.8773, intercept: 0.2667 },
    Student: { n: 27, r: 0.7543, slope: 0.8707, intercept: -0.1765 }
  }
};

const state = {
  question: "govRevenue",
  group: "all",
  chartMode: "distribution",
  secondaryChart: "homelessness",
  theme: "rent",
  correlationPair: "pair1",
  correlationGroup: "all"
};

const numberFormatter = new Intl.NumberFormat("en-CA");

function initRevealAnimations() {
  const revealItems = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
}

function getQuestion(id) {
  return surveyQuestions.find((question) => question.id === id);
}

function setActiveButton(selector, attribute, value) {
  document.querySelectorAll(selector).forEach((button) => {
    const isActive = button.dataset[attribute] === value;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function countAtLeast(stats, score) {
  return Object.entries(stats.dist).reduce((total, [key, value]) => total + (Number(key) >= score ? value : 0), 0);
}

function countAtMost(stats, score) {
  return Object.entries(stats.dist).reduce((total, [key, value]) => total + (Number(key) <= score ? value : 0), 0);
}

function pct(value, total) {
  return `${Math.round((value / total) * 100)}%`;
}

function createQuestionButtons() {
  const container = document.getElementById("questionButtons");
  if (!container) return;

  container.innerHTML = surveyQuestions.map((question) => `
    <button type="button" data-question="${question.id}" title="${question.prompt}">
      ${question.short}
    </button>
  `).join("");

  container.querySelectorAll("[data-question]").forEach((button) => {
    button.addEventListener("click", () => {
      state.question = button.dataset.question;
      renderSurveyExplorer();
    });
  });
}

function getMaxDistribution(questionId, group) {
  if (group !== "all") {
    return Math.max(...Object.values(surveySummary[questionId][group].dist));
  }

  return Math.max(...Array.from({ length: 10 }, (_, index) => {
    const score = index + 1;
    return surveySummary[questionId].Parent.dist[score] + surveySummary[questionId].Student.dist[score];
  }));
}

function renderDistributionChart(container, questionId, group) {
  const maxValue = getMaxDistribution(questionId, group);
  const bars = Array.from({ length: 10 }, (_, index) => {
    const score = index + 1;
    let total;
    let segments;

    if (group === "all") {
      const parentCount = surveySummary[questionId].Parent.dist[score];
      const studentCount = surveySummary[questionId].Student.dist[score];
      total = parentCount + studentCount;
      segments = `
        <span class="scale-segment parents" style="--height: ${(parentCount / maxValue) * 100}%"></span>
        <span class="scale-segment students" style="--height: ${(studentCount / maxValue) * 100}%"></span>
      `;
    } else {
      total = surveySummary[questionId][group].dist[score];
      segments = `<span class="scale-segment all" style="--height: ${(total / maxValue) * 100}%"></span>`;
    }

    return `
      <div class="scale-bar" title="${total} response${total === 1 ? "" : "s"} gave ${score}/10">
        <span class="scale-count">${total}</span>
        <span class="scale-track" aria-hidden="true">${segments}</span>
        <span class="scale-score">${score}</span>
      </div>
    `;
  }).join("");

  container.innerHTML = `<div class="scale-chart">${bars}</div>`;
}

function renderMeanChart(container) {
  container.innerHTML = `
    <div class="mean-chart">
      ${surveyQuestions.map((question) => {
        const parents = surveySummary[question.id].Parent.mean;
        const students = surveySummary[question.id].Student.mean;
        return `
          <div class="mean-row">
            <button type="button" data-select-question="${question.id}">${question.short}</button>
            <div class="paired-bars">
              <span class="paired-bar">
                <span>Parents</span>
                <span class="paired-track"><i style="--width: ${parents * 10}%; --bar-color: var(--cyan)"></i></span>
                <strong>${parents.toFixed(2)}</strong>
              </span>
              <span class="paired-bar">
                <span>Students</span>
                <span class="paired-track"><i style="--width: ${students * 10}%; --bar-color: var(--amber)"></i></span>
                <strong>${students.toFixed(2)}</strong>
              </span>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;

  container.querySelectorAll("[data-select-question]").forEach((button) => {
    button.addEventListener("click", () => {
      state.question = button.dataset.selectQuestion;
      state.chartMode = "distribution";
      renderSurveyExplorer();
    });
  });
}

function getBoxPositions(stats) {
  const min = stats.min;
  const max = stats.max;
  const q1 = Math.max(min, stats.median - stats.iqr / 2);
  const q3 = Math.min(max, stats.median + stats.iqr / 2);
  const toPercent = (value) => `${((value - 1) / 9) * 100}%`;

  return {
    min: toPercent(min),
    max: toPercent(max),
    q1: toPercent(q1),
    q3: toPercent(q3),
    median: toPercent(stats.median)
  };
}

function renderBoxChart(container, questionId, group) {
  const groups = group === "all" ? ["Parent", "Student"] : [group];
  container.innerHTML = `
    <div class="box-chart">
      ${groups.map((groupName) => {
        const stats = surveySummary[questionId][groupName];
        const box = getBoxPositions(stats);
        const color = groupName === "Parent" ? "var(--cyan)" : "var(--amber)";
        return `
          <div class="box-row">
            <span class="box-title">${groupName === "Parent" ? "Parents" : "Students"}</span>
            <div>
              <div class="box-track" style="--min: ${box.min}; --max: ${box.max}; --q1: ${box.q1}; --q3: ${box.q3}; --median: ${box.median}; --box-color: ${color}">
                <i class="box-range"></i>
                <i class="box-iqr"></i>
                <i class="box-median"></i>
              </div>
              <div class="box-axis"><span>1</span><span>5</span><span>10</span></div>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderSurveyReadout() {
  const container = document.getElementById("surveyReadout");
  if (!container) return;

  const stats = surveySummary[state.question][state.group];
  const high = countAtLeast(stats, 7);
  const low = countAtMost(stats, 3);
  const specialLabel = state.question === "affordability" ? "Rating 1-3" : "Rating 7-10";
  const specialValue = state.question === "affordability" ? pct(low, stats.n) : pct(high, stats.n);

  container.innerHTML = `
    <article><span>Responses</span><strong>${stats.n}</strong></article>
    <article><span>Mean</span><strong>${stats.mean.toFixed(2)}</strong></article>
    <article><span>Median</span><strong>${stats.median}</strong></article>
    <article><span>${specialLabel}</span><strong>${specialValue}</strong></article>
  `;
}

function renderSurveyExplorer() {
  const question = getQuestion(state.question);
  const chart = document.getElementById("surveyChart");
  const label = document.getElementById("activeQuestionLabel");
  if (!chart || !question || !label) return;

  setActiveButton("[data-question]", "question", state.question);
  setActiveButton("[data-group]", "group", state.group);
  setActiveButton("[data-chart-mode]", "chartMode", state.chartMode);

  label.textContent = question.label;

  if (state.chartMode === "distribution") {
    renderDistributionChart(chart, state.question, state.group);
  } else if (state.chartMode === "means") {
    renderMeanChart(chart);
  } else {
    renderBoxChart(chart, state.question, state.group);
  }

  renderSurveyReadout();
  renderHousingChart();
}

function renderHousingChart() {
  const chart = document.getElementById("housingChart");
  const title = document.getElementById("housingTitle");
  if (!chart || !title) return;

  const counts = surveyMeta.housing[state.group];
  const total = Object.values(counts).reduce((sum, value) => sum + value, 0);
  const colorMap = {
    Renting: "var(--red)",
    "Own home": "var(--teal)",
    "Living with family": "var(--amber)"
  };

  title.textContent = state.group === "all" ? "All respondents" : `${state.group}s`;
  chart.innerHTML = Object.entries(counts).map(([label, value]) => `
    <div class="housing-row">
      <div class="housing-label"><span>${label}</span><span>${value} (${pct(value, total)})</span></div>
      <span class="housing-track"><i style="--width: ${(value / total) * 100}%; --bar-color: ${colorMap[label] || "var(--blue)"}"></i></span>
    </div>
  `).join("");
}

function renderThemeButtons() {
  const container = document.getElementById("themeButtons");
  if (!container) return;

  container.innerHTML = responseThemes.map((theme) => `
    <button type="button" data-theme="${theme.id}">${theme.label}</button>
  `).join("");

  container.querySelectorAll("[data-theme]").forEach((button) => {
    button.addEventListener("click", () => {
      state.theme = button.dataset.theme;
      renderThemeDetail();
    });
  });

  renderThemeDetail();
}

function renderThemeDetail() {
  const title = document.getElementById("themeTitle");
  const detail = document.getElementById("themeDetail");
  const theme = responseThemes.find((item) => item.id === state.theme);
  if (!title || !detail || !theme) return;

  setActiveButton("[data-theme]", "theme", state.theme);
  title.textContent = theme.label;
  detail.textContent = theme.detail;
}

function renderSecondaryChart() {
  const chart = document.getElementById("secondaryChart");
  const title = document.getElementById("secondaryTitle");
  const note = document.getElementById("secondaryNote");
  const data = secondaryData[state.secondaryChart];
  if (!chart || !title || !note || !data) return;

  setActiveButton("[data-secondary-chart]", "secondaryChart", state.secondaryChart);
  title.textContent = data.title;
  note.textContent = data.note;

  if (state.secondaryChart === "homelessness") {
    renderLineSvg(chart, data.values);
  } else {
    renderBarSvg(chart, data.values);
  }
}

function renderLineSvg(container, values) {
  const width = 680;
  const height = 320;
  const padding = { top: 30, right: 34, bottom: 58, left: 58 };
  const max = Math.max(...values.map((item) => item.value));
  const min = Math.min(...values.map((item) => item.value));
  const x = (index) => padding.left + (index / (values.length - 1)) * (width - padding.left - padding.right);
  const y = (value) => height - padding.bottom - ((value - min) / (max - min)) * (height - padding.top - padding.bottom);
  const points = values.map((item, index) => `${x(index)},${y(item.value)}`).join(" ");

  container.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" aria-hidden="true" focusable="false">
      <line x1="${padding.left}" y1="${height - padding.bottom}" x2="${width - padding.right}" y2="${height - padding.bottom}" stroke="rgba(17,24,39,0.22)" />
      <line x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${height - padding.bottom}" stroke="rgba(17,24,39,0.22)" />
      <polyline points="${points}" fill="none" stroke="var(--red)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
      ${values.map((item, index) => `
        <g>
          <circle cx="${x(index)}" cy="${y(item.value)}" r="7" fill="var(--teal)" stroke="white" stroke-width="3" />
          <text class="svg-label" x="${x(index)}" y="${height - 24}" text-anchor="middle">${item.label}</text>
          <text class="svg-label" x="${x(index)}" y="${y(item.value) - 14}" text-anchor="middle">${numberFormatter.format(item.value)}</text>
        </g>
      `).join("")}
    </svg>
  `;
}

function renderBarSvg(container, values) {
  const width = 680;
  const height = 320;
  const padding = { top: 26, right: 28, bottom: 72, left: 42 };
  const max = Math.max(...values.map((item) => item.value));
  const barWidth = (width - padding.left - padding.right) / values.length - 34;

  container.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" aria-hidden="true" focusable="false">
      <line x1="${padding.left}" y1="${height - padding.bottom}" x2="${width - padding.right}" y2="${height - padding.bottom}" stroke="rgba(17,24,39,0.22)" />
      ${values.map((item, index) => {
        const x = padding.left + index * ((width - padding.left - padding.right) / values.length) + 18;
        const barHeight = (item.value / max) * (height - padding.top - padding.bottom);
        const y = height - padding.bottom - barHeight;
        return `
          <g>
            <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="8" fill="${index === values.length - 1 ? "var(--red)" : "var(--teal)"}" />
            <text class="svg-label" x="${x + barWidth / 2}" y="${y - 12}" text-anchor="middle">${item.value}%</text>
            <text class="svg-label" x="${x + barWidth / 2}" y="${height - 42}" text-anchor="middle">${item.label}</text>
          </g>
        `;
      }).join("")}
    </svg>
  `;
}

function initEvidenceTimeline() {
  const buttons = document.querySelectorAll("[data-evidence-year]");
  const detail = document.getElementById("timelineDetail");
  if (!buttons.length || !detail) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = evidenceTimeline[button.dataset.evidenceYear];
      if (!item) return;

      buttons.forEach((timelineButton) => timelineButton.classList.remove("is-active"));
      button.classList.add("is-active");
      detail.innerHTML = `
        <p class="eyebrow">Evidence point</p>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      `;
    });
  });
}

function renderCorrelation() {
  const pair = correlations[state.correlationPair];
  const stats = pair[state.correlationGroup];
  const title = document.getElementById("correlationTitle");
  const chart = document.getElementById("correlationChart");
  const statPanel = document.getElementById("correlationStats");
  if (!pair || !stats || !title || !chart || !statPanel) return;

  setActiveButton("[data-correlation-pair]", "correlationPair", state.correlationPair);
  setActiveButton("[data-correlation-group]", "correlationGroup", state.correlationGroup);

  title.textContent = pair.title;
  chart.innerHTML = `
    <div class="corr-meter">
      <div class="corr-track" title="r = ${stats.r}">
        <i style="--width: ${Math.abs(stats.r) * 100}%"></i>
      </div>
      <div class="corr-scale"><span>0</span><span>moderate</span><span>1.0</span></div>
    </div>
  `;
  statPanel.innerHTML = `
    <article><span>Correlation r</span><strong>${stats.r.toFixed(4)}</strong></article>
    <article><span>Sample size</span><strong>${stats.n}</strong></article>
    <article><span>Regression</span><strong>y = ${stats.slope.toFixed(2)}x ${stats.intercept < 0 ? "-" : "+"} ${Math.abs(stats.intercept).toFixed(2)}</strong></article>
  `;
}

function bindControls() {
  document.querySelectorAll("[data-group]").forEach((button) => {
    button.addEventListener("click", () => {
      state.group = button.dataset.group;
      renderSurveyExplorer();
    });
  });

  document.querySelectorAll("[data-chart-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.chartMode = button.dataset.chartMode;
      renderSurveyExplorer();
    });
  });

  document.querySelectorAll("[data-secondary-chart]").forEach((button) => {
    button.addEventListener("click", () => {
      state.secondaryChart = button.dataset.secondaryChart;
      renderSecondaryChart();
    });
  });

  document.querySelectorAll("[data-correlation-pair]").forEach((button) => {
    button.addEventListener("click", () => {
      state.correlationPair = button.dataset.correlationPair;
      renderCorrelation();
    });
  });

  document.querySelectorAll("[data-correlation-group]").forEach((button) => {
    button.addEventListener("click", () => {
      state.correlationGroup = button.dataset.correlationGroup;
      renderCorrelation();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initRevealAnimations();
  createQuestionButtons();
  renderThemeButtons();
  bindControls();
  renderSurveyExplorer();
  renderSecondaryChart();
  initEvidenceTimeline();
  renderCorrelation();
});
