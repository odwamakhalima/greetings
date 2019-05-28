var namesList = namesList();

shoppingBasket.greet('odwa');
shoppingBasket.greet('me');
shoppingBasket.greet('you');
shoppingBasket.greet('us');
var howManyNames = namesList.check('odwa');
var namesList = function(){

    var namesGreeted = {};
    var Names = function(myNames){
        if (namesGreeted[myNames] === undefined){
            namesGreeted[myNames] = 0;
        }
        namesGreeted[myNames] += 1;
    };

    var checkNames = function(myNames){
        return "You have " + namesGreeted[myNames] + " " + namesGreeted + "(s).";
    }

    return {
        Greet : Names,
        check : checkNames
    }
}