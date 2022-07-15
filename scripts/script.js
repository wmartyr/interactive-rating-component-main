let ratingChoice = 0;

const tyCard = document.querySelector(".thank-you-state");
const ratingCard = document.querySelector(".rating-state");

const ratingButtons = document.querySelectorAll(".rating-selector");
ratingButtons.forEach((ratingButton) => {
  ratingButton.addEventListener("click", () => {
    ratingChoice = ratingButton.id;
  });
});

const submitButton = document.querySelector(".rating-submit");
submitButton.addEventListener("click", () => {
  if (ratingChoice !== 0) {
    tyCard.style["display"] = "flex";
    ratingCard.style["display"] = "none";
  }
})