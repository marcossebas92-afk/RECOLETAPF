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
}

/* about page */

const valueHeaders = document.querySelectorAll(".value-header");

    valueHeaders.forEach(function(header) {
        header.addEventListener("click", function() {
            const content = header.nextElementSibling;
            const symbol = header.querySelector("span");

            content.classList.toggle("active");

            if (content.classList.contains("active")) {
                symbol.textContent = "-";
            } else {
                symbol.textContent = "+";
            }
        });
    });

});
