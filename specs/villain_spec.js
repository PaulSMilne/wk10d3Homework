var assert = require('assert');
var Villain = require('../villain');
var Hero = require('../hero');

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

     it("should decrease health of object passed to reward function", function() {
        var hero = new Hero( "Hercules", "steak" );
        hero.health = 110;
        villain.reward( hero );
        assert.equal( 10, hero.health );
     });
});
