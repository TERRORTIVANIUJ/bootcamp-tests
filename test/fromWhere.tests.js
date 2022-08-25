describe ("FromWhere  function", function() {

    it ("should be able to return 'Bellvill' when pass-in number plate with 'CY'", function() {
    
        assert.equal(fromWhere('CY'), 'Bellville');
    });

    it ("should be able to return 'Paarl' when pass-in number plate with 'CJ'", function() {
    
        assert.equal(fromWhere('CJ'), 'Paarl');
    });

    it ("should be able to return 'Cape Town' when pass-in number plate with 'CA'", function() {
    
        assert.equal(fromWhere('CA'), 'Cape Town');
    });

    it ("should be able to return 'Some other place!' when pass-in number plate with 'CC'", function() {
    
        assert.equal(fromWhere('CC'), 'Some other place!');
    });
   
});