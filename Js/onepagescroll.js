window.addEventListener('load', () => {
  // if (window.innerWidth > 768 ) {
    const section = document.querySelectorAll('.section');
    const content = document.querySelector('.main-content');
    let spin = 0;

    window.addEventListener('wheel', function (e) {
      if (e.deltaY > 0) {
        if(spin < section.length - 1){
          spin +=1
        }
      } else {
        if (spin > 0) {
          spin -=1
        }
      }
      scrollContent(spin)
    });
    function scrollContent(count) {
      content.setAttribute('style','transform:translateY(-'+count * 100 +'vh)');
    }
  // }
})