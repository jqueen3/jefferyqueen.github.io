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

//for adjustment
function adjustRating(rating) {
    document.getElementById("rate").innerHTML = rating;
}

//for thanks page
document.getElementById("submitButton").onclick = function submitStormForm() {
    location.href = "lesson8/thanks.html";
}