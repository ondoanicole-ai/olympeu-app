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
