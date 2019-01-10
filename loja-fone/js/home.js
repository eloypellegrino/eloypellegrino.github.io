const $cartButton = document.querySelector(".-second");
$cartButton.addEventListener("click", insertText);

let cartQt = 10;

function insertText() {
    const $cartText = document.querySelector(".-last");
    $cartText.textContent = `Carrinho(${++cartQt})`;
}
