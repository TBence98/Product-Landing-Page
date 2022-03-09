const nav = document.querySelector(".header");
const navHeader = document.querySelector(".nav-header");
linksContainer = document.getElementById("nav-bar");
navToggle = document.querySelector(".nav-toggle");

//============ Nav Toggle ===============
navToggle.addEventListener("click", () => {
    linksHeight = document.getElementById("nav-links").getBoundingClientRect().height;
    if (linksContainer.getBoundingClientRect().height === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }
})

//============ Fixed Nav ===============
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 0) {
        nav.classList.add("fixed-header");
        linksContainer.style.color = "black";
    }
    else {
        nav.classList.remove("fixed-header");
        linksContainer.style.color = "white";
    }
})

//============= Smooth Scroll ===========
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href");
        const target = document.querySelector(id);
        const navHeight = nav.getBoundingClientRect().height;
        let targetPosition = target.offsetTop - navHeight;
        if (!nav.classList.contains("fixed-header")) {
            targetPosition -= navHeight;
        }
        if (navHeight > 80) {
            targetPosition += document.getElementById("nav-links").getBoundingClientRect().height;
        }
        window.scrollTo(0, targetPosition);
        linksContainer.style.height = 0;
    })
});

//============= Set Date ==============
date = document.getElementById("date");
const d = new Date()
date.textContent = d.getFullYear();