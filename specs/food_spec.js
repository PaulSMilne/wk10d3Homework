var assert = require('assert');
var Food = require('../food');

describe("Food", function(){

    var honey = null;

    beforeEach( function() {
        honey = new Food( "honey" );
    });

    it("has name passed in constructor", function(){
        assert.equal("honey", honey.name);
    });
})
