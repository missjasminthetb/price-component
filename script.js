let button = document.querySelector("input");
let prices = document.querySelectorAll(".price");

function buttonClick(){
    prices.forEach( price => price.classList.toggle('hide'))
}
button.addEventListener('click',buttonClick);

