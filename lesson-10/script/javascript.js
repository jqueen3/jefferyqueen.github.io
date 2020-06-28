let copyYear = new Date();
var d = new Date();
var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var todaysDate = weekday[d.getDay()] + ", " + [d.getDate()] + " " + month[d.getMonth()] + " " + [d.getFullYear()];


document.getElementById("year").textContent = copyYear.getFullYear();
document.getElementById("date").textContent = todaysDate;

// for the hamburger
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

// this bad boy is for the banner

// const banner = document.getElementById("banner");
// if (d.getDay() == 5) {
    // document.getElementById("banner").style.display = "block";
// }
// else {
    // document.getElementById("banner").style.display = "none";
// }

var newChild = document.createElement("p");
var parent = document.getElementById("banner");
newChild.innerHTML = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.";
if (d.getDay() == 5) {
    parent.appendChild(newChild);
    newChild.style.display = "block";
    newChild.style.textAlign = "center";
}
else {
    newChild.style.display = "none"; 
}


