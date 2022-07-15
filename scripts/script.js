let ratingChoice;

const tyCard = document.querySelector(".thank-you-state");
const ratingCard = document.querySelector(".rating-state");
tyCard.style["display"] = "none";

const ratingButtons = document.querySelectorAll(".rating-selector");
ratingButtons.forEach((ratingButton) => {
  ratingButton.addEventListener("click", () => {
    ratingChoice = ratingButton.id;
  });
});
