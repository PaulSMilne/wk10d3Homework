var assert = require('assert');
var Rat = require('../rat');
var Food = require('../food');

describe( "Rat", function() {

    var rat = null;
    var cheese = null;

    beforeEach( function() {
        rat = new Rat();
        cheese = new Food( "cheese", 30 );
    });

    it("should make food passed to 'touch' poisonous", function() {
        rat.touch( cheese );
        assert.equal( true, cheese.isPoisonous );
    });
});
