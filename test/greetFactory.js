function greetFactory(data) {
    var nameGreeted = storeNames || {};
    var Counter = 0;
    var names;
    var storeNames = JSON.parse(localStorage.getItem('myNames'));
    var regex = /(\+|\-)?[0-9!@#$%^&*(),.?" ^$:^\d+=/${/'}`"\[.*?\]|<>]/gi;

    function Counting(){
        var ol = Object.keys(nameGreeted);
        Counter = ol.length;
        return Counter; 
    }

    function NewName (){
        if (namesGreeted[myNames.replace(regex, '')] === undefined) {
            namesGreeted[myNames.replace(regex, '')] = 0;
            if (typeof (Storage) !== "undefined") {
              if (myNames.length > 0) {
                greetingsCounter = Number(greetingsCounter) + 1;
                localStorage.setItem('myNames', JSON.stringify(namesGreeted))
                greetingsElem.innerHTML = greetingsCounter;
              }
            }
          }
    }

    function languages(langType) {
        var English = 'Hello '
        var Xhosa = 'Molo '
        var Afrikaans = 'Hallo '
        var final;

        if (langItemType === 'Xhosa') {
            final = Xhosa + myNames.replace(regex, '')
        }
        else if (langItemType === 'English') {
            final = English + myNames.replace(regex, '')
        }
        else if (langItemType === 'Afrikaans') {
            final = Afrikaans + myNames.replace(regex, '')
        }
    }

    function greetName(myNames) {
        myNames = myNames.replace(regex);
        if (isNaN(myNames.trim())) {
            var updated = myNames.trim().toLowerCase()
            myNames = updated.charAt(0).toUpperCase() + updated.slice(1)
        }
        return myNames
    }
    function displayName(){
        return nameGreeted[myNames.replace(regex, '')];
    }
    return{
        add : NewName,
        count : Counting,
        names : greetName,
        greet : languages,
    }
}

