var langItemTypeRadio = document.querySelector('.langItemTypeRadio')
var greetBtn = document.querySelector('.greetBtn')
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
var nameCount = ol.length
function greet(){
    myNames = namesUpdate.value
    if(isNaN(namesUpdate.value.trim())) {
    var updated = namesUpdate.value.trim().toLowerCase()
    myNames = updated.charAt(0).toUpperCase() + updated.slice(1) 
}
    var checkedRadioBtn = document.querySelector("input[name='langItemType']:checked");
    if (checkedRadioBtn){
    var langItemType = checkedRadioBtn.value
}
    if(langItemType === 'Xhosa'){
        result = Xhosa + myNames
    }
    else if(langItemType === 'English'){
        result = English + myNames
    }
    else if(langItemType === 'Afrikaans'){
        result = Afrikaans + myNames
    }
    if (namesGreeted[myNames] === undefined){
      namesGreeted[myNames] = 0;
      if(typeof(Storage) !== "undefined") {
        if (localStorage.greetingsCounter) {
      const regex = /\d/;
      const exist = regex.test(myNames);
if( exist == false){
  localStorage.greetingsCounter = (localStorage.greetingsCounter)+1;
  localStorage.setItem('myNames',JSON.stringify(namesGreeted))
console.log(localStorage)
  document.getElementById("greet").innerHTML = "You have greeted " + localStorage.greetingsCounter + " people.";
}

else{
  result = "Please enter a valid name!!"
}
  }

}
    }
    greetFinalElement.innerHTML = result
}
greetBtn.addEventListener('click', greet)
