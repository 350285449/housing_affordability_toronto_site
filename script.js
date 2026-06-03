const rentBenchmarks = {
  studio: { label: "Studio", rent: 1127 },
  oneBed: { label: "1-bedroom", rent: 1426 },
  twoBed: { label: "2-bedroom", rent: 2055 },
  threeBed: { label: "3-bedroom", rent: 2351 }
};

const timelineData = {
  2000: {
    title: "A long affordability story begins",
    text: "The timeline starts at 2000 to show that the crisis is not a single bad year. It is a multi-decade pattern of rising demand, uneven supply, and unequal access to stable housing."
  },
  2010: {
    title: "The City sets a decade-long housing plan",
    text: "Toronto endorsed the Housing Opportunities Toronto Action Plan 2010-2020 as a road map for public, non-profit, and private housing action."
  },
  2016: {
    title: "Unaffordability was already widespread",
    text: "City occupancy reporting says 36.6% of all Toronto households spent 30% or more of income on shelter costs in 2016."
  },
  2018: {
    title: "Public land became part of the solution",
    text: "Housing Now was approved to use City-owned sites for mixed-income, transit-oriented housing, later folded into the broader Toronto Builds approach."
  },
  2019: {
    title: "HousingTO reframes housing as dignity",
    text: "HousingTO 2020-2030 was created after public consultation and recognizes housing as essential to dignity, well-being, and inclusive communities."
  },
  2021: {
    title: "A renter city becomes clearer",
    text: "The Toronto Housing Data Book reports that 48% of households were renters in 2021, and almost a third of all households struggled with housing affordability."
  },
  2023: {
    title: "Toronto pledges a major supply target",
    text: "City Council adopted a pledge to facilitate 285,000 new homes by 2031, a target described as a 23% increase in housing supply within 10 years."
  },
  2025: {
    title: "Vacancy improved, but affordability stayed low",
    text: "CMHC reported Toronto's purpose-built apartment vacancy rate hit 3% in 2025, while noting that affordability remained low in expensive markets."
  },
  2026: {
    title: "The benchmark is still hard to meet",
    text: "The City's 2026 affordable rent limits are $1,127 for a studio, $1,426 for a one-bedroom, $2,055 for a two-bedroom, and $2,351 for a three-bedroom."
  }
};

const neighbourhoodData = {
  downtown: {
    name: "Downtown Core",
    score: 96,
    summary: "Highest competition for small units, strongest access to jobs and transit, and the greatest risk that service workers are priced away from the core.",
    needs: [
      "Deeply affordable rentals near transit",
      "Protections against renoviction and displacement",
      "More family-sized non-market homes"
    ]
  },
  waterfront: {
    name: "Waterfront",
    score: 88,
    summary: "New housing supply is visible, but many units are small and expensive. Public land decisions matter because the area is close to jobs, parks, and transit.",
    needs: [
      "Affordable units in mixed-income developments",
      "Accessible homes for seniors and disabled residents",
      "Family-sized rentals close to services"
    ]
  },
  midtown: {
    name: "Midtown",
    score: 84,
    summary: "Transit access and redevelopment make Midtown attractive, but that same demand can push out lower-income renters in older buildings.",
    needs: [
      "Rental replacement during redevelopment",
      "Mid-rise homes with affordability requirements",
      "Tenant support during construction disruption"
    ]
  },
  northYork: {
    name: "North York",
    score: 79,
    summary: "Large apartment clusters and transit nodes create opportunity, but affordability depends on preserving existing rentals and adding non-market homes.",
    needs: [
      "Preservation of older purpose-built rentals",
      "More community housing near rapid transit",
      "Local services that reduce household costs"
    ]
  },
  etobicoke: {
    name: "Etobicoke",
    score: 73,
    summary: "Housing pressure is shaped by long commutes, limited rapid transit in some areas, and a need for more rental options beyond the core.",
    needs: [
      "Affordable housing near transit expansion",
      "Gentle density in low-rise areas",
      "Family-sized rentals and co-ops"
    ]
  },
  scarborough: {
    name: "Scarborough",
    score: 76,
    summary: "Scarborough is essential to Toronto's affordability story because many working families depend on rental homes, transit access, and local services here.",
    needs: [
      "Transit-connected affordable rentals",
      "Protection for tower apartment communities",
      "Investment in complete neighbourhood infrastructure"
    ]
  }
};

const chartData = Object.values(rentBenchmarks).map((item) => ({
  ...item,
  incomeNeeded: Math.round((item.rent * 12) / 0.3 / 10) * 10
}));

const moneyFormatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  maximumFractionDigits: 0
});

function formatMoney(value) {
  return moneyFormatter.format(value);
}

function clampNumber(value, min, max) {
  return Math.min(Math.max(Number(value) || min, min), max);
}

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
  }, { threshold: 0.16 });

  revealItems.forEach((item) => observer.observe(item));
}

function initCalculator() {
  const incomeRange = document.getElementById("incomeRange");
  const incomeInput = document.getElementById("incomeInput");
  const rentRange = document.getElementById("rentRange");
  const rentInput = document.getElementById("rentInput");
  const unitType = document.getElementById("unitType");
  const useBenchmark = document.getElementById("useBenchmark");

  const incomeLabel = document.getElementById("incomeLabel");
  const rentLabel = document.getElementById("rentLabel");
  const ratioRing = document.getElementById("ratioRing");
  const ratioValue = document.getElementById("ratioValue");
  const statusPill = document.getElementById("statusPill");
  const resultTitle = document.getElementById("resultTitle");
  const affordableMonthly = document.getElementById("affordableMonthly");
  const monthlyGap = document.getElementById("monthlyGap");
  const incomeNeeded = document.getElementById("incomeNeeded");
  const benchmarkValue = document.getElementById("benchmarkValue");

  if (!incomeRange || !rentRange || !unitType) return;

  // Keep paired range and number inputs synchronized without needing a framework.
  function syncInputs(source, target, min, max) {
    const value = clampNumber(source.value, min, max);
    source.value = value;
    target.value = value;
  }

  function updateCalculator() {
    const income = clampNumber(incomeInput.value, 15000, 250000);
    const rent = clampNumber(rentInput.value, 500, 5500);
    const selectedBenchmark = rentBenchmarks[unitType.value].rent;
    const affordableLimit = income * 0.3 / 12;
    const ratio = income > 0 ? (rent * 12 / income) * 100 : 0;
    const gap = rent - affordableLimit;
    const needed = rent * 12 / 0.3;
    const ringDegrees = Math.min(ratio, 100) * 3.6;

    incomeLabel.textContent = formatMoney(income);
    rentLabel.textContent = formatMoney(rent);
    ratioRing.style.setProperty("--ratio-deg", `${ringDegrees}deg`);
    ratioValue.textContent = `${Math.round(ratio)}%`;
    affordableMonthly.textContent = formatMoney(affordableLimit);
    monthlyGap.textContent = gap >= 0 ? `${formatMoney(gap)} over` : `${formatMoney(Math.abs(gap))} under`;
    incomeNeeded.textContent = formatMoney(needed);
    benchmarkValue.textContent = formatMoney(selectedBenchmark);

    statusPill.classList.remove("good", "severe");

    if (ratio <= 30) {
      statusPill.textContent = "Affordable";
      statusPill.classList.add("good");
      resultTitle.textContent = "This rent fits within the common affordability threshold.";
    } else if (ratio <= 50) {
      statusPill.textContent = "Stretched";
      resultTitle.textContent = "This rent is above the common affordability threshold.";
    } else {
      statusPill.textContent = "Severely unaffordable";
      statusPill.classList.add("severe");
      resultTitle.textContent = "This rent would create severe affordability pressure.";
    }
  }

  incomeRange.addEventListener("input", () => {
    syncInputs(incomeRange, incomeInput, 15000, 250000);
    updateCalculator();
  });

  incomeInput.addEventListener("input", () => {
    syncInputs(incomeInput, incomeRange, 15000, 250000);
    updateCalculator();
  });

  rentRange.addEventListener("input", () => {
    syncInputs(rentRange, rentInput, 500, 5500);
    updateCalculator();
  });

  rentInput.addEventListener("input", () => {
    syncInputs(rentInput, rentRange, 500, 5500);
    updateCalculator();
  });

  unitType.addEventListener("change", updateCalculator);

  useBenchmark.addEventListener("click", () => {
    const benchmarkRent = rentBenchmarks[unitType.value].rent;
    rentInput.value = benchmarkRent;
    rentRange.value = benchmarkRent;
    updateCalculator();
  });

  updateCalculator();
}

function initChart() {
  const chart = document.getElementById("affordabilityChart");
  const buttons = document.querySelectorAll("[data-chart-mode]");
  if (!chart) return;

  function renderChart(mode) {
    const isIncomeMode = mode === "income";
    const maxValue = Math.max(...chartData.map((item) => isIncomeMode ? item.incomeNeeded : item.rent));
    chart.innerHTML = "";

    chartData.forEach((item) => {
      const value = isIncomeMode ? item.incomeNeeded : item.rent;
      const row = document.createElement("div");
      row.className = "chart-row";
      row.style.setProperty("--bar-width", `${(value / maxValue) * 100}%`);
      row.innerHTML = `
        <strong>${item.label}</strong>
        <span class="chart-track" aria-hidden="true"><span class="chart-fill"></span></span>
        <span class="chart-value">${formatMoney(value)}</span>
      `;
      chart.appendChild(row);
      requestAnimationFrame(() => row.classList.add("is-ready"));
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      renderChart(button.dataset.chartMode);
    });
  });

  renderChart("rent");
}

function initTimeline() {
  const buttons = document.querySelectorAll("[data-year]");
  const detail = document.getElementById("timelineDetail");
  if (!detail) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const year = button.dataset.year;
      const item = timelineData[year];
      if (!item) return;

      buttons.forEach((timelineButton) => timelineButton.classList.remove("active"));
      button.classList.add("active");
      detail.innerHTML = `
        <p class="detail-year">${year}</p>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      `;
    });
  });
}

function initNeighbourhoodMap() {
  const zones = document.querySelectorAll("[data-neighbourhood]");
  const name = document.getElementById("neighbourhoodName");
  const score = document.getElementById("pressureScore");
  const fill = document.getElementById("pressureFill");
  const summary = document.getElementById("neighbourhoodSummary");
  const needs = document.getElementById("neighbourhoodNeeds");

  if (!zones.length || !name || !score || !fill || !summary || !needs) return;

  // The pressure index is an interpretive classroom data layer, not an official rent table.
  function renderNeighbourhood(key) {
    const item = neighbourhoodData[key];
    if (!item) return;

    name.textContent = item.name;
    score.textContent = item.score;
    fill.style.width = `${item.score}%`;
    summary.textContent = item.summary;
    needs.innerHTML = item.needs.map((need) => `<li>${need}</li>`).join("");
  }

  zones.forEach((zone) => {
    zone.addEventListener("click", () => {
      zones.forEach((item) => item.classList.remove("active"));
      zone.classList.add("active");
      renderNeighbourhood(zone.dataset.neighbourhood);
    });
  });

  renderNeighbourhood("downtown");
}

document.addEventListener("DOMContentLoaded", () => {
  initRevealAnimations();
  initCalculator();
  initChart();
  initTimeline();
  initNeighbourhoodMap();
});
