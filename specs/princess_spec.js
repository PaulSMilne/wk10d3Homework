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
});
