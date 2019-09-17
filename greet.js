var langItemTypeRadio = document.querySelector('.langItemTypeRadio')
var greetBtn = document.querySelector('.greetBtn')
var resetBtn = document.querySelector('.resetBtn')
var namesUpdate = document.querySelector('.namesUpdate')
var greetFinalElement = document.querySelector('.greetFinal')
var greetingsElem = document.querySelector('.greetingsCounter')

var storeNames = JSON.parse(localStorage.getItem('myNames'));
var namesGreeted = storeNames || {};
var regex = /(\+|\-)?[0-9!@#$%^&*();,.?" ^$:^\d+=/${/'}`''"\[.*?\]|<>]/gi

var factoryGreet = greetings(storeNames);

function greets(){

  factoryGreet.storedNames(namesUpdate.value)

    var checkedRadioBtn = document.querySelector("input[name='langItemType']:checked");
    if (checkedRadioBtn){
    var langItemType = checkedRadioBtn.value
    }

      factoryGreet.greetName(langItemType)




   localStorage.setItem('myNames',JSON.stringify(factoryGreet.output()))
   showCount()

  greetFinalElement.innerHTML = factoryGreet.displayer(langItemType)

}

function showCount(){
  greetingsElem.innerHTML =  factoryGreet.count();
}


greetBtn.addEventListener('click', greets)
window.onload = function(){
  greetingsElem.innerHTML =  factoryGreet.count() ;
}

function clearClick(){
  localStorage.clear();
  location.reload()

}
resetBtn.addEventListener('click', clearClick)

