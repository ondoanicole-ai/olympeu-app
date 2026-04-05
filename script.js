document.addEventListener("DOMContentLoaded", function () {
initSelectableGroup(".role-options", "button");
initSelectableGroup(".tag-grid", "button, .tag-btn");
});

function initSelectableGroup(groupSelector, itemSelector) {
const groups = document.querySelectorAll(groupSelector);

groups.forEach(function (group) {
const buttons = group.querySelectorAll(itemSelector);
const isMulti = group.classList.contains("multi-select");

buttons.forEach(function (btn) {
btn.setAttribute("type", "button");

btn.addEventListener("click", function (e) {
e.preventDefault();

if (isMulti) {
btn.classList.toggle("active");
} else {
buttons.forEach(function (b) {
b.classList.remove("active");
});
btn.classList.add("active");
}
});
});
});
}


function toggleOlympeusAI() {
const panel = document.getElementById("ol-ai-panel");
if (!panel) return;

const currentDisplay = window.getComputedStyle(panel).display;
panel.style.display = currentDisplay === "none" ? "block" : "none";
}

function fillOlympeusAIPrompt(type) {
const input = document.getElementById("ol-ai-input");
if (!input) return;

if (type === "Rédiger un post projet") {
input.value = "Aide-moi à rédiger une publication claire pour présenter mon projet et attirer des collaborateurs.";
} else if (type === "Transformer en projet") {
input.value = "Transforme cette idée en structure projet avec objectifs, étapes et besoins.";
} else if (type === "Trouver un collaborateur") {
input.value = "Aide-moi à rédiger une demande pour trouver un développeur ou un partenaire adapté à mon projet.";
}
}

function simulateOlympeusAI() {
const input = document.getElementById("ol-ai-input");
const output = document.getElementById("ol-ai-response-text");

if (!input || !output) return;

const text = input.value.trim().toLowerCase();

if (!text) {
output.textContent = "Décrivez votre besoin et je vous aiderai à structurer votre publication ou votre projet.";
return;
}

if (text.includes("collaborateur") || text.includes("développeur")) {
output.textContent = "Voici une version plus efficace : Je recherche un développeur motivé pour rejoindre un projet IA en phase de structuration. Objectif : construire une première version, tester le marché et faire évoluer le produit. Compétences recherchées : développement web, logique produit et intérêt pour l’IA.";
} else if (text.includes("projet")) {
output.textContent = "Je vous conseille de structurer votre projet en 4 blocs : problème, solution, public cible, besoins immédiats. Ensuite, transformez-le en publication claire avec un appel à action.";
} else if (text.includes("opportunité")) {
output.textContent = "Je peux reformuler cette opportunité sous forme de post plus visible, avec un titre fort, un résumé simple et les profils recherchés.";
} else {
output.textContent = "Je peux vous aider à transformer cette idée en publication, en projet structuré ou en demande de collaboration plus claire.";
}
}

function optimizeWithOlympeusAI() {
const textarea = document.getElementById("olympeus-post-textarea");
if (!textarea) return;

const currentText = textarea.value.trim();

let generatedText = "";

if (currentText) {
generatedText =
"✨ Version optimisée par OlympeUS AI :\n\n" +
currentText +
"\n\n👉 Objectif : rendre la demande plus claire, plus attractive et orientée action.\n" +
"📌 Proposition : Je recherche activement un profil motivé pour rejoindre ce projet en phase de structuration. " +
"Le but est de construire une première version solide, tester le besoin utilisateur et faire évoluer le produit avec les bons partenaires.";
} else {
generatedText =
"✨ Version optimisée par OlympeUS AI :\n\n" +
"Je recherche un collaborateur motivé pour rejoindre un projet en phase de structuration. " +
"Objectif : construire une première version claire, valider le besoin utilisateur et faire évoluer le produit rapidement avec une vision long terme.\n\n" +
"#projet #collaboration #startup";
}

textarea.value = generatedText;

const btn = document.querySelector(".ol-ai-trigger");
if (btn) {
btn.classList.add("active");
setTimeout(function () {
btn.classList.remove("active");
}, 1200);
}
}
