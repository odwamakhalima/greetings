describe('greetFactory',function(){
    it('it should ignore the special characters and numbers',function(){
        var factoryGreet = greetings()        
        assert.deepEqual(factoryGreet.add('odwa58635'),'Odwa');
        assert.deepEqual(factoryGreet.add('odwa][54648;'),'Odwa')
        assert.deepEqual(factoryGreet.add('36567495'),'')
    })
    it('it should greet names in english',function(){
        var factoryGreet = greetings()        
        assert.deepEqual(factoryGreet.greet('Odwa543','English'),'Hello Odwa');
        assert.deepEqual(factoryGreet.greet('Man=[','English'),'Hello Man');
        assert.deepEqual(factoryGreet.greet('8734','English'),'Hello ');
    })
    it('it should greet names in afrikaans',function(){
        var factoryGreet = greetings()        
        assert.deepEqual(factoryGreet.greet('khanyiso','Afrikaans'),'Hallo khanyiso');
        assert.deepEqual(factoryGreet.greet('jesse','Afrikaans'),'Hallo jesse');
        assert.deepEqual(factoryGreet.greet('326454','Afrikaans'),'Hallo ');
    })
    it('it should greet names in xhosa',function(){
        var factoryGreet = greetings()        
        assert.deepEqual(factoryGreet.greet('Odwa543','Xhosa'),'Molo Odwa');
        assert.deepEqual(factoryGreet.greet('Man=[','Xhosa'),'Molo Man');
        assert.deepEqual(factoryGreet.greet('8734','Xhosa'),'Molo ');
    })
    it('it should count the names greeted but should count each name once',function(){
        var factoryGreet = greetings()
        factoryGreet.add('oreo')
        factoryGreet.add('oreo')
        factoryGreet.add('mine')
        factoryGreet.add('mine')
        assert.deepEqual(factoryGreet.count(),2);
    })
    it('it should count the names greeted but should count each name once',function(){
        var factoryGreet = greetings()
        factoryGreet.add('you')
        factoryGreet.add('you')
        factoryGreet.add('you')
        factoryGreet.add('you')
        assert.deepEqual(factoryGreet.count(),1);
    })
    it('if it is an empty string or its just number or special characters it should not count anything',function(){
        var factoryGreet = greetings()
        factoryGreet.add('')
        factoryGreet.add('85764')
        factoryGreet.add('[]=/.,')
        assert.deepEqual(factoryGreet.count(),0);
    })

})