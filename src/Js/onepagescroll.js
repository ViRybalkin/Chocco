// window.addEventListener('load', () => {
//   // if (window.innerWidth > 768 ) {
//     const section = document.querySelectorAll('.section');
//     const content = document.querySelector('.main-content');
//     let spin = 0;

//     window.addEventListener('wheel', function (e) {
//       if (e.deltaY > 0) {
//         if(spin < section.length - 1){
//           spin +=1
//         }
//       } else {
//         if (spin > 0) {
//           spin -=1
//         }
//       }
//       scrollContent(spin)
//     });
//     function scrollContent(count) {
//       content.setAttribute('style','transform:translateY(-'+count * 100 +'vh)');
//     }
//   // }
// })


const section = $('.section');
const content = $('.main-content');
const sideMenu = $('.fixed-menu__list')
let inScroll = false;
const menuItems = sideMenu.find('.fixed-menu__item');
const mobileDetect = new MobileDetect(window.navigator.userAgent)
const isMobile = mobileDetect.mobile();

section.first().addClass('section-active')

const countSection = sectionEq =>{
  const position = sectionEq * -100;

  if(isNaN(position)){
    return 0;
  }
  return position
};

const changeTheme = (sectionEq) =>{
  const currentSection = section.eq(sectionEq);
  const theme = currentSection.attr('data-menu-theme');
  const activeClass = 'fixed-menu__list-dark'

  if (theme === 'black') {
    sideMenu.addClass(activeClass)
  }
  if (theme === 'white') {
    sideMenu.removeClass(activeClass)
  }
};

const resetActiveClass = (items,itemEq,active) =>{
  items.eq(itemEq).addClass(active).siblings().removeClass(active)
}

const transition = sectionEq => {
  if (inScroll) return;
    inScroll = true;
    const position = countSection(sectionEq) ;
    changeTheme(sectionEq)

    content.css({transform: `translateY(${position}%)`});
    resetActiveClass(section,sectionEq,'section-active')
    setTimeout(() => {
      inScroll = false;
      resetActiveClass(menuItems,sectionEq,'fixed-menu__item-active')
    }, 700);
};

const scroll = direction => {
  const activeSection = section.filter('.section-active');
  const nextSection = activeSection.next()
  const prevSection = activeSection.prev()

  if (direction === 'next' && nextSection.length) {
    transition(nextSection.index())
  }

  if (direction === 'prev' && prevSection.length) {
    transition(prevSection.index())
  }
};

$(window).on('wheel', e => {
  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {
    scroll('next')
  }

  if (deltaY < 0) {
    scroll('prev')
  }
});

$(window).on('keydown', e => {
  const tagName = e.target.tagName.toLowerCase();
  const userTyping = tagName === "input" || tagName === "textarea"
  if (userTyping) return;
    switch (e.keyCode) {
      case 38:
      case 87:
        scroll('prev')
        break;

      case 40:
      case 83:
        scroll('next')
        break;
    }
});

$('wrapper').on('touchmove',e => e.preventDefault())

$('[data-scroll-to]').click(e => {
  e.preventDefault()

  const $this = $(e.currentTarget);
  const target = $this.attr('data-scroll-to')
  const reqSection = $(`[data-section-id = ${target}]`);

  transition(reqSection.index())
});


if (isMobile){
  $("body").swipe( {
    swipe:function(event,direction,) {
      const scroller = scroll();
      let scrollDirection = "";
      if(direction === 'up') scrollDirection = 'next';
      if(direction === 'down') scrollDirection = 'prev';
      // alert(direction);
      scroller[scrollDirection]();
    },
  });
}

