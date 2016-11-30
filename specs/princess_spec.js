var assert = require('assert');
var Princess = require('../princess');

describe("Princess", function(){
     var princess = null;
     beforeEach(function(){
          princess = new Princess();
     });

     it("starts in peril", function(){
          assert.equal(true, princess.inPeril);
     });

     it("has crown when born", function(){
          assert.equal("crown", princess.hat);
     });

     it("should increase health of object passed to reward function", function() {
        var testObject = { health: 20 };
        princess.reward( testObject );
        assert.equal( 120, testObject.health );
     });
});
