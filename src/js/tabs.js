const tabs = document.querySelectorAll(".review__item");
const buttons = document.querySelectorAll(".interactive__avatar");
const link = document.querySelector(".interactive__avatar__link");

buttons.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    const $this = element;
    buttons.forEach((button, i) => {
      if (button !== $this) {
        button.classList.remove("interactive__avatar-active");
        tabs[i].classList.remove("review__item-active");
      }
    });
    $this.classList.add("interactive__avatar-active");
    tabs[index].classList.add("review__item-active");
  });
});
