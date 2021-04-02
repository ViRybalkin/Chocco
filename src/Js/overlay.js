const headerMenu = document.querySelector('.header-mobile__menu');
const overlay = document.querySelector('.overlay');
const body = document.body;


headerMenu.addEventListener('click', e =>{
  e.preventDefault()
  headerMenu.classList.toggle('header-mobile-active')
  if(headerMenu.classList.contains('header-mobile-active')){
    overlay.classList.add('overlay-active')

  }
  else{
    overlay.classList.remove('overlay-active')
  }
})

overlay.addEventListener('click',e =>{
  e.preventDefault();
  const target = e.target;
  const dataValue = target.dataset.scrollTo;
  if(target.classList.contains('menu__link')){
    overlay.classList.remove('overlay-active')
    headerMenu.classList.remove('header-mobile-active')
    scrollToSection(dataValue);
  }
});

const scrollToSection = (attr) =>{
  const elem = document.querySelector(`[data-section-id = ${attr}]`);
  window.scroll({
    left: 0,
    top: elem.offsetTop,
    behavior: 'smooth'
  })
}

