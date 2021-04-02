( function (){
  let menuLink = document.querySelectorAll('.menu-acco__link');
  menuLink.forEach(function (label) {
    label.addEventListener('click', function (e) {
      e.preventDefault();
      let menuActiveItem = document.querySelector('.menu-acco__item.menu-acco__item-active');
      if (menuActiveItem) {
        menuActiveItem.classList.remove('menu-acco__item-active');

      }
      if (!menuActiveItem || menuActiveItem.querySelector(".menu-acco__link") !== this) {
        let menuItem = this.closest('.menu-acco__item');
        menuItem.classList.add('menu-acco__item-active');
      }
    })
  })
})();