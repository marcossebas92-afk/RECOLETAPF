document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    
});

const links = navMenu.querySelectorAll("a");
links.forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");

        });
    });
});
