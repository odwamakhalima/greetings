var langItemTypeRadio = document.querySelector('.langItemTypeRadio')
var greetBtn = document.querySelector('.greetBtn')
var resetBtn = document.querySelector('.resetBtn')
var namesUpdate = document.querySelector('.namesUpdate')
var greetFinalElement = document.querySelector('.greetFinal')
var greetingsElem = document.querySelector('.greetingsCounter')
var myNames = ''
var English = 'Hello '
var Xhosa = 'Molo '
var Afrikaans = 'Hallo '
var greetingsCounter = 0;
var result = ''
var storeNames = JSON.parse(localStorage.getItem('myNames'));
var namesGreeted = storeNames || {};
var ol = Object.keys(namesGreeted);
var greetingsCounter = ol.length
var regex = /(\+|\-)?[0-9!@#$%^&*();,.?" ^$:^\d+=/${/'}`''"\[.*?\]|<>]/gi

var factoryGreet = greetings();

function greets(){
      myNames = namesUpdate.value
     myNames = myNames.replace(regex, '');
    if(isNaN(namesUpdate.value.trim())) {
    var updated = namesUpdate.value.trim().toLowerCase()
    myNames = updated.charAt(0).toUpperCase() + updated.slice(1)
}
//factoryGreet.language()
    var checkedRadioBtn = document.querySelector("input[name='langItemType']:checked");
    if (checkedRadioBtn){
    var langItemType = checkedRadioBtn.value
//factoryGreet.greet()
      if(langItemType === 'Xhosa'){
      result = Xhosa + myNames.replace(regex, '')
  }
  else if(langItemType === 'English'){
      result = English + myNames.replace(regex, '')
  }
  else if(langItemType === 'Afrikaans'){
      result = Afrikaans + myNames.replace(regex, '')
  }
}
var myTest = regex.test(myNames);
//factoryGreet.add()
    if (namesGreeted[myNames.replace(regex, '')] === undefined){
       namesGreeted[myNames.replace(regex, '')] = 0;
       if(typeof(Storage) !== "undefined") {
       if (Number(localStorage.greetingsCounter)){
         }
//factoryGreet.count()
  if(myNames.length > 0){
   greetingsCounter = Number(greetingsCounter)+1;
   localStorage.setItem('myNames',JSON.stringify(namesGreeted))
   greetingsElem.innerHTML =  greetingsCounter ;
    }
     }
  }
    greetFinalElement.innerHTML = result
}
greetBtn.addEventListener('click', greets)


function clearClick(){
  localStorage.clear();
  greetingsCounter = 0;
  location.reload()
  document.getElementById ("greet").innerHTML = greetingsCounter;
}
resetBtn.addEventListener('click', clearClick)