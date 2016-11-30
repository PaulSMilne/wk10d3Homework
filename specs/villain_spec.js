var assert = require('assert');
var Villain = require('../villain');

describe('Villain', function(){

    var villain = null;

    beforeEach( function() {

        villain = new Villain();
    });

     it("should be born wearing a helmet", function(){
          assert.equal("helmet", villain.hat);
     });

     it("should be wearing crown after putting on disguise", function() {
        villain.donDisguise();
        assert.equal( "crown", villain.hat ); 
     });
});
