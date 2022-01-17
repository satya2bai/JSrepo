document.addEventListener("DOMContentLoaded", function () {
    fetch("nav.html").then(response => response.text()).then(function(text) {
        let nav = document.createElement("div");
        nav.classList.add("nav-div");
        nav.innerHTML = text;
        document.body.insertBefore(nav,document.body.firstChild);
    }).catch(function() {
        console.log("error API");
    });
});