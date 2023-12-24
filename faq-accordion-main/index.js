const faqButtons = document.querySelectorAll(".btn");

let isAnswerShowing = false;

function toggleStyles(id) {
  isAnswerShowing = !isAnswerShowing;
  const currentParagraphElement = document.querySelector(
    `#faq-container-${id} p`
  );
  currentParagraphElement.classList.toggle("hide");
  const currentImgElement = document.querySelector(`#faq-container-${id} img`);
  currentImgElement.classList.toggle("icon-minus");
  currentImgElement.alt = isAnswerShowing ? "icon minus" : "icon plus";
}

faqButtons.forEach((button, index) => {
  button.addEventListener("click", () => toggleStyles(index + 1));
});
