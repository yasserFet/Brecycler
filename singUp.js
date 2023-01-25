//loeder
let loeder = document.querySelectorAll(".parentLoeder");
console.log(loeder);
window.addEventListener("load", function () {
  loeder.forEach((leoder) => {
    leoder.classList.add("hide-loader");
  });
});
// select option
let optionHeader = [
  ...document.querySelectorAll(
    ".custemoption"
  ),
];

let optionBody = document.querySelectorAll(
  ".custemoption ul"
);
let optionI = document.querySelectorAll(
  ".custemoption i"
);

optionHeader.forEach((el) => {

  el.addEventListener("click", () => {
    el.classList.add("border");
    
    let dataOption = el.dataset.option;
    optionBody.forEach((el) => {
      if (el.dataset.option == dataOption) {
        el.classList.toggle("on");
      } else {
        el.classList.add("on");
      }
    });
  });
});
optionHeader.forEach(el => {
  el.addEventListener("click",()=> {
    let option = el.dataset.option;
    optionI.forEach(i => {
      if (i.dataset.option == option ) {
        i.classList.add("animate");
      }
    })
  })
})


// clicking everywhere to hide the dropdomn
document.addEventListener("click", (e) => {
  if (e.target.id !== "on") {
    optionBody.forEach((el) => {
      el.classList.add("on");
    });
  
    optionI.forEach(i => {
      i.classList.remove("animate")
    })
  
  } else if (e.target.id == "on") {
    optionBody.forEach((el) => {
      e.target.classList.remove("on");
    });
  }
});
// data management
let tilteUnit = document.querySelectorAll(
  ".custemoption p"
);
let amountUnit = document.querySelectorAll(
  ".custemoption ul li"
);


amountUnit.forEach(li => {
  li.addEventListener("click",() => {
    tilteUnit[0].innerHTML = li.innerHTML;
    optionHeader[0].classList.add("on")
  })
})

let emailInput = document.querySelectorAll(".content .input-box .email");
console.log(emailInput[0].value)
emailInput[0].addEventListener("input",() => {
  if (emailInput[0].value )
  emailInput[0].classList.add("up");
  console.log(true)
})
