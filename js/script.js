"use strict";
const imgELs = document.querySelectorAll(".banner >img ");
const prevBtn = document.querySelector(".prev ");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;
nextBtn.addEventListener("click", () => {
  imgELs[currentIndex].classList.remove("active");
  currentIndex++;
  if (currentIndex === imgELs.length) {
    currentIndex = 0;
  }
  imgELs[currentIndex].classList.add("active");
});
prevBtn.addEventListener("click", () => {
  imgELs[currentIndex].classList.remove("active");
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgELs.length - 1;
  }
  imgELs[currentIndex].classList.add("active");
});
