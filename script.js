document.addEventListener("DOMContentLoaded", function () {
const groups = document.querySelectorAll(".role-options");

groups.forEach(function (group) {
const buttons = group.querySelectorAll("button");
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
});
