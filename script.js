document.addEventListener("DOMContentLoaded", function () {
const groups = document.querySelectorAll(".choice-grid, .tag-grid, .role-options");

groups.forEach(function (group) {
const buttons = group.querySelectorAll("button");
const isMulti = group.classList.contains("multi-select");

buttons.forEach(function (btn) {
btn.type = "button";

btn.addEventListener("click", function (e) {
e.preventDefault();
e.stopPropagation();

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
});

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
output.textContent = "Voici une version plus efficace : Je recherche un développeur motivé pour rejoindre un projet IA en phase de structuration. Objectif : construire une première version, tester le marché et faire évoluer le produit.";
} else if (text.includes("projet")) {
output.textContent = "Je vous conseille de structurer votre projet en 4 blocs : problème, solution, public cible, besoins immédiats.";
} else {
output.textContent = "Je peux vous aider à transformer cette idée en publication, en projet structuré ou en demande de collaboration plus claire.";
}
}

function optimizeWithOlympeusAI() {
const textarea = document.getElementById("olympeus-post-textarea");
if (!textarea) return;

const currentText = textarea.value.trim();
textarea.value = currentText
? "✨ Version optimisée par OlympeUS AI :\n\n" + currentText
: "✨ Version optimisée par OlympeUS AI :\n\nJe recherche un collaborateur motivé pour rejoindre un projet en phase de structuration.\n\n#projet #collaboration #startup";

const btn = document.querySelector(".ol-ai-trigger");
if (btn) {
btn.classList.add("active");
setTimeout(function () {
btn.classList.remove("active");
}, 1200);
}
}
function toggleHiiveAI() {
const panel = document.getElementById("Hiive-ai-panel");
if (!panel) return;

const currentDisplay = window.getComputedStyle(panel).display;
panel.style.display = currentDisplay === "none" ? "block" : "none";
}

function fillHiiveAIPrompt(type) {
const input = document.getElementById("Hiive-ai-input");
if (!input) return;

if (type === "post") {
input.value = "Aide-moi à rédiger un post inspirant pour présenter une idée créative et susciter des réactions.";
} else if (type === "caption") {
input.value = "Crée une légende courte, moderne et engageante pour une publication photo ou vidéo.";
} else if (type === "video") {
input.value = "Donne-moi une idée de vidéo originale et simple à produire pour engager ma communauté.";
}
}

function simulateHiiveAI() {
const input = document.getElementById("Hiive-ai-input");
const output = document.getElementById("Hiive-ai-response-text");

if (!input || !output) return;

const text = input.value.trim().toLowerCase();

if (!text) {
output.textContent = "Décrivez votre besoin et je vous aiderai à créer un contenu plus fort, plus clair et plus visible.";
return;
}

if (text.includes("légende") || text.includes("caption")) {
output.textContent = "Voici une proposition : “Créer, recommencer, évoluer. Chaque contenu est une étape de plus vers votre univers. ✨ #creation #inspiration #ussocial”";
} else if (text.includes("vidéo")) {
output.textContent = "Idée de vidéo : montrez votre processus en 3 étapes — inspiration, création, résultat final — avec une phrase courte à chaque étape pour garder le rythme.";
} else if (text.includes("post")) {
output.textContent = "Proposition de post : “J’explore de nouvelles idées, de nouvelles formes et de nouvelles façons de créer. Ce n’est que le début. Dites-moi ce que ce contenu vous inspire.”";
} else {
output.textContent = "Je peux vous aider à transformer cette idée en post, légende, vidéo ou réponse plus engageante.";
}
}

function optimizeWithHiiveAI() {
const textarea = document.getElementById("us-post-textarea");
if (!textarea) return;

const currentText = textarea.value.trim();

let generatedText = "";

if (currentText) {
generatedText =
"✨ Version optimisée par Hiive AI :\n\n" +
currentText +
"\n\n👉 Proposition : un ton plus fluide, plus engageant et plus inspirant pour encourager les réactions et le partage.";
} else {
generatedText =
"✨ Version optimisée par Hiive AI :\n\n" +
"J’explore une nouvelle idée créative aujourd’hui. Entre inspiration, expérimentation et expression, chaque contenu est une nouvelle étape. Qu’est-ce que cela vous inspire ?";
}

textarea.value = generatedText;

const btn = document.querySelector(".usf-ai-trigger");
if (btn) {
btn.classList.add("active");
setTimeout(function () {
btn.classList.remove("active");
}, 1200);
}
}
function toggleHiiveAI() {
const panel = document.getElementById("Hiive-ai-panel");
if (!panel) return;

const currentDisplay = window.getComputedStyle(panel).display;
panel.style.display = currentDisplay === "none" ? "block" : "none";
}

function fillUSAIPrompt(type) {
const input = document.getElementById("Hiive-ai-input");
if (!input) return;

if (type === "post") {
input.value = "Aide-moi à rédiger un post inspirant pour présenter une idée créative et susciter des réactions.";
} else if (type === "caption") {
input.value = "Crée une légende courte, moderne et engageante pour une publication photo ou vidéo.";
} else if (type === "video") {
input.value = "Donne-moi une idée de vidéo originale et simple à produire pour engager ma communauté.";
}
}

function simulateUSAI() {
const input = document.getElementById("Hiive-ai-input");
const output = document.getElementById("Hiive-ai-response-text");

if (!input || !output) return;

const text = input.value.trim().toLowerCase();

if (!text) {
output.textContent = "Décrivez votre besoin et je vous aiderai à créer un contenu plus fort, plus clair et plus visible.";
return;
}

if (text.includes("légende") || text.includes("caption")) {
output.textContent = "Voici une proposition : Créer, recommencer, évoluer. Chaque contenu est une étape de plus vers votre univers. #creation #inspiration #ussocial";
} else if (text.includes("vidéo")) {
output.textContent = "Idée de vidéo : montrez votre processus en 3 étapes — inspiration, création, résultat final — avec une phrase courte à chaque étape.";
} else if (text.includes("post")) {
output.textContent = "Proposition de post : J’explore de nouvelles idées, de nouvelles formes et de nouvelles façons de créer. Ce n’est que le début. Dites-moi ce que ce contenu vous inspire.";
} else {
output.textContent = "Je peux vous aider à transformer cette idée en post, légende, vidéo ou réponse plus engageante.";
}
}

function optimizeWithHiiveAI() {
const textarea = document.getElementById("us-post-textarea");
if (!textarea) return;

const currentText = textarea.value.trim();

let generatedText = "";

if (currentText) {
generatedText =
"✨ Version optimisée par Hiive AI :\n\n" +
currentText +
"\n\n👉 Proposition : un ton plus fluide, plus engageant et plus inspirant pour encourager les réactions et le partage.";
} else {
generatedText =
"✨ Version optimisée par Hiive AI :\n\n" +
"J’explore une nouvelle idée créative aujourd’hui. Entre inspiration, expérimentation et expression, chaque contenu est une nouvelle étape. Qu’est-ce que cela vous inspire ?";
}

textarea.value = generatedText;

const btn = document.querySelector(".usf-ai-trigger");
if (btn) {
btn.classList.add("active");
setTimeout(function () {
btn.classList.remove("active");
}, 1200);
}
}
