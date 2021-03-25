(function(){
  let items = document.querySelectorAll('.products__item');
  let container = document.querySelector('.products__list');
  let nextBtn = document.querySelector('.arrows-right');
  let prevBtn = document.querySelector('.arrows-left');
  let step = currentWidth();
  let maxRight = step * items.length;
  let currentRight = 0;

  container.style.right = currentRight;


  window.addEventListener('resize', () => {
    step = currentWidth()
  })

  nextBtn.addEventListener('click', (e) =>{
    changeSlide(e, 'right');
  });

  prevBtn.addEventListener('click', (e) =>{
    changeSlide(e,'left');
  });

  function changeSlide(e,direction){
    e.preventDefault()

    if(direction === 'right'){
      if(currentRight < maxRight){
        currentRight += step;
        container.style.right = currentRight + 'px';
      }
      if(currentRight === maxRight){
        currentRight = 0;
        container.style.right ='0px'
      }
      // container.appendChild(container.firstElementChild)
    } else {
      if(currentRight >= 0){
        currentRight -= step;
        container.style.right = currentRight + 'px' 
      }
      if(currentRight < 0){
        currentRight = maxRight - step;
        container.style.right = currentRight + 'px' 
      }
      // container.insertBefore(container.lastElementChild,container.firstElementChild)
    }
  }

  function currentWidth() {
    let itemWidth = document.querySelector('.products').clientWidth;
    items.forEach(item => {
      item.style.width = itemWidth + 'px';
    })
    return itemWidth;
  }
})()

