headerMenu = document.querySelector('.header-mobile__menu');
overlay = document.querySelector('.overlay');
body = document.body;

headerMenu.addEventListener('click', e =>{
  e.preventDefault()
  headerMenu.classList.toggle('header-mobile-active')
  if(headerMenu.classList.contains('header-mobile-active')){
    overlay.classList.add('overlay-active')
    body.style.overflow = 'hidden';
  }
  else{
    overlay.classList.remove('overlay-active')
    body.style.overflow = 'visible';
  }
})

