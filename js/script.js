const checkbox = document.querySelector("#checkbox1");
const background = document.querySelectorAll("body, .containerHeader");
const backgroundSecondary = document.querySelectorAll(".about, .containerProject");
const backgroundImage = document.querySelector(".iphoneContainer");
const text = document.querySelectorAll("h1, h2, h3, h4, p, a");

checkbox.addEventListener("click", () => {
    for (item of background) {
        item.classList.add("transition");
        item.classList.toggle("darkBackground");
    }
    for (item of backgroundSecondary) {
        item.classList.add("transition");
        item.classList.toggle("darkBackgroundSecondary");
    }
    for (item of text) {
        item.classList.add("transition");
        item.classList.toggle("darkText");
    }
    backgroundImage.classList.toggle("darkBackgroundImage");
});

checkbox.checked = false;

// Scroll suave

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});