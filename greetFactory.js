function greetings(){
    var theLanguage = ""
    var result = ""
    var regex = /(\+|\-)?[0-9!@#$%^&*();,.?" ^$:^\d+=/${/'}`''"\[.*?\]|<>]/gi
    var namesGreeted = {};
    var ol = Object.keys(namesGreeted);
    var greetingsCounter = ol.length
    var namesGreeted = {};
    var myNames = ''
    var myTest = regex.test(myNames);
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
function storedNames(myNames){
    myNames = myNames.replace(regex, '');
    if(isNaN(myNames.trim())) {
    var updated = myNames.trim().toLowerCase()
    myNames = updated.charAt(0).toUpperCase() + updated.slice(1)
    }
    if (namesGreeted[myNames] === undefined){   
        namesGreeted[myNames] = 0;
        if(typeof(Storage) !== "undefined") {
            if (Number(localStorage.greetingsCounter)){
              }
              if(myNames.length > 0 && myTest == false){
                greetingsCounter = Number(greetingsCounter)+1;
              }
      }
    }
      return myNames
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