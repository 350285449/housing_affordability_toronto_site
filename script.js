const numberFormatter = new Intl.NumberFormat("en-CA");
const currencyFormatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  maximumFractionDigits: 0
});

const surveyQuestionDefinitions = [
  {
    id: "secondTax",
    index: 0,
    short: "Second-property tax",
    title: "Support increasing taxes on second and additional properties",
    detail: "This question measures support for discouraging housing speculation and using the extra tax revenue for affordable housing.",
    lowLabel: "Opposes extra taxes on additional homes",
    highLabel: "Supports extra taxes despite possible market trade-offs"
  },
  {
    id: "govRevenue",
    index: 1,
    short: "Public revenue",
    title: "Support using government tax revenue for affordable housing",
    detail: "This question measures whether respondents think public money should be used to build affordable and supportive housing.",
    lowLabel: "Opposes higher public spending or taxes",
    highLabel: "Supports public spending even if taxes rise"
  },
  {
    id: "ownershipLimit",
    index: 2,
    short: "Ownership limits",
    title: "Support stricter limits on how many properties one owner can hold",
    detail: "This question measures support for limiting large-scale residential property ownership by individuals or corporations.",
    lowLabel: "Prioritizes investor and developer freedom",
    highLabel: "Prioritizes limits on concentrated ownership"
  },
  {
    id: "affordablePriority",
    index: 3,
    short: "Affordable priority",
    title: "Support prioritizing affordable housing over luxury projects",
    detail: "This question measures whether respondents would prioritize affordable housing even if it changes neighbourhood character or developer profits.",
    lowLabel: "Opposes prioritizing affordable projects",
    highLabel: "Supports affordable projects over luxury projects"
  },
  {
    id: "rentControl",
    index: 4,
    short: "Rent control",
    title: "Support stronger rent-control policies",
    detail: "This question measures support for protecting tenants from rising rents while recognizing possible concerns about rental supply.",
    lowLabel: "Opposes stronger rent control",
    highLabel: "Supports stronger tenant protections"
  },
  {
    id: "affordability",
    index: 5,
    short: "Affordability rating",
    title: "Housing is affordable in the HCI community",
    detail: "This question measures how affordable respondents think housing is for people connected to the HCI community.",
    lowLabel: "Housing feels not affordable",
    highLabel: "Housing feels affordable"
  }
];

const compressedSurveyResponses = [
  { g: "P", h: "O", q: [9, 7, 9, 6, 6, 6] },
  { g: "S", h: "F", q: [7, 6, 10, 10, 10, 5] },
  { g: "S", h: "F", q: [9, 10, 8, 10, 9, 2] },
  { g: "P", h: "O", q: [6, 8, 5, 7, 5, 4] },
  { g: "S", h: "R", q: [10, 10, 9, 9, 10, 1] },
  { g: "P", h: "O", q: [4, 7, 3, 6, 3, 5] },
  { g: "P", h: "R", q: [4, 5, 4, 5, 4, 3] },
  { g: "P", h: "R", q: [7, 9, 6, 6, 8, 4] },
  { g: "P", h: "O", q: [8, 9, 7, 9, 9, 6] },
  { g: "P", h: "R", q: [1, 1, 1, 1, 1, 1] },
  { g: "P", h: "R", q: [2, 2, 2, 3, 2, 2] },
  { g: "S", h: "R", q: [1, 1, 1, 1, 1, 1] },
  { g: "S", h: "R", q: [2, 7, 2, 3, 6, 5] },
  { g: "P", h: "R", q: [4, 4, 4, 5, 4, 2] },
  { g: "S", h: "R", q: [2, 4, 3, 3, 3, 4] },
  { g: "S", h: "R", q: [4, 7, 4, 5, 8, 2] },
  { g: "S", h: "R", q: [4, 6, 4, 4, 5, 3] },
  { g: "S", h: "R", q: [5, 5, 5, 5, 5, 2] },
  { g: "P", h: "R", q: [4, 5, 4, 4, 5, 3] },
  { g: "S", h: "R", q: [4, 6, 5, 6, 6, 3] },
  { g: "P", h: "R", q: [5, 7, 5, 6, 5, 6] },
  { g: "S", h: "R", q: [5, 6, 4, 4, 5, 3] },
  { g: "S", h: "R", q: [4, 7, 4, 6, 5, 3] },
  { g: "S", h: "R", q: [4, 6, 4, 5, 5, 3] },
  { g: "S", h: "R", q: [6, 8, 5, 7, 6, 3] },
  { g: "S", h: "R", q: [5, 7, 5, 4, 5, 3] },
  { g: "S", h: "R", q: [5, 7, 4, 6, 6, 2] },
  { g: "P", h: "R", q: [5, 7, 5, 6, 6, 4] },
  { g: "P", h: "R", q: [6, 7, 5, 5, 6, 4] },
  { g: "S", h: "R", q: [6, 8, 6, 7, 7, 4] },
  { g: "P", h: "R", q: [4, 6, 4, 6, 5, 5] },
  { g: "P", h: "R", q: [5, 7, 5, 6, 7, 4] },
  { g: "P", h: "O", q: [5, 5, 5, 5, 5, 3] },
  { g: "P", h: "R", q: [6, 6, 6, 6, 6, 6] },
  { g: "P", h: "O", q: [7, 7, 6, 7, 7, 4] },
  { g: "P", h: "R", q: [6, 9, 5, 7, 8, 3] },
  { g: "P", h: "R", q: [6, 8, 5, 7, 7, 4] },
  { g: "P", h: "O", q: [6, 7, 5, 7, 6, 3] },
  { g: "P", h: "R", q: [8, 8, 7, 7, 8, 4] },
  { g: "P", h: "O", q: [4, 7, 6, 5, 7, 5] },
  { g: "P", h: "O", q: [6, 8, 5, 6, 7, 5] },
  { g: "P", h: "O", q: [7, 8, 6, 6, 7, 4] },
  { g: "P", h: "R", q: [7, 7, 6, 7, 8, 5] },
  { g: "P", h: "O", q: [7, 8, 6, 7, 7, 5] },
  { g: "P", h: "O", q: [7, 8, 6, 6, 5, 3] },
  { g: "P", h: "O", q: [7, 7, 6, 7, 6, 5] },
  { g: "P", h: "R", q: [8, 8, 7, 8, 7, 3] },
  { g: "P", h: "R", q: [8, 8, 7, 7, 7, 4] },
  { g: "P", h: "R", q: [8, 7, 7, 7, 8, 4] },
  { g: "P", h: "R", q: [8, 8, 7, 7, 7, 3] },
  { g: "P", h: "O", q: [7, 8, 6, 8, 7, 3] },
  { g: "P", h: "O", q: [8, 8, 8, 7, 7, 3] },
  { g: "P", h: "O", q: [7, 8, 6, 7, 7, 6] },
  { g: "P", h: "R", q: [8, 9, 7, 7, 8, 5] },
  { g: "P", h: "O", q: [8, 9, 7, 9, 8, 6] },
  { g: "P", h: "O", q: [8, 9, 7, 9, 8, 4] },
  { g: "P", h: "R", q: [8, 9, 8, 9, 9, 3] },
  { g: "P", h: "O", q: [9, 10, 8, 8, 9, 5] },
  { g: "P", h: "O", q: [8, 9, 7, 8, 7, 2] },
  { g: "P", h: "R", q: [8, 9, 8, 8, 9, 4] },
  { g: "P", h: "O", q: [8, 9, 7, 8, 8, 3] },
  { g: "P", h: "R", q: [9, 9, 9, 9, 9, 8] },
  { g: "P", h: "F", q: [9, 9, 9, 9, 9, 2] },
  { g: "P", h: "F", q: [8, 9, 9, 8, 10, 10] },
  { g: "P", h: "R", q: [8, 9, 7, 9, 8, 4] },
  { g: "P", h: "R", q: [9, 10, 9, 10, 10, 6] },
  { g: "P", h: "O", q: [10, 10, 9, 9, 9, 8] },
  { g: "P", h: "R", q: [9, 9, 8, 9, 9, 2] },
  { g: "S", h: "F", q: [9, 9, 9, 10, 8, 2] },
  { g: "P", h: "R", q: [4, 5, 3, 4, 4, 2] },
  { g: "P", h: "O", q: [2, 2, 2, 2, 2, 2] },
  { g: "P", h: "R", q: [2, 2, 2, 2, 2, 1] },
  { g: "S", h: "R", q: [4, 6, 3, 5, 5, 2] },
  { g: "S", h: "R", q: [2, 2, 3, 3, 2, 2] },
  { g: "P", h: "R", q: [4, 6, 4, 5, 5, 5] },
  { g: "P", h: "R", q: [5, 6, 5, 5, 7, 2] },
  { g: "P", h: "R", q: [6, 7, 5, 6, 6, 5] },
  { g: "P", h: "R", q: [5, 8, 5, 5, 8, 4] },
  { g: "S", h: "R", q: [6, 9, 6, 7, 7, 4] },
  { g: "P", h: "O", q: [6, 7, 6, 7, 5, 5] },
  { g: "P", h: "O", q: [6, 8, 6, 7, 7, 5] },
  { g: "P", h: "O", q: [6, 7, 5, 5, 6, 3] },
  { g: "P", h: "R", q: [7, 7, 5, 6, 6, 4] },
  { g: "P", h: "R", q: [7, 8, 6, 8, 7, 3] },
  { g: "P", h: "O", q: [6, 7, 5, 7, 6, 5] },
  { g: "P", h: "O", q: [8, 9, 6, 9, 7, 3] },
  { g: "P", h: "R", q: [6, 8, 6, 8, 7, 5] },
  { g: "P", h: "O", q: [8, 8, 7, 7, 6, 3] },
  { g: "P", h: "R", q: [8, 9, 7, 9, 7, 4] },
  { g: "P", h: "O", q: [8, 9, 8, 9, 9, 4] },
  { g: "P", h: "R", q: [8, 9, 7, 7, 7, 5] },
  { g: "P", h: "O", q: [8, 9, 7, 9, 8, 3] },
  { g: "P", h: "R", q: [9, 9, 9, 8, 8, 2] },
  { g: "P", h: "R", q: [9, 9, 9, 9, 9, 2] },
  { g: "P", h: "R", q: [9, 8, 8, 8, 9, 2] },
  { g: "P", h: "F", q: [9, 9, 8, 10, 7, 2] },
  { g: "P", h: "O", q: [10, 10, 9, 9, 9, 2] },
  { g: "S", h: "R", q: [4, 6, 4, 5, 5, 3] },
  { g: "P", h: "R", q: [3, 3, 3, 3, 3, 3] },
  { g: "P", h: "R", q: [4, 4, 4, 4, 3, 3] },
  { g: "S", h: "R", q: [3, 7, 4, 4, 6, 5] },
  { g: "S", h: "R", q: [4, 5, 4, 4, 4, 3] },
  { g: "S", h: "R", q: [5, 6, 5, 6, 5, 5] },
  { g: "S", h: "R", q: [3, 5, 4, 3, 4, 2] },
  { g: "P", h: "R", q: [5, 5, 5, 5, 5, 5] },
  { g: "S", h: "R", q: [4, 6, 4, 3, 4, 2] },
  { g: "P", h: "R", q: [5, 8, 5, 6, 7, 3] },
  { g: "P", h: "R", q: [5, 6, 5, 5, 4, 2] },
  { g: "P", h: "R", q: [6, 7, 5, 6, 6, 4] },
  { g: "P", h: "O", q: [7, 8, 7, 8, 8, 3] },
  { g: "P", h: "R", q: [6, 7, 5, 7, 6, 3] },
  { g: "P", h: "O", q: [7, 8, 5, 7, 7, 5] },
  { g: "P", h: "O", q: [7, 8, 6, 6, 5, 4] },
  { g: "P", h: "R", q: [8, 9, 6, 7, 7, 3] },
  { g: "P", h: "O", q: [7, 8, 6, 7, 6, 5] },
  { g: "P", h: "R", q: [8, 8, 7, 9, 9, 3] },
  { g: "P", h: "O", q: [8, 8, 7, 7, 7, 4] },
  { g: "P", h: "R", q: [9, 9, 8, 8, 9, 5] },
  { g: "P", h: "R", q: [9, 9, 9, 9, 9, 8] },
  { g: "P", h: "R", q: [8, 8, 8, 8, 8, 8] },
  { g: "P", h: "R", q: [8, 8, 7, 8, 9, 2] },
  { g: "P", h: "R", q: [9, 9, 8, 9, 9, 2] },
  { g: "P", h: "R", q: [9, 10, 9, 9, 9, 6] },
  { g: "P", h: "O", q: [10, 10, 8, 9, 9, 7] },
  { g: "P", h: "F", q: [10, 10, 8, 9, 9, 4] }
];

const responseGroupLabels = {
  P: "Parent",
  S: "Student"
};

const housingLabels = {
  F: "Living with family",
  O: "Own home",
  R: "Renting"
};

const surveyResponses = compressedSurveyResponses.map((response, index) => {
  const values = Object.fromEntries(
    surveyQuestionDefinitions.map((question) => [question.id, response.q[question.index]])
  );

  return {
    id: index + 1,
    group: responseGroupLabels[response.g],
    housing: housingLabels[response.h],
    ...values
  };
});

const surveyQuestions = surveyQuestionDefinitions.map((question) => ({
  ...question,
  parent: calculateStats(getQuestionValues(question.id, "Parent")),
  student: calculateStats(getQuestionValues(question.id, "Student")),
  all: calculateStats(getQuestionValues(question.id))
}));

const homelessnessData = [
  { year: "2018", value: 8715, color: "var(--teal)" },
  { year: "2021", value: 7347, color: "var(--blue)" },
  { year: "2024", value: 15418, color: "var(--red)" },
  { year: "2025", value: 12196, color: "var(--yellow)" }
];

const correlationPairs = {
  speculation: {
    title: "Tax second properties vs ownership limits",
    xKey: "secondTax",
    yKey: "ownershipLimit",
    x: "Tax second properties",
    y: "Limit ownership"
  },
  funding: {
    title: "Use tax revenue vs prioritize affordable developments",
    xKey: "govRevenue",
    yKey: "affordablePriority",
    x: "Use tax revenue",
    y: "Prioritize affordable developments"
  },
  rentAffordability: {
    title: "Rent-control support vs affordability rating",
    xKey: "rentControl",
    yKey: "affordability",
    x: "Support rent control",
    y: "Housing affordability rating"
  }
};

const state = {
  question: "affordability",
  pair: "speculation",
  showQuestionInfo: false
};

function getQuestionValues(questionId, group = "All") {
  return surveyResponses
    .filter((response) => group === "All" || response.group === group)
    .map((response) => response[questionId]);
}

function calculateQuantile(sortedValues, quantile) {
  if (!sortedValues.length) return 0;

  const position = (sortedValues.length - 1) * quantile;
  const base = Math.floor(position);
  const rest = position - base;
  const next = sortedValues[base + 1];

  return next === undefined
    ? sortedValues[base]
    : sortedValues[base] + rest * (next - sortedValues[base]);
}

function calculateMode(values) {
  const counts = new Map();
  values.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0] - b[0])[0][0];
}

function calculateStats(values) {
  const sortedValues = [...values].sort((a, b) => a - b);
  const q1 = calculateQuantile(sortedValues, 0.25);
  const q3 = calculateQuantile(sortedValues, 0.75);

  return {
    n: values.length,
    mean: values.reduce((sum, value) => sum + value, 0) / values.length,
    median: calculateQuantile(sortedValues, 0.5),
    mode: calculateMode(values),
    range: sortedValues[sortedValues.length - 1] - sortedValues[0],
    min: sortedValues[0],
    q1,
    q3,
    max: sortedValues[sortedValues.length - 1],
    iqr: q3 - q1
  };
}

function formatStat(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(2);
}

function getGroupRows(group = "All") {
  return surveyResponses.filter((response) => group === "All" || response.group === group);
}

function calculateCorrelation(rows, xKey, yKey) {
  const n = rows.length;
  const meanX = rows.reduce((sum, response) => sum + response[xKey], 0) / n;
  const meanY = rows.reduce((sum, response) => sum + response[yKey], 0) / n;

  let covariance = 0;
  let varianceX = 0;
  let varianceY = 0;

  rows.forEach((response) => {
    const xDiff = response[xKey] - meanX;
    const yDiff = response[yKey] - meanY;
    covariance += xDiff * yDiff;
    varianceX += xDiff ** 2;
    varianceY += yDiff ** 2;
  });

  const slope = covariance / varianceX;

  return {
    n,
    r: covariance / Math.sqrt(varianceX * varianceY),
    slope,
    intercept: meanY - slope * meanX
  };
}

function getCorrelationStats(pair, group = "All") {
  return calculateCorrelation(getGroupRows(group), pair.xKey, pair.yKey);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function initScrollProgress() {
  const progress = document.getElementById("scrollProgress");
  if (!progress) return;

  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, percent))}%`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initActiveNavigation() {
  const links = [...document.querySelectorAll(".nav-links a")];
  if (!links.length) return;

  const sections = links
    .map((link) => ({
      link,
      section: document.querySelector(link.getAttribute("href"))
    }))
    .filter((item) => item.section);

  const setActive = (id) => {
    sections.forEach(({ link, section }) => {
      const active = section.id === id;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };

  const update = () => {
    const headerHeight = document.querySelector(".site-header")?.offsetHeight || 0;
    const visibleItems = sections.filter(({ section }) => {
      const rect = section.getBoundingClientRect();
      return rect.bottom > headerHeight && rect.top < window.innerHeight;
    });
    const activeItem = visibleItems.reduce((best, item) => {
      const bestDistance = Math.abs(best.section.getBoundingClientRect().top - headerHeight);
      const itemDistance = Math.abs(item.section.getBoundingClientRect().top - headerHeight);
      return itemDistance < bestDistance ? item : best;
    }, visibleItems[0] || sections[0]);

    if (activeItem) setActive(activeItem.section.id);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initRevealAnimations() {
  const revealItems = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
}

function createTokens(containerId, activeCount) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = Array.from({ length: 100 }, (_, index) => {
    const className = index < activeCount ? "token active" : "token";
    return `<span class="${className}" aria-hidden="true"></span>`;
  }).join("");
}

function renderHomelessnessChart() {
  const chart = document.getElementById("homelessnessChart");
  if (!chart) return;

  const max = Math.max(...homelessnessData.map((item) => item.value));
  chart.innerHTML = homelessnessData.map((item) => `
    <div class="bar-row">
      <span class="bar-label">${item.year}</span>
      <span class="bar-track" title="${item.year}: ${numberFormatter.format(item.value)} people">
        <i style="--width: ${(item.value / max) * 100}%; --color: ${item.color}"></i>
      </span>
      <span class="bar-value">${numberFormatter.format(item.value)}</span>
    </div>
  `).join("");
}

function createQuestionTabs() {
  const container = document.getElementById("questionTabs");
  if (!container) return;

  container.innerHTML = surveyQuestions.map((question) => `
    <span class="question-tab-item">
      <button type="button" class="question-tab-button" data-question="${question.id}">${question.short}</button>
      <button type="button" class="question-info-button" data-question-info="${question.id}" aria-label="More detail about ${question.short}" title="Question details">i</button>
    </span>
  `).join("");

  container.querySelectorAll("[data-question]").forEach((button) => {
    button.addEventListener("click", () => {
      state.question = button.dataset.question;
      renderSurveyQuestion();
    });
  });

  container.querySelectorAll("[data-question-info]").forEach((button) => {
    button.addEventListener("click", () => {
      const questionId = button.dataset.questionInfo;
      state.showQuestionInfo = state.question === questionId ? !state.showQuestionInfo : true;
      state.question = questionId;
      renderSurveyQuestion();
    });
  });
}

function getQuestion() {
  return surveyQuestions.find((question) => question.id === state.question) || surveyQuestions[0];
}

function renderSurveyQuestion() {
  const question = getQuestion();
  const chart = document.getElementById("meanChart");
  const table = document.getElementById("statsTable");

  document.querySelectorAll("[data-question]").forEach((button) => {
    const active = button.dataset.question === state.question;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll("[data-question-info]").forEach((button) => {
    const active = button.dataset.questionInfo === state.question && state.showQuestionInfo;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-expanded", String(active));
  });

  if (chart) {
    chart.innerHTML = `
      <div class="mean-row">
        <span>Parents</span>
        <div class="mean-track" title="Parents mean ${question.parent.mean.toFixed(2)} out of 10">
          <i style="--width: ${question.parent.mean * 10}%; --color: var(--teal)"></i>
        </div>
        <strong>${question.parent.mean.toFixed(2)}</strong>
      </div>
      <div class="mean-row">
        <span>Students</span>
        <div class="mean-track" title="Students mean ${question.student.mean.toFixed(2)} out of 10">
          <i style="--width: ${question.student.mean * 10}%; --color: var(--yellow)"></i>
        </div>
        <strong>${question.student.mean.toFixed(2)}</strong>
      </div>
    `;
  }

  if (table) {
    table.innerHTML = `
      <table class="stats-table">
        <caption class="sr-only">${question.title}</caption>
        <thead>
          <tr>
            <th>Population</th>
            <th>n</th>
            <th>Mean</th>
            <th>Median</th>
            <th>Mode</th>
            <th>Range</th>
            <th>IQR</th>
          </tr>
        </thead>
        <tbody>
          ${["parent", "student"].map((group) => {
            const stats = question[group];
            const label = group === "parent" ? "Parents" : "Students";
            return `
              <tr>
                <td>${label}</td>
                <td>${stats.n}</td>
                <td>${stats.mean.toFixed(2)}</td>
                <td>${formatStat(stats.median)}</td>
                <td>${stats.mode}</td>
                <td>${formatStat(stats.range)}</td>
                <td>${stats.iqr.toFixed(2)}</td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    `;
  }

  renderQuestionInfo(question);
  renderBoxPlot(question);
}

function renderQuestionInfo(question) {
  const panel = document.getElementById("questionInfo");
  if (!panel) return;

  panel.hidden = !state.showQuestionInfo;
  panel.innerHTML = `
    <div>
      <span>Question detail</span>
      <strong>${question.title}</strong>
      <p>${question.detail}</p>
    </div>
    <dl>
      <div>
        <dt>1 means</dt>
        <dd>${question.lowLabel}</dd>
      </div>
      <div>
        <dt>10 means</dt>
        <dd>${question.highLabel}</dd>
      </div>
    </dl>
  `;
}

function renderBoxPlot(question) {
  const chart = document.getElementById("boxPlot");
  if (!chart) return;

  const groups = [
    { label: "Parents", stats: question.parent, color: "var(--teal)" },
    { label: "Students", stats: question.student, color: "var(--yellow)" }
  ];

  const scale = (value) => ((value - 1) / 9) * 100;

  chart.innerHTML = `
    ${groups.map(({ label, stats, color }) => {
      const min = scale(stats.min);
      const max = scale(stats.max);
      const q1 = scale(stats.q1);
      const q3 = scale(stats.q3);
      const median = scale(stats.median);

      return `
        <div class="boxplot-row">
          <span class="boxplot-label">${label}</span>
          <div class="boxplot-track" title="${label}: min ${formatStat(stats.min)}, Q1 ${formatStat(stats.q1)}, median ${formatStat(stats.median)}, Q3 ${formatStat(stats.q3)}, max ${formatStat(stats.max)}">
            <i class="boxplot-whisker" style="left: ${min}%; width: ${max - min}%"></i>
            <i class="boxplot-box" style="left: ${q1}%; width: ${Math.max(q3 - q1, 1.5)}%; --color: ${color}"></i>
            <i class="boxplot-median" style="left: ${median}%"></i>
            <i class="boxplot-dot" style="left: ${min}%"></i>
            <i class="boxplot-dot" style="left: ${max}%"></i>
          </div>
          <span class="boxplot-summary">median ${formatStat(stats.median)}</span>
        </div>
      `;
    }).join("")}
    <div class="boxplot-scale" aria-hidden="true">
      <span>1</span>
      <span>5</span>
      <span>10</span>
    </div>
  `;
}

function initAffordabilityCalculator() {
  const income = document.getElementById("incomeRange");
  const housing = document.getElementById("housingRange");
  const incomeOutput = document.getElementById("incomeOutput");
  const housingOutput = document.getElementById("housingOutput");
  const percentOutput = document.getElementById("burdenPercent");
  const status = document.getElementById("burdenStatus");
  const message = document.getElementById("burdenMessage");
  const result = document.getElementById("burdenResult");

  if (!income || !housing || !incomeOutput || !housingOutput || !percentOutput || !status || !message || !result) {
    return;
  }

  const render = () => {
    const incomeValue = Number(income.value);
    const housingValue = Number(housing.value);
    const burden = Math.round((housingValue / incomeValue) * 100);

    incomeOutput.textContent = currencyFormatter.format(incomeValue);
    housingOutput.textContent = currencyFormatter.format(housingValue);
    percentOutput.textContent = `${burden}%`;
    result.classList.remove("is-manageable", "is-stretched");

    if (burden <= 30) {
      status.textContent = "Affordable by the benchmark";
      message.textContent = "Housing takes 30% or less of monthly income.";
      result.classList.add("is-manageable");
    } else if (burden <= 40) {
      status.textContent = "Housing-cost burdened";
      message.textContent = "This is above the 30% affordability benchmark.";
      result.classList.add("is-stretched");
    } else {
      status.textContent = "Severely unaffordable";
      message.textContent = "Housing takes so much income that food, savings, transit, and emergencies become harder.";
    }
  };

  income.addEventListener("input", render);
  housing.addEventListener("input", render);
  render();
}

function createScatterPoint(response, pair, index, scaleX, scaleY, plotBounds) {
  const jitter = (seed) => {
    const raw = Math.sin(seed) * 10000;
    return (raw - Math.floor(raw) - 0.5) * 12;
  };
  const jitterX = jitter((index + 1) * 12.9898);
  const jitterY = jitter((index + 1) * 78.233);
  const x = clamp(scaleX(response[pair.xKey]) + jitterX, plotBounds.left + 4, plotBounds.right - 4);
  const y = clamp(scaleY(response[pair.yKey]) + jitterY, plotBounds.top + 4, plotBounds.bottom - 4);
  const className = response.group === "Parent" ? "parent" : "student";

  return `
    <circle class="scatter-point ${className}" cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${response.group === "Parent" ? 4.1 : 5.2}">
      <title>${response.group}, ${response.housing}: ${pair.x} ${response[pair.xKey]}, ${pair.y} ${response[pair.yKey]}</title>
    </circle>
  `;
}

function createRegressionLine(pair, group, scaleX, scaleY) {
  const stats = getCorrelationStats(pair, group);
  const colorClass = group === "Parent" ? "parent" : "student";
  const yAtOne = clamp(stats.slope + stats.intercept, 1, 10);
  const yAtTen = clamp(stats.slope * 10 + stats.intercept, 1, 10);

  return `
    <line class="scatter-line ${colorClass}"
      x1="${scaleX(1).toFixed(2)}"
      y1="${scaleY(yAtOne).toFixed(2)}"
      x2="${scaleX(10).toFixed(2)}"
      y2="${scaleY(yAtTen).toFixed(2)}">
      <title>${group} trend line, r = ${stats.r.toFixed(4)}</title>
    </line>
  `;
}

function renderScatterPlot(pair) {
  const chart = document.getElementById("scatterChart");
  if (!chart) return;

  const width = 720;
  const height = 430;
  const margin = { top: 24, right: 28, bottom: 76, left: 72 };
  const plotBounds = {
    top: margin.top,
    right: width - margin.right,
    bottom: height - margin.bottom,
    left: margin.left
  };
  const plotWidth = plotBounds.right - plotBounds.left;
  const plotHeight = plotBounds.bottom - plotBounds.top;
  const scaleX = (value) => plotBounds.left + ((value - 1) / 9) * plotWidth;
  const scaleY = (value) => plotBounds.bottom - ((value - 1) / 9) * plotHeight;
  const ticks = Array.from({ length: 10 }, (_, index) => index + 1);

  chart.setAttribute("aria-label", `${pair.title} scatter plot using ${surveyResponses.length} survey responses.`);
  chart.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" aria-hidden="true" focusable="false">
      <rect class="scatter-frame" x="${plotBounds.left}" y="${plotBounds.top}" width="${plotWidth}" height="${plotHeight}"></rect>
      ${ticks.map((tick) => `
        <line class="scatter-gridline" x1="${scaleX(tick)}" y1="${plotBounds.top}" x2="${scaleX(tick)}" y2="${plotBounds.bottom}"></line>
        <line class="scatter-gridline" x1="${plotBounds.left}" y1="${scaleY(tick)}" x2="${plotBounds.right}" y2="${scaleY(tick)}"></line>
      `).join("")}
      <line class="scatter-axis" x1="${plotBounds.left}" y1="${plotBounds.bottom}" x2="${plotBounds.right}" y2="${plotBounds.bottom}"></line>
      <line class="scatter-axis" x1="${plotBounds.left}" y1="${plotBounds.top}" x2="${plotBounds.left}" y2="${plotBounds.bottom}"></line>
      ${ticks.map((tick) => `
        <text class="scatter-tick" x="${scaleX(tick)}" y="${plotBounds.bottom + 22}">${tick}</text>
        <text class="scatter-tick y" x="${plotBounds.left - 18}" y="${scaleY(tick) + 4}">${tick}</text>
      `).join("")}
      ${createRegressionLine(pair, "Parent", scaleX, scaleY)}
      ${createRegressionLine(pair, "Student", scaleX, scaleY)}
      ${surveyResponses.map((response, index) => createScatterPoint(response, pair, index, scaleX, scaleY, plotBounds)).join("")}
      <text class="scatter-label" x="${plotBounds.left + plotWidth / 2}" y="${height - 24}">${pair.x}</text>
      <text class="scatter-label y" transform="translate(24 ${plotBounds.top + plotHeight / 2}) rotate(-90)">${pair.y}</text>
    </svg>
    <div class="scatter-legend" aria-hidden="true">
      <span><i class="parent"></i> Parents</span>
      <span><i class="student"></i> Students</span>
      <span><i class="trend"></i> Trend line</span>
    </div>
  `;
}

function renderCorrelation() {
  const pair = correlationPairs[state.pair];
  const title = document.getElementById("correlationTitle");
  const chart = document.getElementById("correlationChart");

  if (!pair || !chart || !title) return;

  document.querySelectorAll("[data-pair]").forEach((button) => {
    const active = button.dataset.pair === state.pair;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  title.textContent = pair.title;
  renderScatterPlot(pair);

  chart.innerHTML = [
    { group: "All", label: "Overall" },
    { group: "Parent", label: "Parents" },
    { group: "Student", label: "Students" }
  ].map(({ group, label }) => {
    const stats = getCorrelationStats(pair, group);
    const sign = stats.intercept < 0 ? "-" : "+";

    return `
      <article class="corr-card">
        <h4>${label}</h4>
        <div class="corr-meter" title="Correlation r = ${stats.r.toFixed(4)}">
          <i style="--width: ${Math.abs(stats.r) * 100}%"></i>
        </div>
        <div class="corr-stats">
          <span>r <strong>${stats.r.toFixed(4)}</strong></span>
          <span>n <strong>${stats.n}</strong></span>
          <span>line <strong>y = ${stats.slope.toFixed(2)}x ${sign} ${Math.abs(stats.intercept).toFixed(2)}</strong></span>
        </div>
      </article>
    `;
  }).join("");
}

function bindCorrelationControls() {
  document.querySelectorAll("[data-pair]").forEach((button) => {
    button.addEventListener("click", () => {
      state.pair = button.dataset.pair;
      renderCorrelation();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initScrollProgress();
  initActiveNavigation();
  initRevealAnimations();
  createTokens("expectedTokens", 3);
  createTokens("actualTokens", 9);
  renderHomelessnessChart();
  createQuestionTabs();
  renderSurveyQuestion();
  initAffordabilityCalculator();
  bindCorrelationControls();
  renderCorrelation();
});
