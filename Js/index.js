// headerMenu = document.querySelector('.header-mobile__menu');
// overlay = document.querySelector('.overlay');
// body = document.body;

// headerMenu.addEventListener('click', e =>{
//   e.preventDefault()
//   headerMenu.classList.toggle('header-mobile-active')
//   // if(headerMenu.contains(header-mobile-active)){
//   //   overlay.style.display = 'flex';
//   //   body.style.overflow = 'hidden';
//   // }
//   // else{
//   //   overlay.style.display = 'none';
//   // }
//   overlay.style.display = 'flex';
//   body.style.overflow = 'hidden';
// })




headerMenu = document.querySelector('.header-mobile__menu');
overlay = document.querySelector('.overlay');
body = document.body;

headerMenu.addEventListener('click', e =>{
  e.preventDefault()
  headerMenu.classList.toggle('header-mobile-active')
  if(headerMenu.classList.contains('header-mobile-active')){
    overlay.style.display = 'flex';
    body.style.overflow = 'hidden';
  }
  else{
    overlay.style.display = 'none';
    body.style.overflow = 'visible';
  }
})

