const shelterUseData = [
  { label: "2018", value: 8000, note: "about 8,000" },
  { label: "2020", value: 9000, note: "approx. 9,000" },
  { label: "2022", value: 9800, note: "approx. 9,800" },
  { label: "2023", value: 10500, note: "over 10,500" }
];

const rbcAffordabilityData = [
  { label: "Long-run detached average", value: 50.4, note: "50.4%" },
  { label: "All home types, Q3 2024", value: 43.3, note: "43.3%" },
  { label: "Detached homes, Q3 2024", value: 75.1, note: "75.1%" },
  { label: "All ownership, text summary", value: 75, note: "75%+" }
];

const evidenceTimeline = {
  2018: {
    title: "2018",
    text: "Project data begins with roughly 8,000 people in shelter or street needs data, showing that homelessness was already a major issue before the most recent affordability shock."
  },
  2021: {
    title: "2021",
    text: "Census and housing data show that renters face greater affordability pressure than owners, and that shelter-cost-to-income ratios are a key way to measure the burden."
  },
  2023: {
    title: "2023",
    text: "The project text identifies shelter use rising above 10,500, which supports the claim that homelessness grew while affordable housing remained limited."
  },
  2024: {
    title: "2024",
    text: "The City of Toronto's 2024 Street Needs Assessment estimated 15,418 people experiencing homelessness, including people indoors and outdoors."
  }
};

const surveyStats = [
  {
    id: "second-properties",
    label: "Support tax on second properties",
    parents: { mean: 6.75, median: 7, mode: 8, range: 9, iqr: 2 },
    students: { mean: 5.11, median: 5, mode: 4, range: 9, iqr: 2 }
  },
  {
    id: "government-tax",
    label: "Support government tax for affordable housing",
    parents: { mean: 7.59, median: 8, mode: 9, range: 9, iqr: 2 },
    students: { mean: 6.67, median: 7, mode: 6, range: 9, iqr: 1.75 }
  },
  {
    id: "ownership-limits",
    label: "Support limits on ownership",
    parents: { mean: 6.2, median: 6, mode: 7, range: 8, iqr: 2 },
    students: { mean: 5.11, median: 4.5, mode: 4, range: 9, iqr: 1.75 }
  },
  {
    id: "prioritize-affordable",
    label: "Support prioritizing affordable housing",
    parents: { mean: 6.88, median: 7, mode: 7, range: 9, iqr: 2 },
    students: { mean: 5.83, median: 5.5, mode: 4, range: 9, iqr: 3 }
  },
  {
    id: "rent-control",
    label: "Support rent control",
    parents: { mean: 6.86, median: 7, mode: 7, range: 9, iqr: 2 },
    students: { mean: 6.11, median: 6, mode: 5, range: 9, iqr: 2.75 }
  },
  {
    id: "affordability-rating",
    label: "Housing affordable rating",
    parents: { mean: 4.24, median: 4, mode: 4, range: 9, iqr: 2 },
    students: { mean: 2.83, median: 3, mode: 3, range: 4, iqr: 1 }
  }
];

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
  }, { threshold: 0.15 });

  revealItems.forEach((item) => observer.observe(item));
}

function createBarChart(containerId, data, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const maxValue = Math.max(...data.map((item) => item.value));
  container.innerHTML = "";

  data.forEach((item) => {
    const row = document.createElement("div");
    row.className = "bar-row";
    row.style.setProperty("--bar-width", `${(item.value / maxValue) * 100}%`);

    const valueText = options.percent
      ? item.note
      : item.note || numberFormatter.format(item.value);

    row.innerHTML = `
      <strong>${item.label}</strong>
      <span class="bar-track" aria-hidden="true"><span class="bar-fill"></span></span>
      <span class="bar-value">${valueText}</span>
    `;

    container.appendChild(row);
    requestAnimationFrame(() => row.classList.add("is-ready"));
  });
}

function initEvidenceTimeline() {
  const buttons = document.querySelectorAll("[data-evidence-year]");
  const detail = document.getElementById("timelineDetail");
  if (!buttons.length || !detail) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const year = button.dataset.evidenceYear;
      const item = evidenceTimeline[year];
      if (!item) return;

      buttons.forEach((timelineButton) => timelineButton.classList.remove("active"));
      button.classList.add("active");
      detail.innerHTML = `
        <p class="eyebrow">Evidence point</p>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      `;
    });
  });
}

function renderMeanComparison() {
  const container = document.getElementById("meanChart");
  if (!container) return;

  container.innerHTML = "";

  // Mean bars compare parents and students on the same 1-10 Likert scale.
  surveyStats.forEach((measure) => {
    const row = document.createElement("div");
    row.className = "comparison-row";
    row.innerHTML = `
      <span class="comparison-label">${measure.label}</span>
      <span class="paired-bars">
        <span class="paired-bar">
          <span>Parents</span>
          <i style="--bar-width: ${measure.parents.mean * 10}%; --bar-color: var(--cyan)"></i>
          <strong>${measure.parents.mean.toFixed(2)}</strong>
        </span>
        <span class="paired-bar">
          <span>Students</span>
          <i style="--bar-width: ${measure.students.mean * 10}%; --bar-color: var(--gold)"></i>
          <strong>${measure.students.mean.toFixed(2)}</strong>
        </span>
      </span>
    `;
    container.appendChild(row);
  });
}

function renderStatCards() {
  const container = document.getElementById("statCards");
  if (!container) return;

  container.innerHTML = "";

  surveyStats.forEach((measure) => {
    const card = document.createElement("article");
    card.innerHTML = `
      <div class="stats-card-header">
        <h3 class="measure-name">${measure.label}</h3>
      </div>
      <table class="stats-table">
        <thead>
          <tr>
            <th>Group</th>
            <th>Mean</th>
            <th>Median</th>
            <th>Mode</th>
            <th>Range</th>
            <th>IQR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Parents</td>
            <td>${measure.parents.mean.toFixed(2)}</td>
            <td>${measure.parents.median}</td>
            <td>${measure.parents.mode}</td>
            <td>${measure.parents.range}</td>
            <td>${measure.parents.iqr}</td>
          </tr>
          <tr>
            <td>Students</td>
            <td>${measure.students.mean.toFixed(2)}</td>
            <td>${measure.students.median}</td>
            <td>${measure.students.mode}</td>
            <td>${measure.students.range}</td>
            <td>${measure.students.iqr}</td>
          </tr>
        </tbody>
      </table>
    `;
    container.appendChild(card);
  });
}

function getBoxPosition(stats) {
  // The survey gives range and IQR, not raw responses. This creates an
  // illustrative box plot from the reported summary statistics on a 1-10 scale.
  const min = Math.max(1, Math.min(stats.median - stats.range / 2, 10 - stats.range));
  const max = Math.min(10, min + stats.range);
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

function renderBoxPlots() {
  const container = document.getElementById("boxPlotChart");
  if (!container) return;

  container.innerHTML = "";

  surveyStats.forEach((measure) => {
    const parentBox = getBoxPosition(measure.parents);
    const studentBox = getBoxPosition(measure.students);
    const group = document.createElement("div");
    group.className = "boxplot-group";
    group.innerHTML = `
      <span class="boxplot-title">${measure.label}</span>
      <span class="boxplot-stack">
        <span class="boxplot-row">
          <span>Parents</span>
          <span class="boxplot-track" style="--min: ${parentBox.min}; --max: ${parentBox.max}; --q1: ${parentBox.q1}; --q3: ${parentBox.q3}; --median: ${parentBox.median}; --box-color: var(--cyan)">
            <i class="boxplot-range"></i>
            <i class="boxplot-iqr"></i>
            <i class="boxplot-median"></i>
          </span>
        </span>
        <span class="boxplot-row">
          <span>Students</span>
          <span class="boxplot-track" style="--min: ${studentBox.min}; --max: ${studentBox.max}; --q1: ${studentBox.q1}; --q3: ${studentBox.q3}; --median: ${studentBox.median}; --box-color: var(--gold)">
            <i class="boxplot-range"></i>
            <i class="boxplot-iqr"></i>
            <i class="boxplot-median"></i>
          </span>
        </span>
      </span>
    `;
    container.appendChild(group);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initRevealAnimations();
  createBarChart("shelterChart", shelterUseData);
  createBarChart("rbcChart", rbcAffordabilityData, { percent: true });
  initEvidenceTimeline();
  renderMeanComparison();
  renderStatCards();
  renderBoxPlots();
});
