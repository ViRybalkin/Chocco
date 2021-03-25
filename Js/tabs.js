const tabs = document.querySelectorAll('.review__item');
const buttons = document.querySelectorAll('.interactive__avatar');
const link = document.querySelector('.interactive__avatar__link')

buttons.forEach((element, index) => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    _this = element;
    buttons.forEach((button, i) => {
      if (button !== _this) {
        button.classList.remove('interactive__avatar-active');
        tabs[i].classList.remove('review__item-active');
      }
      
    });
    _this.classList.add('interactive__avatar-active');
    tabs[index].classList.add('review__item-active');
  })
})
