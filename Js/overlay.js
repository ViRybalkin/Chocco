headerMenu = document.querySelector('.header-mobile__menu');
overlay = document.querySelector('.overlay');
body = document.body;

headerMenu.addEventListener('click', e =>{
  e.preventDefault()
  headerMenu.classList.toggle('header-mobile-active')
  if(headerMenu.classList.contains('header-mobile-active')){
    overlay.style.opacity = '1'
    overlay.style.right = '0px'
    overlay.style.display = 'flex'
    body.style.overflow = 'hidden';
  }
  else{
    overlay.style.opacity = '0'
    overlay.style.display = 'none'
    overlay.style.right = '-9999px'
    body.style.overflow = 'visible';
  }
})

