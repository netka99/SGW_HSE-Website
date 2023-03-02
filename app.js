const cards = document.querySelectorAll(".card");
const modalOverlay = document.querySelector(".modal-overlay");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const isCardActive = card.classList.contains("active");
    cards.forEach((otherCard, otherIdx) => {
      otherCard.classList.remove("active");
      modalOverlay.classList.remove("active");
    });
    if (!isCardActive) {
      card.classList.add("active");
      modalOverlay.classList.add("active");
    }
  });
});

//=============================================================
//responsive nav menu
const hamburger = document.querySelector(".hamburger");
const siteNav = document.querySelector(".links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  siteNav.classList.toggle("active");
});

document.querySelectorAll("links-ref").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    siteNav.classList.remove("active");
  })
);
