const loginEntry = document.querySelector('#login-entry');
const qrEntry = document.querySelector('#qr-entry');
const loginGroup = document.querySelector(".login__group");
const loginGroupForm = document.querySelector(".login__group_form");
const loginGroupFormQr = document.querySelector(".login__group_form_qr");
const backBtn = document.querySelector('#backBtn');
const qrBackBtn = document.querySelector('#qrBackBtn');


loginEntry.addEventListener('click', (e) =>  {
  e.preventDefault;
  loginGroup.classList.add('hided');
  loginGroupForm.classList.remove('hided')
})
backBtn.addEventListener('click', (e) =>  {
  e.preventDefault;
  loginGroupForm.classList.add('hided');
  loginGroup.classList.remove('hided');
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