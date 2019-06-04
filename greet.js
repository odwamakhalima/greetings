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
function greet(){
    myNames = namesUpdate.value
    myNames = myNames.replace(/(\+|\-)?[0-9!@#$%^&*(),.?" ^$:^\d+=/${/'}`"\[.*?\]|<>]/gi, '');
    if(isNaN(namesUpdate.value.trim())) {
    var updated = namesUpdate.value.trim().toLowerCase()
    myNames = updated.charAt(0).toUpperCase() + updated.slice(1)
}
    var checkedRadioBtn = document.querySelector("input[name='langItemType']:checked");
    if (checkedRadioBtn){
    var langItemType = checkedRadioBtn.value
    if(langItemType === 'Xhosa'){
      result = Xhosa + myNames.replace(/(\+|\-)?[0-9!@#$%^&*(),.?" ^$:^\d+=/${/'}`"\[.*?\]|<>]/gi, '')
  }
  else if(langItemType === 'English'){
      result = English + myNames.replace(/(\+|\-)?[0-9!@#$%^&*(),.?" ^$:^\d+=/${/'}`"\[.*?\]|<>]/gi, '')
  }
  else if(langItemType === 'Afrikaans'){
      result = Afrikaans + myNames.replace(/(\+|\-)?[0-9!@#$%^&*(),.?" ^$:^\d+=/${/'}`"\[.*?\]|<>]/gi, '')
  }
}

    if (namesGreeted[myNames.replace(/(\+|\-)?[0-9!@#$%^&*(),.?" ^$:^\d+=/${/'}`''"\[.*?\]|<>]/gi, '')] === undefined){
      namesGreeted[myNames.replace(/(\+|\-)?[0-9!@#$%^&*(),.?" ^$:^\d+=/${/'}`"\[.*?\]|<>]/gi, '')] = 0;
      if(typeof(Storage) !== "undefined") {
        if (Number(localStorage.greetingsCounter)){
        }
  if(myNames.length > 0){
  greetingsCounter = Number(greetingsCounter)+1;
  localStorage.setItem('myNames',JSON.stringify(namesGreeted))
  greetingsElem.innerHTML =  greetingsCounter ;
  }
    }
  }
  console.log(namesGreeted)
    greetFinalElement.innerHTML = result
}
greetBtn.addEventListener('click', greet)

function clearClick(){
  localStorage.clear();
  greetingsCounter = 0;
  location.reload()
  document.getElementById ("greet").innerHTML = greetingsCounter;
}
resetBtn.addEventListener('click', clearClick)