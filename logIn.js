//loeder
let loeder = document.querySelectorAll(".parentLoeder");
console.log(loeder);
window.addEventListener("load", function () {
  loeder.forEach((leoder) => {
    leoder.classList.add("hide-loader");
  });
});
