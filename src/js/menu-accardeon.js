// ( function (){
//   let menuLink = document.querySelectorAll('.menu-acco__link');

//   menuLink.forEach(function (label) {
//     label.addEventListener('click', function (e) {
//       e.preventDefault();
//       let menuActiveItem = document.querySelector('.menu-acco__item.menu-acco__item-active');
//       if (menuActiveItem) {
//         menuActiveItem.classList.remove('menu-acco__item-active');

//       }
//       if (!menuActiveItem || menuActiveItem.querySelector(".menu-acco__link") !== this) {
//         let menuItem = this.closest('.menu-acco__item');
//         menuItem.classList.add('menu-acco__item-active');
//       }
//     })
//   })
//   if (window.innerWidth < 768 ){
//     const mobileWidth = () => {
//       const menuLink = document.querySelectorAll('.menu-acco__link');
//       const windowWidth = window.innerWidth;
//       console.log(windowWidth);
//       for ( let i = 0; i < menuLink.length; i++){
//         const itemWidth = getComputedStyle(menuLink[i]).width
//         console.log(itemWidth);
//       }
//       const item = document.querySelectorAll('.menu-acco__text');
//       for (let i = 0; i <item.length;i++){
//         // item[0].style.width = windowWidth - (102 * 3) + 'px'
//       }
//     }
//     mobileWidth()
//   }
// })();
const itemWidth = (item) => {
  let reqItemWidth = 0;
  const screenWidth = $(window).width();
  const container = item.closest(".menu-acco__list");
  const linkBlock = container.find(".menu-acco__link");
  const linkWidth = linkBlock.width() * linkBlock.length;
  const textContainer = item.find(".menu-acco__text-container");
  const paddingLeft = parseInt(textContainer.css("padding-left"));
  const paddingRight = parseInt(textContainer.css("padding-right"));

  if (window.innerWidth < 768) {
    reqItemWidth = screenWidth - linkWidth;
  } else {
    reqItemWidth = 520;
  }
  if (window.innerWidth < 480) {
    reqItemWidth = screenWidth - linkBlock.width();
  }
  return {
    container: reqItemWidth,
    textContainer: reqItemWidth - paddingLeft - paddingRight,
  };
};

const closeItem = (container) => {
  const items = container.find(".menu-acco__item");
  const content = container.find(".menu-acco__text");

  items.removeClass(".menu-acco__item_active");

  content.width(0);
};

const opneItem = (item) => {
  const hiddenContent = item.find(".menu-acco__text");
  const reqWidth = itemWidth(item);
  const textBlock = item.find(".menu-acco__text-container");
  item.addClass(".menu-acco__item_active");
  hiddenContent.width(reqWidth.container);
  textBlock.width(reqWidth.textContainer);
};

$(".menu-acco__link").on("click", (e) => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const item = $this.closest(".menu-acco__item");
  const itemOpened = item.hasClass(".menu-acco__item_active");
  const container = $this.closest(".menu-acco__list");
  if (itemOpened) {
    closeItem(container);
  } else {
    closeItem(container);
    opneItem(item);
  }
  if (window.innerWidth < 480) {
    $(item).toggleClass("acco-menu-mobile");
  }
});
