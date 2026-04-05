window.addEventListener("load", function () {
function syncState() {
document.querySelectorAll(".oo-choice").forEach(function (label) {
const input = label.querySelector("input");
label.classList.toggle("active", !!input && input.checked);
});

document.querySelectorAll(".oo-tag").forEach(function (label) {
const input = label.querySelector("input");
label.classList.toggle("active", !!input && input.checked);
});
}

document.addEventListener("change", function (e) {
if (e.target.matches(".oo-choice input, .oo-tag input")) {
syncState();
}
});

const continueBtn = document.querySelector(".oo-btn-primary");

if (continueBtn) {
continueBtn.addEventListener("click", function (e) {
e.preventDefault();

const activeRoleInput = document.querySelector(".oo-choice input:checked");
const role = activeRoleInput ? activeRoleInput.value.trim() : "";

const selectedTags = Array.from(document.querySelectorAll(".oo-tag input:checked")).map(function (input) {
return input.value.trim();
});

localStorage.setItem("olympe_role", role);
localStorage.setItem("olympe_tags", JSON.stringify(selectedTags));

window.location.href = "/activity/";
});
}

syncState();
});
