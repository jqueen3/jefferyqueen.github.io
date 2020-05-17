let copyyear = new Date();

document.getElementById("year").textContent = copyyear.getFullYear();

let modified = document.lastModified;

document.getElementById("date").textContent = modified;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}