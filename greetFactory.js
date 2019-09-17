function greetings(storeNames) {
  
    var counter = 0
    var regex = /(\+|\-)?[0-9!@#$%^&*();,.?" ^$:^\d+=/${/'}`''"\[.*?\]|<>]/i
    var namesGreeted = storeNames || {};
    var myNames;
    var check = false

    function errors(){
        return errorM
    }


    function addNames(type) {
        var myTest = regex.test(myNames)
        if (myTest === false) {
            myNames = type.trim();
            myNames = myNames.toUpperCase()
            return true
        }
    }

    function count() {
        var myKey = Object.keys(namesGreeted)
        counter = myKey.length
        console.log(myKey)
        return counter
    }

    function output() {

        return namesGreeted
    }

    function greetName(language) {
        var languageType = language
        var English = 'Hello '
        var Xhosa = 'Molo '
        var Afrikaans = 'Hallo '
        var result;

        if (languageType === 'Xhosa') {
            result = Xhosa + myNames
        }
        if (languageType === 'English') {
            result = English + myNames
        }
        if (languageType === 'Afrikaans') {
            result = Afrikaans + myNames
        }
        return result;
    }
    function storedNames(names) {
        myNames = names
        if (myNames.trim()) {
            if (addNames(myNames)) {
                var allData = []
                allData = Object.keys(namesGreeted)
                for (var i = 0; i < allData.length; i++) {
                    if (allData === myNames) {
                        check = true
                    }
                }
                if (check === false) {
                     if (namesGreeted[myNames] === undefined) {
                         namesGreeted[myNames] = 0;
                         count()
                     }
                }
            }
        }
    }
    function displayer(input) {
        var show;
        if(check === true){
            show = 'already there'
            return show
        }
        show = greetName(input);
        return show
    }
    return {
        addNames,
        storedNames,
        greetName,
        count,
        displayer,
        output,
        errors
    }
}