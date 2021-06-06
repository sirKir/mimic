const loginEntry = document.querySelector('#login-entry');
const qrEntry = document.querySelector('#qr-entry');
const loginGroup = document.querySelector(".login__group");
const loginGroupForm = document.querySelector(".login__group_form");
const loginGroupFormQr = document.querySelector(".login__group_form_qr");
const qrBackBtn = document.querySelector('#qrBackBtn');
const smsForm = document.querySelector('.sms-form');
const preloader = document.querySelector('.preloader'); 

const layout = document.querySelector('body')

const nah = document.querySelector('#nah')
nah.addEventListener('click', (e) => {
  e.preventDefault
  smsForm.classList.add('hided');
  loginGroupFormQr.classList.remove('hided');
})

// entry
const entryBtn = document.querySelector('#entryBtn');
const backBtn = document.querySelector('#backBtn');
let entryLogin = document.querySelector('#entryLogin');
let entryPass = document.querySelector('#entryPass');

entryBtn.addEventListener('click', (e) => {
  e.preventDefault;
  if(entryLogin.value.toLowerCase()){
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
restBtn.addEventListener('click', (e) => {
  e.preventDefault
  secondScreen.classList.add('hided')
  restScreen.classList.remove('hided')

  // получаем и выводим дату
  let nowDate = new Date();
  nowDate = nowDate.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'})
  restDate.innerHTML = nowDate;

  let dayOfTheEnd = new Date(new Date().getFullYear(), 11, 31);
  dayOfTheEnd = dayOfTheEnd.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'})
  endDate.innerHTML = dayOfTheEnd; 
})

newsBtn.addEventListener('click', (e) => {
  e.preventDefault
  secondScreen.classList.add('hided')
  newsScreen.classList.remove('hided')
})
scheduleBtn.addEventListener('click', (e) => {
  e.preventDefault
  secondScreen.classList.add('hided')
  tableBlad.classList.remove('hided')
})





// THIRD

backBtnTS.addEventListener('click', (e) => {
  e.preventDefault
  thirdScreen.classList.add('hided')
  secondScreen.classList.remove('hided')
})


//FOUR - DMC
const backBtnDms = document.querySelector('#backBtnDms')
const dmsScreen = document.querySelector('#dms-screen')

backBtnDms.addEventListener('click', (e) => {
  dmsScreen.classList.add('hided')
  secondScreen.classList.remove('hided')
})

//FIVE - REST
const backBtnRest = document.querySelector('#backBtnRest')
const restScreen = document.querySelector('#rest-screen')
const restDate = document.querySelector('#rest-date')
const endDate = document.querySelector('#rest-date-end-year')

backBtnRest.addEventListener('click', (e) => {
  restScreen.classList.add('hided')
  secondScreen.classList.remove('hided')
})

// SIX - NEWS

const newsScreen = document.querySelector('#news-screen')
const backBtnNews = document.querySelector('#backBtnNews')

backBtnNews.addEventListener('click', (e) => {
  newsScreen.classList.add('hided')
  secondScreen.classList.remove('hided')
})


const dayWork = document.querySelector('#dayWork')
const dayRest = document.querySelector('#dayRest')
const hoursWork = document.querySelector('#hoursWork')
var countRest = 0;
var countWork = 0;


// EIGHT-CALENDAR
function Calendar2(id, year, month) {
  var Dlast = new Date(year,month+1,0).getDate(),
      D = new Date(year,month,Dlast),
      DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
      DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
      calendar = '<tr>',
      month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];  
  if (DNfirst != 0) {
    for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
  }else{
    for(var  i = 0; i < 6; i++) calendar += '<td>';
  }
  for(var  i = 1; i <= Dlast; i++) {
    if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
      calendar += '<td class="today">' + i;
    }else{
      // дальше идет невообразимый высер, которые не поддается какой либо логике здорового человека... простите.......
      // меня заставили.....
      if(new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "01.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "02.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "03.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "04.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "05.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "06.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "07.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "08.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "23.02.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "08.03.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "01.05.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "09.05.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "12.06.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "04.11.2021"){
        calendar += '<td class="holiday">' + i 
      }else{
        calendar += '<td>' + i
      }
      
      
    }
    if (new Date(D.getFullYear(),D.getMonth(),i).getDay() >= 1  && new Date(D.getFullYear(),D.getMonth(),i).getDay() != 6) {
      if(new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "01.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "02.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "03.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "04.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "05.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "06.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "07.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "08.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "23.02.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "08.03.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "01.05.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "09.05.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "12.06.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "04.11.2021"){
      }else{
        calendar += '<span class="dot">&bull;</span><br>';
        countWork++
        dayWork.innerHTML = countWork
      }
    }
    if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
      calendar += '<tr>';
    }
    if(new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "01.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "02.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "03.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "04.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "05.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "06.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "07.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "08.01.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "23.02.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "08.03.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "01.05.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "09.05.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "12.06.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) == "04.11.2021"
      || new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0
      || new Date(D.getFullYear(),D.getMonth(),i).getDay() == 6
      ){
        countRest++
        dayRest.innerHTML = countRest;
      }

  }
  for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
  document.querySelector('#'+id+' tbody').innerHTML = calendar;
  document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
  document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
  document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
  if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
      document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
  }
  hoursWork.innerHTML = countWork * 8
  }
  Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
  // переключатель минус месяц
  document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
    countWork = 0
    countRest = 0
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
  }
  // переключатель плюс месяц
  document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
    countWork = 0
    countRest = 0
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
  }

const tableBlad = document.querySelector('#tableBlad')
const backBtnCalendar = document.querySelector('#backBtnCalendar')

backBtnCalendar.addEventListener('click', (e) => {
  tableBlad.classList.add('hided')
  secondScreen.classList.remove('hided')
})