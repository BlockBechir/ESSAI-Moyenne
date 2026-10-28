const STORAGE_KEY = "moyenne-essai.notes.v2";
const LEGACY_KEY = "moyenne-essai.notes.v1";
const THEME_KEY = "moyenne-essai.theme";
const YEAR_KEY = "moyenne-essai.year";

const YEARS = {
  "1": {
    label: "1ère année",
    paniers: [
      {
        id: "p1", code: "P1", title: "Mathématique et statistique I",
        modules: [
          { id: "stat-desc", name: "Statistique descriptives", coef: 2 },
          { id: "int-prob-1", name: "Intégration et probabilité 1", coef: 3 },
          { id: "int-prob-2", name: "Intégration et probabilité 2", coef: 3 },
          { id: "prog-math", name: "Programmation mathématique", coef: 2 }
        ]
      },
      {
        id: "p2", code: "P2", title: "Mathématique et statistique II",
        modules: [
          { id: "analyse-donnees", name: "Analyse des données", coef: 2 },
          { id: "demo", name: "Démographie", coef: 2 },
          { id: "stat-inf-1", name: "Statistique inférentielle 1", coef: 3 },
          { id: "stat-inf-2", name: "Statistique inférentielle 2", coef: 3 },
          { id: "suites-va", name: "Suites de variables aléatoires", coef: 2 },
          { id: "calc-diff", name: "Calcul différentiel et optimisation dynamique", coef: 2 }
        ]
      },
      {
        id: "p3", code: "P3", title: "Informatique et système d’information",
        modules: [
          { id: "env-info", name: "Environnement informatique", coef: 1 },
          { id: "algo-1", name: "Algorithmique et programmation I", coef: 2 },
          { id: "sas", name: "SAS", coef: 1.5 },
          { id: "linux", name: "Atelier linux", coef: 1 },
          { id: "r", name: "Logiciel R", coef: 1.5 },
          { id: "algo-2", name: "Algorithmique et programmation II", coef: 2 },
          { id: "cmsi", name: "Conception et modélisation des systèmes d’information", coef: 2 }
        ]
      },
      {
        id: "p4", code: "P4", title: "Économie et sciences sociales",
        modules: [
          { id: "intro-eco", name: "Introduction à l’économie", coef: 1.5 },
          { id: "gestion", name: "Gestion et finance d’entreprise", coef: 2.5 },
          { id: "micro", name: "Microéconomie I", coef: 2 },
          { id: "macro", name: "Macroéconomie I", coef: 2 }
        ]
      },
      {
        id: "p5", code: "P5", title: "Communication",
        modules: [
          { id: "anglais", name: "Anglais", coef: 1 },
          { id: "tc1", name: "Techniques de communication I", coef: 1 },
          { id: "tc2", name: "Techniques de communication 2", coef: 1 }
        ]
      },
      {
        id: "p6", code: "P6", title: "Projet et stage I",
        modules: [
          { id: "atelier-stat", name: "Atelier statistique", coef: 2 }
        ]
      }
    ]
  },

  "2": {
    label: "2ème année",
    paniers: [
      {
        id: "p1", code: "P1", title: "Mathématique et statistique I",
        modules: [
          { id: "processus", name: "Processus stochastique", coef: 2 },
          { id: "prevision", name: "Technique de prévision", coef: 2 },
          { id: "lineaires", name: "Modèles linéaires", coef: 2 },
          { id: "sondage", name: "Sondage", coef: 2.5 },
          { id: "data-mining", name: "Data Mining", coef: 2 }
        ]
      },
      {
        id: "p2", code: "P2", title: "Mathématique et statistique II",
        modules: [
          { id: "simulation", name: "Méthodes de simulation", coef: 2 },
          { id: "series", name: "Séries temporelles", coef: 2 },
          { id: "econometrie", name: "Économétrie", coef: 2.5 },
          { id: "plans", name: "Plans d’expérience", coef: 2 },
          { id: "ro", name: "Recherche opérationnelle", coef: 2 }
        ]
      },
      {
        id: "p3", code: "P3", title: "Informatique et système d’information 2",
        modules: [
          { id: "coo", name: "Conception orientée objet (COO)", coef: 2 },
          { id: "web", name: "Programmation Web", coef: 1 },
          { id: "poo", name: "Programmation orientée objets (POO)", coef: 2 },
          { id: "bdd", name: "Bases de données", coef: 2 }
        ]
      },
      {
        id: "p4", code: "P4", title: "Économie et sciences sociales",
        modules: [
          { id: "micro-2", name: "Microéconomie II", coef: 1.5 },
          { id: "micro-3", name: "Microéconomie III approfondie", coef: 2 },
          { id: "entrepreneuriat-1", name: "Entrepreneuriat 1", coef: 1 },
          { id: "macro-2", name: "Macroéconomie II", coef: 2 },
          { id: "ing-fin", name: "Ingénierie financière", coef: 2 },
          { id: "management", name: "Management des organisations", coef: 1.5 },
          { id: "risques", name: "Introduction à la gestion des risques", coef: 1.5 }
        ]
      },
      {
        id: "p5", code: "P5", title: "Communication",
        modules: [
          { id: "tc3", name: "Technique de communication 3", coef: 1 },
          { id: "anglais", name: "Anglais", coef: 1 },
          { id: "stages-insertion", name: "Contrôle des stages d’insertion", coef: 1 }
        ]
      },
      {
        id: "p6", code: "P6", title: "Projet et stage",
        modules: [
          { id: "atelier-stat", name: "Atelier statistique", coef: 2.5 }
        ]
      }
    ]
  },

  "3": {
    label: "3ème année",
    paniers: [
      {
        id: "p1", code: "P1", title: "Maths et statistiques",
        modules: [
          { id: "ml", name: "Machine Learning", coef: 2.5 },
          { id: "micro-econometrie", name: "Micro économétrie", coef: 1 },
          { id: "ia", name: "Intelligence artificielle", coef: 1 },
          { id: "big-data", name: "Big Data", coef: 1 },
          { id: "enquetes", name: "Méthodologies d’enquêtes et statistiques de genre", coef: 2 },
          { id: "econometrie-av", name: "Économétrie avancée", coef: 2 },
          { id: "bayes", name: "Statistique bayésienne", coef: 1.5 }
        ]
      },
      {
        id: "p2", code: "P2", title: "Info et système d’information",
        modules: [
          { id: "java2", name: "JAVA 2", coef: 1.5 },
          { id: "bi", name: "Business Intelligence", coef: 1.5 }
        ]
      },
      {
        id: "p3", code: "P3", title: "Économie et sciences sociales",
        modules: [
          { id: "compta-nat", name: "Comptabilité nationale", coef: 1 },
          { id: "eco-int", name: "Économie internationale", coef: 1.5 },
          { id: "entrepreneuriat-2", name: "Entrepreneuriat 2", coef: 1 },
          { id: "eco-monetaire", name: "Économie monétaire", coef: 1 }
        ]
      },
      {
        id: "p4", code: "P4", title: "Communication et langues",
        modules: [
          { id: "anglais", name: "Anglais", coef: 1 },
          { id: "tc4", name: "Technique de communication 4", coef: 0.5 },
          { id: "stages-ingenieur", name: "Contrôle des stages ingénieur", coef: 1 }
        ]
      },
      {
        id: "p5", code: "P5", title: "Modules optionnels",
        pick: 3,
        modules: [
          { id: "actuariat-1", name: "Actuariat 1", coef: 1 },
          { id: "actuariat-2", name: "Actuariat 2", coef: 1 },
          { id: "derives", name: "Produits dérivés", coef: 1 },
          { id: "qualite", name: "Statistique pour la qualité", coef: 1 },
          { id: "mobile", name: "Développement mobile", coef: 1 },
          { id: "biostat", name: "Biostatistique", coef: 1 }
        ]
      },
      {
        id: "pfe", code: "PFE", title: "Projet de fin d’études",
        modules: [
          { id: "pfe", name: "Projet de fin d’études", coef: 8 }
        ]
      }
    ]
  }
};

/* ---------- helpers ---------- */

function formatCoef(value) {
  return Number.isInteger(value) ? String(value) : String(value).replace(".", ",");
}

function formatNote(value) {
  return value.toFixed(2).replace(".", ",");
}

function parseNote(raw) {
  if (raw === "" || raw == null) return null;
  const value = Number(String(raw).replace(",", "."));
  if (!Number.isFinite(value)) return null;
  if (value < 0 || value > 20) return null;
  return value;
}

function weightedAverage(entries) {
  let points = 0;
  let coef = 0;
  for (const entry of entries) {
    if (entry.note == null) continue;
    points += entry.note * entry.coef;
    coef += entry.coef;
  }
  return { points, coef, average: coef > 0 ? points / coef : null };
}

/* Coefficient a panier contributes once complete. For an optional panier
   only `pick` modules count, so the total is the sum of the `pick`
   largest coefficients (all equal today, but this stays correct if not). */
function panierMaxCoef(panier) {
  const coefs = panier.modules.map((m) => m.coef);
  if (!panier.pick) return coefs.reduce((s, c) => s + c, 0);
  return coefs.sort((a, b) => b - a).slice(0, panier.pick).reduce((s, c) => s + c, 0);
}

function toneForAverage(average) {
  if (average == null) return "";
  if (average >= 12) return "is-good";
  if (average >= 10) return "is-pass";
  return "is-low";
}

/* ---------- state ---------- */

function loadState() {
  let state = null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    state = raw ? JSON.parse(raw) : null;
  } catch {
    state = null;
  }
  if (!state || typeof state !== "object") state = {};
  state.notes = state.notes || {};
  state.picks = state.picks || {};
  for (const year of Object.keys(YEARS)) {
    state.notes[year] = state.notes[year] || {};
    state.picks[year] = state.picks[year] || {};
  }

  // Carry over notes saved by the 1st-year-only version.
  try {
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy && Object.keys(state.notes["1"]).length === 0) {
      state.notes["1"] = JSON.parse(legacy) || {};
    }
  } catch {
    /* ignore */
  }
  return state;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable: the page still works for this visit */
  }
}

const state = loadState();
let currentYear = (() => {
  try {
    const saved = localStorage.getItem(YEAR_KEY);
    return YEARS[saved] ? saved : "1";
  } catch {
    return "1";
  }
})();

function picksFor(panierId) {
  const yearPicks = state.picks[currentYear];
  if (!Array.isArray(yearPicks[panierId])) yearPicks[panierId] = [];
  return yearPicks[panierId];
}

/* ---------- rendering ---------- */

function renderPaniers() {
  const year = YEARS[currentYear];
  const saved = state.notes[currentYear];
  const root = document.getElementById("paniers");

  root.innerHTML = year.paniers.map((panier) => {
    const picks = panier.pick ? picksFor(panier.id) : null;

    const rows = panier.modules.map((module) => {
      const domId = `y${currentYear}-${panier.id}-${module.id}`;
      const value = saved[module.id] ?? "";
      const chosen = picks ? picks.includes(module.id) : true;

      const pickButton = picks
        ? `<button type="button" class="pick" data-pick="${module.id}" data-panier="${panier.id}"
             aria-pressed="${chosen}" aria-label="Choisir ${module.name}"></button>`
        : "";

      return `
        <div class="module-row${picks ? " is-optional" : ""}${chosen ? "" : " is-unchosen"}" data-row="${module.id}">
          ${pickButton}
          <label for="${domId}">${module.name}</label>
          <span class="coef">× ${formatCoef(module.coef)}</span>
          <input
            id="${domId}"
            data-module="${module.id}"
            data-panier="${panier.id}"
            type="number"
            inputmode="decimal"
            min="0"
            max="20"
            step="0.25"
            placeholder="—"
            value="${value}"
            ${chosen ? "" : "disabled"}
          >
        </div>
      `;
    }).join("");

    const pickNote = panier.pick
      ? `<p class="pick-note">Choisissez <strong>${panier.pick}</strong> modules parmi ${panier.modules.length}.
           <span class="pick-count" data-pick-count="${panier.id}"></span></p>`
      : "";

    return `
      <section class="panier" data-panier="${panier.id}">
        <header class="panier-head">
          <div>
            <p class="panier-code">${panier.code}</p>
            <h2>${panier.title}</h2>
          </div>
          <div class="panier-head-meta">
            <p class="panier-coef">Coef. ${formatCoef(panierMaxCoef(panier))}</p>
            <p class="panier-avg" data-panier-avg="${panier.id}">—</p>
          </div>
        </header>
        ${pickNote}
        <div class="module-list">${rows}</div>
      </section>
    `;
  }).join("");
}

function renderPanierSummary() {
  const list = document.getElementById("panier-summary");
  list.innerHTML = YEARS[currentYear].paniers.map((panier) => `
    <li>
      <span class="code">${panier.code}</span>
      <span class="name">${panier.title}</span>
      <span class="avg" data-summary-avg="${panier.id}">—</span>
    </li>
  `).join("");
}

function renderYearChrome() {
  document.querySelectorAll(".year-tab").forEach((tab) => {
    const active = tab.dataset.year === currentYear;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  const label = YEARS[currentYear].label;
  document.getElementById("brand-kicker").textContent = `ESSAI · ${label}`;
  document.title = `Moyenne ESSAI — ${label}`;
}

function renderYear() {
  renderYearChrome();
  renderPaniers();
  renderPanierSummary();
  update();
}

/* ---------- calculation ---------- */

function refreshPickState(panier) {
  const picks = picksFor(panier.id);
  const full = picks.length >= panier.pick;
  const section = document.querySelector(`.panier[data-panier="${panier.id}"]`);

  section.querySelectorAll(".module-row").forEach((row) => {
    const id = row.dataset.row;
    const chosen = picks.includes(id);
    row.classList.toggle("is-unchosen", !chosen);
    row.querySelector("input").disabled = !chosen;
    const button = row.querySelector(".pick");
    button.setAttribute("aria-pressed", String(chosen));
    button.disabled = !chosen && full;
  });

  const count = section.querySelector(`[data-pick-count="${panier.id}"]`);
  count.textContent = `${picks.length} / ${panier.pick} choisis`;
  count.classList.toggle("is-complete", picks.length === panier.pick);
}

function update() {
  const year = YEARS[currentYear];
  const notes = state.notes[currentYear];

  const notesById = {};
  document.querySelectorAll("input[data-module]").forEach((input) => {
    notes[input.dataset.module] = input.value;
    const parsed = parseNote(input.value);
    notesById[input.dataset.module] = parsed;
    input.classList.toggle("is-invalid", input.value !== "" && parsed == null);
  });

  const overallEntries = [];
  let totalCoef = 0;

  for (const panier of year.paniers) {
    let modules = panier.modules;
    if (panier.pick) {
      refreshPickState(panier);
      const picks = picksFor(panier.id);
      modules = modules.filter((m) => picks.includes(m.id));
    }

    const entries = modules.map((module) => ({
      coef: module.coef,
      note: notesById[module.id]
    }));
    const result = weightedAverage(entries);
    overallEntries.push(...entries);
    totalCoef += panierMaxCoef(panier);

    const avgLabel = result.average == null ? "—" : formatNote(result.average);
    const head = document.querySelector(`[data-panier-avg="${panier.id}"]`);
    const summary = document.querySelector(`[data-summary-avg="${panier.id}"]`);
    head.textContent = avgLabel;
    summary.textContent = avgLabel;
    head.className = `panier-avg ${toneForAverage(result.average)}`;
    summary.className = `avg ${toneForAverage(result.average)}`;
  }

  const overall = weightedAverage(overallEntries);
  const overallEl = document.getElementById("overall-average");
  const metaEl = document.getElementById("overall-meta");
  const barEl = document.getElementById("overall-bar");

  if (overall.average == null) {
    overallEl.textContent = "—";
    overallEl.className = "summary-value";
    metaEl.textContent = "Aucun module saisi";
    barEl.style.width = "0%";
  } else {
    overallEl.textContent = formatNote(overall.average);
    overallEl.className = `summary-value ${toneForAverage(overall.average)}`;
    metaEl.textContent = `${formatCoef(overall.coef)} / ${formatCoef(totalCoef)} coefficients`;
    barEl.style.width = `${(overall.average / 20) * 100}%`;
  }

  saveState();
}

/* ---------- theme ---------- */

function applyTheme(isDark) {
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  try {
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
  } catch {
    /* ignore */
  }
}

function initTheme() {
  let saved = null;
  try {
    saved = localStorage.getItem(THEME_KEY);
  } catch {
    saved = null;
  }
  const isDark = saved ? saved === "dark" : true;
  const toggle = document.getElementById("theme");
  toggle.checked = isDark;
  applyTheme(isDark);
  toggle.addEventListener("change", () => applyTheme(toggle.checked));
}

/* ---------- wiring ---------- */

function init() {
  initTheme();
  renderYear();

  const form = document.getElementById("calculator");
  form.addEventListener("input", update);

  form.addEventListener("click", (event) => {
    const button = event.target.closest(".pick");
    if (!button || button.disabled) return;
    const panier = YEARS[currentYear].paniers.find((p) => p.id === button.dataset.panier);
    const picks = picksFor(panier.id);
    const id = button.dataset.pick;
    const index = picks.indexOf(id);
    if (index >= 0) {
      picks.splice(index, 1);
    } else if (picks.length < panier.pick) {
      picks.push(id);
      const input = document.querySelector(`.panier[data-panier="${panier.id}"] input[data-module="${id}"]`);
      update();
      input.focus();
      return;
    }
    update();
  });

  document.querySelectorAll(".year-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.dataset.year === currentYear) return;
      currentYear = tab.dataset.year;
      try {
        localStorage.setItem(YEAR_KEY, currentYear);
      } catch {
        /* ignore */
      }
      renderYear();
    });
  });

  document.getElementById("reset").addEventListener("click", () => {
    document.querySelectorAll("input[data-module]").forEach((input) => {
      input.value = "";
    });
    update();
  });
}

init();