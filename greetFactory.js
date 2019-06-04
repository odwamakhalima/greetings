function greet(myNames){
    myNames = myNames.replace(/(\+|\-)?[0-9!@#$%^&*(),.?" ^$:^\d+=/${/'}`"\[.*?\]|<>]/gi, '');
    if(isNaN(myNames.trim())) {
    var updated = myNames.trim().toLowerCase()
    myNames = updated.charAt(0).toUpperCase() + updated.slice(1)
}
    return myNames
}
