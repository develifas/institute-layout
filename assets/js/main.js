let navigator = document.querySelector('#navigator');

document.querySelector('#toggleMenu').addEventListener('click', () => {
    document.querySelector('.navbar ul').classList.toggle('menu-open');
});

window.addEventListener('scroll', () => {
  if(window.scrollY > 100) {
    navigator.classList.add('scrolled');
    document.querySelector('#logo').setAttribute('src' ,'./assets/images/logo-light.png');
  } else {
    navigator.classList.remove('scrolled');
    document.querySelector('#logo').setAttribute('src' ,'./assets/images/logo.png');
  }
});

let inputName = document.querySelector('#name');
let inputEmail = document.querySelector('#email');
let inputMessage = document.querySelector('#message');

document.querySelector('#action').addEventListener('click', () => {
  let name = inputName.value;
  let email = inputEmail.value;
  let message = inputMessage.value;

  if(name === '') {
    document.querySelector('#err-name').innerHTML = "This field is required";
  } else {
    document.querySelector('#err-name').innerHTML = "";
  }
   
  if(email === '') {
    document.querySelector('#err-email').innerHTML = "This field is required";
  } else {
    document.querySelector('#err-email').innerHTML = "";
  }
  if(message === '') {
    document.querySelector('#err-message').innerHTML = "This field is required";
  } else {
    document.querySelector('#err-message').innerHTML = "";
  }

});

