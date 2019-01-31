const checkbox = document.querySelector("#checkbox1");
const background = document.querySelectorAll("body, .containerHeader");
const backgroundSecondary = document.querySelectorAll(".about, .containerProject");
const backgroundImage = document.querySelector(".iphoneContainer");
const text = document.querySelectorAll("h1, h2, h3, h4, p, a");
const menuMobile = document.querySelector(".menuMobile i");
const menuMobileList = document.querySelector(".list");
const itemMenu = document.querySelectorAll(".itemMenu");

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

function menuClick() {
    if (menuMobile.classList.contains("fa-bars")) {
        menuMobile.classList.replace("fa-bars", "fa-times");
    } else {
        menuMobile.classList.replace("fa-times", "fa-bars");
    }
    menuMobileList.classList.toggle("-active");
}

menuMobile.addEventListener("click", menuClick);

itemMenu.forEach((item) => {
    item.addEventListener("click", () => {
        menuMobileList.classList.toggle("-active");
        menuMobileList.classList.toggle("list closeMenuMobile");
        menuMobile.classList.replace("fa-times", "fa-bars");
    });
});