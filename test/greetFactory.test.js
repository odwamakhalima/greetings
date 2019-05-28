var namesList = namesList();
namesList.greet('odwa');
namesList.greet('me');
namesList.greet('you');
namesList.greet('us');
var howManyNames = namesList.check('odwa');
describe('greet odwa',function(){
    it('greet odwa',function(){
        assert.equal('You got 1 pear(s) in your basket', namesList.check('odwa'));
    })
})
