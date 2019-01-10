const $search = document.querySelector("[type=search]");
const $searchBtn = document.querySelector(".fa-search");
const $searchBtnClose = document.querySelector(".fa-times");
const $menuMobile = document.querySelector(".menu i");
const $menuMobileList = document.querySelector(".list");

function searchClick() {
    $search.classList.toggle("-active");
    $searchBtn.classList.toggle("-active");
    $searchBtnClose.classList.toggle("-active");
    $searchBtn.classList.toggle("-hidden");
    $searchBtnClose.classList.toggle("-hidden");
};

function menuClick() {
    if ($menuMobile.classList.contains("fa-bars")) {
        $menuMobile.classList.replace("fa-bars", "fa-times");
    } else {
        $menuMobile.classList.replace("fa-times", "fa-bars");
    }
    $menuMobileList.classList.toggle("-active");
}

$searchBtn.addEventListener("click", searchClick);
$searchBtnClose.addEventListener("click", searchClick);
$menuMobile.addEventListener("click", menuClick);