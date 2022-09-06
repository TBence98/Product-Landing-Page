const nav = document.querySelector(".header");
const navHeader = document.querySelector(".nav-header");
const linksContainer = document.getElementById("nav-bar");
const navToggle = document.querySelector(".nav-toggle");

//============ Nav Toggle ===============
navToggle.addEventListener("click", () => {
    const linksHeight = document
        .getElementById("nav-links")
        .getBoundingClientRect().height;
    if (linksContainer.getBoundingClientRect().height === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

//============ Fixed Nav ===============
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 0) {
        nav.classList.add("fixed-header");
        linksContainer.style.color = "black";
    } else {
        nav.classList.remove("fixed-header");
        linksContainer.style.color = "white";
    }
});

//============= Smooth Scroll ===========
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href");
        const target = document.querySelector(id);
        const navHeight = nav.getBoundingClientRect().height;
        // offsetTop in this case is the distance between the target
        // top outer border and the inner border of the top of the
        // html element
        let targetPosition = target.offsetTop - navHeight;
        // This check is important because, if the browser starts
        // scrolling the nav become fixed, so it's not part of the
        // document normal flow. That's why we need to subtract
        // the navHeight again to get the correct distance
        if (!nav.classList.contains("fixed-header")) {
            targetPosition -= navHeight;
        }
        // if the nav bar is open in smaller screens we have to add
        // it's height to the targetPosition because it will be
        // closed automatically when you click to the link
        if (navHeight > 80) {
            targetPosition += document
                .getElementById("nav-links")
                .getBoundingClientRect().height;
        }
        window.scrollTo(0, targetPosition);
        linksContainer.style.height = 0;
    });
});

//============= Set Date ==============
const date = document.getElementById("date");
const d = new Date();
date.textContent = d.getFullYear();
