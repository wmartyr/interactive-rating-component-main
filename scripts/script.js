let ratingChoice = 0;

const tyCard = document.querySelector(".thank-you-state");
const ratingCard = document.querySelector(".rating-state");

const ratingButtons = document.querySelectorAll(".rating-selector");
ratingButtons.forEach((ratingButton) => {
  ratingButton.addEventListener("click", () => {
    if (ratingChoice !== 0) {
      document.getElementById(ratingChoice).classList.remove("rating-highlight");
    }
    ratingChoice = ratingButton.id;
    document.getElementById(ratingButton.id).classList.add("rating-highlight");
  });
});

const submitButton = document.querySelector(".rating-submit");
submitButton.addEventListener("click", () => {
  if (ratingChoice !== 0) {
    tyCard.style["display"] = "flex";
    ratingCard.style["display"] = "none";
    const resultLine = document.querySelector(".result-line");
    resultLine.textContent = `You selected ${ratingChoice} out of 5`;
  }
})