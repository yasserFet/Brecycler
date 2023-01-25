// the menu movement
let categoriesList = document.querySelectorAll(".nav .categoriesList");
let navBar = [...document.getElementsByClassName("nav")];
let menuIcon = document.querySelectorAll(" .nav .container .logo .fa-bars");
let xIcon = document.querySelectorAll(".categoriesList .container .nav .fa-x");
menuIcon[0].addEventListener("click", () => {
  categoriesList[0].classList.add("moveRight");
  navBar[0].classList.add("clicked");
});

xIcon[0].addEventListener("click", () => {
  categoriesList[0].classList.remove("moveRight");
  navBar[0].classList.remove("clicked");
});
// clicking everywhere
document.addEventListener("click", (e) => {
  if (e.target.id !== "categoriesList" && e.target.id !== "fa-bars") {
    categoriesList[0].classList.remove("moveRight");
    navBar[0].classList.remove("clicked");
  }
});
// hide navBar on scroll
var lastScrollTop;
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (!recomendation[0].classList.contains("delete")) {
    if (scrollTop > lastScrollTop) {
      navBar[0].style.top = "-80px";
    } else {
      navBar[0].style.top = "0";
    }
  }
  lastScrollTop = scrollTop;
});
// auto type effect
let autoTypeText = " We are creative agency";
let autoTypeEle = document.querySelectorAll(".landing .info h2");
let i = 0;
function autoType() {
  if (i < autoTypeText.length) {
    autoTypeEle[0].innerHTML += autoTypeText.charAt(i);
    i++;
  }
  setTimeout(autoType, 100);
}
autoType();
// search
let searchInput = document.querySelectorAll(".nav .container .search input");
let recomendation = document.querySelectorAll(".nav .recomendation ");
let searchIcon = document.querySelectorAll(
  ".nav .left-Icons .fa-magnifying-glass"
);
let categorySearch = document.querySelectorAll(".nav .probCon .prob .search");
searchInput[0].addEventListener("click", () => {
  recomendation[0].classList.add("delete");
  });
categorySearch[0].addEventListener("click", () => {
  recomendation[0].classList.add("delete");
   navBar[0].style.top = "0";
});
searchIcon[0].addEventListener("click", () => {
  recomendation[0].classList.add("delete");
   navBar[0].style.top = "0";

});
// clicking everywhere
document.addEventListener("click", (e) => {
  if (
    e.target.id !== "recomendation" &&
    e.target.id !== "Search" &&
    e.target.id !== "fa-magnifying-glass" &&
    e.target.id !== "fa-bars"
  ) {
    recomendation[0].classList.remove("delete");
  }
});


// slider
let boxes = document.querySelectorAll(".mainPage .card .box");
let cards = document.querySelectorAll(".mainPage .card");
let leftIcon = document.querySelectorAll(".mainPage .left");
let rightIcon = document.querySelectorAll(".mainPage .right");

cards.forEach((box, i) => {
  let dimentions = box.getBoundingClientRect();
  let width = dimentions.width;
  leftIcon[i].addEventListener("click", () => {
    box.scrollLeft -= width;
  });
});

cards.forEach((box, i) => {
  let dimentions = box.getBoundingClientRect();
  let width = dimentions.width;
  rightIcon[i].addEventListener("click", () => {
    box.scrollLeft += width;
  });
});
// heart coloring and card saving
let emptyHeart = document.querySelectorAll(
  ".mainPage .card .box .footer .empty"
);
let fullyHeart = document.querySelectorAll(
  ".mainPage .card .box .footer .fully"
);
let emptySave = document.querySelectorAll(
  ".mainPage .card .box .footer .emptySave"
);
let fullSave = document.querySelectorAll(
  ".mainPage .card .box .footer .fullSave"
);
emptyHeart.forEach((i) => {
  i.addEventListener("click", () => {
    i.classList.toggle("fa-regular");
    i.classList.toggle("fa-solid");
  });
});
emptySave.forEach((i) => {
  i.addEventListener("click", () => {
    i.classList.toggle("fa-regular");
    i.classList.toggle("fa-solid");
  });
});

// product description slider
let rightBtn = document.querySelectorAll(".product .parent .right");
let leftBtn = document.querySelectorAll(".product .parent .left");
let productImgs = document.querySelectorAll(".product .parent .images img");
let productImgsContainer = document.querySelectorAll(
  ".product .parent .images"
);
productImgsContainer.forEach((box, i) => {
  let dimentions = box.getBoundingClientRect();
  let width = dimentions.width;
  leftBtn[i].addEventListener("click", () => {
    box.scrollLeft -= width;
  });
});

productImgsContainer.forEach((box, i) => {
  let dimentions = box.getBoundingClientRect();
  let width = dimentions.width;
  rightBtn[i].addEventListener("click", () => {
    box.scrollLeft += width;
  });
});
//loeder
let loeder = [...document.getElementsByClassName("parentLoeder")];
console.log(loeder)
window.addEventListener("load", function () {
  loeder.forEach((leoder) => {
    leoder.classList.add("hide-loader");
  });
});

// increasing nbrs 
let StatNbr = document.querySelectorAll(".stat .box h5") 
let stared = false;
window.addEventListener("scroll", function () {
  if (window.scrollY >StatNbr[0].offsetTop +200) {
    if (!stared) {
      StatNbr.forEach((li) => {
        increase(li);
      });
      stared = true;
    }
  }
});
function increase(ele) {
  let goal = +ele.dataset.goal;
  let counter = setInterval(() => {
    ele.innerHTML++;
    if (ele.innerHTML == ele.dataset.goal) {
      clearInterval(counter);
    }
  }, 1500 / goal);
}
let scrollUpIcon = document.querySelectorAll(".scrollUp");
window.onscroll = function () {
  if (scrollY > 433) {
    scrollUpIcon.forEach((e) => {
      e.style.display = "block";
    });
  } else {
    scrollUpIcon.forEach((e) => {
      e.style.display = "none";
    });
  }
};
scrollUpIcon.forEach((e) => {
  e.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
  });
});
