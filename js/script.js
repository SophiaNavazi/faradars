"use strict";
// slider
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

// cards
const productEl = document.querySelector(".titlePr");
const getCard = async () => {
  try {
    const res = await fetch(
      "https://faradars.org/api/client/v2/landings/36486/products?page=1&limit=20",
    );
    const data = await res.json();
    data?.products?.map((pr) => {
      productEl.innerHTML += `<div class="card">
    <img src=${pr?.png_image}>
      <div class="card-content">
     <h2>${pr?.title?.split(" ")?.splice(0, 2)?.join(" ")}...</h2>
      <p>${pr?.id}</p>
      <span>price : ${pr?.price}</span>
      </div>
      </div>`;
    });
  } catch (error) {
    console.log(error);
  }
};
getCard();
