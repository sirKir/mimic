const loginEntry = document.querySelector('#login-entry');
const qrEntry = document.querySelector('#qr-entry');
const loginGroup = document.querySelector(".login__group");
const loginGroupForm = document.querySelector(".login__group_form");
const loginGroupFormQr = document.querySelector(".login__group_form_qr");
const qrBackBtn = document.querySelector('#qrBackBtn');
const smsForm = document.querySelector('.sms-form');
const preloader = document.querySelector('.preloader'); 

const layout = document.querySelector('body')

// entry
const entryBtn = document.querySelector('#entryBtn');
const backBtn = document.querySelector('#backBtn');
let entryLogin = document.querySelector('#entryLogin');
let entryPass = document.querySelector('#entryPass');

entryBtn.addEventListener('click', (e) => {
  e.preventDefault;
  if(entryLogin.value == "Test@uc.com"){
    preloader.classList.remove('hided');
    setTimeout(()=>{
      loginGroup.classList.add('hided');
      loginGroupForm.classList.add('hided');
      layout.classList.add('bg');
      smsForm.classList.remove('hided');
      entryPass.value = ""  
      preloader.classList.add('hided');    
    }, 3000)
  }
})
entryLogin.addEventListener('focus', (e) => {
  e.preventDefault;
  layout.classList.remove('bg')
})
entryPass.addEventListener('focus', (e) => {
  e.preventDefault;
  layout.classList.remove('bg')
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



const smsCheck = document.querySelector('.sms-check')
const firstScreen = document.querySelector('#first')
const secondScreen = document.querySelector('#second')

smsCheck.addEventListener('input', (e)=>{
  e.preventDefault;
  if(smsCheck.value.length == 4){
    preloader.classList.remove('hided'); 
    setTimeout(() => {
      firstScreen.classList.add('hided')
      layout.classList.remove('bg')
      secondScreen.classList.remove('hided')
      smsCheck.value = ""   
      preloader.classList.add('hided');    
    }, 2000);
  }
})
smsCheck.addEventListener('focus', (e) => {
  e.preventDefault
  smsCheck.value = ""
  layout.classList.remove('bg')
})

// second screen

const newsBtn = document.querySelector('#newsBtn')
const restBtn = document.querySelector('#restBtn')
const scheduleBtn = document.querySelector('#scheduleBtn')
const dmcBtn = document.querySelector('#dmcBtn')

const exitBtn = document.querySelector('#exitBtn')
const tutorBtn = document.querySelector('#tutorBtn')

const thirdScreen = document.querySelector('#third')
const backBtnTS = document.querySelector('#backBtnTS')

exitBtn.addEventListener('click', (e) => {
  e.preventDefault
  secondScreen.classList.add('hided')
  layout.classList.add('bg')
  firstScreen.classList.remove('hided')
  smsForm.classList.add('hided');
  loginGroup.classList.remove('hided');
})

tutorBtn.addEventListener('click', (e) => {
  e.preventDefault
  secondScreen.classList.add('hided')
  thirdScreen.classList.remove('hided')
})
dmcBtn.addEventListener('click', (e) => {
  e.preventDefault
  secondScreen.classList.add('hided')
  dmsScreen.classList.remove('hided')
})






// THIRD

backBtnTS.addEventListener('click', (e) => {
  e.preventDefault
  thirdScreen.classList.add('hided')
  secondScreen.classList.remove('hided')
})


//FOUR
const backBtnDms = document.querySelector('#backBtnDms')
const dmsScreen = document.querySelector('#dms-screen')

backBtnDms.addEventListener('click', (e) => {
  console.log(e);
  dmsScreen.classList.add('hided')
  secondScreen.classList.remove('hided')
})