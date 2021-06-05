const loginEntry = document.querySelector('#login-entry');
const qrEntry = document.querySelector('#qr-entry');
const loginGroup = document.querySelector(".login__group");
const loginGroupForm = document.querySelector(".login__group_form");
const loginGroupFormQr = document.querySelector(".login__group_form_qr");
const qrBackBtn = document.querySelector('#qrBackBtn');

const layout = document.querySelector('body')

// entry
const entryBtn = document.querySelector('#entryBtn');
const backBtn = document.querySelector('#backBtn');
let entryLogin = document.querySelector('#entryLogin');
let entryPass = document.querySelector('#entryPass');

entryBtn.addEventListener('click', (e) => {
  e.preventDefault;
  if(entryLogin.value === "test@uralchem.com"){
    layout.innerHTML = "<div></div>"
  }
})
entryLogin.addEventListener('focus', (e) => {
  e.preventDefault;
  layout.classList.remove('bg')
  console.log('Magick !');
})



//hiding-unhiding
loginEntry.addEventListener('click', (e) =>  {
  e.preventDefault;
  loginGroup.classList.add('hided');
  loginGroupForm.classList.remove('hided')
})
backBtn.addEventListener('click', (e) =>  {
  e.preventDefault;
  loginGroupForm.classList.add('hided');
  loginGroup.classList.remove('hided');
  layout.classList.add('bg')
})
qrEntry.addEventListener('click', (e) => {
  e.preventDefault;
  loginGroup.classList.add('hided');
  loginGroupFormQr.classList.remove('hided')
})
qrBackBtn.addEventListener('click', (e) =>  {
  e.preventDefault;
  loginGroupFormQr.classList.add('hided');
  loginGroup.classList.remove('hided');
})


