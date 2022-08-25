describe ("The TransportFee function", function() {

    it ("should be able to return 'R20' when pass in 'morning'", function() {
    
        assert.equal(transportFee('morning'), 'R20');
    });

    it ("should be able to return 'R10' when pass in 'night'", function() {
    
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it ("should be able to return 'Free' when pass in 'nightshift'", function() {
    
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });

   
});