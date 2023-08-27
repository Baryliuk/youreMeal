let ad = document.getElementById("basket");
let open = document.getElementById("open");
let close = document.getElementById("close");
let ord = document.getElementById("ord");
let bomba = document.getElementById("bomba");
let modal__product = document.getElementById("modal__product");
let x = document.getElementById("x");
ad.onclick = function () {
  ord.classList.add("order__open");
  open.classList.add("order__open");
};
close.onclick = function () {
  open.classList.remove("order__open");
  ord.classList.remove("order__open");
};
bomba.onclick = function () {
  modal__product.style.display = "block";
};
x.onclick = function () {
  modal__product.style.display = "none";
};
