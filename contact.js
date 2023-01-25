// overlay + alert
const alertPup = document.querySelectorAll(".alert");
const aletrCloseBtn = document.querySelectorAll(".alert a");
const overLay = document.querySelectorAll(".overlay");
let ContactaBtn = document.querySelectorAll(".openAlert")

ContactaBtn[0].addEventListener("click",()=> {
  alertPup[0].classList.add("on");
  overLay[0].classList.add("on");
})
aletrCloseBtn[0].addEventListener("click",() => {
  alertPup[0].classList.remove("on");
  overLay[0].classList.remove("on");
})
let emailInput = document.querySelectorAll(".content .input-box .email");
emailInput[0].addEventListener("input",() => {
  if (emailInput[0].value )
  emailInput[0].classList.add("up");
})
