
import assert from "assert";
import greet from "../greet.js";

describe ("The greet function", function() {

    it ("should be able to greet Terror", function() {
    
        assert.equal("Hello, Terror", greet("Terror"));
    });

    it ("should be able to greaet Mayimele", function() {
    
        assert.equal("Hello, Mayimele", greet("Mayimele"));
    });

});