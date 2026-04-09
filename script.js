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
const input = document.getElementById("hiive-ai-input");
const output = document.getElementById("hiive-ai-response-text");

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
const textarea = document.getElementById("hiide-post-textarea");
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

const btn = document.querySelector(".hiive-ai-trigger");
if (btn) {
btn.classList.add("active");
setTimeout(function () {
btn.classList.remove("active");
}, 1200);
}
}
function toggleHiiveAI() {
const panel = document.getElementById("hiive-ai-panel");
if (!panel) return;

const currentDisplay = window.getComputedStyle(panel).display;
panel.style.display = currentDisplay === "none" ? "block" : "none";
}

function fillHiiveAIPrompt(type) {
const input = document.getElementById("hiive-ai-input");
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
const textarea = document.getElementById("hiive-post-textarea");
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

const btn = document.querySelector(".hiive-ai-trigger");
if (btn) {
btn.classList.add("active");
setTimeout(function () {
btn.classList.remove("active");
}, 1200);
}
}
function toggleHiiveAI() {
const panel = document.getElementById("hiive-ai-panel");
if (!panel) return;

const currentDisplay = window.getComputedStyle(panel).display;
panel.style.display = currentDisplay === "none" ? "block" : "none";
}

function fillHiiveAIPrompt(type) {
const input = document.getElementById("hiive-ai-input");
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
const input = document.getElementById("hiive-ai-input");
const output = document.getElementById("hiive-ai-response-text");

if (!input || !output) return;

const text = input.value.trim().toLowerCase();

if (!text) {
output.textContent = "Décrivez votre besoin et je vous aiderai à créer un contenu plus fort, plus clair et plus visible.";
return;
}

if (text.includes("légende") || text.includes("caption")) {
output.textContent = "Voici une proposition : Créer, recommencer, évoluer. Chaque contenu est une étape de plus vers votre univers. #creation #inspiration #hiive";
} else if (text.includes("vidéo")) {
output.textContent = "Idée de vidéo : montrez votre processus en 3 étapes — inspiration, création, résultat final — avec une phrase courte à chaque étape.";
} else if (text.includes("post")) {
output.textContent = "Proposition de post : J’explore de nouvelles idées, de nouvelles formes et de nouvelles façons de créer. Ce n’est que le début. Dites-moi ce que ce contenu vous inspire.";
} else {
output.textContent = "Je peux vous aider à transformer cette idée en post, légende, vidéo ou réponse plus engageante.";
}
}

function optimizeWithHiiveAI() {
const textarea = document.getElementById("hiive-post-textarea");
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

const btn = document.querySelector(".hiive-ai-trigger");
if (btn) {
btn.classList.add("active");
setTimeout(function () {
btn.classList.remove("active");
}, 1200);
}
}
function optimizeProjectAI() {
alert("OlympeUS AI : optimisation du projet à venir.");
}
function sendMessage(){
const input = document.querySelector(".chat-input input");
const container = document.querySelector(".chat-messages");

if(input.value.trim() === "") return;

const msg = document.createElement("div");
msg.className = "msg me";
msg.innerText = input.value;

container.appendChild(msg);

input.value = "";
container.scrollTop = container.scrollHeight;
}
document.querySelectorAll('.chat-item').forEach(item=>{
item.addEventListener('click', ()=>{
item.classList.remove('unread');
item.classList.add('read');

const badge = item.querySelector('.badge');
if(badge) badge.remove();
});
});
<script>
const items = document.querySelectorAll('.chat-item');

items.forEach(item => {
item.addEventListener('click', () => {

// active visuel
items.forEach(i => i.classList.remove('active'));
item.classList.add('active');

// switch conversation
const user = item.dataset.user;

document.querySelectorAll('.chat-conversation').forEach(conv=>{
conv.style.display = 'none';
});

document.getElementById(user).style.display = 'block';

// enlever unread
item.classList.remove('unread');
item.classList.add('read');

const badge = item.querySelector('.badge');
if(badge) badge.remove();

});
});
</script>


<div class="chat-conversation" id="hakim" style="display:none;">
<div class="msg other">J’ai une idée audio 🔥</div>
</div>
<script>
const items = document.querySelectorAll('.chat-item');

items.forEach(item => {
item.addEventListener('click', () => {
items.forEach(i => i.classList.remove('active'));
item.classList.add('active');

const user = item.dataset.user;

document.querySelectorAll('.chat-conversation').forEach(conv => {
conv.style.display = 'none';
});

const target = document.getElementById(user);
if (target) target.style.display = 'block';

item.classList.remove('unread');
item.classList.add('read');

const badge = item.querySelector('.badge');
if (badge) badge.remove();
});
});
</script>
<script>
const items = document.querySelectorAll('.chat-item');

items.forEach(item => {
item.addEventListener('click', () => {

// active visuel
items.forEach(i => i.classList.remove('active'));
item.classList.add('active');

const user = item.dataset.user;

// switch conversation
document.querySelectorAll('.chat-conversation').forEach(conv=>{
conv.style.display = 'none';
});

document.getElementById(user).style.display = 'block';

// changer nom + avatar
document.getElementById('chat-name').textContent = item.dataset.name;
document.getElementById('chat-avatar').src = item.dataset.avatar;

// enlever unread
item.classList.remove('unread');
item.classList.add('read');

const badge = item.querySelector('.badge');
if(badge) badge.remove();

});
});
</script>
<script>
const items = document.querySelectorAll('.chat-item');

items.forEach(item => {
item.addEventListener('click', () => {
items.forEach(i => i.classList.remove('active'));
item.classList.add('active');

const user = item.dataset.user;

document.querySelectorAll('.chat-conversation').forEach(conv => {
conv.style.display = 'none';
});

const target = document.getElementById(user);
if (target) target.style.display = 'block';

const chatName = document.getElementById('chat-name');
const chatAvatar = document.getElementById('chat-avatar');

if (chatName) chatName.textContent = item.dataset.name;
if (chatAvatar) {
chatAvatar.src = item.dataset.avatar;
chatAvatar.alt = item.dataset.name;
}

item.classList.remove('unread');
item.classList.add('read');

const badge = item.querySelector('.badge');
if (badge) badge.remove();
});
});
</script>
const messagesContainer = document.querySelector('.chat-messages');
messagesContainer.scrollTop = messagesContainer.scrollHeight;
<script>
const items = document.querySelectorAll('.chat-item');
const chatName = document.getElementById('chat-name');
const chatAvatar = document.getElementById('chat-avatar');
const chatInput = document.querySelector('.chat-input input');
const chatMessages = document.querySelector('.chat-messages');

function getActiveConversation() {
return document.querySelector('.chat-conversation:not([style*="display:none"])');
}

function scrollChatToBottom() {
if (chatMessages) {
chatMessages.scrollTop = chatMessages.scrollHeight;
}
}

function showTypingIndicator() {
const activeConversation = getActiveConversation();
if (!activeConversation) return null;

let typing = document.createElement('div');
typing.className = 'msg other typing-indicator';
typing.textContent = 'écrit…';
activeConversation.appendChild(typing);
scrollChatToBottom();
return typing;
}

function simulateReply(user) {
const activeConversation = getActiveConversation();
if (!activeConversation) return;

const replies = {
emma: "Oui, on peut avancer aujourd’hui si tu veux.",
hakim: "Top, je t’envoie l’idée audio plus en détail.",
default: "D’accord, je reviens vers toi rapidement."
};

const typing = showTypingIndicator();

setTimeout(() => {
if (typing) typing.remove();

const reply = document.createElement('div');
reply.className = 'msg other';
reply.textContent = replies[user] || replies.default;
activeConversation.appendChild(reply);
scrollChatToBottom();
}, 1200);
}

items.forEach(item => {
item.addEventListener('click', () => {
items.forEach(i => i.classList.remove('active'));
item.classList.add('active');

const user = item.dataset.user;

document.querySelectorAll('.chat-conversation').forEach(conv => {
conv.style.display = 'none';
});

const target = document.getElementById(user);
if (target) target.style.display = 'block';

if (chatName) chatName.textContent = item.dataset.name;
if (chatAvatar) {
chatAvatar.src = item.dataset.avatar;
chatAvatar.alt = item.dataset.name;
}

item.classList.remove('unread');
item.classList.add('read');

const badge = item.querySelector('.badge');
if (badge) badge.remove();

let status = item.querySelector('.chat-status-label');
if (!status) {
status = document.createElement('span');
status.className = 'chat-status-label';
status.textContent = 'Lu';
item.appendChild(status);
}

scrollChatToBottom();
});
});

function sendMessage() {
const activeConversation = getActiveConversation();
if (!chatInput || !activeConversation) return;

const text = chatInput.value.trim();
if (!text) return;

const msg = document.createElement('div');
msg.className = 'msg me';
msg.textContent = text;

activeConversation.appendChild(msg);
chatInput.value = '';
scrollChatToBottom();

const activeItem = document.querySelector('.chat-item.active');
if (activeItem) {
const user = activeItem.dataset.user;
simulateReply(user);
}
}

if (chatInput) {
chatInput.addEventListener('keydown', function (e) {
if (e.key === 'Enter') {
e.preventDefault();
sendMessage();
}
});
}

scrollChatToBottom();
</script>
document.addEventListener("DOMContentLoaded", () => {

/* ===============================
TOGGLE IA PANEL
=============================== */
window.toggleHiiveAI = function () {
const panel = document.getElementById("hiive-ai-panel");

if (!panel) return;

panel.style.display =
panel.style.display === "none" || panel.style.display === ""
? "block"
: "none";
};


/* ===============================
OPTIMISATION IA (bouton)
=============================== */
window.optimizeWithHiiveAI = function () {
const panel = document.getElementById("hiive-ai-panel");
const textarea = document.getElementById("hiive-post-textarea");

if (panel) panel.style.display = "block";

if (textarea) {
textarea.value += " ✨ Optimisé avec Hiive AI";
}
};


/* ===============================
SUGGESTIONS IA RAPIDES
=============================== */
window.fillHiiveAIPrompt = function (type) {
const input = document.getElementById("hiive-ai-input");

if (!input) return;

if (type === "post") {
input.value = "Rédige un post inspirant sur la création de contenu.";
}

if (type === "caption") {
input.value = "Propose une légende engageante pour une vidéo.";
}

if (type === "video") {
input.value = "Donne-moi une idée de vidéo courte virale.";
}
};


/* ===============================
SIMULATION REPONSE IA
=============================== */
window.simulateHiiveAI = function () {
const output = document.getElementById("hiive-ai-response-text");

if (!output) return;

output.innerText =
"🔥 Idée : partage ton parcours en 3 étapes avec un hook fort + une émotion + une punchline finale.";
};


/* ===============================
BOUTONS FOLLOW / VOIR
=============================== */
document.querySelectorAll(".hiive-follow-btn").forEach(btn => {
btn.addEventListener("click", () => {
btn.innerText = "✔ Connecté";
btn.style.opacity = "0.7";
});
});


/* ===============================
MINI ICÔNES PROFIL
=============================== */
document.querySelectorAll(".hiive-mini-icon").forEach((btn, index) => {
btn.addEventListener("click", () => {
if (index === 0) window.location.href = "profile-hiive.html";
if (index === 1) alert("Contenus bientôt dispo");
if (index === 2) alert("Audio bientôt dispo");
});
});


/* ===============================
BOUTON CREER
=============================== */
const createBtn = document.querySelector(".hiive-create-btn");

if (createBtn) {
createBtn.addEventListener("click", () => {
document
.getElementById("hiive-post-textarea")
?.scrollIntoView({ behavior: "smooth" });
});
}


/* ===============================
BOUTON PUBLIER
=============================== */
document.querySelectorAll(".btn-primary").forEach(btn => {
if (btn.innerText.includes("Publier")) {
btn.addEventListener("click", () => {
alert("Post publié 🚀 (simulation)");
});
}
});


/* ===============================
TOOL BUTTONS (image/video/audio)
=============================== */
document.querySelectorAll(".hiive-tool-btn").forEach(btn => {
btn.addEventListener("click", () => {
alert("Fonction en cours de développement 🚀");
});
});


/* ===============================
POSTS (like interaction)
=============================== */
document.querySelectorAll(".hiive-post-actions button").forEach(btn => {
btn.addEventListener("click", () => {
btn.style.transform = "scale(1.1)";
setTimeout(() => {
btn.style.transform = "scale(1)";
}, 150);
});
});


/* ===============================
VIBES CLICK
=============================== */
document.querySelectorAll(".hiive-vibe-preview").forEach(vibe => {
vibe.addEventListener("click", () => {
window.location.href = "vibes-hiive.html";
});
});

});

/* ===== VIBES AUTOPLAY ===== */

document.querySelectorAll(".vibe-item video").forEach(video => {

video.addEventListener("click", () => {
if(video.paused){
video.play();
} else {
video.pause();
}
});

});
const vibes = document.querySelectorAll(".vibe-item");

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
const video = entry.target.querySelector("video");

if(entry.isIntersecting){
entry.target.classList.add("active");
video.play();
} else {
entry.target.classList.remove("active");
video.pause();
}
});
}, { threshold: 0.6 });

vibes.forEach(vibe => observer.observe(vibe));
const vibes = document.querySelectorAll(".vibe-item");

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
const video = entry.target.querySelector("video");

if(entry.isIntersecting){
entry.target.classList.add("active");

if(video){
video.play().catch(()=>{});
}

} else {
entry.target.classList.remove("active");

if(video){
video.pause();
}
}
});
}, { threshold: 0.7 });

vibes.forEach(vibe => observer.observe(vibe));
