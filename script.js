const numberFormatter = new Intl.NumberFormat("en-CA");
const currencyFormatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  maximumFractionDigits: 0
});

const surveyQuestions = [
  {
    id: "secondTax",
    short: "Second-property tax",
    title: "Support increasing taxes on second and additional properties",
    parent: { n: 51, mean: 6.75, median: 7, mode: 8, range: 9, iqr: 2.0 },
    student: { n: 18, mean: 5.11, median: 5, mode: 4, range: 9, iqr: 2.0 }
  },
  {
    id: "govRevenue",
    short: "Public revenue",
    title: "Support using government tax revenue for affordable housing",
    parent: { n: 51, mean: 7.59, median: 8, mode: 9, range: 9, iqr: 2.0 },
    student: { n: 18, mean: 6.67, median: 7, mode: 6, range: 9, iqr: 1.75 }
  },
  {
    id: "ownershipLimit",
    short: "Ownership limits",
    title: "Support stricter limits on how many properties one owner can hold",
    parent: { n: 51, mean: 6.2, median: 6, mode: 7, range: 8, iqr: 2.0 },
    student: { n: 18, mean: 5.11, median: 4.5, mode: 4, range: 9, iqr: 1.75 }
  },
  {
    id: "affordablePriority",
    short: "Affordable priority",
    title: "Support prioritizing affordable housing over luxury projects",
    parent: { n: 51, mean: 6.88, median: 7, mode: 7, range: 9, iqr: 2.0 },
    student: { n: 18, mean: 5.83, median: 5.5, mode: 4, range: 9, iqr: 3.0 }
  },
  {
    id: "rentControl",
    short: "Rent control",
    title: "Support stronger rent-control policies",
    parent: { n: 51, mean: 6.86, median: 7, mode: 7, range: 9, iqr: 2.0 },
    student: { n: 18, mean: 6.11, median: 6, mode: 5, range: 9, iqr: 2.75 }
  },
  {
    id: "affordability",
    short: "Affordability rating",
    title: "Housing is affordable in the HCI community",
    parent: { n: 51, mean: 4.24, median: 4, mode: 4, range: 9, iqr: 2.0 },
    student: { n: 18, mean: 2.83, median: 3, mode: 3, range: 4, iqr: 1.0 }
  }
];

const homelessnessData = [
  { year: "2018", value: 8715, color: "var(--teal)" },
  { year: "2021", value: 7347, color: "var(--blue)" },
  { year: "2024", value: 15418, color: "var(--red)" },
  { year: "2025", value: 12196, color: "var(--yellow)" }
];

const correlations = {
  speculation: {
    title: "Tax second properties vs ownership limits",
    x: "Tax second properties",
    y: "Limit ownership",
    parent: { r: 0.9422, slope: 0.8795, intercept: 0.2639, n: 51 },
    student: { r: 0.9214, slope: 0.9214, intercept: 0.4017, n: 18 }
  },
  funding: {
    title: "Use tax revenue vs prioritize affordable developments",
    x: "Use tax revenue",
    y: "Prioritize affordable developments",
    parent: { r: 0.8843, slope: 0.8207, intercept: 0.6545, n: 51 },
    student: { r: 0.7652, slope: 0.9474, intercept: -0.4825, n: 18 }
  }
};

const state = {
  question: "affordability",
  pair: "speculation"
};

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
    <button type="button" data-question="${question.id}">${question.short}</button>
  `).join("");

  container.querySelectorAll("[data-question]").forEach((button) => {
    button.addEventListener("click", () => {
      state.question = button.dataset.question;
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
                <td>${stats.median}</td>
                <td>${stats.mode}</td>
                <td>${stats.range}</td>
                <td>${stats.iqr.toFixed(2)}</td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    `;
  }
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

function renderCorrelation() {
  const pair = correlations[state.pair];
  const title = document.getElementById("correlationTitle");
  const chart = document.getElementById("correlationChart");

  if (!pair || !chart || !title) return;

  document.querySelectorAll("[data-pair]").forEach((button) => {
    const active = button.dataset.pair === state.pair;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  title.textContent = pair.title;
  chart.innerHTML = ["parent", "student"].map((group) => {
    const stats = pair[group];
    const label = group === "parent" ? "Parents" : "Students";
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
