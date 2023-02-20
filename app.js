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
