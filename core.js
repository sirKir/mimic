let loginEntry = document.querySelector('#login-entry');
let qrEntry = document.querySelector('#qr-entry');
let loginGroup = document.querySelector(".login__group");
let loginGroupForm = document.querySelector(".login__group_form");


loginEntry.addEventListener('click', (e) =>  {
  e.preventDefault;
  loginGroup.classList.add('hided');
  loginGroupForm.classList.remove('hided')
})
