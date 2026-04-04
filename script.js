document.addEventListener("DOMContentLoaded", function () {
const choiceButtons = document.querySelectorAll(".choice-btn");
choiceButtons.forEach((btn) => {
btn.addEventListener("click", function () {
choiceButtons.forEach((b) => b.classList.remove("active"));
this.classList.add("active");
});
});

const tagButtons = document.querySelectorAll(".tag-btn");
tagButtons.forEach((btn) => {
btn.addEventListener("click", function () {
this.classList.toggle("active");
});
});

const protectedPages = ["feed.html", "profile.html", "settings.html"];
const currentPage = window.location.pathname.split("/").pop();

if (protectedPages.includes(currentPage) && !localStorage.getItem("user")) {
window.location.href = "login.html";
}
});

function signup() {
localStorage.setItem("user", "true");
window.location.href = "onboarding.html";
}

function login() {
localStorage.setItem("user", "true");
window.location.href = "feed.html";
}

function finishOnboarding() {
window.location.href = "feed.html";
}

function logout() {
localStorage.removeItem("user");
window.location.href = "index.html";
}
document.addEventListener("DOMContentLoaded", function () {
const roleButtons = document.querySelectorAll(".role-options button");

roleButtons.forEach((btn) => {
btn.addEventListener("click", function () {
roleButtons.forEach((b) => b.classList.remove("active"));
this.classList.add("active");
});
});
});
document.addEventListener("DOMContentLoaded", function () {
const groups = document.querySelectorAll(".role-options");

groups.forEach((group) => {
const buttons = group.querySelectorAll("button");
const isMulti = group.classList.contains("multi-select");

buttons.forEach((btn) => {
btn.addEventListener("click", function () {
if (isMulti) {
this.classList.toggle("active");
} else {
buttons.forEach((b) => b.classList.remove("active"));
this.classList.add("active");
}
});
});
});
});
function toggleOlympeusAI(){
const btn = document.querySelector('.ol-ai-trigger');
btn.classList.toggle('active');
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
const output = document.getElementById("ol-ai-response-text");
const text = "Je te propose une version optimisée de ton post pour attirer les bons profils...";

let i = 0;
output.textContent = "";

const interval = setInterval(() => {
output.textContent += text.charAt(i);
i++;
if (i >= text.length) clearInterval(interval);
}, 20);
}

if (text.includes("collaborateur") || text.includes("développeur")) {
output.textContent = "Voici une version plus efficace : “Je recherche un développeur motivé pour rejoindre un projet IA en phase de structuration. Objectif : construire une première version, tester le marché et faire évoluer le produit. Compétences recherchées : développement web, logique produit et intérêt pour l’IA.”";
} else if (text.includes("projet")) {
output.textContent = "Je vous conseille de structurer votre projet en 4 blocs : problème, solution, public cible, besoins immédiats. Ensuite, transformez-le en publication claire avec un appel à action.";
} else if (text.includes("opportunité")) {
output.textContent = "Je peux reformuler cette opportunité sous forme de post plus visible, avec un titre fort, un résumé simple et les profils recherchés.";
} else {
output.textContent = "Je peux vous aider à transformer cette idée en publication, en projet structuré ou en demande de collaboration plus claire.";
}
}
