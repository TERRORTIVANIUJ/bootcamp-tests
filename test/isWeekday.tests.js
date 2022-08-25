describe ("The Weekday function", function() {

    it ("should  return 'false' when call in 'Sutarday'", function() {
    
        assert.equal(isWeekday('Saturday'), false);
    });

    it ("should  return 'false' when call in 'Sunday'", function() {
    
        assert.equal(isWeekday('Sunday'), false);
    });

    it ("should  return 'true' when call in 'Monday to Friday'", function() {
    
        assert.equal(isWeekday('Monday'), true);
    });



});