(function(){
  const form = document.querySelector('.form')
  const send = document.querySelector('.form__submit')
  const phone = document.querySelector('#phone')
  const name = document.querySelector('#name')
  const overlayMessage = document.querySelector('.overlay-form__message')
  const overlayForm = document.querySelector('.overlay-form')
  const closeForm = document.querySelector('.close-form')


  // Add validate for numbers //
  phone.addEventListener('keydown', (e) => {
    let isDigit = false;
    let isControls = false;
    let isDash = false; 

    if( e.key >= 0  || e.key <= 9){
      isDigit = true;
    };

    if( e.key == '-'){
      isDash = true;
    };

    if( e.key == 'Backspace' || e.key == "ArrowRight" || e.key == "ArrowLeft" || e.key == "+"  || e.key == "Shift"){
      isControls = true;
    };

    if(!isDigit && !isDash && !isControls){
      e.preventDefault()
    }
  })


//Add validate for letter//
  name.addEventListener('keydown',(e) =>{
    let isLetter = false;
    let isControls = false

    if(e.keyCode > 65 && e.keyCode < 120 || e.keyCode == 32 || e.keyCode == 192){
      isLetter = true;
    };

    if(e.keyCode == 8 || e.keyCode == 37 || e.keyCode == 39){
      isControls = true;
    };
    if(!isLetter && !isControls){
      e.preventDefault()
    }
});


//Add validate for form//
send.addEventListener('click',(e) => {
  e.preventDefault();
  if(validateForm(form)){
    const data = {
      name : form.elements.name.value,
      phone : form.elements.phone.value,
      comment : form.elements.comment.value,
      to : 'my@mail.ru'
    };
    
    const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail')
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.send(JSON.stringify(data));
      xhr.addEventListener('load', () => {
        const text = JSON.parse(xhr.responseText)
        const message = text.message
        overlayMessage.textContent = message;
        if(validateForm(form) == true){
          overlayForm.classList.add('overlay-form-active')
        }
      })
    } 
  });
  
  function validateForm(form){
    let valid = true;
    
    if (!validate(form.elements.name)){
      valid = false;
    }
    if (!validate(form.elements.phone)){
      valid = false;
    }
    if (!validate(form.elements.comment)){
      valid = false;
    }
    return  valid;
  }
  
  function validate(element){
    if(!element.checkValidity()){
      element.style.border = '1px solid red';
      return false;
    } else{
      element.style.border = '3px solid #DEE2BD';
      return true;
    }
  }
  closeForm.addEventListener('click', (e)=>{
    e.preventDefault();
    overlayForm.classList.remove('overlay-form-active')
  })
})();