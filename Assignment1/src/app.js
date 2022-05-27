// DOM
const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");

// Event
let isMenuOpen = false;
menuIcon.addEventListener("click", function (e) {
  if (isMenuOpen == false) {
    menu.classList.remove("hidden");
    isMenuOpen = true;
  } else {
    menu.classList.add("hidden");
    isMenuOpen = false;
  }
});

// const slides = document.querySelectorAll(".slider");
// let index = 0;
// function slider() {
//   setInterval(function () {
//     for (let i = 0; i < slides.length; i++) {
//       slides[i].style.opacity = 0;
//     }
//     if (index > 2) {
//       index = 0;
//     } else {
//       index++;
//     }
//     slides[index].style.opacity = 1;
//   }, 1000);
// }

// slider();

// const image = document.querySelector(".slider");
// console.log(image);
// let index = 1;
// function changeImage() {
//   setInterval(function () {
//     if(index > 2) {
//       index = 1
//     } else {
//       index = index + 1;
//     }
//     image.src = `./images/book${index}.jpg`;
//   }, 1000);
// }

// const images = document.querySelectorAll(".slider");
// console.log(images);
// let current = 0;
// function slider() {
//   setInterval(function () {
//     for (let i = 0; i < images.length; i++) {
//       images[i].style.opacity = 0;
//     }
//     if (current > images.length - 2) {
//       current = 0;
//     } else {
//       current = current + 1;
//     }
//     images[current].style.opacity = 1
//   }, 2000);
// }

const images = document.querySelectorAll(".slider");
console.log(images);
let current = 0;
function changeImage() {
  setInterval(function () {
    for (let i = 0; i < images.length; i++) {
      images[i].style.opacity = 0;
    }
    if (current > images.length - 2) {
      current = 0;
    } else {
      current = current + 1;
    }
    images[current].style.opacity = 1;
  }, 2000);
}

changeImage();
