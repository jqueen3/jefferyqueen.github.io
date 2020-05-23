let copyYear = new Date();

document.getElementById("year").textContent = copyYear.getFullYear();

let modified = document.lastModified;

document.getElementById("date").textContent = modified;

// for the hamburger
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

// this bad boy is for the banner
var d = new Date();
const banner = document.getElementById("banner");
if (d.getDay() == 5) {
    document.getElementById("banner").style.display = "block";
}
else {
    document.getElementById("banner").style.display = "none";
}