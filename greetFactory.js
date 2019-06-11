function greetings(){
    var theLanguage = ""
    var result = ""
    var regex = /(\+|\-)?[0-9!@#$%^&*();,.?" ^$:^\d+=/${/'}`''"\[.*?\]|<>]/gi
    var namesGreeted = {};
    var ol = Object.keys(namesGreeted);
    var greetingsCounter = ol.length
    var namesGreeted = {};

    function languageSelector(language){        
        if(language === 'Xhosa'){
            theLanguage = "Xhosa"
        }
        else if(language === 'English'){
            theLanguage = "English"
        }
        else if(language === 'Afrikaans'){
            theLanguage = "Afrikaans"
        }
return theLanguage
}
function greetName(myNames, language){
var English = 'Hello '
var Xhosa = 'Molo '
var Afrikaans = 'Hallo '
    if(language === 'Xhosa'){
      result = Xhosa + myNames.replace(regex, '')
  }
  else if(language === 'English'){
      result = English + myNames.replace(regex, '')
  }
  else if(language === 'Afrikaans'){
      result = Afrikaans + myNames.replace(regex, '')
  }
  return result;
}
function storedNames(myNames){
   
    myNames = myNames.replace(regex, '');
    if(isNaN(myNames.trim())) {
    var updated = myNames.trim().toLowerCase()
    myNames = updated.charAt(0).toUpperCase() + updated.slice(1)
    }
    if (namesGreeted[myNames.replace(regex, '')] === undefined){   
        namesGreeted[myNames.replace(regex, '')] = 0;
        if(typeof(Storage) !== "undefined") {
            if (Number(localStorage.greetingsCounter)){
              }
      }
      if(myNames.length > 0){
        greetingsCounter = Number(greetingsCounter)+1;
      } 
    }
      return myNames
}
function counterValueDisplayer(){
    return greetingsCounter
}

    return {
        add: storedNames,
        greet: greetName,
        count: counterValueDisplayer,
        language: languageSelector,
    }
}