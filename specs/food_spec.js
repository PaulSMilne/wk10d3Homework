var assert = require('assert');
var Food = require('../food');

describe("Food", function(){

    var honey = null;

    beforeEach( function() {
        honey = new Food( "honey", 30 );
    });

    it("has name passed in constructor", function(){
        assert.equal("honey", honey.name);
    });

    it("should have replenishmentValue passed in constructor", function() {
        assert.equal( 30, honey.replenishmentValue );
    });
});
