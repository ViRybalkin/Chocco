(function(){
  const form = document.querySelector('.form')
  const send = document.querySelector('.form__submit')
  const phone = document.querySelector('#phone')
  const name = document.querySelector('#name')


  // Add validate for numbers //
  phone.addEventListener('keydown', (e) => {
    isDigit = false;
    isControls = false;
    isDash = false; 

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
    isLetter = false;
    isControls = false

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
    } else{
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
})();
